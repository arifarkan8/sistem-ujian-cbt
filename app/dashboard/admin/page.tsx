import React from 'react';
import { Users, GraduationCap, Activity, Database, Info, AlertTriangle, CheckCircle } from 'lucide-react';

export default function AdminDashboardPage() {
    const stats = [
        { title: 'Total Siswa', value: '1.250', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-100' },
        { title: 'Total Guru', value: '45', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-100' },
        { title: 'Ujian Aktif', value: '12', icon: Activity, color: 'text-amber-600', bg: 'bg-amber-100' },
        { title: 'Bank Soal', value: '320', icon: Database, color: 'text-purple-600', bg: 'bg-purple-100' },
    ];

    return (
        <div className="space-y-6">
            {/* Header / Welcome Section */}
            <div>
                <h1 className="text-2xl font-bold text-slate-800">Selamat Datang, Administrator!</h1>
                <p className="text-slate-500 mt-1">Gunakan menu di samping untuk mengelola data sistem ujian.</p>
            </div>

            {/* Summary Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                                <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Main Content Grid */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Jadwal Ujian Global */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-slate-800 mb-4">Jadwal Ujian Global Hari Ini</h2>
                    <div className="space-y-4">
                        {/* Exam Item 1 */}
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                            <div>
                                <h3 className="font-medium text-slate-800">Pemrograman Web <span className="text-slate-500 text-sm font-normal">(Kelas X-RPL)</span></h3>
                                <p className="text-sm text-slate-500 mt-1">08:00 - 09:30</p>
                            </div>
                            <div className="mt-2 sm:mt-0">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                                    Berjalan
                                </span>
                            </div>
                        </div>
                        {/* Exam Item 2 */}
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                            <div>
                                <h3 className="font-medium text-slate-800">Basis Data <span className="text-slate-500 text-sm font-normal">(Kelas XI-RPL)</span></h3>
                                <p className="text-sm text-slate-500 mt-1">10:00 - 11:30</p>
                            </div>
                            <div className="mt-2 sm:mt-0">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                    Menunggu
                                </span>
                            </div>
                        </div>
                        {/* Exam Item 3 */}
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                            <div>
                                <h3 className="font-medium text-slate-800">Matematika <span className="text-slate-500 text-sm font-normal">(Kelas XII-TKJ)</span></h3>
                                <p className="text-sm text-slate-500 mt-1">08:00 - 10:00</p>
                            </div>
                            <div className="mt-2 sm:mt-0">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                                    Berjalan
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Log Aktivitas Sistem */}
                <div className="lg:col-span-1 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-slate-800 mb-4">Log Aktivitas Terbaru</h2>
                    <div className="space-y-6">
                        {/* Log Item 1 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Info size={16} />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-slate-800">
                                    <span className="font-medium">Budi Santoso, S.Pd</span> menambahkan 40 soal baru ke Bank Soal.
                                </p>
                                <p className="text-xs text-slate-500 mt-1">10 menit lalu</p>
                            </div>
                        </div>
                        {/* Log Item 2 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                    <AlertTriangle size={16} />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-slate-800">
                                    <span className="font-medium">Peringatan!</span> Koneksi terputus massal di Lab Komputer 2.
                                </p>
                                <p className="text-xs text-slate-500 mt-1">25 menit lalu</p>
                            </div>
                        </div>
                        {/* Log Item 3 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <CheckCircle size={16} />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-slate-800">
                                    Rekap nilai ujian Bahasa Inggris Kelas XII telah di-generate.
                                </p>
                                <p className="text-xs text-slate-500 mt-1">1 jam lalu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
