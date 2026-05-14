"use client";

import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, Activity } from 'lucide-react';
import Link from 'next/link';
import DeleteConfirmModal from '@/components/DeleteConfirmModal';

export default function ManajemenUjianPage() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const dummySchedules = [
    {
      id: 1,
      nama: 'PAS Ganjil',
      kelas: 'X-RPL',
      mapel: 'Pemrograman Web',
      waktu: '12 Mei 2026 (08:00 - 09:30)',
      status: 'Berjalan',
    },
    {
      id: 2,
      nama: 'UH-1',
      kelas: 'XI-TKJ',
      mapel: 'Matematika',
      waktu: '13 Mei 2026 (10:00 - 11:30)',
      status: 'Menunggu',
    },
    {
      id: 3,
      nama: 'Simulasi',
      kelas: 'XII-MM',
      mapel: 'Desain Grafis',
      waktu: '10 Mei 2026 (08:00 - 10:00)',
      status: 'Selesai',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Berjalan':
        return <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">Berjalan</span>;
      case 'Menunggu':
        return <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full border border-amber-200">Menunggu</span>;
      case 'Selesai':
        return <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200">Selesai</span>;
      default:
        return <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200">{status}</span>;
    }
  };

  const handleDeleteClick = (id: number) => {
    setSelectedId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    // Implementasi hapus
    console.log("Menghapus jadwal dengan id:", selectedId);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Manajemen Ujian & Token</h1>
        <p className="text-slate-500 mt-1">Atur jadwal pelaksanaan ujian untuk seluruh kelas dan mata pelajaran.</p>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full sm:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
            placeholder="Cari jadwal ujian..."
          />
        </div>
        
        <Link href="/dashboard/admin/manajemen-ujian/tambah" className="w-full sm:w-auto">
          <button className="flex items-center justify-center w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors">
            <Plus className="h-5 w-5 mr-2" />
            Buat Jadwal Ujian
          </button>
        </Link>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-4 px-6 font-semibold text-sm text-slate-800">No</th>
                <th className="py-4 px-6 font-semibold text-sm text-slate-800">Nama Ujian</th>
                <th className="py-4 px-6 font-semibold text-sm text-slate-800">Kelas</th>
                <th className="py-4 px-6 font-semibold text-sm text-slate-800">Mata Pelajaran</th>
                <th className="py-4 px-6 font-semibold text-sm text-slate-800">Tanggal & Waktu</th>
                <th className="py-4 px-6 font-semibold text-sm text-slate-800">Status</th>
                <th className="py-4 px-6 font-semibold text-sm text-slate-800 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {dummySchedules.map((schedule, index) => (
                <tr key={schedule.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-sm text-slate-600">{index + 1}</td>
                  <td className="py-4 px-6 text-sm font-medium text-slate-800">{schedule.nama}</td>
                  <td className="py-4 px-6 text-sm text-slate-600">{schedule.kelas}</td>
                  <td className="py-4 px-6 text-sm text-slate-600">{schedule.mapel}</td>
                  <td className="py-4 px-6 text-sm text-slate-600">{schedule.waktu}</td>
                  <td className="py-4 px-6 text-sm">
                    {getStatusBadge(schedule.status)}
                  </td>
                  <td className="py-4 px-6 text-sm">
                    <div className="flex justify-center items-center space-x-2">
                      {(schedule.status === 'Berjalan' || schedule.status === 'Selesai') && (
                        <Link href={`/dashboard/admin/manajemen-ujian/monitoring/${schedule.id}`}>
                          <button className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" title="Monitoring">
                            <Activity className="h-4 w-4" />
                          </button>
                        </Link>
                      )}
                      <Link href={`/dashboard/admin/manajemen-ujian/edit/${schedule.id}`}>
                        <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                          <Edit className="h-4 w-4" />
                        </button>
                      </Link>
                      <button 
                        onClick={() => handleDeleteClick(schedule.id)}
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors" 
                        title="Hapus"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <DeleteConfirmModal 
        isOpen={isDeleteModalOpen} 
        onClose={() => setIsDeleteModalOpen(false)} 
        onConfirm={handleDeleteConfirm} 
      />
    </div>
  );
}
