import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';

export default function EditSiswaPage() {
    return (
        <div className="space-y-6 max-w-4xl">
            {/* Header / Back Button */}
            <div>
                <Link 
                    href="/dashboard/admin/data-siswa" 
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors font-medium mb-4"
                >
                    <ArrowLeft size={20} />
                    <span>Kembali</span>
                </Link>
                <h1 className="text-2xl font-bold text-slate-800">Edit Data Siswa</h1>
                <p className="text-slate-500 mt-1">Perbarui informasi data siswa dan akun login.</p>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* NISN */}
                        <div className="space-y-2">
                            <label htmlFor="nisn" className="block text-sm font-medium text-slate-700">
                                Nomor Induk Siswa Nasional (NISN) *
                            </label>
                            <input
                                type="text"
                                id="nisn"
                                defaultValue="231011403233"
                                placeholder="Contoh: 0051234567"
                                className="w-full bg-white px-4 py-2 text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                            />
                        </div>

                        {/* Nama Lengkap */}
                        <div className="space-y-2">
                            <label htmlFor="nama" className="block text-sm font-medium text-slate-700">
                                Nama Lengkap Siswa *
                            </label>
                            <input
                                type="text"
                                id="nama"
                                defaultValue="Muhammad Arif Arkan"
                                placeholder="Contoh: Muhammad Arif Arkan"
                                className="w-full bg-white px-4 py-2 text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                            />
                        </div>

                        {/* Jenis Kelamin */}
                        <div className="space-y-2">
                            <label htmlFor="jk" className="block text-sm font-medium text-slate-700">
                                Jenis Kelamin *
                            </label>
                            <select
                                id="jk"
                                defaultValue="L"
                                className="w-full bg-white px-4 py-2 text-slate-900 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors appearance-none"
                            >
                                <option value="">Pilih Jenis Kelamin</option>
                                <option value="L">Laki-laki</option>
                                <option value="P">Perempuan</option>
                            </select>
                        </div>

                        {/* Kelas */}
                        <div className="space-y-2">
                            <label htmlFor="kelas" className="block text-sm font-medium text-slate-700">
                                Kelas *
                            </label>
                            <select
                                id="kelas"
                                defaultValue="XII"
                                className="w-full bg-white px-4 py-2 text-slate-900 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors appearance-none"
                            >
                                <option value="">Pilih Kelas</option>
                                <option value="X">X</option>
                                <option value="XI">XI</option>
                                <option value="XII">XII</option>
                            </select>
                        </div>
                        
                        {/* Jurusan */}
                        <div className="space-y-2">
                            <label htmlFor="jurusan" className="block text-sm font-medium text-slate-700">
                                Jurusan *
                            </label>
                            <select
                                id="jurusan"
                                defaultValue="Teknik Informatika"
                                className="w-full bg-white px-4 py-2 text-slate-900 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors appearance-none"
                            >
                                <option value="">Pilih Jurusan</option>
                                <option value="Teknik Informatika">Teknik Informatika</option>
                                <option value="Desain Grafis">Desain Grafis</option>
                                <option value="Administrasi">Administrasi</option>
                            </select>
                        </div>

                        {/* Password Akun */}
                        <div className="space-y-2 md:col-span-2 pt-2 border-t border-slate-100">
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                                Ubah Password (Opsional)
                            </label>
                            <input
                                type="text"
                                id="password"
                                placeholder="Kosongkan jika tidak ingin diubah"
                                className="w-full md:w-1/2 bg-white px-4 py-2 text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-slate-100">
                        <Link href="/dashboard/admin/data-siswa">
                            <button type="button" className="w-full sm:w-auto px-6 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                                Batal
                            </button>
                        </Link>
                        <button type="button" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-sm shadow-emerald-600/20">
                            <Save size={18} />
                            <span>Simpan Perubahan</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
