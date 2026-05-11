import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return Response.json(
        { message: "Token tidak ditemukan" },
        { status: 401 },
      );
    }

    const token = authHeader.substring(7);
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret_dev");

    if (decoded.role !== "SISWA") {
      return Response.json({ message: "Akses ditolak" }, { status: 403 });
    }

    const siswa = await prisma.siswa.findUnique({
      where: { userId: decoded.id },
    });

    if (!siswa) {
      return Response.json(
        { message: "Data siswa tidak ditemukan" },
        { status: 404 },
      );
    }

    const grades = await prisma.nilai.findMany({
      where: { siswaId: siswa.id },
      include: {
        sesi: {
          include: {
            mapel: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json({
      grades: grades.map((item) => ({
        id: item.id,
        mapel: item.sesi.mapel.namaMapel,
        benar: item.benar,
        salah: item.salah,
        nilai: item.nilai,
        status: item.nilai >= 75 ? "LULUS" : "REMEDIAL",
        tanggal: item.createdAt,
      })),
    });
  } catch (error) {
    console.error("Error fetching siswa nilai:", error);
    return Response.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
