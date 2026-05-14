"use client";

import React, { useState } from 'react';
import {
    Users,
    Activity,
    CheckCircle2,
    ShieldAlert,
    Search,
    Wifi,
    WifiOff,
    Eye,
    AlertTriangle,
    Clock
} from 'lucide-react';

// --- MOCK DATA SISWA ---
const mockStudents = [
    { id: 1, nis: '231011', nama: 'Budi Santoso', status: 'ONLINE', progress: '32/40', pelanggaran: 0, lastActive: 'Baru saja' },
    { id: 2, nis: '231012', nama: 'Siti Aminah', status: 'ONLINE', progress: '15/40', pelanggaran: 3, lastActive: 'Baru saja' },
    { id: 3, nis: '231013', nama: 'Andi Wijaya', status: 'OFFLINE', progress: '10/40', pelanggaran: 1, lastActive: '5 menit lalu' },
    { id: 4, nis: '231014', nama: 'Muhammad Arif Arkan', status: 'SELESAI', progress: '40/40', pelanggaran: 0, lastActive: '10 menit lalu' },
    { id: 5, nis: '231015', nama: 'Rina Melati', status: 'ONLINE', progress: '28/40', pelanggaran: 0, lastActive: 'Baru saja' },
];

export default function MonitoringPage() {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter siswa berdasarkan pencarian
    const filteredStudents = mockStudents.filter(s =>
        s.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.nis.includes(searchTerm)
    );

    return (
        <div className="max-w-7xl mx-auto pb-10 font-sans">

            <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Monitoring Ujian Live</h1>
                    <p className="text-slate-500 mt-2 font-medium">Pantau progres pengerjaan dan deteksi kecurangan siswa secara real-time.</p>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-bold text-sm border border-blue-100 animate-pulse">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Sistem Pemantauan Aktif
                </div>
            </header>

            {/* Grid Statistik Cepat */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <StatCard icon={Users} label="Total Peserta" value="36" color="blue" />
                <StatCard icon={Activity} label="Sedang Mengerjakan" value="34" color="emerald" />
                <StatCard icon={CheckCircle2} label="Selesai Ujian" value="1" color="slate" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* KOLOM KIRI: Tabel Siswa (Lebar 3/4) */}
                <div className="lg:col-span-3 flex flex-col gap-6">

                    {/* Bar Pencarian */}
                    <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex items-center">
                        <div className="pl-4 text-slate-400"><Search size={20} /></div>
                        <input
                            type="text"
                            placeholder="Cari nama atau NIS siswa..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3 bg-transparent outline-none font-medium text-slate-700"
                        />
                    </div>

                    {/* Tabel CCTV */}
                    <div className="bg-white border border-slate-200 rounded-[2rem] shadow-sm overflow-hidden flex-1">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead>
                                    <tr className="bg-slate-900 text-white text-[11px] uppercase tracking-[0.15em]">
                                        <th className="py-5 px-6 font-bold">Peserta Ujian</th>
                                        <th className="py-5 px-6 font-bold text-center">Status</th>
                                        <th className="py-5 px-6 font-bold text-center">Progres</th>
                                        <th className="py-5 px-6 font-bold text-center">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {filteredStudents.map((siswa) => (
                                        <tr key={siswa.id} className="hover:bg-slate-50 transition-colors">

                                            {/* Info Peserta */}
                                            <td className="py-4 px-6">
                                                <div className="font-bold text-slate-800">{siswa.nama}</div>
                                                <div className="text-xs text-slate-500 font-mono mt-0.5">{siswa.nis}</div>
                                            </td>

                                            {/* Status (Online/Offline/Selesai) */}
                                            <td className="py-4 px-6 text-center">
                                                {siswa.status === 'ONLINE' && (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-xs font-bold border border-emerald-100">
                                                        <Wifi size={14} /> Mengerjakan
                                                    </span>
                                                )}
                                                {siswa.status === 'OFFLINE' && (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-500 rounded-lg text-xs font-bold border border-slate-200">
                                                        <WifiOff size={14} /> Terputus
                                                    </span>
                                                )}
                                                {siswa.status === 'SELESAI' && (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold border border-blue-100">
                                                        <CheckCircle2 size={14} /> Selesai
                                                    </span>
                                                )}
                                            </td>

                                            {/* Progres Soal */}
                                            <td className="py-4 px-6 text-center">
                                                <span className="font-bold text-slate-700">{siswa.progress}</span>
                                                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                                                    <div
                                                        className="bg-blue-500 h-full rounded-full"
                                                        style={{ width: `${(parseInt(siswa.progress.split('/')[0]) / 40) * 100}%` }}
                                                    ></div>
                                                </div>
                                            </td>

                                            {/* Tombol Aksi */}
                                            <td className="py-4 px-6 text-center">
                                                <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Lihat Layar Siswa">
                                                    <Eye size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* KOLOM KANAN: Log Aktivitas Live (Lebar 1/4) */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden sticky top-6">
                        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                            <h3 className="font-bold text-white flex items-center gap-2">
                                <Activity size={16} className="text-blue-400" /> Live Log
                            </h3>
                        </div>

                        <div className="p-6 space-y-6 max-h-[600px] overflow-y-auto custom-scrollbar">
                            <LogEntry
                                time="10:12:05"
                                user="Muhammad Arif Arkan"
                                action="Berhasil menyelesaikan ujian dan mengirim jawaban."
                                type="success"
                            />
                            <LogEntry
                                time="10:08:30"
                                user="Andi Wijaya"
                                action="Koneksi terputus dari server."
                                type="warning"
                            />
                            <LogEntry
                                time="09:55:10"
                                user="Rina Melati"
                                action="Berhasil login dan memulai sesi ujian."
                                type="info"
                            />
                            <LogEntry
                                time="09:50:00"
                                user="Budi Santoso"
                                action="Berhasil login dan memulai sesi ujian."
                                type="info"
                            />
                        </div>

                        <div className="p-4 border-t border-slate-100 bg-slate-50">
                            <button className="w-full text-xs font-bold text-slate-500 hover:text-blue-600 flex items-center justify-center gap-2">
                                <Clock size={14} /> Unduh Log Lengkap
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

// --- Komponen Pembantu ---

function StatCard({ icon: Icon, label, value, color }: any) {
    const colorStyles = {
        blue: 'bg-blue-50 text-blue-600 border-blue-100',
        emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        slate: 'bg-slate-50 text-slate-700 border-slate-200',
        red: 'bg-red-50 text-red-600 border-red-100',
    };

    return (
        <div className={`p-6 rounded-2xl border shadow-sm flex items-center gap-4 ${colorStyles[color as keyof typeof colorStyles]}`}>
            <div className="p-3 bg-white rounded-xl shadow-sm">
                <Icon size={24} />
            </div>
            <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-0.5">{label}</p>
                <p className="text-2xl font-black leading-none">{value}</p>
            </div>
        </div>
    );
}

function LogEntry({ time, user, action, type }: any) {
    const types = {
        danger: 'text-red-600 bg-red-50 border-red-100',
        warning: 'text-orange-600 bg-orange-50 border-orange-100',
        success: 'text-emerald-600 bg-emerald-50 border-emerald-100',
        info: 'text-blue-600 bg-blue-50 border-blue-100',
    };

    return (
        <div className="relative pl-4 border-l-2 border-slate-200">
            <div className={`absolute -left-[5px] top-0 w-2 h-2 rounded-full ${type === 'danger' ? 'bg-red-500' : type === 'warning' ? 'bg-orange-500' : type === 'success' ? 'bg-emerald-500' : 'bg-blue-500'}`}></div>
            <p className="text-[10px] font-bold text-slate-400 font-mono mb-1">{time}</p>
            <p className="text-sm font-bold text-slate-800">{user}</p>
            <div className={`mt-1.5 p-2 rounded-lg text-xs font-medium border ${types[type as keyof typeof types]}`}>
                {action}
            </div>
        </div>
    );
}