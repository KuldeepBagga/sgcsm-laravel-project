import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function OnlineAdmitCard() {
    return (
        <MainLayout>
            <Head title="Online Admit Card" />
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
                                  SGCSM | Online Exam Card
                                </span>

                                <h1 class="mt-5 text-4xl md:text-5xl font-black leading-tight uppercase">
                                    Online Exam Card
                                </h1>
                            </div>

                        </div>
                    </div>
                </section>

                <div
                    class="bg-gradient-to-br flex items-center justify-center px-6 py-12">

                    <div class="w-full max-w-5xl bg-white rounded-[35px] shadow-2xl overflow-hidden">

                        <div class="p-8 md:p-14">

                            <form class="space-y-8">

                                <div>

                                    <label class="block text-gray-800 font-semibold text-lg mb-4f py-3">
                                        Enrollment No :
                                    </label>

                                    <div class="relative">

                                        <input type="text" placeholder="Enter Enrollment number"
                                            class="w-full border border-gray-300 rounded-2xl px-6 py-5 pl-14 text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />

                                        <div class="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">

                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">

                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />

                                            </svg>

                                        </div>

                                    </div>

                                </div>

                                <div>

                                    <button type="submit"
                                        class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg transition duration-300">

                                        Get Details

                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>
            </main>
        </MainLayout>
    )
}

export default OnlineAdmitCard