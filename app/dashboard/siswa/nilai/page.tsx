import React from 'react';
import { FileSpreadsheet, TrendingUp, Award, BookOpenCheck } from 'lucide-react'; // 'Download' dihapus

// Data Nilai Mock (Nanti ini yang akan diganti dengan pemanggilan ke Database)
const gradeData = [
    { kode: '22TIF1013', nama: 'MACHINE LEARNING', tugas: 84.00, uts: 75.00, uas: 87.00, rata: 82.00 },
    { kode: '22TIF0293', nama: 'METODE PENELITIAN', tugas: 90.00, uts: 78.00, uas: 77.00, rata: 81.66 },
    { kode: '22TIF0283', nama: 'PEMROGRAMAN WEB I', tugas: 75.00, uts: 83.33, uas: 60.00, rata: 72.77 },
    { kode: '22TIF0262', nama: 'PENGOLAHAN CITRA DIGITAL', tugas: 80.00, uts: 70.00, uas: 78.00, rata: 76.00 },
    { kode: '22TIF0252', nama: 'SISTEM INFORMASI MANAJEMEN', tugas: 80.00, uts: 80.00, uas: 75.00, rata: 78.33 },
    { kode: '22TIF0242', nama: 'KECERDASAN BUATAN', tugas: 85.00, uts: 85.00, uas: 88.00, rata: 86.00 },
];

export default function RangkumanNilaiPage() {
    // Hitung rata-rata keseluruhan untuk statistik
    const totalAverage = gradeData.reduce((acc, curr) => acc + curr.rata, 0) / gradeData.length;

    return (
        <div className="max-w-5xl mx-auto pb-10">

            {/* Header Halaman (Tombol Cetak Dihapus) */}
            <header className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight text-balance">Rangkuman Nilai</h1>
                <p className="text-slate-500 mt-2 font-medium">Laporan hasil evaluasi pembelajaran seluruh mata pelajaran.</p>
            </header>

            {/* Grid Statistik Singkat */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <StatCard
                    icon={TrendingUp}
                    label="Rata-rata Nilai"
                    value={totalAverage.toFixed(2)}
                    color="blue"
                />
                <StatCard
                    icon={BookOpenCheck}
                    label="Mapel Diselesaikan"
                    value={gradeData.length.toString()}
                    color="green"
                />
                <StatCard
                    icon={Award}
                    label="Predikat Akademik"
                    value="Sangat Baik"
                    color="orange"
                />
            </div>

            {/* Tabel Nilai (Gaya Profesional) */}
            <div className="bg-white border border-slate-200 rounded-[2rem] shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-slate-900 text-white text-[11px] uppercase tracking-[0.15em]">
                                <th className="py-5 px-6 font-bold w-20 text-center">No</th>
                                <th className="py-5 px-6 font-bold">Kode</th>
                                <th className="py-5 px-6 font-bold">Mata Pelajaran</th>
                                <th className="py-5 px-6 font-bold text-center">Tugas</th>
                                <th className="py-5 px-6 font-bold text-center">UTS</th>
                                <th className="py-5 px-6 font-bold text-center">UAS</th>
                                <th className="py-5 px-6 font-bold text-center bg-blue-600">Nilai Rata-rata</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {gradeData.map((item, index) => (
                                <tr key={item.kode} className="hover:bg-slate-50/80 transition-colors group">
                                    <td className="py-4 px-6 text-center text-slate-400 font-medium text-sm">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </td>
                                    <td className="py-4 px-6 text-xs font-bold text-slate-500">
                                        {item.kode}
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors uppercase">
                                            {item.nama}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-center text-sm font-semibold text-slate-600 italic">
                                        {item.tugas.toFixed(2)}
                                    </td>
                                    <td className="py-4 px-6 text-center text-sm font-semibold text-slate-600 italic">
                                        {item.uts.toFixed(2)}
                                    </td>
                                    <td className="py-4 px-6 text-center text-sm font-semibold text-slate-600 italic">
                                        {item.uas.toFixed(2)}
                                    </td>
                                    <td className="py-4 px-6 text-center bg-blue-50/50">
                                        <span className="text-base font-black text-blue-700">
                                            {item.rata.toFixed(2)}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer Info */}
            <div className="mt-8 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600 shrink-0">
                    <FileSpreadsheet size={20} />
                </div>
                <p className="text-xs text-blue-800/70 leading-relaxed">
                    <strong>Catatan:</strong> Nilai yang ditampilkan adalah nilai hasil sinkronisasi terakhir oleh sistem. Jika terdapat perbedaan nilai, silakan hubungi Guru mata pelajaran yang bersangkutan atau Bagian Kurikulum.
                </p>
            </div>

        </div>
    );
}

// Komponen Card Statistik
function StatCard({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: 'blue' | 'green' | 'orange' }) {
    const colors = {
        blue: 'bg-blue-50 text-blue-600 border-blue-100',
        green: 'bg-green-50 text-green-600 border-green-100',
        orange: 'bg-orange-50 text-orange-600 border-orange-100',
    };

    return (
        <div className={`p-6 rounded-[1.5rem] border ${colors[color]} shadow-sm`}>
            <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-white shadow-sm`}>
                    <Icon size={24} />
                </div>
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-0.5">{label}</p>
                    <p className="text-2xl font-black">{value}</p>
                </div>
            </div>
        </div>
    );
}