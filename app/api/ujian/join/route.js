import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const { token } = await req.json();

  if (!token) {
    return Response.json({ message: "Token diperlukan" }, { status: 400 });
  }

  try {
    const sesi = await prisma.sesiUjian.findUnique({
      where: { token },
      include: {
        mapel: true,
        nilai: true,
        ujianSiswa: true,
      },
    });

    if (!sesi) {
      return Response.json({ message: "Token tidak valid" }, { status: 404 });
    }

    // Cek apakah sesi masih aktif (berdasarkan waktuMulai dan waktuSelesai)
    const now = new Date();
    if (now < sesi.waktuMulai || now > sesi.waktuSelesai) {
      return Response.json(
        { message: "Sesi ujian tidak aktif" },
        { status: 403 },
      );
    }

    return Response.json({
      message: "Token valid",
      sesi: {
        id: sesi.id,
        mapel: sesi.mapel.namaMapel,
        waktuMulai: sesi.waktuMulai,
        waktuSelesai: sesi.waktuSelesai,
      },
    });
  } catch (error) {
    console.error("Error verifying token:", error);
    return Response.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
