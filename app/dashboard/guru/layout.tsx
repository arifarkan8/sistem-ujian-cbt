"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import 'katex/dist/katex.min.css';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    UserCircle,
    Database,
    KeyRound,
    Activity,
    FileSpreadsheet,
    LogOut,
    Menu,
    X,
    ChevronLeft
} from 'lucide-react';

export default function GuruDashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const pathname = usePathname();

    // Daftar Menu Guru
    // Daftar Menu Guru (Versi Pembaruan)
    const menuItems = [
        { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard/guru' },
        { name: 'Bank Soal', icon: Database, href: '/dashboard/guru/bank-soal' },
        { name: 'Sesi & Token', icon: KeyRound, href: '/dashboard/guru/sesi-ujian' },
        { name: 'Monitoring Ujian', icon: Activity, href: '/dashboard/guru/monitoring' },
        { name: 'Laporan Nilai', icon: FileSpreadsheet, href: '/dashboard/guru/laporan' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex overflow-hidden font-sans">

            {/* SIDEBAR GURU (Warna Gelap/Slate 900 untuk kesan Admin) */}
            <aside
                className={`${isSidebarOpen ? 'w-72' : 'w-20'} bg-slate-900 border-r border-slate-800 transition-all duration-300 ease-in-out flex flex-col relative z-20 shrink-0 text-slate-300`}
            >
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="hidden md:flex absolute -right-3 top-8 bg-slate-800 border border-slate-700 text-slate-300 rounded-full p-1 hover:bg-slate-700 transition-colors shadow-sm"
                >
                    <ChevronLeft size={16} className={`transition-transform duration-300 ${!isSidebarOpen && 'rotate-180'}`} />
                </button>

                {/* Profil Guru Singkat */}
                <div className={`h-20 flex items-center border-b border-slate-800 px-4 ${!isSidebarOpen && 'justify-center px-0'}`}>
                    <Link 
                        href="/dashboard/guru/profil"
                        className={`flex items-center w-full p-2 hover:bg-slate-800 transition-colors rounded-lg cursor-pointer ${!isSidebarOpen && 'justify-center'}`}
                    >
                        <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold shrink-0 shadow-lg shadow-purple-600/20">
                            AD
                        </div>
                        {isSidebarOpen && (
                            <div className="ml-3 overflow-hidden">
                                <h2 className="text-sm font-bold text-white truncate">Administrator</h2>
                                <p className="text-xs text-slate-400 truncate">NIP. 198012345678</p>
                            </div>
                        )}
                    </Link>
                </div>

                {/* Menu Navigasi */}
                <nav className="flex-1 py-6 px-4 space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={item.name} href={item.href}>
                                <div className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${isActive ? 'bg-purple-600 text-white font-semibold shadow-lg shadow-purple-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'} ${!isSidebarOpen && 'justify-center'}`}>
                                    <item.icon size={22} className={isActive ? 'text-white' : ''} />
                                    {isSidebarOpen && <span>{item.name}</span>}
                                </div>
                            </Link>
                        );
                    })}
                </nav>

                {/* Tombol Logout */}
                <div className="p-4 border-t border-slate-800">
                    <Link href="/">
                        <button className={`flex items-center gap-3 w-full px-3 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors font-medium ${!isSidebarOpen && 'justify-center'}`}>
                            <LogOut size={22} />
                            {isSidebarOpen && <span>Keluar Sistem</span>}
                        </button>
                    </Link>
                </div>
            </aside>

            {/* KONTEN UTAMA */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header Mobile */}
                <header className="md:hidden h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 shrink-0 text-white">
                    <div className="font-bold flex items-center gap-2"><div className="w-6 h-6 bg-purple-600 rounded-md"></div> EduCBT Pro</div>
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 bg-slate-800 rounded-lg text-slate-300">
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </header>

                <main className="flex-1 overflow-y-auto p-6 md:p-10">
                    {children}
                </main>
            </div>

        </div>
    );
}