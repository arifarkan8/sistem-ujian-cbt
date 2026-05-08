"use client";

import React, { useState } from 'react';
import {
    FileSpreadsheet,
    Search,
    Trophy,
    Users,
    BarChart3,
    TrendingUp,
    ChevronRight,
    Filter
} from 'lucide-react';
import { InlineMath } from 'react-katex';

// --- MOCK DATA REKAP NILAI ---
const reportData = [
    { id: 1, nis: '231011', nama: 'Budi Santoso', benar: 38, salah: 2, nilai: 95, status: 'LULUS' },
    { id: 2, nis: '231012', nama: 'Siti Aminah', benar: 30, salah: 10, nilai: 75, status: 'LULUS' },
    { id: 3, nis: '231013', nama: 'Andi Wijaya', benar: 22, salah: 18, nilai: 55, status: 'REMEDIAL' },
    { id: 4, nis: '231014', nama: 'Muhammad Arif Arkan', benar: 40, salah: 0, nilai: 100, status: 'LULUS' },
    { id: 5, nis: '231015', nama: 'Rina Melati', benar: 35, salah: 5, nilai: 87.5, status: 'LULUS' },
];

export default function LaporanNilaiPage() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="max-w-6xl mx-auto pb-10 font-sans text-left">

            <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Laporan Hasil Ujian</h1>
                    <p className="text-slate-500 mt-2 font-medium">Rekapitulasi nilai akhir dan statistik pengerjaan siswa.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 active:scale-95">
                    <FileSpreadsheet size={20} />
                    Ekspor ke Excel
                </button>
            </header>

            {/* Grid Ringkasan Statistik */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatSummary icon={Users} label="Peserta" value="36" sub="Siswa ikut ujian" color="blue" />
                <StatSummary icon={Trophy} label="Nilai Tertinggi" value="100" sub="M. Arif Arkan" color="amber" />
                <StatSummary icon={BarChart3} label="Rata-rata Kelas" value="82.4" sub="Peningkatan 5%" color="indigo" />
                <StatSummary icon={TrendingUp} label="Persentase Kelulusan" value="88%" sub="KKM: 75" color="emerald" />
            </div>

            <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-sm overflow-hidden">

                <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50/50">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Cari nama atau NIS..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm font-medium"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all">
                        <Filter size={18} /> Filter Status
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-white text-slate-400 text-[10px] uppercase tracking-[0.2em] border-b border-slate-100">
                                <th className="py-5 px-8 font-black">Nama Peserta</th>
                                <th className="py-5 px-6 font-black text-center">Benar</th>
                                <th className="py-5 px-6 font-black text-center">Salah</th>
                                <th className="py-5 px-6 font-black text-center">Nilai</th>
                                <th className="py-5 px-6 font-black text-center">Status</th>
                                <th className="py-5 px-8 font-black text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {reportData.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="py-5 px-8">
                                        <p className="font-bold text-slate-800 leading-none">{item.nama}</p>
                                        <p className="text-[11px] text-slate-400 mt-1 font-mono">{item.nis}</p>
                                    </td>
                                    <td className="py-5 px-6 text-center font-bold text-emerald-600">{item.benar}</td>
                                    <td className="py-5 px-6 text-center font-bold text-red-500">{item.salah}</td>
                                    <td className="py-5 px-6 text-center font-black text-slate-900 text-lg">{item.nilai}</td>
                                    <td className="py-5 px-6 text-center">
                                        <span className={`text-[10px] font-black px-2.5 py-1 rounded-md border ${item.status === 'LULUS' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="py-5 px-8 text-right">
                                        <button className="p-2 text-slate-300 hover:text-blue-600 transition-colors">
                                            <ChevronRight size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* FOOTER RUMUS DENGAN KATEX */}
                <div className="p-8 bg-slate-50/50 border-t border-slate-100 flex flex-col items-center gap-2">
                    <p className="text-xs text-slate-400 font-medium italic">
                        Nilai dihitung otomatis menggunakan rumus:
                    </p>
                    <div className="text-blue-600 text-lg">
                        <InlineMath math="Skor = \frac{\text{Total Benar}}{\text{Total Soal}} \times 100" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatSummary({ icon: Icon, label, value, sub, color }: any) {
    const colors = {
        blue: 'text-blue-600 bg-blue-50',
        amber: 'text-amber-600 bg-amber-50',
        indigo: 'text-indigo-600 bg-indigo-50',
        emerald: 'text-emerald-600 bg-emerald-50',
    };

    return (
        <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm">
            <div className={`p-3 rounded-2xl w-fit mb-4 ${colors[color as keyof typeof colors]}`}>
                <Icon size={24} />
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">{value}</h3>
            <p className="text-xs text-slate-500 font-medium mt-1 truncate">{sub}</p>
        </div>
    );
}