import { prisma } from "@/lib/prisma";

function slugify(value) {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
}

export async function GET() {
  try {
    const mapelList = await prisma.mapel.findMany({
      include: {
        guru: true,
        soal: true,
      },
      orderBy: {
        namaMapel: "asc",
      },
    });

    return Response.json({
      mapelList: mapelList.map((mapel) => ({
        id: mapel.id,
        slug: slugify(mapel.namaMapel),
        namaMapel: mapel.namaMapel,
        guru: mapel.guru?.nama || "Belum ditugaskan",
        totalSoal: mapel.soal.length,
        status: "Tersedia",
      })),
    });
  } catch (error) {
    console.error("Error fetching siswa dashboard:", error);
    return Response.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
