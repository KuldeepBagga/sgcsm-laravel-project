import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function NewsEvents() {
    return (
        <MainLayout>
            <Head title="News & Events" />
            <main className="bg-slate-50">
                <section className="relative overflow-hidden bg-slate-950">
                    <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop"
                        alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/85 to-slate-900/40"></div>

                    <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
                        <div className="max-w-3xl text-white">
                            <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">
                                <i className="fa-solid fa-book-open"></i>
                                SGCSM | News & Events
                            </span>
                            <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">News & Events</h1>
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export default NewsEvents
