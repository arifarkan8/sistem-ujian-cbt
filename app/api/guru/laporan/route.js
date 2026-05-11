import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const nilaiRecords = await prisma.nilai.findMany({
      include: {
        siswa: {
          include: {
            user: true,
          },
        },
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

    const total = nilaiRecords.length;
    const highest =
      total > 0 ? Math.max(...nilaiRecords.map((item) => item.nilai)) : 0;
    const average =
      total > 0
        ? Number(
            (
              nilaiRecords.reduce((sum, item) => sum + item.nilai, 0) / total
            ).toFixed(2),
          )
        : 0;
    const passCount = nilaiRecords.filter((item) => item.nilai >= 75).length;

    return Response.json({
      stats: {
        total,
        highest,
        average,
        passRate: total > 0 ? Math.round((passCount / total) * 100) : 0,
      },
      data: nilaiRecords.map((item) => ({
        id: item.id,
        nis: item.siswa.nis,
        nama: item.siswa.nama,
        benar: item.benar,
        salah: item.salah,
        nilai: item.nilai,
        status: item.nilai >= 75 ? "LULUS" : "REMEDIAL",
      })),
    });
  } catch (error) {
    console.error("Error fetching laporan nilai:", error);
    return Response.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
