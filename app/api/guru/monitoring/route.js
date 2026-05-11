import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const ujianSiswa = await prisma.ujianSiswa.findMany({
      where: {
        status: {
          in: ["SEDANG_MENGERJAKAN", "SELESAI"],
        },
      },
      include: {
        siswa: {
          include: {
            user: true,
          },
        },
        sesi: {
          include: {
            mapel: {
              include: {
                soal: true,
              },
            },
          },
        },
        jawaban: true,
      },
    });

    const totalPeserta = ujianSiswa.length;
    const active = ujianSiswa.filter(
      (item) => item.status === "SEDANG_MENGERJAKAN",
    ).length;
    const completed = ujianSiswa.filter(
      (item) => item.status === "SELESAI",
    ).length;

    const students = ujianSiswa.map((item) => {
      const totalSoal = item.sesi.mapel.soal.length || 0;
      const answered = item.jawaban.length;
      return {
        id: item.id,
        nis: item.siswa.nis,
        nama: item.siswa.nama,
        status:
          item.status === "SEDANG_MENGERJAKAN"
            ? "ONLINE"
            : item.status === "SELESAI"
              ? "SELESAI"
              : "OFFLINE",
        progress: `${answered}/${totalSoal}`,
        pelanggaran: 0,
        lastActive:
          item.status === "SEDANG_MENGERJAKAN" ? "Baru saja" : "5 menit lalu",
      };
    });

    const logs = await prisma.aktivitasLog.findMany({
      take: 5,
      orderBy: {
        waktu: "desc",
      },
      include: {
        user: true,
      },
    });

    return Response.json({
      stats: {
        totalPeserta,
        active,
        completed,
        warnings: logs.filter((log) =>
          log.aktivitas.toLowerCase().includes("peringatan"),
        ).length,
      },
      students,
      logs: logs.map((log) => ({
        time: log.waktu.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        user: log.user?.username || "Unknown",
        action: log.aktivitas,
        type: log.aktivitas.toLowerCase().includes("peringatan")
          ? "danger"
          : "info",
      })),
    });
  } catch (error) {
    console.error("Error fetching monitoring data:", error);
    return Response.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
