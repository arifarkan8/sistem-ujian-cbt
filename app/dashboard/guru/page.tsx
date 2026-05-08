import React from 'react';
import { Users, Database, Activity, CheckCircle2, AlertCircle } from 'lucide-react';

export default function GuruDashboardHome() {
    return (
        <div className="max-w-6xl mx-auto pb-10">

            {/* Header Sambutan */}
            <header className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard Pusat</h1>
                <p className="text-slate-500 mt-2 font-medium">Selamat datang, pantau aktivitas sistem ujian secara real-time.</p>
            </header>

            {/* Kartu Statistik Atas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <StatCard icon={Users} title="Total Siswa" value="324" color="blue" subtitle="Terdaftar di sistem" />
                <StatCard icon={Database} title="Bank Soal" value="12" color="indigo" subtitle="Mata pelajaran aktif" />
                <StatCard icon={Activity} title="Sedang Ujian" value="45" color="emerald" subtitle="Siswa online saat ini" />
                <StatCard icon={CheckCircle2} title="Selesai Ujian" value="279" color="slate" subtitle="Hari ini" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Kolom Kiri: Tabel Ujian Hari Ini (Lebar 2/3) */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                        <h2 className="font-bold text-slate-800">Jadwal Ujian Hari Ini</h2>
                        <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase tracking-wider">
                            8 Mei 2026
                        </span>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            <ScheduleItem mapel="Pemrograman Web I" waktu="08:00 - 09:30" status="Berjalan" token="PW1X9A" />
                            <ScheduleItem mapel="Sistem Basis Data" waktu="10:00 - 12:00" status="Menunggu" token="SBD77K" />
                            <ScheduleItem mapel="Matematika Teknik" waktu="13:00 - 14:30" status="Menunggu" token="MTK90P" />
                        </div>
                    </div>
                </div>

                {/* Kolom Kanan: Log Aktivitas Singkat (Lebar 1/3) */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
                        <h2 className="font-bold text-slate-800">Peringatan Sistem</h2>
                    </div>
                    <div className="p-6">
                        <div className="space-y-5">
                            <LogItem siswa="Budi Santoso" pesan="Terdeteksi pindah tab" waktu="Baru saja" />
                            <LogItem siswa="Andi Wijaya" pesan="Koneksi terputus" waktu="5 menit lalu" />
                            <LogItem siswa="Siti Aminah" pesan="Terdeteksi pindah tab" waktu="12 menit lalu" />
                        </div>
                        <button className="w-full mt-6 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 text-sm font-semibold rounded-xl border border-slate-200 transition-colors">
                            Lihat Monitoring Selengkapnya
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

// --- Komponen Pembantu ---

function StatCard({ icon: Icon, title, value, color, subtitle }: any) {
    const colorClasses = {
        blue: 'bg-blue-50 text-blue-600',
        indigo: 'bg-indigo-50 text-indigo-600',
        emerald: 'bg-emerald-50 text-emerald-600',
        slate: 'bg-slate-50 text-slate-600',
    };

    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className={`p-4 rounded-xl ${colorClasses[color as keyof typeof colorClasses]}`}>
                <Icon size={24} />
            </div>
            <div>
                <p className="text-sm font-bold text-slate-500 mb-1">{title}</p>
                <h3 className="text-2xl font-black text-slate-900">{value}</h3>
                <p className="text-xs text-slate-400 mt-1 font-medium">{subtitle}</p>
            </div>
        </div>
    );
}

function ScheduleItem({ mapel, waktu, status, token }: any) {
    const isRunning = status === 'Berjalan';
    return (
        <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
            <div>
                <h4 className="font-bold text-slate-800">{mapel}</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">{waktu}</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Token Aktif</p>
                    <p className="font-mono font-bold text-slate-800">{token}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${isRunning ? 'bg-emerald-100 text-emerald-700 animate-pulse' : 'bg-slate-100 text-slate-500'}`}>
                    {status}
                </span>
            </div>
        </div>
    );
}

function LogItem({ siswa, pesan, waktu }: any) {
    return (
        <div className="flex items-start gap-3">
            <AlertCircle size={16} className="text-orange-500 mt-0.5 shrink-0" />
            <div>
                <p className="text-sm font-bold text-slate-800">{siswa}</p>
                <p className="text-xs text-slate-600 my-0.5">{pesan}</p>
                <p className="text-[10px] text-slate-400 font-medium">{waktu}</p>
            </div>
        </div>
    );
}