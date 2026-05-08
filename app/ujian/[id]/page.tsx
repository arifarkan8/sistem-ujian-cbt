"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Clock, ChevronLeft, ChevronRight, Flag, AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';

const questions = [
    { id: 1, text: "Perintah SQL yang digunakan untuk menampilkan data dari sebuah tabel adalah...", options: ["SELECT", "INSERT", "UPDATE", "DELETE"] },
    { id: 2, text: "Manakah dari berikut ini yang BUKAN merupakan tipe data primitif di JavaScript?", options: ["String", "Number", "Boolean", "Object"] },
    { id: 3, text: "Properti CSS apa yang digunakan untuk mengubah warna latar belakang sebuah elemen?", options: ["color", "bg-color", "background-color", "background"] },
    { id: 4, text: "Di dalam HTML, tag apa yang digunakan untuk membuat daftar bernomor (ordered list)?", options: ["<ul>", "<list>", "<ol>", "<dl>"] },
    { id: 5, text: "Framework CSS apa yang sedang kita gunakan untuk membangun tampilan CBT ini?", options: ["Bootstrap", "Material UI", "Tailwind CSS", "Bulma"] },
];

export default function ExamInterfacePage() {
    const params = useParams();
    const router = useRouter();
    const mapelTitle = params.id ? (params.id as string).replace(/-/g, ' ').toUpperCase() : 'UJIAN';

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [raguRagu, setRaguRagu] = useState<Record<number, boolean>>({});

    // State Timer
    const [timeLeft, setTimeLeft] = useState(5400);

    // STATE BARU: Sistem Anti-Kecurangan
    const [warningCount, setWarningCount] = useState(0);
    const [showWarning, setShowWarning] = useState(false);

    // Efek Timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // EFEK BARU: Deteksi Pindah Tab (Anti-Kecurangan)
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                // Jika tab tidak aktif (disembunyikan/pindah), tambah pelanggaran & munculkan peringatan
                setWarningCount((prev) => prev + 1);
                setShowWarning(true);
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    const currentQ = questions[currentIndex];

    const handleAnswerSelect = (optionIndex: number) => {
        setAnswers({ ...answers, [currentQ.id]: optionIndex });
    };

    const toggleRaguRagu = () => {
        setRaguRagu({ ...raguRagu, [currentQ.id]: !raguRagu[currentQ.id] });
    };

    // HANDLER BARU: Arahkan ke halaman selesai
    const handleSelesai = () => {
        const confirmSubmit = window.confirm("Apakah Anda yakin ingin mengakhiri ujian? Jawaban tidak dapat diubah lagi.");
        if (confirmSubmit) {
            router.push('/ujian/selesai');
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col font-sans selection:bg-blue-200">

            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-50 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center shrink-0">CBT</div>
                    <div className="hidden md:block">
                        <h1 className="text-lg font-bold text-slate-800 tracking-tight">{mapelTitle}</h1>
                        <p className="text-xs text-slate-500 font-medium">Muhammad Arif Arkan • XII RPL 1</p>
                    </div>
                </div>
                <div className={`flex items-center gap-3 px-5 py-2.5 rounded-xl border-2 font-mono text-xl font-bold tracking-widest transition-colors ${timeLeft < 300 ? 'bg-red-50 text-red-600 border-red-200 animate-pulse' : 'bg-slate-50 text-slate-800 border-slate-200'}`}>
                    <Clock size={20} className={timeLeft < 300 ? 'text-red-500' : 'text-slate-400'} />
                    {formatTime(timeLeft)}
                </div>
            </header>

            {/* Area Utama */}
            <div className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-4 gap-6 relative">

                {/* Kiri: Soal */}
                <div className="lg:col-span-3 flex flex-col gap-4">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex-1 flex flex-col">
                        <div className="bg-slate-50/50 border-b border-slate-100 px-8 py-5 flex justify-between items-center">
                            <h2 className="text-lg font-bold text-slate-800">Soal No. <span className="text-2xl text-blue-600 ml-1">{currentQ.id}</span></h2>
                        </div>
                        <div className="p-8 flex-1">
                            <p className="text-lg text-slate-800 leading-relaxed font-medium mb-8">{currentQ.text}</p>
                            <div className="space-y-3">
                                {currentQ.options.map((option, idx) => {
                                    const isSelected = answers[currentQ.id] === idx;
                                    const label = String.fromCharCode(65 + idx);
                                    return (
                                        <label key={idx} className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${isSelected ? 'border-blue-500 bg-blue-50/50' : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'}`}>
                                            <div className="flex items-center justify-center">
                                                <input type="radio" name={`question-${currentQ.id}`} className="w-5 h-5 text-blue-600 border-slate-300 focus:ring-blue-500" checked={isSelected} onChange={() => handleAnswerSelect(idx)} />
                                            </div>
                                            <div className="ml-4 flex items-start gap-3 w-full">
                                                <span className={`font-bold ${isSelected ? 'text-blue-700' : 'text-slate-500'}`}>{label}.</span>
                                                <span className={`text-base ${isSelected ? 'text-blue-900 font-medium' : 'text-slate-700'}`}>{option}</span>
                                            </div>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Navigasi Bawah */}
                    <div className="flex items-center justify-between gap-4 mt-2">
                        <button onClick={() => setCurrentIndex(prev => prev - 1)} disabled={currentIndex === 0} className="flex items-center gap-2 px-6 py-3.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"><ChevronLeft size={20} /> Sebelumnya</button>
                        <button onClick={toggleRaguRagu} className={`flex items-center gap-2 px-8 py-3.5 font-bold rounded-xl transition-all shadow-sm ${raguRagu[currentQ.id] ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-500/20' : 'bg-white border border-orange-200 text-orange-500 hover:bg-orange-50'}`}><Flag size={18} className={raguRagu[currentQ.id] ? 'fill-current' : ''} /> Ragu-ragu</button>
                        {currentIndex === questions.length - 1 ? (
                            <button onClick={handleSelesai} className="flex items-center gap-2 px-8 py-3.5 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-green-600/20">Selesai Ujian <CheckCircle2 size={20} /></button>
                        ) : (
                            <button onClick={() => setCurrentIndex(prev => prev + 1)} className="flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">Selanjutnya <ChevronRight size={20} /></button>
                        )}
                    </div>
                </div>

                {/* Kanan: Grid Navigasi */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sticky top-24">
                        <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
                            <AlertTriangle size={18} className="text-slate-400" />
                            <h3 className="font-bold text-slate-800">Navigasi Soal</h3>
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            {questions.map((q, idx) => {
                                const isAnswered = answers[q.id] !== undefined;
                                const isRagu = raguRagu[q.id];
                                const isActive = currentIndex === idx;
                                let boxClass = "border-slate-200 text-slate-600 hover:bg-slate-50";
                                if (isAnswered && !isRagu) boxClass = "bg-blue-600 border-blue-600 text-white font-bold shadow-md shadow-blue-600/20";
                                if (isRagu) boxClass = "bg-orange-500 border-orange-500 text-white font-bold shadow-md shadow-orange-500/20";
                                if (isActive) boxClass += " ring-4 ring-slate-300 ring-offset-2";
                                return <button key={q.id} onClick={() => setCurrentIndex(idx)} className={`h-11 w-full rounded-lg border-2 flex items-center justify-center text-sm transition-all ${boxClass}`}>{q.id}</button>;
                            })}
                        </div>
                        {/* Status Pelanggaran (Tampil jika pernah melanggar) */}
                        {warningCount > 0 && (
                            <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-xl">
                                <p className="text-xs font-bold text-red-600 flex items-center gap-1.5"><ShieldAlert size={14} /> Peringatan Sistem</p>
                                <p className="text-xs text-red-800 mt-1">Anda terdeteksi meninggalkan halaman sebanyak <strong>{warningCount} kali</strong>.</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* --- MODAL ANTI KECURANGAN --- */}
            {showWarning && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
                    <div className="bg-white rounded-[2rem] w-full max-w-md p-8 shadow-2xl text-center animate-in fade-in zoom-in duration-200">
                        <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShieldAlert size={40} />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 mb-2">Peringatan Keras!</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Sistem mendeteksi Anda mencoba membuka tab baru atau mengecilkan browser. Ini adalah pelanggaran ke-<strong>{warningCount}</strong>. Tindakan ini dicatat oleh sistem pengawas.
                        </p>
                        <button
                            onClick={() => setShowWarning(false)}
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-red-600/20"
                        >
                            Saya Mengerti & Lanjutkan
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}