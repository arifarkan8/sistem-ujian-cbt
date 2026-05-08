"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { KeyRound, ShieldAlert, ArrowLeft, Info, BookOpen, Clock, FileText } from 'lucide-react';

export default function TokenVerificationPage() {
    const params = useParams();
    const mapelId = params.mapelId as string;
    const [token, setToken] = useState('');

    // Simulasi mengubah URL dinamis menjadi Judul Mapel (contoh: pemrograman-web -> PEMROGRAMAN WEB)
    const mapelTitle = mapelId ? mapelId.replace(/-/g, ' ').toUpperCase() : 'MATA PELAJARAN';

    return (
        <div className="max-w-3xl mx-auto pb-10">

            {/* Tombol Kembali */}
            <Link href="/dashboard/siswa" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium mb-8 transition-colors bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
                <ArrowLeft size={18} /> Kembali ke Daftar Ujian
            </Link>

            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">

                {/* Aksen Warna di Atas */}
                <div className="h-2 w-full bg-blue-600"></div>

                <div className="p-8 md:p-12">

                    {/* Header Mapel */}
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-blue-100">
                            <BookOpen size={32} />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-3">
                            {mapelTitle}
                        </h1>

                        {/* Detail Singkat */}
                        <div className="flex items-center justify-center gap-6 text-sm font-medium text-slate-500">
                            <span className="flex items-center gap-1.5"><FileText size={16} className="text-slate-400" /> Pilihan Ganda</span>
                            <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                            <span className="flex items-center gap-1.5"><Clock size={16} className="text-slate-400" /> 90 Menit</span>
                        </div>
                    </div>

                    <div className="w-full h-px bg-slate-100 mb-10"></div>

                    {/* Form Input Token */}
                    <form className="max-w-sm mx-auto space-y-8">
                        <div className="text-center space-y-3">
                            <label htmlFor="token" className="block text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center justify-center gap-2">
                                <KeyRound size={16} className="text-orange-500" /> Masukkan Token Ujian
                            </label>

                            {/* Input Spesial untuk Token */}
                            <input
                                type="text"
                                id="token"
                                maxLength={6}
                                value={token}
                                onChange={(e) => setToken(e.target.value.toUpperCase())}
                                className="w-full py-5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-center text-3xl font-black tracking-[0.5em] text-blue-700 outline-none focus:border-blue-500 focus:bg-white transition-all uppercase placeholder:text-slate-300 shadow-inner"
                                placeholder="XXXXXX"
                                autoComplete="off"
                            />
                            <p className="text-xs text-slate-400 font-medium">*Token diberikan oleh pengawas ruangan</p>
                        </div>

                        {/* Kotak Informasi Peringatan */}
                        <div className="bg-orange-50 border border-orange-100 p-4 rounded-2xl flex items-start gap-3">
                            <Info size={20} className="text-orange-600 shrink-0 mt-0.5" />
                            <p className="text-xs text-orange-800 leading-relaxed font-medium">
                                Waktu akan otomatis berjalan setelah Anda menekan tombol mulai. Pastikan koneksi internet Anda stabil dan jangan menutup *browser* selama ujian berlangsung.
                            </p>
                        </div>

                        {/* Tombol Mulai */}
                        {/* Nantinya link ini diarahkan ke halaman antarmuka ujian sungguhan */}
                        <Link href={`/ujian/${mapelId}`} className="block w-full">
                            <button
                                type="button"
                                disabled={token.length < 6}
                                className="w-full bg-slate-900 disabled:bg-slate-300 disabled:cursor-not-allowed hover:bg-black text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-slate-900/20 active:scale-[0.98] flex items-center justify-center gap-2 uppercase tracking-widest mt-2"
                            >
                                Mulai Kerjakan <ShieldAlert size={18} className={token.length < 6 ? "text-slate-400" : "text-orange-400"} />
                            </button>
                        </Link>
                    </form>

                </div>
            </div>
        </div>
    );
}