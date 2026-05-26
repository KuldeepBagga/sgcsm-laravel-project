import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function OnlineAdvanceResult() {
    return (
        <MainLayout>
            <Head title="Online Advance Result" />
            <main class="bg-slate-50">
                <section class="relative overflow-hidden bg-slate-950">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop"
                        alt="" class="absolute inset-0 w-full h-full object-cover opacity-35" />
                    <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/85 to-slate-900/25"></div>

                    <div class="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
                        <div class="grid lg:grid-cols-12 gap-10 items-end">
                            <div class="lg:col-span-8 text-white">
                                <span
                                    class="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">
                                    <i class="fa-solid fa-building-columns"></i>
                                    SGCSM | Online Advance Result
                                </span>

                                <h1 class="mt-5 text-4xl md:text-5xl font-black leading-tight uppercase">
                                    Online Online Advance Result
                                </h1>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export default OnlineAdvanceResult