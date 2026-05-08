"use client";

import React, { useState } from 'react';
import {
    Search,
    FileText,
    Trash2,
    Pencil,
    Eye,
    Plus,
    Hash,
    Database,
    ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

// Mock Data: Daftar Soal yang sudah di-upload
const initialSoalList = [
    { id: 1, kode: 'WEB1-PAS-2026', mapel: 'Pemrograman Web I', totalSoal: 40, tanggal: '05 Mei 2026', status: 'Aktif' },
    { id: 2, kode: 'SBD-MID-2026', mapel: 'Sistem Basis Data', totalSoal: 30, tanggal: '02 Mei 2026', status: 'Draft' },
    { id: 3, kode: 'PCD-UAS-2026', mapel: 'Pengolahan Citra Digital', totalSoal: 50, tanggal: '28 April 2026', status: 'Aktif' },
];

export default function DaftarBankSoalPage() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="max-w-6xl mx-auto pb-10 font-sans text-left">

            {/* Header */}
            <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <Database size={16} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Koleksi Bank Soal</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Daftar Soal Saya</h1>
                    <p className="text-slate-500 mt-1 font-medium">Manajemen paket soal yang tersimpan di database.</p>
                </div>

                {/* Tombol ke Halaman Upload */}
                <Link href="/dashboard/guru/bank-soal" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                    <Plus size={20} />
                    Upload Soal Baru
                </Link>
            </header>

            {/* Bar Pencarian */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6">
                <div className="relative w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Cari kode ujian atau nama mata pelajaran..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all text-sm font-medium"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Tabel */}
            <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white text-[10px] uppercase tracking-[0.2em]">
                                <th className="py-5 px-8 font-black">Paket Ujian</th>
                                <th className="py-5 px-6 font-black text-center">Jumlah Soal</th>
                                <th className="py-5 px-6 font-black text-center">Tgl Upload</th>
                                <th className="py-5 px-6 font-black text-center">Status</th>
                                <th className="py-5 px-8 font-black text-center text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {initialSoalList.map((soal) => (
                                <tr key={soal.id} className="hover:bg-slate-50/80 transition-colors group">
                                    <td className="py-5 px-8">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                <FileText size={20} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800 leading-none">{soal.mapel}</p>
                                                <p className="text-[11px] text-slate-400 mt-1.5 font-mono flex items-center gap-1">
                                                    <Hash size={10} /> {soal.kode}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-5 px-6 text-center font-bold text-slate-600 text-sm">
                                        {soal.totalSoal} Butir
                                    </td>
                                    <td className="py-5 px-6 text-center text-xs font-semibold text-slate-500">
                                        {soal.tanggal}
                                    </td>
                                    <td className="py-5 px-6 text-center">
                                        <span className={`text-[10px] font-black px-3 py-1 rounded-full border ${soal.status === 'Aktif'
                                                ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
                                                : 'bg-amber-50 text-amber-600 border-amber-100'
                                            }`}>
                                            {soal.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="py-5 px-8">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"><Eye size={18} /></button>
                                            <button className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all"><Pencil size={18} /></button>
                                            <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 size={18} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}