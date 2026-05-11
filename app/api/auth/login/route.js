import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { username, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    return Response.json({ message: "User tidak ditemukan" }, { status: 404 });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return Response.json({ message: "Password salah" }, { status: 401 });
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET || "secret_dev",
    {
      expiresIn: "1d",
    },
  );

  return Response.json({
    message: "Login berhasil",
    token,
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
    },
  });
}