const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

async function createAdmin() {
  const prisma = new PrismaClient();
  try {
    const hashedPassword = await bcrypt.hash("admin123", 10);

    const user = await prisma.user.create({
      data: {
        username: "admin",
        password: hashedPassword,
        role: "ADMIN",
      },
    });

    const admin = await prisma.admin.create({
      data: {
        userId: user.id,
        nama: "Administrator",
      },
    });

    console.log("Admin created successfully!");
    console.log("Username: admin");
    console.log("Password: admin123");
  } catch (error) {
    console.error("Error creating admin:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
