"use client";

import React, { useState, useEffect } from 'react';
import {
    Database,
    FileText,
    FileSpreadsheet,
    UploadCloud,
    CheckCircle2,
    Hash,
    Info,
    Table as TableIcon,
    List
} from 'lucide-react';
import Link from 'next/link';
import { InlineMath } from 'react-katex';

interface KunciPreview {
    no: string;
    jawaban: string;
    skor: string;
}

export default function BankSoalKunciPage() {
    const [kodeUjian, setKodeUjian] = useState('');
    const [excelData, setExcelData] = useState('');
    const [wordFile, setWordFile] = useState<File | null>(null);
    const [previewKunci, setPreviewKunci] = useState<KunciPreview[]>([]);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (!excelData.trim()) {
            setPreviewKunci([]);
            return;
        }
        const rows = excelData.trim().split('\n');
        const parsed = rows.map(row => {
            const cols = row.split('\t');
            return { no: cols[0] || '-', jawaban: cols[1] || '-', skor: cols[2] || '0' };
        });
        setPreviewKunci(parsed);
    }, [excelData]);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) setWordFile(e.target.files[0]);
    };

    return (
        <div className="max-w-6xl mx-auto pb-10 font-sans text-left">

            {/* Header dengan tombol navigasi ke List */}
            <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Integrasi Bank Soal</h1>
                    <p className="text-slate-500 mt-2 font-medium">Satukan file soal (.docx) dan kunci jawaban (.xlsx) dalam satu kode ujian.</p>
                </div>
                <Link href="/dashboard/guru/bank-soal/list" className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all shadow-sm active:scale-95">
                    <List size={20} className="text-blue-600" />
                    Lihat Daftar Soal
                </Link>
            </header>

            {/* 1. Identitas Paket */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Hash size={20} /></div>
                    <h2 className="font-bold text-slate-800">Identitas Paket Ujian</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Kode Ujian</label>
                        <input
                            type="text"
                            value={kodeUjian}
                            onChange={(e) => setKodeUjian(e.target.value.toUpperCase())}
                            placeholder="CONTOH: WEB1-PAS-2026"
                            className="w-full px-5 py-4 text-slate-900 placeholder:text-slate-400 bg-white border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors font-bold tracking-wider"
                        />
                    </div>
                    <div className="bg-blue-50/50 rounded-2xl p-4 border border-blue-100 flex items-start gap-3">
                        <Info size={18} className="text-blue-500 shrink-0 mt-1" />
                        <p className="text-xs text-blue-700 leading-relaxed">Gunakan kode ini saat membuat <strong>Sesi & Token</strong> agar soal tidak tertukar.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 text-left">
                {/* 2. Kunci Jawaban */}
                <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col text-left">
                    <div className="bg-emerald-50/50 border-b border-emerald-100 px-8 py-5">
                        <h3 className="font-bold text-slate-800 flex items-center gap-2"><FileSpreadsheet className="text-emerald-600" size={24} /> Kunci Jawaban (Excel)</h3>
                    </div>
                    <div className="p-8"><textarea value={excelData} onChange={(e) => setExcelData(e.target.value)} placeholder="Paste No, Kunci, Skor dari Excel..." className="w-full h-48 p-4 text-slate-900 placeholder:text-slate-400 bg-white border-2 border-dashed border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors font-mono text-xs resize-none" /></div>
                </div>

                {/* 3. Dokumen Word */}
                <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col text-left">
                    <div className="bg-indigo-50/50 border-b border-indigo-100 px-8 py-5">
                        <h3 className="font-bold text-slate-800 flex items-center gap-2"><FileText className="text-indigo-600" size={24} /> Dokumen Soal (Word)</h3>
                    </div>
                    <div className="p-8 flex-1">
                        <div className="relative h-full border-2 border-dashed border-slate-200 bg-slate-50 rounded-[2rem] flex flex-col items-center justify-center p-6 group hover:border-indigo-500 transition-all cursor-pointer">
                            <input type="file" accept=".docx" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                            {wordFile ? <p className="font-bold text-slate-800 text-sm truncate w-full px-4 text-center">{wordFile.name}</p> : <><UploadCloud size={40} className="text-slate-300 mb-2" /><p className="font-bold text-slate-600 text-sm">Upload file .docx</p></>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Pratinjau Kunci */}
            {previewKunci.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-[2rem] shadow-sm overflow-hidden mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="px-8 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                        <h3 className="font-bold text-slate-800 flex items-center gap-2"><TableIcon size={18} className="text-emerald-600" /> Pratinjau Kunci</h3>
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">{previewKunci.length} Baris</span>
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                        <table className="w-full text-left"><tbody className="divide-y divide-slate-50">{previewKunci.map((item, idx) => (<tr key={idx}><td className="py-3 px-8 text-slate-400 text-sm font-mono">{item.no}</td><td className="py-3 px-8 font-bold text-emerald-600">{item.jawaban}</td><td className="py-3 px-8 text-slate-700 font-bold">{item.skor}</td></tr>))}</tbody></table>
                    </div>
                </div>
            )}

            {/* Tombol Simpan */}
            <div className="flex flex-col items-center">
                <button
                    onClick={() => { setIsSuccess(true); setTimeout(() => setIsSuccess(false), 3000); }}
                    className={`w-full md:w-1/2 py-5 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-3 ${isSuccess ? 'bg-green-600 text-white shadow-green-600/20' : 'bg-slate-900 text-white hover:bg-black shadow-slate-900/20'}`}
                >
                    {isSuccess ? <><CheckCircle2 size={24} /> DATA BERHASIL DISIMPAN</> : <><Database size={24} /> IMPORT SOAL & KUNCI</>}
                </button>
            </div>
        </div>
    );
}