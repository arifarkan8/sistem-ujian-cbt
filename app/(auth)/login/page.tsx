import React from 'react';
import Link from 'next/link';
import { Mail, Lock, ShieldCheck, LayoutDashboard, ArrowLeft } from 'lucide-react';

export default function AdminLoginPage() {
    return (
        <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-8">

            {/* Container Utama - Disamakan dengan Portal Siswa */}
            <div className="w-full max-w-6xl bg-white rounded-[2rem] shadow-2xl shadow-slate-300/50 overflow-hidden flex flex-col lg:flex-row border border-slate-200">

                {/* Sisi Kiri: Panel Informasi Guru (Menggunakan Foto yang sama) */}
                <div className="w-full lg:w-5/12 relative p-8 md:p-12 flex flex-col justify-between bg-[url('/gedung-sekolah.jpg')] bg-cover bg-center">
                    {/* Overlay gradient lebih gelap (Slate/Zinc) untuk membedakan dengan Biru Siswa */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-slate-800/95"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide uppercase mb-8">
                            <ShieldCheck size={14} className="text-blue-400" />
                            Portal Administrasi
                        </div>

                        <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                            Dashboard <br />
                            <span className="text-slate-400">Pendidik & Admin</span>
                        </h1>
                        <p className="text-slate-300 text-base leading-relaxed max-w-sm">
                            Kelola manajemen soal, pantau jalannya ujian, dan olah nilai siswa dengan sistem terintegrasi.
                        </p>
                    </div>

                    <div className="relative z-10 mt-12 lg:mt-0 space-y-4">
                        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                            <div className="p-2 bg-slate-700 rounded-lg">
                                <LayoutDashboard className="text-slate-200 w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-medium text-sm">Monitoring Real-time</h4>
                                <p className="text-slate-400 text-xs mt-0.5">Pantau status siswa yang sedang ujian</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sisi Kanan: Form Login Guru */}
                <div className="w-full lg:w-7/12 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white relative">

                    {/* Tombol Kembali ke Siswa */}
                    <Link
                        href="/"
                        className="absolute top-8 right-8 text-sm font-medium text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2"
                    >
                        <ArrowLeft size={16} />
                        Ke Portal Siswa
                    </Link>

                    <div className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">Selamat Datang, Guru</h2>
                        <p className="text-slate-500 mt-2 text-sm">Silakan masuk menggunakan akun NIP atau Email terdaftar.</p>
                    </div>

                    <form className="space-y-6">
                        {/* Input NIP / Email */}
                        <div className="space-y-1.5">
                            <label htmlFor="identifier" className="block text-sm font-medium text-slate-700">
                                NIP / Email Terdaftar
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <Mail size={18} className="text-slate-400 group-focus-within:text-slate-800 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    id="identifier"
                                    className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-500/10 focus:border-slate-800 transition-all outline-none"
                                    placeholder="Masukkan NIP atau Email"
                                    required
                                />
                            </div>
                        </div>

                        {/* Input Password */}
                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                                    Kata Sandi
                                </label>
                                <Link href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                                    Lupa Sandi?
                                </Link>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <Lock size={18} className="text-slate-400 group-focus-within:text-slate-800 transition-colors" />
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-500/10 focus:border-slate-800 transition-all outline-none"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        {/* Tombol Masuk - Warna Gelap (Slate) agar beda dengan Biru Siswa */}
                        <div className="pt-4">
                            <Link href="/dashboard/guru" className="block w-full">
                                <button
                                    type="button"
                                    className="w-full bg-slate-900 hover:bg-black text-white font-semibold py-4 px-4 rounded-xl transition-all shadow-lg shadow-slate-900/20 active:scale-[0.98]"
                                >
                                    Otorisasi Masuk
                                </button>
                            </Link>
                        </div>

                    </form>

                    <div className="mt-12 text-center text-xs text-slate-400 tracking-wider uppercase font-medium">
                        Sistem Ujian Kejuruan v1.0
                    </div>
                </div>
            </div>
        </main>
    );
}