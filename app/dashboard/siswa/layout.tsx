"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, UserCircle, FileSpreadsheet, LogOut, Menu, X, ChevronLeft } from 'lucide-react';

export default function SiswaDashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const pathname = usePathname(); // Untuk mengecek halaman mana yang sedang aktif

    const menuItems = [
        { name: 'Dashboard Ujian', icon: LayoutDashboard, href: '/dashboard/siswa' },
        { name: 'Profil Saya', icon: UserCircle, href: '/dashboard/siswa/profil' },
        { name: 'Rangkuman Nilai', icon: FileSpreadsheet, href: '/dashboard/siswa/nilai' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex overflow-hidden">

            {/* SIDEBAR */}
            <aside
                className={`${isSidebarOpen ? 'w-72' : 'w-20'} bg-white border-r border-slate-200 transition-all duration-300 ease-in-out flex flex-col relative z-20 shrink-0`}
            >
                {/* Tombol Buka/Tutup Sidebar (Hanya di Desktop) */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="hidden md:flex absolute -right-3 top-8 bg-white border border-slate-200 text-slate-500 rounded-full p-1 hover:bg-slate-50 transition-colors shadow-sm"
                >
                    <ChevronLeft size={16} className={`transition-transform duration-300 ${!isSidebarOpen && 'rotate-180'}`} />
                </button>

                {/* Header Sidebar (Info Singkat) */}
                <div className={`h-20 flex items-center border-b border-slate-100 px-6 ${!isSidebarOpen && 'justify-center px-0'}`}>
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shrink-0">
                        MA
                    </div>
                    {isSidebarOpen && (
                        <div className="ml-3 overflow-hidden">
                            <h2 className="text-sm font-bold text-slate-800 truncate">Muhammad Arif Arkan</h2>
                            <p className="text-xs text-slate-500 truncate">231011403233</p>
                        </div>
                    )}
                </div>

                {/* Menu Navigasi */}
                <nav className="flex-1 py-6 px-4 space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={item.name} href={item.href}>
                                <div className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${isActive ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'} ${!isSidebarOpen && 'justify-center'}`}>
                                    <item.icon size={22} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                                    {isSidebarOpen && <span>{item.name}</span>}
                                </div>
                            </Link>
                        );
                    })}
                </nav>

                {/* Tombol Logout di Bawah */}
                <div className="p-4 border-t border-slate-100">
                    <Link href="/">
                        <button className={`flex items-center gap-3 w-full px-3 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors font-medium ${!isSidebarOpen && 'justify-center'}`}>
                            <LogOut size={22} />
                            {isSidebarOpen && <span>Keluar</span>}
                        </button>
                    </Link>
                </div>
            </aside>

            {/* KONTEN UTAMA */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

                {/* Header Mobile (Hanya muncul di HP) */}
                <header className="md:hidden h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 shrink-0">
                    <h1 className="font-bold text-slate-800">CBT System</h1>
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 bg-slate-100 rounded-lg text-slate-600">
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </header>

                {/* Area Render Halaman */}
                <main className="flex-1 overflow-y-auto p-6 md:p-10">
                    {children}
                </main>
            </div>

        </div>
    );
}