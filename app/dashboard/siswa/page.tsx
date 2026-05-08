import React from 'react';
import Link from 'next/link';
import { ChevronRight, FileText, Clock, CheckCircle2 } from 'lucide-react';

const subjects = [
    { id: 'pemrograman-web', name: 'Pemrograman Web I', questions: 40, duration: '90 Menit', status: 'Tersedia' },
    { id: 'basis-data', name: 'Sistem Basis Data', questions: 50, duration: '120 Menit', status: 'Selesai' },
    { id: 'pbo', name: 'Pemrograman Berorientasi Objek', questions: 45, duration: '90 Menit', status: 'Tersedia' },
    { id: 'jaringan', name: 'Teknologi Layanan Jaringan', questions: 35, duration: '60 Menit', status: 'Tersedia' },
    { id: 'bahasa-inggris', name: 'Bahasa Inggris', questions: 50, duration: '120 Menit', status: 'Selesai' },
];

export default function StudentDashboardHome() {
    return (
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Daftar Mata Pelajaran</h1>
                <p className="text-slate-500 mt-2 font-medium">Pilih mata pelajaran yang akan diujikan pada sesi ini.</p>
            </header>

            {/* Tabel Daftar Mapel */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">

                        {/* Kepala Tabel (Sesuai Referensi, tapi dengan warna tema kita) */}
                        <thead>
                            <tr className="bg-slate-800 text-white text-sm tracking-wide">
                                <th className="py-4 px-6 font-semibold w-16 text-center">NO.</th>
                                <th className="py-4 px-6 font-semibold">NAMA MATA PELAJARAN</th>
                                <th className="py-4 px-6 font-semibold">DETAIL UJIAN</th>
                                <th className="py-4 px-6 font-semibold text-center">STATUS</th>
                                <th className="py-4 px-6 font-semibold text-center w-32">AKSI</th>
                            </tr>
                        </thead>

                        {/* Isi Tabel */}
                        <tbody className="divide-y divide-slate-100">
                            {subjects.map((item, index) => (
                                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">

                                    {/* Nomor */}
                                    <td className="py-4 px-6 text-center text-slate-500 font-medium">
                                        {index + 1}
                                    </td>

                                    {/* Nama Mapel */}
                                    <td className="py-4 px-6">
                                        <span className={`font-bold text-base ${item.status === 'Selesai' ? 'text-slate-400' : 'text-slate-800'}`}>
                                            {item.name}
                                        </span>
                                    </td>

                                    {/* Detail Soal & Waktu */}
                                    <td className="py-4 px-6">
                                        <div className={`flex items-center gap-4 text-xs font-medium ${item.status === 'Selesai' ? 'text-slate-400' : 'text-slate-500'}`}>
                                            <span className="flex items-center gap-1.5"><FileText size={14} /> {item.questions} Soal</span>
                                            <span className="flex items-center gap-1.5"><Clock size={14} /> {item.duration}</span>
                                        </div>
                                    </td>

                                    {/* Status Badge */}
                                    <td className="py-4 px-6 text-center">
                                        {item.status === 'Tersedia' ? (
                                            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold tracking-wide">
                                                TERSEDIA
                                            </span>
                                        ) : (
                                            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold tracking-wide">
                                                SELESAI
                                            </span>
                                        )}
                                    </td>

                                    {/* Aksi (Button Pilih) */}
                                    <td className="py-4 px-6 text-center">
                                        {item.status === 'Tersedia' ? (
                                            <Link href={`/dashboard/siswa/${item.id}`}>
                                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm text-sm active:scale-95">
                                                    Pilih <ChevronRight size={16} />
                                                </button>
                                            </Link>
                                        ) : (
                                            <div className="w-full bg-slate-50 text-slate-400 font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-1.5 border border-slate-200 text-sm cursor-not-allowed">
                                                <CheckCircle2 size={16} /> Ditutup
                                            </div>
                                        )}
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