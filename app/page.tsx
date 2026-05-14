import React from 'react';
import Link from 'next/link';
import { User, Book, Shield } from 'lucide-react';

export default function PortalPage() {
  return (
    <main className="min-h-screen relative flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bg-sekolah.jpg')" }}>
      <div className="absolute inset-0 bg-slate-900/75 z-0"></div>
      <div className="relative z-10 w-full max-w-5xl px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
            Portal Sistem Ujian
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            SMK NUFA CITRA MANDIRI
          </h2>
          <p className="text-lg text-slate-300">
            Silakan pilih peran Anda untuk masuk ke dalam sistem.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Siswa */}
          <Link href="/login/siswa" className="group block">
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center transition-all cursor-pointer hover:shadow-lg hover:border-blue-500 h-full flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <User size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Portal Siswa</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Akses halaman ujian dan lihat laporan nilai.
              </p>
            </div>
          </Link>

          {/* Card Guru */}
          <Link href="/login/guru" className="group block">
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center transition-all cursor-pointer hover:shadow-lg hover:border-purple-500 h-full flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Book size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Portal Guru</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Kelola bank soal, sesi ujian, dan monitor siswa.
              </p>
            </div>
          </Link>

          {/* Card Admin */}
          <Link href="/login/admin" className="group block">
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center transition-all cursor-pointer hover:shadow-lg hover:border-emerald-500 h-full flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Portal Administrator</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Manajemen data master, jadwal global, dan rekapitulasi.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}