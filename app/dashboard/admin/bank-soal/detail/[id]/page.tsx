import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer, Edit, CheckCircle2, Clock, Hash, BookOpen } from 'lucide-react';

export default function DetailBankSoalPage() {
    const mockQuestions = [
        {
            id: 1,
            teks: "Apa singkatan dari HTML?",
            math: null,
            opsi: [
                { id: 'A', teks: "Hyper Text Markup Language" },
                { id: 'B', teks: "High Text Machine Language" },
                { id: 'C', teks: "Hyperlink and Text Markup Language" },
                { id: 'D', teks: "Home Tool Markup Language" },
                { id: 'E', teks: "Hyper Tool Multi Language" }
            ],
            kunci: 'A'
        },
        {
            id: 2,
            teks: "Selesaikan persamaan integral tertentu berikut ini:",
            math: "$$ \\int_0^1 x^2 \\, dx $$",
            opsi: [
                { id: 'A', teks: "1/2" },
                { id: 'B', teks: "1/3" },
                { id: 'C', teks: "2/3" },
                { id: 'D', teks: "1" },
                { id: 'E', teks: "0" }
            ],
            kunci: 'B'
        },
        {
            id: 3,
            teks: "Berikut ini yang bukan merupakan bahasa pemrograman untuk membuat web backend adalah...",
            math: null,
            opsi: [
                { id: 'A', teks: "PHP" },
                { id: 'B', teks: "Node.js" },
                { id: 'C', teks: "Python" },
                { id: 'D', teks: "CSS" },
                { id: 'E', teks: "Java" }
            ],
            kunci: 'D'
        },
        {
            id: 4,
            teks: "Berapa nilai x dari persamaan kuadrat berikut jika x > 0?",
            math: "\\( x^2 - 4x - 5 = 0 \\)",
            opsi: [
                { id: 'A', teks: "2" },
                { id: 'B', teks: "3" },
                { id: 'C', teks: "4" },
                { id: 'D', teks: "5" },
                { id: 'E', teks: "6" }
            ],
            kunci: 'D'
        },
        {
            id: 5,
            teks: "Tag HTML yang digunakan secara semantik untuk mengelompokkan navigasi adalah...",
            math: null,
            opsi: [
                { id: 'A', teks: "<header>" },
                { id: 'B', teks: "<nav>" },
                { id: 'C', teks: "<footer>" },
                { id: 'D', teks: "<section>" },
                { id: 'E', teks: "<article>" }
            ],
            kunci: 'B'
        }
    ];

    return (
        <div className="space-y-6 max-w-5xl mx-auto pb-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                    <Link 
                        href="/dashboard/admin/bank-soal" 
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors font-medium mb-4"
                    >
                        <ArrowLeft size={20} />
                        <span>Kembali</span>
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Penilaian Akhir Semester - Pemrograman Web</h1>
                    <p className="text-slate-500 mt-2 font-medium flex items-center gap-2">
                        <BookOpen size={18} /> Pemrograman Web <span className="mx-2">•</span> Budi Santoso, S.Pd
                    </p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-3 shrink-0">
                    <button className="flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 rounded-xl font-bold transition-all">
                        <Printer size={18} />
                        <span>Cetak Soal</span>
                    </button>
                    <Link href="/dashboard/admin/bank-soal/edit/1">
                        <button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-sm shadow-emerald-600/20">
                            <Edit size={18} />
                            <span>Edit Paket</span>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Info Summary Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-wrap items-center gap-y-6 shadow-sm">
                <div className="w-1/2 md:w-1/4 flex flex-col gap-1 md:border-r border-slate-100 px-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1"><Hash size={14} /> Total Soal</span>
                    <span className="text-2xl font-black text-slate-800">40<span className="text-sm font-medium text-slate-500 ml-1">Butir</span></span>
                </div>
                <div className="w-1/2 md:w-1/4 flex flex-col gap-1 md:border-r border-slate-100 px-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1"><CheckCircle2 size={14} /> KKM</span>
                    <span className="text-2xl font-black text-slate-800">75</span>
                </div>
                <div className="w-1/2 md:w-1/4 flex flex-col gap-1 border-r border-slate-100 px-4 mt-4 md:mt-0">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1"><Clock size={14} /> Waktu</span>
                    <span className="text-2xl font-black text-slate-800">90<span className="text-sm font-medium text-slate-500 ml-1">Menit</span></span>
                </div>
                <div className="w-1/2 md:w-1/4 flex flex-col gap-1 px-4 mt-4 md:mt-0">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Status</span>
                    <span className="inline-flex items-center self-start px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold mt-1">Siap Uji</span>
                </div>
            </div>

            {/* Question List UI */}
            <div className="space-y-6 mt-8">
                <h2 className="text-xl font-bold text-slate-800 mb-4">Daftar Butir Soal</h2>
                
                {mockQuestions.map((q, index) => (
                    <div key={q.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
                            <div className="bg-slate-100 text-slate-600 font-black px-3 py-1.5 rounded-lg text-sm">
                                Soal No. {index + 1}
                            </div>
                        </div>
                        
                        <div className="mb-6 space-y-3">
                            <p className="text-slate-900 font-medium leading-relaxed">{q.teks}</p>
                            {q.math && (
                                <div className="font-mono bg-slate-50 border border-slate-200 p-3 rounded-lg text-sm text-slate-700 w-fit">
                                    {q.math}
                                </div>
                            )}
                        </div>

                        <div className="space-y-3">
                            {q.opsi.map((opt) => {
                                const isCorrect = opt.id === q.kunci;
                                return (
                                    <div 
                                        key={opt.id} 
                                        className={`flex items-start gap-4 p-4 rounded-xl border transition-colors ${
                                            isCorrect 
                                                ? 'bg-emerald-50 border-emerald-200' 
                                                : 'bg-white border-slate-200 hover:border-slate-300'
                                        }`}
                                    >
                                        <div className={`font-black w-8 h-8 flex items-center justify-center rounded-lg shrink-0 ${
                                            isCorrect 
                                                ? 'bg-emerald-200 text-emerald-800' 
                                                : 'bg-slate-100 text-slate-600'
                                        }`}>
                                            {opt.id}
                                        </div>
                                        <div className="flex-1 mt-1 text-slate-900 font-medium">
                                            {opt.teks}
                                        </div>
                                        {isCorrect && (
                                            <div className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shrink-0 flex items-center gap-1">
                                                <CheckCircle2 size={14} />
                                                Kunci Jawaban
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
