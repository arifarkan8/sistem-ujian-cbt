import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const now = new Date();
    const todayStart = new Date(now);
    todayStart.setHours(0, 0, 0, 0);

    const [totalSiswa, totalBankSoal, activeUjian, selesaiToday, sessions] =
      await Promise.all([
        prisma.siswa.count(),
        prisma.mapel.count(),
        prisma.sesiUjian.count({
          where: {
            status: "TERBUKA",
            waktuMulai: { lte: now },
            waktuSelesai: { gte: now },
          },
        }),
        prisma.nilai.count({
          where: {
            createdAt: { gte: todayStart },
          },
        }),
        prisma.sesiUjian.findMany({
          where: {
            OR: [
              { waktuMulai: { gte: todayStart } },
              { waktuSelesai: { gte: todayStart } },
            ],
          },
          include: {
            mapel: true,
          },
          orderBy: {
            waktuMulai: "asc",
          },
          take: 5,
        }),
      ]);

    return Response.json({
      totalSiswa,
      totalBankSoal,
      activeUjian,
      selesaiToday,
      sessions: sessions.map((session) => ({
        id: session.id,
        mapel: session.mapel.namaMapel,
        token: session.token,
        status:
          now >= session.waktuMulai && now <= session.waktuSelesai
            ? "Berjalan"
            : now < session.waktuMulai
              ? "Menunggu"
              : "Selesai",
        waktuMulai: session.waktuMulai,
        waktuSelesai: session.waktuSelesai,
      })),
    });
  } catch (error) {
    console.error("Error fetching guru dashboard:", error);
    return Response.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
