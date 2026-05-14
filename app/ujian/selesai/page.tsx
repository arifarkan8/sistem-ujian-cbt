import React from 'react';
import Link from 'next/link';
import { CheckCircle, Home, FileText } from 'lucide-react';

export default function UjianSelesaiPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">

            <div className="w-full max-w-lg bg-white rounded-[2.5rem] p-10 shadow-2xl border border-slate-200 text-center relative overflow-hidden">

                {/* Dekorasi Latar */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-white/0 pointer-events-none"></div>

                {/* Ikon Sukses */}
                <div className="relative mx-auto w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-xl shadow-blue-100/50">
                    <CheckCircle size={48} className="text-blue-500" />
                </div>

                <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-3">
                    Ujian SMK NUFA CITRA MANDIRI Berhasil Disimpan
                </h1>

                <p className="text-slate-500 text-sm leading-relaxed px-4 mb-8">
                    Terima kasih. Seluruh jawaban Anda telah dienkripsi dan berhasil dikirim ke server pusat. Silakan tunggu instruksi selanjutnya dari pengawas ruangan.
                </p>

                {/* Info Ringkas */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-8 flex items-center justify-center gap-3 text-left">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                        <FileText size={20} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Status Evaluasi</p>
                        <p className="text-sm font-semibold text-slate-800">Menunggu Penilaian Guru</p>
                    </div>
                </div>

                {/* Tombol Kembali */}
                <div className="flex justify-center mt-4">
                    <Link href="/dashboard/siswa">
                        <button className="px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer">
                            <Home size={18} /> Kembali ke Dashboard
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    );
}