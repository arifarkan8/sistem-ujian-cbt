"use client";

import React, { useState } from 'react';
import { User, Mail, Calendar, IdCard, Briefcase, KeyRound, ShieldCheck, X, Lock, ChevronRight } from 'lucide-react';

export default function ProfilGuruPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="max-w-4xl mx-auto pb-10 relative">

            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Profil Guru</h1>
                <p className="text-slate-500 mt-2 font-medium">Informasi data diri dan jabatan fungsional Anda.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Kolom Kiri */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col items-center text-center">
                        <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-4 relative">
                            <User size={64} className="text-slate-400" />
                            <div className="absolute bottom-1 right-1 w-6 h-6 bg-blue-500 border-2 border-white rounded-full flex items-center justify-center">
                                <ShieldCheck size={12} className="text-white" />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 leading-tight">Muhammad Arif Arkan</h2>
                        <p className="text-blue-600 font-semibold mt-1">Tenaga Pengajar</p>
                        <div className="w-full h-px bg-slate-100 my-4"></div>
                        <p className="text-sm text-slate-500 font-mono">NIP. 231011403233</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <KeyRound size={18} className="text-blue-600" /> Keamanan Akun
                        </h3>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold py-2.5 px-4 rounded-xl border border-slate-200 transition-colors text-sm text-left flex justify-between items-center group"
                        >
                            Ubah Kata Sandi
                            <ChevronRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-all" />
                        </button>
                    </div>
                </div>

                {/* Kolom Kanan */}
                <div className="md:col-span-2 space-y-6">

                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="bg-slate-50/50 border-b border-slate-100 px-6 py-4">
                            <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                <IdCard size={18} className="text-blue-600" /> Data Fungsional
                            </h3>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 text-left">
                                <InfoItem icon={Briefcase} label="Jabatan" value="Guru Produktif RPL" />
                                <InfoItem icon={Mail} label="Email Institusi" value="arif.arkan@smk.sch.id" />
                                <InfoItem icon={Calendar} label="Tanggal Bergabung" value="12 Januari 2024" />
                                <InfoItem icon={User} label="Status Kepegawaian" value="Guru Tetap" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-left">
                        <div className="bg-slate-50/50 border-b border-slate-100 px-6 py-4">
                            <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                <Lock size={18} className="text-blue-600" /> Hak Akses Sistem
                            </h3>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    Dapat mengelola Bank Soal mandiri.
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    Dapat melakukan Monitoring Ujian aktif.
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    Akses penuh ke Laporan Nilai mata pelajaran terkait.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/* Modal Ubah Password */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white rounded-[2rem] w-full max-w-md shadow-2xl overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                <Lock size={18} className="text-blue-600" /> Atur Ulang Sandi
                            </h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            <form className="space-y-4">
                                <InputGroup label="Kata Sandi Lama" placeholder="••••••••" />
                                <InputGroup label="Kata Sandi Baru" placeholder="••••••••" />
                                <InputGroup label="Konfirmasi Sandi Baru" placeholder="••••••••" />
                                <div className="pt-6 flex gap-3">
                                    <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 px-4 py-3 rounded-xl font-semibold text-slate-600 bg-slate-100">Batal</button>
                                    <button type="button" className="flex-1 px-4 py-3 rounded-xl font-semibold text-white bg-slate-900 shadow-lg">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function InfoItem({ icon: Icon, label, value }: any) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-0.5 text-slate-400"><Icon size={18} /></div>
            <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
                <p className="text-sm font-semibold text-slate-800 mt-1">{value}</p>
            </div>
        </div>
    );
}

function InputGroup({ label, placeholder }: any) {
    return (
        <div className="space-y-1 text-left">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</label>
            <input type="password" placeholder={placeholder} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
        </div>
    );
}