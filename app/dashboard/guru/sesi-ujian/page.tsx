"use client";

import React, { useState } from 'react';
import {
    KeyRound,
    Play,
    CircleStop,
    Clock,
    AlertCircle,
    Hash,
    Save,
    CheckCircle
} from 'lucide-react';

export default function SesiTokenPage() {
    // Karena setiap guru memegang mapel sendiri, kita hanya butuh satu state
    const [examStatus, setExamStatus] = useState<'TERTUTUP' | 'TERBUKA'>('TERTUTUP');
    const [manualToken, setManualToken] = useState(''); // Token ditentukan guru
    const [isSaved, setIsSaved] = useState(false);

    // Data mapel guru (Nantinya diambil dari database berdasarkan login guru)
    const myMapel = {
        id: 'WEB-1',
        nama: 'Pemrograman Web I',
        jadwal: 'Jumat, 08 Mei 2026',
        waktu: '08:00 - 09:30'
    };

    const handleSaveSesi = () => {
        if (!manualToken) return alert("Mohon tentukan token terlebih dahulu!");
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
        // Logika simpan ke database akan diletakkan di sini
    };

    return (
        <div className="max-w-4xl mx-auto pb-10 font-sans text-left">

            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Kontrol Sesi & Token</h1>
                <p className="text-slate-500 mt-2 font-medium">Atur kode akses dan status aktif untuk mata pelajaran Anda.</p>
            </header>

            {/* Informasi Mata Pelajaran yang Diampu */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-sm border border-blue-100">
                        <Hash size={28} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">{myMapel.nama}</h2>
                        <div className="flex items-center gap-3 mt-1 text-sm text-slate-500 font-medium">
                            <span className="flex items-center gap-1"><Clock size={14} /> {myMapel.waktu}</span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span>{myMapel.jadwal}</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <button
                        onClick={() => setExamStatus('TERTUTUP')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${examStatus === 'TERTUTUP' ? 'bg-white text-red-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        TUTUP SESI
                    </button>
                    <button
                        onClick={() => setExamStatus('TERBUKA')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${examStatus === 'TERBUKA' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        BUKA SESI
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Input Token Manual */}
                <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-8 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                                <KeyRound size={20} />
                            </div>
                            <h3 className="font-bold text-slate-800 tracking-tight">Konfigurasi Token</h3>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Ketik Token Baru</label>
                                <input
                                    type="text"
                                    maxLength={6}
                                    value={manualToken}
                                    onChange={(e) => setManualToken(e.target.value.toUpperCase())}
                                    placeholder="CONTOH: PW123"
                                    className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl text-2xl font-black font-mono tracking-[0.3em] text-blue-700 outline-none focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-200"
                                />
                                <p className="text-xs text-slate-400 font-medium italic">*Maksimal 6 karakter (Huruf/Angka)</p>
                            </div>

                            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-3 mt-4">
                                <AlertCircle size={18} className="text-blue-500 shrink-0 mt-0.5" />
                                <p className="text-[11px] text-blue-700 leading-relaxed font-medium">
                                    Siswa hanya bisa masuk jika status sesi <strong>TERBUKA</strong> dan memasukkan token yang Anda simpan di sini.
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleSaveSesi}
                        className={`mt-8 w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${isSaved ? 'bg-green-600 text-white shadow-green-600/20' : 'bg-slate-900 text-white hover:bg-black shadow-slate-900/20 active:scale-[0.98]'}`}
                    >
                        {isSaved ? (
                            <><CheckCircle size={20} /> Sesi Berhasil Disimpan</>
                        ) : (
                            <><Save size={20} /> Simpan Konfigurasi Sesi</>
                        )}
                    </button>
                </div>

                {/* Preview Tampilan Proyektor */}
                <div className={`rounded-[2rem] p-8 text-white relative overflow-hidden transition-all duration-500 ${examStatus === 'TERBUKA' ? 'bg-blue-600 shadow-2xl shadow-blue-600/30' : 'bg-slate-300 shadow-none'}`}>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <p className="font-bold uppercase tracking-[0.2em] text-[10px] opacity-70">Layar Pengumuman Kelas</p>
                                <div className={`w-2 h-2 rounded-full ${examStatus === 'TERBUKA' ? 'bg-white animate-ping' : 'bg-slate-400'}`}></div>
                            </div>
                            <h3 className="text-2xl font-black tracking-tight leading-tight">
                                {examStatus === 'TERBUKA' ? 'UJIAN SEDANG BERLANGSUNG' : 'UJIAN BELUM DIMULAI'}
                            </h3>
                        </div>

                        <div className="my-10 text-center">
                            <p className="text-[10px] font-bold opacity-60 mb-2 uppercase tracking-widest">Token Akses</p>
                            <div className={`inline-block px-10 py-6 rounded-3xl border-2 font-mono text-5xl font-black tracking-[0.2em] ${examStatus === 'TERBUKA' ? 'bg-white/10 border-white/20 text-white' : 'bg-slate-400/20 border-slate-400/30 text-slate-400'}`}>
                                {manualToken || '------'}
                            </div>
                        </div>

                        <div className="bg-black/10 rounded-xl p-4 border border-white/5">
                            <p className="text-[10px] font-medium opacity-70 leading-relaxed italic">
                                *Tampilkan halaman ini di proyektor kelas agar siswa dapat melihat kode akses dengan jelas.
                            </p>
                        </div>
                    </div>

                    {/* Ornamen Background */}
                    <KeyRound size={200} className="absolute -right-20 -bottom-20 text-white/5 rotate-12" />
                </div>

            </div>
        </div>
    );
}