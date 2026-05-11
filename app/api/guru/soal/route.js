import { prisma } from "@/lib/prisma";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";

    // Fetch soal dengan filter berdasarkan search term
    const soals = await prisma.soal.findMany({
      include: {
        mapel: true,
      },
      where: {
        OR: [
          {
            mapel: {
              namaMapel: {
                contains: search,
                mode: "insensitive",
              },
            },
          },
          {
            pertanyaan: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: {
        id: "desc",
      },
    });

    // Format data untuk frontend
    const formattedSoals = soals.reduce((acc, soal) => {
      const existingMapel = acc.find((item) => item.mapelId === soal.mapelId);

      if (existingMapel) {
        existingMapel.totalSoal += 1;
      } else {
        acc.push({
          id: soal.mapelId,
          mapelId: soal.mapelId,
          mapel: soal.mapel.namaMapel,
          totalSoal: 1,
          tanggal: soal.createdAt || new Date().toISOString().split("T")[0],
          status: "Aktif",
        });
      }

      return acc;
    }, []);

    return Response.json({
      message: "Soal retrieved successfully",
      data: formattedSoals,
    });
  } catch (error) {
    console.error("Error fetching soal:", error);
    return Response.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
