"use client";

import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, X } from 'lucide-react';
import DeleteConfirmModal from '@/components/DeleteConfirmModal';

export default function DataAkademikPage() {
    const [activeTab, setActiveTab] = useState<'kelas' | 'mapel'>('kelas');
    
    // Modal States
    const [isKelasModalOpen, setIsKelasModalOpen] = useState(false);
    const [isMapelModalOpen, setIsMapelModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);

    const mockDataKelas = [
        { id: 1, tingkat: 'X', nama: 'X-RPL', jurusan: 'Rekayasa Perangkat Lunak' },
        { id: 2, tingkat: 'XI', nama: 'XI-TKJ', jurusan: 'Teknik Komputer dan Jaringan' },
        { id: 3, tingkat: 'XII', nama: 'XII-MM', jurusan: 'Multimedia' },
    ];

    const mockDataMapel = [
        { id: 1, kode: 'MP-01', nama: 'Pemrograman Web', kelompok: 'Kejuruan' },
        { id: 2, kode: 'MP-02', nama: 'Matematika Terapan', kelompok: 'Umum' },
        { id: 3, kode: 'MP-03', nama: 'Bahasa Inggris', kelompok: 'Umum' },
    ];

    const openKelasModal = (id: number | null = null) => {
        setEditingId(id);
        setIsKelasModalOpen(true);
    };

    const openMapelModal = (id: number | null = null) => {
        setEditingId(id);
        setIsMapelModalOpen(true);
    };

    const handleDelete = (id: number) => {
        setIsDeleteModalOpen(true);
    };

    return (
        <div className="space-y-6 relative">
            {/* Header Section */}
            <div>
                <h1 className="text-2xl font-bold text-slate-800">Master Data Akademik</h1>
                <p className="text-slate-500 mt-1">Kelola referensi data kelas dan mata pelajaran untuk sistem CBT.</p>
            </div>

            {/* Tabs Navigation */}
            <div className="border-b border-slate-200">
                <nav className="-mb-px flex space-x-8">
                    <button
                        onClick={() => setActiveTab('kelas')}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-semibold text-sm transition-colors ${
                            activeTab === 'kelas'
                                ? 'border-emerald-600 text-emerald-600'
                                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                        }`}
                    >
                        Data Kelas
                    </button>
                    <button
                        onClick={() => setActiveTab('mapel')}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-semibold text-sm transition-colors ${
                            activeTab === 'mapel'
                                ? 'border-emerald-600 text-emerald-600'
                                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                        }`}
                    >
                        Mata Pelajaran
                    </button>
                </nav>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
                {activeTab === 'kelas' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                        {/* Action Bar: Search & Add Button for Kelas */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                            <div className="relative w-full sm:w-96">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Cari Nama Kelas..."
                                    className="w-full bg-white pl-10 pr-4 py-2 text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                />
                            </div>
                            <button 
                                onClick={() => openKelasModal(null)}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm shadow-emerald-600/20"
                            >
                                <Plus size={20} />
                                <span>Tambah Kelas</span>
                            </button>
                        </div>

                        {/* Data Table Kelas */}
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm whitespace-nowrap">
                                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                                        <tr>
                                            <th className="px-6 py-4 font-semibold text-center w-16">No</th>
                                            <th className="px-6 py-4 font-semibold">Tingkat</th>
                                            <th className="px-6 py-4 font-semibold">Nama Kelas</th>
                                            <th className="px-6 py-4 font-semibold">Jurusan</th>
                                            <th className="px-6 py-4 font-semibold text-center">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 text-slate-700">
                                        {mockDataKelas.map((kelas, index) => (
                                            <tr key={kelas.id} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 text-center">{index + 1}</td>
                                                <td className="px-6 py-4 font-medium">{kelas.tingkat}</td>
                                                <td className="px-6 py-4">{kelas.nama}</td>
                                                <td className="px-6 py-4">{kelas.jurusan}</td>
                                                <td className="px-6 py-4 text-center">
                                                    <div className="flex items-center justify-center gap-3">
                                                        <button 
                                                            onClick={() => openKelasModal(kelas.id)}
                                                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" 
                                                            title="Edit Data"
                                                        >
                                                            <Edit size={18} />
                                                        </button>
                                                        <button 
                                                            onClick={() => handleDelete(kelas.id)}
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
                        </div>
                    </div>
                )}

                {activeTab === 'mapel' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                        {/* Action Bar: Search & Add Button for Mapel */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                            <div className="relative w-full sm:w-96">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Cari Mata Pelajaran..."
                                    className="w-full bg-white pl-10 pr-4 py-2 text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                />
                            </div>
                            <button 
                                onClick={() => openMapelModal(null)}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm shadow-emerald-600/20"
                            >
                                <Plus size={20} />
                                <span>Tambah Mapel</span>
                            </button>
                        </div>

                        {/* Data Table Mapel */}
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm whitespace-nowrap">
                                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                                        <tr>
                                            <th className="px-6 py-4 font-semibold text-center w-16">No</th>
                                            <th className="px-6 py-4 font-semibold">Kode Mapel</th>
                                            <th className="px-6 py-4 font-semibold">Nama Mata Pelajaran</th>
                                            <th className="px-6 py-4 font-semibold">Kelompok</th>
                                            <th className="px-6 py-4 font-semibold text-center">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 text-slate-700">
                                        {mockDataMapel.map((mapel, index) => (
                                            <tr key={mapel.id} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 text-center">{index + 1}</td>
                                                <td className="px-6 py-4 font-medium">{mapel.kode}</td>
                                                <td className="px-6 py-4">{mapel.nama}</td>
                                                <td className="px-6 py-4">{mapel.kelompok}</td>
                                                <td className="px-6 py-4 text-center">
                                                    <div className="flex items-center justify-center gap-3">
                                                        <button 
                                                            onClick={() => openMapelModal(mapel.id)}
                                                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" 
                                                            title="Edit Data"
                                                        >
                                                            <Edit size={18} />
                                                        </button>
                                                        <button 
                                                            onClick={() => handleDelete(mapel.id)}
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
                        </div>
                    </div>
                )}
            </div>

            {/* --- Modals --- */}

            {/* Modal Data Kelas */}
            {isKelasModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <h3 className="font-bold text-slate-800">
                                {editingId ? 'Edit Data Kelas' : 'Tambah Data Kelas'}
                            </h3>
                            <button 
                                onClick={() => setIsKelasModalOpen(false)} 
                                className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1.5 rounded-lg transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            <form className="space-y-4">
                                <div className="space-y-1 text-left">
                                    <label className="text-sm font-medium text-slate-700">Tingkat</label>
                                    <select className="w-full bg-white px-4 py-2 text-slate-900 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors appearance-none">
                                        <option value="">Pilih Tingkat</option>
                                        <option value="X">X</option>
                                        <option value="XI">XI</option>
                                        <option value="XII">XII</option>
                                    </select>
                                </div>
                                <div className="space-y-1 text-left">
                                    <label className="text-sm font-medium text-slate-700">Nama Kelas</label>
                                    <input 
                                        type="text" 
                                        placeholder="Contoh: X-RPL 1" 
                                        className="w-full bg-white px-4 py-2 text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-1 text-left">
                                    <label className="text-sm font-medium text-slate-700">Jurusan</label>
                                    <input 
                                        type="text" 
                                        placeholder="Contoh: Rekayasa Perangkat Lunak" 
                                        className="w-full bg-white px-4 py-2 text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                    />
                                </div>

                                <div className="pt-6 flex gap-3">
                                    <button 
                                        type="button" 
                                        onClick={() => setIsKelasModalOpen(false)}
                                        className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                                    >
                                        Batal
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => setIsKelasModalOpen(false)}
                                        className="flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors shadow-sm shadow-emerald-600/20"
                                    >
                                        Simpan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Data Mapel */}
            {isMapelModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <h3 className="font-bold text-slate-800">
                                {editingId ? 'Edit Mata Pelajaran' : 'Tambah Mata Pelajaran'}
                            </h3>
                            <button 
                                onClick={() => setIsMapelModalOpen(false)} 
                                className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1.5 rounded-lg transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            <form className="space-y-4">
                                <div className="space-y-1 text-left">
                                    <label className="text-sm font-medium text-slate-700">Kode Mapel</label>
                                    <input 
                                        type="text" 
                                        placeholder="Contoh: MP-01" 
                                        className="w-full bg-white px-4 py-2 text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-1 text-left">
                                    <label className="text-sm font-medium text-slate-700">Nama Mata Pelajaran</label>
                                    <input 
                                        type="text" 
                                        placeholder="Contoh: Pemrograman Web" 
                                        className="w-full bg-white px-4 py-2 text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-1 text-left">
                                    <label className="text-sm font-medium text-slate-700">Kelompok</label>
                                    <select className="w-full bg-white px-4 py-2 text-slate-900 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors appearance-none">
                                        <option value="">Pilih Kelompok</option>
                                        <option value="Umum">Umum</option>
                                        <option value="Kejuruan">Kejuruan</option>
                                        <option value="Muatan Lokal">Muatan Lokal</option>
                                    </select>
                                </div>

                                <div className="pt-6 flex gap-3">
                                    <button 
                                        type="button" 
                                        onClick={() => setIsMapelModalOpen(false)}
                                        className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                                    >
                                        Batal
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => setIsMapelModalOpen(false)}
                                        className="flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors shadow-sm shadow-emerald-600/20"
                                    >
                                        Simpan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Global Delete Modal */}
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
