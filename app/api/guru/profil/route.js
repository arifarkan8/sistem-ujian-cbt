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

    if (decoded.role !== "GURU") {
      return Response.json({ message: "Akses ditolak" }, { status: 403 });
    }

    const guru = await prisma.guru.findUnique({
      where: { userId: decoded.id },
      include: {
        user: {
          select: {
            username: true,
            role: true,
            createdAt: true,
          },
        },
      },
    });

    if (!guru) {
      return Response.json(
        { message: "Data guru tidak ditemukan" },
        { status: 404 },
      );
    }

    return Response.json({
      id: guru.id,
      nama: guru.nama,
      nip: guru.nip,
      username: guru.user.username,
      role: guru.user.role,
      createdAt: guru.user.createdAt,
    });
  } catch (error) {
    console.error("Error fetching guru profile:", error);
    return Response.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
