"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';
import DeleteConfirmModal from '@/components/DeleteConfirmModal';

export default function DataSiswaPage() {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    // Mock Data for the table
    const mockDataSiswa = [
        { id: 1, nisn: '231011403233', nama: 'Muhammad Arif Arkan', kelas: 'XII', jurusan: 'Teknik Informatika', status: 'Aktif' },
        { id: 2, nisn: '231011403234', nama: 'Ahmad Fauzi', kelas: 'XI', jurusan: 'Desain Grafis', status: 'Aktif' },
        { id: 3, nisn: '231011403235', nama: 'Siti Nurhaliza', kelas: 'X', jurusan: 'Teknik Informatika', status: 'Nonaktif' },
        { id: 4, nisn: '231011403236', nama: 'Dinda Lestari', kelas: 'XII', jurusan: 'Administrasi', status: 'Aktif' },
        { id: 5, nisn: '231011403237', nama: 'Bima Sakti', kelas: 'XI', jurusan: 'Teknik Informatika', status: 'Aktif' },
    ];

    return (
        <div className="space-y-6">
            {/* Header Section */}
            <div>
                <h1 className="text-2xl font-bold text-slate-800">Manajemen Data Siswa</h1>
                <p className="text-slate-500 mt-1">Kelola data siswa, informasi kelas, dan akun login siswa.</p>
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
                        placeholder="Cari NISN atau Nama Siswa..."
                        className="w-full bg-white pl-10 pr-4 py-2 text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                    />
                </div>
                
                {/* Add Button */}
                <Link href="/dashboard/admin/data-siswa/tambah" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm shadow-emerald-600/20">
                        <Plus size={20} />
                        <span>Tambah Siswa</span>
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
                                <th className="px-6 py-4 font-semibold">NISN</th>
                                <th className="px-6 py-4 font-semibold">Nama Siswa</th>
                                <th className="px-6 py-4 font-semibold">Kelas</th>
                                <th className="px-6 py-4 font-semibold">Jurusan</th>
                                <th className="px-6 py-4 font-semibold text-center">Status</th>
                                <th className="px-6 py-4 font-semibold text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                            {mockDataSiswa.map((siswa, index) => (
                                <tr key={siswa.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-center">{index + 1}</td>
                                    <td className="px-6 py-4 font-medium">{siswa.nisn}</td>
                                    <td className="px-6 py-4">{siswa.nama}</td>
                                    <td className="px-6 py-4">{siswa.kelas}</td>
                                    <td className="px-6 py-4">{siswa.jurusan}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            siswa.status === 'Aktif' 
                                                ? 'bg-green-100 text-green-700' 
                                                : 'bg-red-100 text-red-700'
                                        }`}>
                                            {siswa.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex items-center justify-center gap-3">
                                            <Link href={`/dashboard/admin/data-siswa/edit/${siswa.id}`}>
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
                    <span>Menampilkan {mockDataSiswa.length} dari {mockDataSiswa.length} data siswa</span>
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
