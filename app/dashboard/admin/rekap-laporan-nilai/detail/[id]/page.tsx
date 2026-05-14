import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, Users, Trophy, TrendingUp, CheckCircle } from 'lucide-react';

export default function RekapLaporanDetail({ params }: { params: { id: string } }) {
  const dummyStudents = [
    { id: 1, nama: 'Budi Santoso', benar: 38, salah: 2, nilai: 95, status: 'Lulus' },
    { id: 2, nama: 'Siti Aminah', benar: 35, salah: 5, nilai: 87.5, status: 'Lulus' },
    { id: 3, nama: 'Andi Wijaya', benar: 25, salah: 15, nilai: 62.5, status: 'Remedial' },
    { id: 4, nama: 'Dewi Lestari', benar: 40, salah: 0, nilai: 100, status: 'Lulus' },
    { id: 5, nama: 'M. Arif Arkan', benar: 40, salah: 0, nilai: 100, status: 'Lulus' },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center">
          <Link href="/dashboard/admin/rekap-laporan-nilai">
            <button className="mr-4 p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Detail Laporan Hasil Ujian</h1>
            <p className="text-slate-600 mt-1">Rekapitulasi nilai akhir dan statistik pengerjaan siswa untuk ujian PAS Ganjil - Pemrograman Web.</p>
          </div>
        </div>
        <button className="flex items-center justify-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors shadow-sm shrink-0">
          <Download className="h-5 w-5 mr-2" />
          Ekspor ke Excel
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex items-center">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mr-4">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-600">Peserta</p>
            <p className="text-2xl font-bold text-slate-900">36</p>
            <p className="text-xs text-slate-500 mt-1">Siswa ikut ujian</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex items-center">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-lg mr-4">
            <Trophy className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-600">Nilai Tertinggi</p>
            <p className="text-2xl font-bold text-slate-900">100</p>
            <p className="text-xs text-slate-500 mt-1">M. Arif Arkan</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex items-center">
          <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg mr-4">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-600">Rata-rata Kelas</p>
            <p className="text-2xl font-bold text-slate-900">82.4</p>
            <p className="text-xs text-slate-500 mt-1">Peningkatan 5%</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex items-center">
          <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg mr-4">
            <CheckCircle className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-600">Persentase Kelulusan</p>
            <p className="text-2xl font-bold text-slate-900">88%</p>
            <p className="text-xs text-slate-500 mt-1">KKM: 75</p>
          </div>
        </div>
      </div>

      {/* Detail Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-4 px-6 font-semibold text-sm text-slate-900">Nama Peserta</th>
                <th className="py-4 px-6 font-semibold text-sm text-slate-900 text-center">Benar</th>
                <th className="py-4 px-6 font-semibold text-sm text-slate-900 text-center">Salah</th>
                <th className="py-4 px-6 font-semibold text-sm text-slate-900 text-center">Nilai</th>
                <th className="py-4 px-6 font-semibold text-sm text-slate-900 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {dummyStudents.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-sm font-bold text-slate-900">{student.nama}</td>
                  <td className="py-4 px-6 text-sm text-slate-600 text-center">{student.benar}</td>
                  <td className="py-4 px-6 text-sm text-slate-600 text-center">{student.salah}</td>
                  <td className="py-4 px-6 text-sm font-bold text-slate-900 text-center">{student.nilai}</td>
                  <td className="py-4 px-6 text-sm text-center">
                    {student.status === 'Lulus' ? (
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
                        Lulus
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full border border-red-200">
                        Remedial
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Formula Note */}
      <div className="text-center flex justify-center w-full">
        <p className="text-xs font-medium text-slate-500 bg-slate-100 inline-block px-4 py-2 rounded-lg border border-slate-200">
          Nilai dihitung otomatis menggunakan rumus: <span className="font-bold text-slate-700">(Total Benar / Total Soal) x 100</span>
        </p>
      </div>
    </div>
  );
}
