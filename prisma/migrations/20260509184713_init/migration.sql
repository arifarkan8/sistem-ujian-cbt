-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "kelas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "namaKelas" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "siswa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "nis" TEXT NOT NULL,
    "kelasId" INTEGER NOT NULL,
    CONSTRAINT "siswa_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "siswa_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "kelas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "guru" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "nip" TEXT,
    CONSTRAINT "guru_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    CONSTRAINT "admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "mapel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "namaMapel" TEXT NOT NULL,
    "guruId" INTEGER,
    CONSTRAINT "mapel_guruId_fkey" FOREIGN KEY ("guruId") REFERENCES "guru" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "soal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mapelId" INTEGER NOT NULL,
    "pertanyaan" TEXT NOT NULL,
    "opsiA" TEXT NOT NULL,
    "opsiB" TEXT NOT NULL,
    "opsiC" TEXT NOT NULL,
    "opsiD" TEXT NOT NULL,
    "jawabanBenar" TEXT NOT NULL,
    "bobot" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "soal_mapelId_fkey" FOREIGN KEY ("mapelId") REFERENCES "mapel" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "sesi_ujian" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mapelId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "waktuMulai" DATETIME NOT NULL,
    "waktuSelesai" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'TERTUTUP',
    CONSTRAINT "sesi_ujian_mapelId_fkey" FOREIGN KEY ("mapelId") REFERENCES "mapel" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ujian_siswa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "siswaId" INTEGER NOT NULL,
    "sesiId" INTEGER NOT NULL,
    "mulai" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "selesai" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'SEDANG_MENGERJAKAN',
    CONSTRAINT "ujian_siswa_siswaId_fkey" FOREIGN KEY ("siswaId") REFERENCES "siswa" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ujian_siswa_sesiId_fkey" FOREIGN KEY ("sesiId") REFERENCES "sesi_ujian" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "jawaban" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ujianSiswaId" INTEGER NOT NULL,
    "soalId" INTEGER NOT NULL,
    "jawaban" TEXT,
    "raguRagu" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "jawaban_ujianSiswaId_fkey" FOREIGN KEY ("ujianSiswaId") REFERENCES "ujian_siswa" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "jawaban_soalId_fkey" FOREIGN KEY ("soalId") REFERENCES "soal" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "nilai" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "siswaId" INTEGER NOT NULL,
    "sesiId" INTEGER NOT NULL,
    "benar" INTEGER NOT NULL DEFAULT 0,
    "salah" INTEGER NOT NULL DEFAULT 0,
    "kosong" INTEGER NOT NULL DEFAULT 0,
    "nilai" REAL NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "nilai_siswaId_fkey" FOREIGN KEY ("siswaId") REFERENCES "siswa" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "nilai_sesiId_fkey" FOREIGN KEY ("sesiId") REFERENCES "sesi_ujian" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "aktivitas_log" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "aktivitas" TEXT NOT NULL,
    "waktu" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "aktivitas_log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "siswa_userId_key" ON "siswa"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "siswa_nis_key" ON "siswa"("nis");

-- CreateIndex
CREATE UNIQUE INDEX "guru_userId_key" ON "guru"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "guru_nip_key" ON "guru"("nip");

-- CreateIndex
CREATE UNIQUE INDEX "admin_userId_key" ON "admin"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "sesi_ujian_token_key" ON "sesi_ujian"("token");
