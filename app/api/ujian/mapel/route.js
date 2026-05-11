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

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return Response.json(
        { message: "Parameter slug diperlukan" },
        { status: 400 },
      );
    }

    const mapels = await prisma.mapel.findMany({
      include: {
        soal: true,
        guru: true,
      },
    });

    const mapel = mapels.find((item) => slugify(item.namaMapel) === slug);

    if (!mapel) {
      return Response.json(
        { message: "Mapel tidak ditemukan" },
        { status: 404 },
      );
    }

    return Response.json({
      id: mapel.id,
      namaMapel: mapel.namaMapel,
      guru: mapel.guru?.nama || "Belum ditugaskan",
      questions: mapel.soal.map((soal) => ({
        id: soal.id,
        pertanyaan: soal.pertanyaan,
        opsiA: soal.opsiA,
        opsiB: soal.opsiB,
        opsiC: soal.opsiC,
        opsiD: soal.opsiD,
      })),
    });
  } catch (error) {
    console.error("Error fetching ujian mapel:", error);
    return Response.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
