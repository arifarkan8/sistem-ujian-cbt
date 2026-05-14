"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-slate-50 flex overflow-hidden font-sans">
            {/* Sidebar */}
            <AdminSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Mobile Header */}
                <header className="md:hidden h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 shrink-0 text-white">
                    <div className="font-bold flex items-center gap-2">
                        <div className="w-6 h-6 bg-emerald-600 rounded-md"></div> EduCBT Admin
                    </div>
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 bg-slate-800 rounded-lg text-slate-300">
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6 md:p-10">
                    {children}
                </main>
            </div>
        </div>
    );
}
