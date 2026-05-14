import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Users, PlayCircle, CheckCircle, AlertOctagon, Eye } from 'lucide-react';

export default function MonitoringUjianPage({ params }: { params: { id: string } }) {
  const dummyStudents = [
    {
      id: 1,
      nama: 'Budi Santoso',
      nis: '10012',
      status: 'Mengerjakan',
      progres: '32/40',
      pelanggaran: 0,
    },
    {
      id: 2,
      nama: 'Siti Aminah',
      nis: '10015',
      status: 'Mengerjakan',
      progres: '28/40',
      pelanggaran: 2, // Pindah tab
    },
    {
      id: 3,
      nama: 'Andi Wijaya',
      nis: '10018',
      status: 'Terputus',
      progres: '15/40',
      pelanggaran: 0,
    },
    {
      id: 4,
      nama: 'Dewi Lestari',
      nis: '10022',
      status: 'Selesai',
      progres: '40/40',
      pelanggaran: 0,
    },
  ];

  const dummyLogs = [
    { id: 2, time: '08:42', message: 'Andi Wijaya: Koneksi terputus', type: 'error' },
    { id: 3, time: '08:30', message: 'Dewi Lestari: Selesai ujian', type: 'info' },
    { id: 4, time: '08:05', message: 'Budi Santoso: Berhasil login', type: 'success' },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center">
        <Link href="/dashboard/admin/manajemen-ujian">
          <button className="mr-4 p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Monitoring Ujian Live</h1>
          <p className="text-slate-600 mt-1">Pantau progres pengerjaan dan deteksi kecurangan siswa secara real-time.</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex items-center">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mr-4">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-600">Total Peserta</p>
            <p className="text-2xl font-bold text-slate-900">36</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex items-center">
          <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg mr-4">
            <PlayCircle className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-600">Sedang Mengerjakan</p>
            <p className="text-2xl font-bold text-slate-900">34</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex items-center">
          <div className="p-3 bg-slate-100 text-slate-600 rounded-lg mr-4">
            <CheckCircle className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-600">Selesai Ujian</p>
            <p className="text-2xl font-bold text-slate-900">1</p>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Table */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">Daftar Peserta</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-4 px-6 font-semibold text-sm text-slate-900">Peserta</th>
                  <th className="py-4 px-6 font-semibold text-sm text-slate-900">Status</th>
                  <th className="py-4 px-6 font-semibold text-sm text-slate-900">Progres</th>
                  <th className="py-4 px-6 font-semibold text-sm text-slate-900 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {dummyStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6">
                      <p className="text-sm font-bold text-slate-900">{student.nama}</p>
                      <p className="text-xs font-medium text-slate-600">{student.nis}</p>
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-900">
                      {student.status === 'Mengerjakan' && (
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">Mengerjakan</span>
                      )}
                      {student.status === 'Selesai' && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200">Selesai</span>
                      )}
                      {student.status === 'Terputus' && (
                        <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full border border-amber-200">Terputus</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-sm font-semibold text-slate-900">
                      {student.progres}
                    </td>
                    <td className="py-4 px-6 text-sm text-center">
                      <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Lihat Detail">
                        <Eye className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Side: Live Log */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[500px]">
          <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-900">Live Log Activity</h2>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
          <div className="p-6 flex-1 overflow-y-auto bg-slate-50">
            <div className="space-y-4">
              {dummyLogs.map((log) => (
                <div key={log.id} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-2.5 h-2.5 rounded-full mt-1 ${
                      log.type === 'warning' ? 'bg-amber-500' :
                      log.type === 'error' ? 'bg-red-500' :
                      log.type === 'success' ? 'bg-emerald-500' :
                      'bg-slate-500'
                    }`} />
                    <div className="w-px h-full bg-slate-200 mt-1" />
                  </div>
                  <div className="pb-4">
                    <p className="text-xs font-semibold text-slate-500 mb-1">{log.time}</p>
                    <p className={`text-sm font-medium ${
                      log.type === 'warning' ? 'text-amber-700' :
                      log.type === 'error' ? 'text-red-700' :
                      log.type === 'success' ? 'text-emerald-700' :
                      'text-slate-700'
                    }`}>
                      {log.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
