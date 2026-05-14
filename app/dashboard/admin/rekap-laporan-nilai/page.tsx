import React from 'react';
import Link from 'next/link';
import { Search, Download, Eye, FileSpreadsheet } from 'lucide-react';

export default function RekapLaporanNilaiPage() {
  const dummyReports = [
    {
      id: 1,
      nama: 'PAS Ganjil',
      kelas: 'X-RPL',
      mapel: 'Pemrograman Web',
      peserta: '36/36',
      rataRata: 82.5,
    },
    {
      id: 2,
      nama: 'UH-1',
      kelas: 'XI-TKJ',
      mapel: 'Matematika',
      peserta: '34/35',
      rataRata: 70.0,
    },
    {
      id: 3,
      nama: 'Simulasi',
      kelas: 'XII-MM',
      mapel: 'Desain Grafis',
      peserta: '40/40',
      rataRata: 88.0,
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Rekap Laporan Nilai</h1>
        <p className="text-slate-600 mt-1">Kelola, lihat detail, dan unduh hasil rekapitulasi nilai ujian siswa.</p>
      </div>

      {/* Action & Filter Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full sm:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg leading-5 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
            placeholder="Cari laporan ujian..."
          />
        </div>
        
        <button className="flex items-center justify-center w-full sm:w-auto px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors bg-white shadow-sm">
          <Download className="h-5 w-5 mr-2" />
          Download Rekap Global
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-4 px-6 font-semibold text-sm text-slate-900">No</th>
                <th className="py-4 px-6 font-semibold text-sm text-slate-900">Nama Ujian</th>
                <th className="py-4 px-6 font-semibold text-sm text-slate-900">Kelas</th>
                <th className="py-4 px-6 font-semibold text-sm text-slate-900">Mata Pelajaran</th>
                <th className="py-4 px-6 font-semibold text-sm text-slate-900">Jumlah Peserta</th>
                <th className="py-4 px-6 font-semibold text-sm text-slate-900">Rata-rata</th>
                <th className="py-4 px-6 font-semibold text-sm text-slate-900 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {dummyReports.map((report, index) => (
                <tr key={report.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-sm text-slate-600">{index + 1}</td>
                  <td className="py-4 px-6 text-sm font-bold text-slate-900">{report.nama}</td>
                  <td className="py-4 px-6 text-sm text-slate-900">{report.kelas}</td>
                  <td className="py-4 px-6 text-sm text-slate-900">{report.mapel}</td>
                  <td className="py-4 px-6 text-sm text-slate-900">{report.peserta}</td>
                  <td className="py-4 px-6 text-sm">
                    <span className={`font-bold ${report.rataRata >= 75 ? 'text-emerald-600' : 'text-red-600'}`}>
                      {report.rataRata.toFixed(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-center">
                    <div className="flex justify-center items-center space-x-3">
                      <Link href={`/dashboard/admin/rekap-laporan-nilai/detail/${report.id}`}>
                        <button className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" title="Lihat Detail">
                          <Eye className="h-4 w-4" />
                        </button>
                      </Link>
                      <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Download Excel">
                        <FileSpreadsheet className="h-4 w-4" />
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
  );
}
