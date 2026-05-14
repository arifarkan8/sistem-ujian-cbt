import React from 'react';
import Link from 'next/link';
import { Search, Plus, Eye, Edit, Trash2 } from 'lucide-react';

export default function BankSoalPage() {
    // Mock Data for the table
    const mockDataBankSoal = [
        { id: 1, kode: 'WEB-X-01', mapel: 'Pemrograman Web', guru: 'Budi Santoso, S.Pd', jumlahSoal: 40, status: 'Siap Uji' },
        { id: 2, kode: 'MTK-XI-02', mapel: 'Matematika Terapan', guru: 'Siti Aminah, M.Pd', jumlahSoal: 35, status: 'Draft' },
        { id: 3, kode: 'BING-XII-01', mapel: 'Bahasa Inggris', guru: 'Dewi Lestari, S.Si', jumlahSoal: 50, status: 'Siap Uji' },
        { id: 4, kode: 'RPL-X-03', mapel: 'Dasar Program Keahlian', guru: 'Agus Setiawan, S.Kom', jumlahSoal: 20, status: 'Draft' },
    ];

    return (
        <div className="space-y-6">
            {/* Header Section */}
            <div>
                <h1 className="text-2xl font-bold text-slate-800">Bank Soal</h1>
                <p className="text-slate-500 mt-1">Kelola daftar paket soal ujian dan pantau status kelengkapan soal.</p>
            </div>

            {/* Action Bar: Search & Add Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                {/* Search Box */}
                <div className="relative w-full sm:w-96">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Cari Kode Paket atau Mata Pelajaran..."
                        className="w-full bg-white pl-10 pr-4 py-2 text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                    />
                </div>
                
                {/* Add Button */}
                <Link href="/dashboard/admin/bank-soal/tambah" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm shadow-emerald-600/20">
                        <Plus size={20} />
                        <span>Tambah Paket Soal</span>
                    </button>
                </Link>
            </div>

            {/* Data Table Card */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-center w-16">No</th>
                                <th className="px-6 py-4 font-semibold">Kode Paket</th>
                                <th className="px-6 py-4 font-semibold">Mata Pelajaran</th>
                                <th className="px-6 py-4 font-semibold">Guru Pengampu</th>
                                <th className="px-6 py-4 font-semibold text-center">Jumlah Soal</th>
                                <th className="px-6 py-4 font-semibold text-center">Status</th>
                                <th className="px-6 py-4 font-semibold text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                            {mockDataBankSoal.map((soal, index) => (
                                <tr key={soal.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-center">{index + 1}</td>
                                    <td className="px-6 py-4 font-medium">{soal.kode}</td>
                                    <td className="px-6 py-4">{soal.mapel}</td>
                                    <td className="px-6 py-4">{soal.guru}</td>
                                    <td className="px-6 py-4 text-center font-semibold text-slate-900">{soal.jumlahSoal}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            soal.status === 'Siap Uji' 
                                                ? 'bg-green-100 text-green-700' 
                                                : 'bg-amber-100 text-amber-700'
                                        }`}>
                                            {soal.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex items-center justify-center gap-3">
                                            <Link href={`/dashboard/admin/bank-soal/detail/${soal.id}`}>
                                                <button 
                                                    className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" 
                                                    title="Lihat Detail"
                                                >
                                                    <Eye size={18} />
                                                </button>
                                            </Link>
                                            <Link href={`/dashboard/admin/bank-soal/edit/${soal.id}`}>
                                                <button 
                                                    className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" 
                                                    title="Edit Paket"
                                                >
                                                    <Edit size={18} />
                                                </button>
                                            </Link>
                                            <button 
                                                className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors" 
                                                title="Hapus Paket"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {/* Table Footer */}
                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-sm text-slate-500">
                    <span>Menampilkan {mockDataBankSoal.length} dari {mockDataBankSoal.length} paket soal</span>
                </div>
            </div>
        </div>
    );
}
