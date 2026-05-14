"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';
import DeleteConfirmModal from '@/components/DeleteConfirmModal';

export default function DataGuruPage() {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    // Mock Data for the table
    const mockDataGuru = [
        { id: 1, nip: '198001012005011001', nama: 'Budi Santoso, S.Pd', mapel: 'Matematika', status: 'Aktif' },
        { id: 2, nip: '198203152008012003', nama: 'Siti Aminah, M.Pd', mapel: 'Bahasa Indonesia', status: 'Aktif' },
        { id: 3, nip: '197911222003121005', nama: 'Agus Setiawan, S.Kom', mapel: 'Informatika', status: 'Nonaktif' },
        { id: 4, nip: '198507082010012007', nama: 'Dewi Lestari, S.Si', mapel: 'Biologi', status: 'Aktif' },
    ];

    return (
        <div className="space-y-6">
            {/* Header Section */}
            <div>
                <h1 className="text-2xl font-bold text-slate-800">Manajemen Data Guru</h1>
                <p className="text-slate-500 mt-1">Kelola data guru, mata pelajaran, dan akses akun sistem CBT.</p>
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
                        placeholder="Cari NIP atau Nama Lengkap..."
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                    />
                </div>
                
                {/* Add Button */}
                <Link href="/dashboard/admin/data-guru/tambah" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm shadow-emerald-600/20">
                        <Plus size={20} />
                        <span>Tambah Guru</span>
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
                                <th className="px-6 py-4 font-semibold">NIP</th>
                                <th className="px-6 py-4 font-semibold">Nama Lengkap</th>
                                <th className="px-6 py-4 font-semibold">Mata Pelajaran</th>
                                <th className="px-6 py-4 font-semibold text-center">Status</th>
                                <th className="px-6 py-4 font-semibold text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                            {mockDataGuru.map((guru, index) => (
                                <tr key={guru.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-center">{index + 1}</td>
                                    <td className="px-6 py-4 font-medium">{guru.nip}</td>
                                    <td className="px-6 py-4">{guru.nama}</td>
                                    <td className="px-6 py-4">{guru.mapel}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            guru.status === 'Aktif' 
                                                ? 'bg-green-100 text-green-700' 
                                                : 'bg-red-100 text-red-700'
                                        }`}>
                                            {guru.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex items-center justify-center gap-3">
                                            <Link href={`/dashboard/admin/data-guru/edit/${guru.id}`}>
                                                <button 
                                                    className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" 
                                                    title="Edit Data"
                                                >
                                                    <Edit size={18} />
                                                </button>
                                            </Link>
                                            <button 
                                                onClick={() => setIsDeleteModalOpen(true)}
                                                className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors" 
                                                title="Hapus Data"
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
                    <span>Menampilkan {mockDataGuru.length} dari {mockDataGuru.length} data guru</span>
                </div>
            </div>

            <DeleteConfirmModal 
                isOpen={isDeleteModalOpen} 
                onClose={() => setIsDeleteModalOpen(false)} 
                onConfirm={() => {
                    alert("Simulasi: Data berhasil dihapus!");
                }} 
            />
        </div>
    );
}
