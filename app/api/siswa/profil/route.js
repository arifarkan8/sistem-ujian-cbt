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

    const token = authHeader.substring(7); // Remove "Bearer "

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret_dev");

    if (decoded.role !== "SISWA") {
      return Response.json({ message: "Akses ditolak" }, { status: 403 });
    }

    const siswa = await prisma.siswa.findUnique({
      where: { userId: decoded.id },
      include: {
        user: {
          select: {
            username: true,
            role: true,
            createdAt: true,
          },
        },
        kelas: {
          select: {
            namaKelas: true,
          },
        },
      },
    });

    if (!siswa) {
      return Response.json(
        { message: "Data siswa tidak ditemukan" },
        { status: 404 },
      );
    }

    return Response.json({
      id: siswa.id,
      nama: siswa.nama,
      nis: siswa.nis,
      username: siswa.user.username,
      role: siswa.user.role,
      createdAt: siswa.user.createdAt,
      kelas: siswa.kelas.namaKelas,
    });
  } catch (error) {
    console.error("Error fetching siswa profile:", error);
    return Response.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
