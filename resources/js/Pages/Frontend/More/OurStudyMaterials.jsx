import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function OurStudyMaterials() {
    return (
        <MainLayout>
            <Head title="Our Study Materials" />
            <main class="bg-slate-50">
                <section class="relative overflow-hidden bg-slate-950">
                    <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop"
                        alt="" class="absolute inset-0 w-full h-full object-cover opacity-30" />
                    <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/85 to-slate-900/40"></div>

                    <div class="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
                        <div class="max-w-3xl text-white">
                            <span class="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">
                                <i class="fa-solid fa-book-open"></i>
                                SGCSM | Our Study Materials
                            </span>
                            <h1 class="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">Our Study Materials</h1>
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export default OurStudyMaterials