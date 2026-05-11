import { prisma } from "@/lib/prisma";

// Generate token angka 6 digit random
function generateNumericToken() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req) {
  const { mapelId, durationMinutes = 60 } = await req.json();

  if (!mapelId) {
    return Response.json({ message: "mapelId diperlukan" }, { status: 400 });
  }

  try {
    // Generate token
    const token = generateNumericToken();

    // Set waktu mulai dan selesai
    const now = new Date();
    const waktuSelesai = new Date(now.getTime() + durationMinutes * 60000);

    // Create atau update sesi ujian
    const sesi = await prisma.sesiUjian.create({
      data: {
        mapelId: parseInt(mapelId),
        token,
        waktuMulai: now,
        waktuSelesai,
        status: "TERBUKA",
      },
    });

    return Response.json({
      message: "Token berhasil dibuat",
      token,
      waktuMulai: sesi.waktuMulai,
      waktuSelesai: sesi.waktuSelesai,
      durationMinutes,
      sesiId: sesi.id,
    });
  } catch (error) {
    console.error("Error creating token:", error);
    return Response.json(
      { message: "Terjadi kesalahan saat membuat token" },
      { status: 500 },
    );
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const mapelId = searchParams.get("mapelId");

  if (!mapelId) {
    return Response.json({ message: "mapelId diperlukan" }, { status: 400 });
  }

  try {
    // Ambil sesi ujian terbaru yang masih aktif
    const now = new Date();
    const aktiveSesi = await prisma.sesiUjian.findFirst({
      where: {
        mapelId: parseInt(mapelId),
        waktuSelesai: {
          gt: now,
        },
      },
      orderBy: {
        id: "desc",
      },
    });

    if (!aktiveSesi) {
      return Response.json({
        message: "Belum ada sesi aktif",
        token: null,
        waktuSelesai: null,
      });
    }

    // Hitung sisa waktu
    const sisaWaktu = Math.max(
      0,
      Math.floor((aktiveSesi.waktuSelesai.getTime() - now.getTime()) / 1000),
    );

    return Response.json({
      message: "Sesi aktif ditemukan",
      token: aktiveSesi.token,
      waktuMulai: aktiveSesi.waktuMulai,
      waktuSelesai: aktiveSesi.waktuSelesai,
      sisaWaktu,
      status: aktiveSesi.status,
      sesiId: aktiveSesi.id,
    });
  } catch (error) {
    console.error("Error getting token:", error);
    return Response.json(
      { message: "Terjadi kesalahan saat mengambil token" },
      { status: 500 },
    );
  }
}
