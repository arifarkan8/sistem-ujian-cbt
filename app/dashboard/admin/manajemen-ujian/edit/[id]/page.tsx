import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';

export default function EditJadwalUjianPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-6">
      <div className="mb-6 flex items-center">
        <Link href="/dashboard/admin/manajemen-ujian">
          <button className="mr-4 p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Edit Jadwal Ujian</h1>
          <p className="text-slate-500 mt-1">Perbarui informasi jadwal ujian di bawah ini.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-800">
                Nama Ujian <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue="PAS Ganjil"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-800">
                Paket Soal <span className="text-red-500">*</span>
              </label>
              <select 
                defaultValue="1"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Pilih Paket Soal</option>
                <option value="1">WEB-X-01 - Pemrograman Web</option>
                <option value="2">MAT-XI-01 - Matematika</option>
                <option value="3">DGF-XII-01 - Desain Grafis</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-800">
                Kelas Peserta <span className="text-red-500">*</span>
              </label>
              <select 
                defaultValue="1"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Pilih Kelas</option>
                <option value="1">X-RPL</option>
                <option value="2">XI-TKJ</option>
                <option value="3">XII-MM</option>
                <option value="4">Semua Kelas X</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-800">
                Tanggal Ujian <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                defaultValue="2026-05-12"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-800">
                Waktu Mulai <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                defaultValue="08:00"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-800">
                Waktu Selesai <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                defaultValue="09:30"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 flex justify-end gap-3">
            <Link href="/dashboard/admin/manajemen-ujian">
              <button
                type="button"
                className="px-5 py-2.5 rounded-lg font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Batal
              </button>
            </Link>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg font-medium text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center"
            >
              <Save className="h-5 w-5 mr-2" />
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
