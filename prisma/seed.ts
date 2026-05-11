import { PrismaClient, Role, StatusSesi } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Mulai seed database...");

  // Bersihkan data lama dulu
  await prisma.aktivitasLog.deleteMany();
  await prisma.nilai.deleteMany();
  await prisma.jawaban.deleteMany();
  await prisma.ujianSiswa.deleteMany();
  await prisma.sesiUjian.deleteMany();
  await prisma.soal.deleteMany();
  await prisma.mapel.deleteMany();
  await prisma.admin.deleteMany();
  await prisma.guru.deleteMany();
  await prisma.siswa.deleteMany();
  await prisma.kelas.deleteMany();
  await prisma.user.deleteMany();

  const passwordDefault = await bcrypt.hash("123456", 10);

  // ADMIN
  const userAdmin = await prisma.user.create({
    data: {
      username: "admin",
      password: passwordDefault,
      role: Role.ADMIN,
      admin: {
        create: {
          nama: "Administrator",
        },
      },
    },
  });

  // KELAS
  const kelasXII = await prisma.kelas.create({
    data: {
      namaKelas: "XII RPL 1",
    },
  });

  const kelasXI = await prisma.kelas.create({
    data: {
      namaKelas: "XI RPL 1",
    },
  });

  // GURU
  const userGuru = await prisma.user.create({
    data: {
      username: "guru",
      password: passwordDefault,
      role: Role.GURU,
      guru: {
        create: {
          nama: "Budi Santoso",
          nip: "1987654321",
        },
      },
    },
    include: {
      guru: true,
    },
  });

  if (!userGuru.guru) {
    throw new Error("Data guru gagal dibuat");
  }

  // SISWA 1
  const userSiswa1 = await prisma.user.create({
    data: {
      username: "2026001",
      password: passwordDefault,
      role: Role.SISWA,
      siswa: {
        create: {
          nama: "Andi Pratama",
          nis: "2026001",
          kelasId: kelasXII.id,
        },
      },
    },
  });

  // SISWA 2
  const userSiswa2 = await prisma.user.create({
    data: {
      username: "2026002",
      password: passwordDefault,
      role: Role.SISWA,
      siswa: {
        create: {
          nama: "Siti Aminah",
          nis: "2026002",
          kelasId: kelasXII.id,
        },
      },
    },
  });

  // MAPEL
  const mapel = await prisma.mapel.create({
    data: {
      namaMapel: "Pemrograman Web I",
      guruId: userGuru.guru.id,
    },
  });

  // SOAL
  await prisma.soal.createMany({
    data: [
      {
        mapelId: mapel.id,
        pertanyaan: "Apa kepanjangan dari HTML?",
        opsiA: "Hyper Text Markup Language",
        opsiB: "High Text Machine Language",
        opsiC: "Hyper Tool Multi Language",
        opsiD: "Home Tool Markup Language",
        jawabanBenar: "A",
        bobot: 1,
      },
      {
        mapelId: mapel.id,
        pertanyaan: "Tag HTML untuk membuat paragraf adalah?",
        opsiA: "<h1>",
        opsiB: "<p>",
        opsiC: "<div>",
        opsiD: "<span>",
        jawabanBenar: "B",
        bobot: 1,
      },
      {
        mapelId: mapel.id,
        pertanyaan: "CSS digunakan untuk apa?",
        opsiA: "Membuat database",
        opsiB: "Mengatur tampilan halaman web",
        opsiC: "Menjalankan server",
        opsiD: "Menghapus file",
        jawabanBenar: "B",
        bobot: 1,
      },
    ],
  });

  // SESI UJIAN
  await prisma.sesiUjian.create({
    data: {
      mapelId: mapel.id,
      token: "ABC123",
      waktuMulai: new Date(),
      waktuSelesai: new Date(Date.now() + 60 * 60 * 1000),
      status: StatusSesi.TERBUKA,
    },
  });

  await prisma.aktivitasLog.create({
    data: {
      userId: userAdmin.id,
      aktivitas: "Seed data awal sistem CBT berhasil dibuat",
    },
  });

  console.log("Seed database selesai.");
  console.log("Login admin: admin / 123456");
  console.log("Login guru: guru / 123456");
  console.log("Login siswa 1: 2026001 / 123456");
  console.log("Login siswa 2: 2026002 / 123456");
  console.log("Token ujian: ABC123");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });