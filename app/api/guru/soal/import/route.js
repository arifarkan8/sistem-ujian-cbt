import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const { kodeUjian, soalData } = await req.json();

  if (!kodeUjian || !soalData || soalData.length === 0) {
    return Response.json(
      { message: "Kode ujian dan data soal diperlukan" },
      { status: 400 },
    );
  }

  try {
    // Cek atau buat mapel berdasarkan kodeUjian
    let mapel = await prisma.mapel.findFirst({
      where: { namaMapel: kodeUjian },
    });

    if (!mapel) {
      mapel = await prisma.mapel.create({
        data: { namaMapel: kodeUjian },
      });
    }

    // Batch create soal
    const createdSoals = await Promise.all(
      soalData.map((soal) =>
        prisma.soal.create({
          data: {
            mapelId: mapel.id,
            pertanyaan: soal.pertanyaan,
            opsiA: soal.opsiA,
            opsiB: soal.opsiB,
            opsiC: soal.opsiC,
            opsiD: soal.opsiD,
            jawabanBenar: soal.jawabanBenar,
            bobot: soal.bobot || 1,
          },
        }),
      ),
    );

    return Response.json({
      message: `${createdSoals.length} soal berhasil diimpor`,
      mapel,
      totalSoal: createdSoals.length,
    });
  } catch (error) {
    console.error("Error importing soal:", error);
    return Response.json(
      { message: "Terjadi kesalahan saat mengimpor soal" },
      { status: 500 },
    );
  }
}
