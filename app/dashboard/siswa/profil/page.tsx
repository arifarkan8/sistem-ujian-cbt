"use client";

import React, { useState } from 'react';
import { User, MapPin, Calendar, CreditCard, GraduationCap, BookOpen, KeyRound, ShieldCheck, X, Lock } from 'lucide-react';

export default function ProfilSiswaPage() {
    // State untuk mengontrol Modal (terbuka/tertutup)
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="max-w-4xl mx-auto pb-10 relative">

            {/* Header Halaman */}
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Profil Saya</h1>
                <p className="text-slate-500 mt-2 font-medium">Informasi data diri dan detail akademik Anda.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Kolom Kiri: Kartu Identitas Utama */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col items-center text-center">
                        <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-4 relative">
                            <User size={64} className="text-blue-500" />
                            <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                                <ShieldCheck size={12} className="text-white" />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900">Muhammad Arif Arkan</h2>
                        <p className="text-blue-600 font-semibold mt-1">Siswa Aktif</p>
                        <div className="w-full h-px bg-slate-100 my-4"></div>
                        <p className="text-sm text-slate-500">NIS: 231011403233</p>
                    </div>

                    {/* Pengaturan Akun Ringkas */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <KeyRound size={18} className="text-blue-600" /> Pengaturan Akun
                        </h3>
                        <button
                            onClick={() => setIsModalOpen(true)} // Membuka modal saat diklik
                            className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold py-2.5 px-4 rounded-xl border border-slate-200 transition-colors text-sm text-left flex justify-between items-center group"
                        >
                            Ubah Kata Sandi
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>

                {/* Kolom Kanan: Detail Informasi */}
                <div className="md:col-span-2 space-y-6">
                    {/* Informasi Pribadi */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="bg-slate-50/50 border-b border-slate-100 px-6 py-4">
                            <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                <User size={18} className="text-blue-600" /> Data Pribadi
                            </h3>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                                <InfoItem icon={CreditCard} label="Nomor Induk Siswa Nasional" value="0051234567" />
                                <InfoItem icon={Calendar} label="Tempat, Tanggal Lahir" value="Jakarta, 15 Agustus 2005" />
                                <InfoItem icon={User} label="Jenis Kelamin" value="Laki-laki" />
                                <InfoItem icon={MapPin} label="Alamat Lengkap" value="Jl. Pendidikan No. 45, Jakarta Utara" />
                            </div>
                        </div>
                    </div>

                    {/* Informasi Akademik */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="bg-slate-50/50 border-b border-slate-100 px-6 py-4">
                            <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                <GraduationCap size={18} className="text-blue-600" /> Data Akademik
                            </h3>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                                <InfoItem icon={BookOpen} label="Program Keahlian" value="Rekayasa Perangkat Lunak" />
                                <InfoItem icon={User} label="Kelas Saat Ini" value="XII RPL 1" />
                                <InfoItem icon={User} label="Wali Kelas" value="Bpk. Budi Santoso, S.Kom" />
                                <InfoItem icon={Calendar} label="Tahun Masuk" value="2023" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MODAL UBAH PASSWORD --- */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
                    <div className="bg-white rounded-[2rem] w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">

                        {/* Header Modal */}
                        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                <Lock size={18} className="text-blue-600" /> Ubah Kata Sandi
                            </h3>
                            <button
                                onClick={() => setIsModalOpen(false)} // Menutup modal
                                className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1.5 rounded-lg transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Isi Form Modal */}
                        <div className="p-6">
                            <form className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Kata Sandi Saat Ini</label>
                                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                                </div>
                                <div className="space-y-1 pt-2">
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Kata Sandi Baru</label>
                                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Konfirmasi Sandi Baru</label>
                                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                                </div>

                                <div className="pt-6 flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="flex-1 px-4 py-3 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            alert("Simulasi: Sandi berhasil diubah! (Nanti ini akan memanggil API backend)");
                                            setIsModalOpen(false);
                                        }}
                                        className="flex-1 px-4 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                                    >
                                        Simpan Perubahan
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}

// Komponen Pembantu
function InfoItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-0.5 text-slate-400">
                <Icon size={18} />
            </div>
            <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
                <p className="text-sm font-medium text-slate-900 mt-1">{value}</p>
            </div>
        </div>
    );
}

function ChevronRightIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}