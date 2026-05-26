import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function VerifyCertificate() {
    return (
        <MainLayout>
            <Head title="Verify Certificate" />
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
                                   SGCSM | Certificate Verification
                                </span>

                                <h1 class="mt-5 text-4xl md:text-5xl font-black leading-tight uppercase">
                                    Certificate Verification
                                </h1>
                            </div>

                        </div>
                    </div>
                </section>

                <div
                    class="bg-gradient-to-br flex items-center justify-center px-6 py-6">

                    <div class="w-full max-w-5xl bg-white rounded-[35px] shadow-2xl overflow-hidden">

                        <div class="p-8 md:p-14">

                            <form class="space-y-8">

                                <div>

                                    <label class="block text-gray-800 font-semibold text-lg mb-4">
                                        Certificate No :
                                    </label>

                                    <div class="relative">

                                        <input type="text" placeholder="Enter certificate number"
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

                            <div class="mt-12 bg-gray-50 border rounded-3xl p-8">

                                <div class="flex items-center gap-4 mb-6">

                                    <div class="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-green-600" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">

                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />

                                        </svg>

                                    </div>

                                    <div>

                                        <h2 class="text-2xl font-bold text-gray-900">
                                            Certificate Verified
                                        </h2>

                                        <p class="text-gray-500">
                                            The certificate details are valid and authenticated.
                                        </p>

                                    </div>

                                </div>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    <div class="bg-white border rounded-2xl p-5">
                                        <p class="text-gray-500 text-sm">
                                            Student Name
                                        </p>

                                        <h3 class="text-lg font-semibold text-gray-900 mt-1">
                                            Rahul Sharma
                                        </h3>
                                    </div>

                                    <div class="bg-white border rounded-2xl p-5">
                                        <p class="text-gray-500 text-sm">
                                            Certificate No
                                        </p>

                                        <h3 class="text-lg font-semibold text-gray-900 mt-1">
                                            SGCSM-2025-817
                                        </h3>
                                    </div>

                                    <div class="bg-white border rounded-2xl p-5">
                                        <p class="text-gray-500 text-sm">
                                            Course Name
                                        </p>

                                        <h3 class="text-lg font-semibold text-gray-900 mt-1">
                                            Diploma in Computer Application
                                        </h3>
                                    </div>

                                    <div class="bg-white border rounded-2xl p-5">
                                        <p class="text-gray-500 text-sm">
                                            Status
                                        </p>

                                        <span
                                            class="inline-block mt-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                                            Verified
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </main>
        </MainLayout>
    )
}

export default VerifyCertificate