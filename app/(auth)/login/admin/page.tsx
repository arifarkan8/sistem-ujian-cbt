import React from 'react';
import Link from 'next/link';
import { Mail, Lock, ShieldCheck, Settings, Shield } from 'lucide-react';

export default function AdminLoginPage() {
    return (
        <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-8 relative">
            <Link href="/" className="absolute top-6 right-6 md:right-8 text-sm text-slate-500 hover:text-emerald-600 font-medium z-10 transition-colors">
                &larr; Kembali ke Portal Utama
            </Link>

            {/* Container Utama - Disamakan dengan Portal Siswa */}
            <div className="w-full max-w-6xl bg-white rounded-[2rem] shadow-2xl shadow-slate-300/50 overflow-hidden flex flex-col lg:flex-row border border-slate-200">

                {/* Sisi Kiri: Panel Informasi Admin */}
                <div className="w-full lg:w-5/12 relative p-8 md:p-12 flex flex-col justify-between bg-[url('/gedung-sekolah.jpg')] bg-cover bg-center">
                    {/* Overlay gradient Emerald untuk Admin */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 to-slate-900/95"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide uppercase mb-8">
                            <ShieldCheck size={14} className="text-emerald-400" />
                            Portal Administrator
                        </div>

                        <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                            Sistem Admin <br />
                            <span className="text-emerald-400 font-bold">SMK NUFA CITRA MANDIRI</span>
                        </h1>
                        <p className="text-emerald-100/80 text-base leading-relaxed max-w-sm">
                            Manajemen data master, konfigurasi jadwal global, dan akses rekapitulasi nilai seluruh sekolah.
                        </p>
                    </div>

                    <div className="relative z-10 mt-12 lg:mt-0 space-y-4">
                        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                            <div className="p-2 bg-emerald-700/50 rounded-lg">
                                <Settings className="text-emerald-200 w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-medium text-sm">Kendali Sistem Penuh</h4>
                                <p className="text-emerald-200/60 text-xs mt-0.5">Akses pengaturan inti dan hak pengguna</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sisi Kanan: Form Login Admin */}
                <div className="w-full lg:w-7/12 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white relative">

                    <div className="mb-10 text-center lg:text-left">
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 mx-auto lg:mx-0 text-emerald-600">
                            <Shield size={28} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">Login Administrator</h2>
                        <p className="text-slate-500 mt-2 text-sm">Masuk menggunakan kredensial admin Anda.</p>
                    </div>

                    <form className="space-y-6">
                        {/* Input Email/Username */}
                        <div className="space-y-1.5">
                            <label htmlFor="identifier" className="block text-sm font-medium text-slate-700">
                                Username / Email
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <Mail size={18} className="text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    id="identifier"
                                    className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
                                    placeholder="Masukkan Username atau Email"
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
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <Lock size={18} className="text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        {/* Tombol Masuk - Emerald */}
                        <div className="pt-4">
                            <Link href="/dashboard/admin" className="block w-full">
                                <button
                                    type="button"
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.98] cursor-pointer"
                                >
                                    Masuk sebagai Admin
                                </button>
                            </Link>
                        </div>

                    </form>

                    <div className="mt-12 text-center text-xs text-slate-400 font-medium">
                        Sistem CBT SMK NUFA CITRA MANDIRI v1.0
                    </div>
                </div>
            </div>
        </main>
    );
}
