import React from 'react';
import Link from 'next/link';
import { User, Lock, MonitorSmartphone, GraduationCap } from 'lucide-react';

export default function StudentLoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8 relative">
      <Link href="/" className="absolute top-6 right-6 md:right-8 text-sm text-slate-500 hover:text-blue-600 font-medium z-10 transition-colors">
        &larr; Kembali ke Portal Utama
      </Link>
      <div className="w-full max-w-6xl bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row border border-slate-100">
        
        {/* Sisi Kiri: Branding */}
        <div className="w-full lg:w-5/12 relative p-8 md:p-12 flex flex-col justify-between bg-[url('/gedung-sekolah.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/95 to-indigo-900/95"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Portal Siswa Aktif
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
              Sistem Ujian <br />
              <span className="text-blue-300 font-bold">SMK NUFA CITRA MANDIRI</span>
            </h1>
            <p className="text-blue-100/80 text-base max-w-sm">
              Silakan login untuk mengakses daftar mata pelajaran yang diujikan hari ini.
            </p>
          </div>
          <div className="relative z-10 mt-12 space-y-4">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 text-white">
              <MonitorSmartphone size={24} className="text-blue-300" />
              <span className="text-sm font-medium">Ujian Terpantau Sistem</span>
            </div>
          </div>
        </div>

        {/* Sisi Kanan: Form Login */}
        <div className="w-full lg:w-7/12 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white relative">
          <div className="mb-10 text-center lg:text-left">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto lg:mx-0 text-blue-600">
              <GraduationCap size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Masuk Akun</h2>
            <p className="text-slate-500 mt-2 text-sm text-balance">Masukkan NIS dan kata sandi yang telah diberikan sekolah.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">NIS (Nomor Induk Siswa)</label>
                <div className="relative group">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                  <input type="text" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all font-medium text-slate-900 placeholder:text-slate-400" placeholder="Contoh: 23101140" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Kata Sandi</label>
                <div className="relative group">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                  <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all font-medium text-slate-900 placeholder:text-slate-400" />
                </div>
              </div>
            </div>

            <Link href="/dashboard/siswa" className="block w-full pt-4">
              <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] cursor-pointer">
                Masuk ke Dashboard
              </button>
            </Link>

            <div className="text-center pt-6 border-t border-slate-100">
              <p className="text-xs text-slate-400">Sistem CBT SMK NUFA CITRA MANDIRI v1.0</p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
