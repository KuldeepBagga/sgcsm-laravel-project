import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function Courses() {
    return (
        <MainLayout>
            <Head title="Courses" />
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
                                    SGCSM | Course
                                </span>

                                <h1 class="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">
                                    Our Courses
                                </h1>

                            </div>

                        </div>
                    </div>
                </section>
                <section class="py-14 md:py-16">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <section class="lg:col-span-12">
                                <div class="relative mb-8">
                                    <input type="text" placeholder="Search Courses..."
                                        class="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-14 pr-5 text-gray-700 shadow-sm focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition" />

                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>

                                <div class="grid lg:grid-cols-12 gap-8">

                                    <aside class="lg:col-span-3">

                                        <div class="bg-white rounded-[30px] shadow-xl border border-gray-100 overflow-hidden">

                                            <div class="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                                                <h2 class="text-3xl font-bold text-white">
                                                    Our Courses
                                                </h2>
                                            </div>

                                            <div class="p-5 h-[760px] overflow-y-auto space-y-4">

                                                <button
                                                    class="w-full flex items-center justify-between bg-gradient-to-r from-slate-800 to-slate-700 text-white px-5 py-4 rounded-2xl font-semibold shadow-lg hover:scale-[1.02] transition">
                                                    <span>DIB</span>
                                                    <span>→</span>
                                                </button>

                                                <button
                                                    class="w-full flex items-center justify-between bg-white border border-gray-200 px-5 py-4 rounded-2xl font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition">
                                                    <span>DCS</span>
                                                    <span>→</span>
                                                </button>

                                                <button
                                                    class="w-full flex items-center justify-between bg-white border border-gray-200 px-5 py-4 rounded-2xl font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition">
                                                    <span>COA</span>
                                                    <span>→</span>
                                                </button>

                                                <button
                                                    class="w-full flex items-center justify-between bg-white border border-gray-200 px-5 py-4 rounded-2xl font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition">
                                                    <span>CCA</span>
                                                    <span>→</span>
                                                </button>

                                                <button
                                                    class="w-full flex items-center justify-between bg-white border border-gray-200 px-5 py-4 rounded-2xl font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition">
                                                    <span>CITA</span>
                                                    <span>→</span>
                                                </button>

                                                <button
                                                    class="w-full flex items-center justify-between bg-white border border-gray-200 px-5 py-4 rounded-2xl font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition">
                                                    <span>Tally + GST</span>
                                                    <span>→</span>
                                                </button>

                                                <button
                                                    class="w-full flex items-center justify-between bg-white border border-gray-200 px-5 py-4 rounded-2xl font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition">
                                                    <span>DHT</span>
                                                    <span>→</span>
                                                </button>

                                                <button
                                                    class="w-full flex items-center justify-between bg-white border border-gray-200 px-5 py-4 rounded-2xl font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition">
                                                    <span>DCAA</span>
                                                    <span>→</span>
                                                </button>

                                                <button
                                                    class="w-full flex items-center justify-between bg-white border border-gray-200 px-5 py-4 rounded-2xl font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition">
                                                    <span>DGD</span>
                                                    <span>→</span>
                                                </button>

                                                <button
                                                    class="w-full flex items-center justify-between bg-white border border-gray-200 px-5 py-4 rounded-2xl font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition">
                                                    <span>MS Office</span>
                                                    <span>→</span>
                                                </button>

                                            </div>

                                        </div>

                                    </aside>

                                    <main class="lg:col-span-9">

                                        <div
                                            class="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-8 lg:p-12 shadow-2xl mb-10">

                                            <div class="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl">
                                            </div>
                                            <div
                                                class="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl">
                                            </div>

                                            <div class="relative z-10">

                                                <span
                                                    class="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-medium mb-6">
                                                    🚀 Professional Certification Course
                                                </span>

                                                <h1 class="text-lg lg:text-5xl font-extrabold text-white leading-tight">
                                                    Advance Diploma In Web Development
                                                </h1>

                                                <p class="text-blue-100 text-xl mt-5">
                                                    Learn modern web technologies with real-world projects and practical
                                                    training.
                                                </p>

                                                <div class="flex flex-wrap gap-5 mt-10">

                                                    <div
                                                        class="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-5 min-w-[230px]">
                                                        <p class="text-blue-200 text-sm mb-1">
                                                            Duration
                                                        </p>

                                                        <h3 class="text-white text-2xl font-bold">
                                                            12 Months
                                                        </h3>
                                                    </div>

                                                    <div
                                                        class="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-5 min-w-[230px]">
                                                        <p class="text-blue-200 text-sm mb-1">
                                                            Eligibility
                                                        </p>

                                                        <h3 class="text-white text-2xl font-bold">
                                                            10th / 12th Pass
                                                        </h3>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div>

                                            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-7">

                                                <div
                                                    class="group bg-white rounded-[28px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                                                    <div
                                                        class="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
                                                        💻
                                                    </div>

                                                    <h3 class="text-2xl font-bold text-slate-900 mb-5">
                                                        Computer Fundamentals
                                                    </h3>

                                                    <ul class="space-y-3 text-gray-600 leading-relaxed">
                                                        <li>• Introduction to computers</li>
                                                        <li>• Hardware & software</li>
                                                        <li>• Operating System</li>
                                                        <li>• File management</li>
                                                        <li>• Keyboard shortcuts</li>
                                                    </ul>

                                                </div>

                                                <div
                                                    class="group bg-white rounded-[28px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                                                    <div
                                                        class="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
                                                        🌐
                                                    </div>

                                                    <h3 class="text-2xl font-bold text-slate-900 mb-5">
                                                        Web Designing
                                                    </h3>

                                                    <ul class="space-y-3 text-gray-600 leading-relaxed">
                                                        <li>• HTML5 & CSS3</li>
                                                        <li>• Responsive Design</li>
                                                        <li>• Tailwind CSS</li>
                                                        <li>• UI Components</li>
                                                        <li>• Real Projects</li>
                                                    </ul>

                                                </div>

                                                <div
                                                    class="group bg-white rounded-[28px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                                                    <div
                                                        class="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
                                                        ⚡
                                                    </div>

                                                    <h3 class="text-2xl font-bold text-slate-900 mb-5">
                                                        JavaScript
                                                    </h3>

                                                    <ul class="space-y-3 text-gray-600 leading-relaxed">
                                                        <li>• Variables & functions</li>
                                                        <li>• DOM manipulation</li>
                                                        <li>• Events & animations</li>
                                                        <li>• API integration</li>
                                                        <li>• Interactive websites</li>
                                                    </ul>

                                                </div>

                                                <div
                                                    class="group bg-white rounded-[28px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                                                    <div
                                                        class="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
                                                        🛢️
                                                    </div>

                                                    <h3 class="text-2xl font-bold text-slate-900 mb-5">
                                                        Database
                                                    </h3>

                                                    <ul class="space-y-3 text-gray-600 leading-relaxed">
                                                        <li>• MySQL basics</li>
                                                        <li>• CRUD operations</li>
                                                        <li>• Relationships</li>
                                                        <li>• Queries & filtering</li>
                                                        <li>• Database security</li>
                                                    </ul>

                                                </div>

                                                <div
                                                    class="group bg-white rounded-[28px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                                                    <div
                                                        class="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
                                                        🚀
                                                    </div>

                                                    <h3 class="text-2xl font-bold text-slate-900 mb-5">
                                                        Laravel Framework
                                                    </h3>

                                                    <ul class="space-y-3 text-gray-600 leading-relaxed">
                                                        <li>• MVC Architecture</li>
                                                        <li>• Authentication</li>
                                                        <li>• CRUD systems</li>
                                                        <li>• REST APIs</li>
                                                        <li>• Deployment</li>
                                                    </ul>

                                                </div>

                                                <div
                                                    class="group bg-white rounded-[28px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                                                    <div
                                                        class="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
                                                        🏆
                                                    </div>

                                                    <h3 class="text-2xl font-bold text-slate-900 mb-5">
                                                        Final Project
                                                    </h3>

                                                    <ul class="space-y-3 text-gray-600 leading-relaxed">
                                                        <li>• Live project creation</li>
                                                        <li>• Portfolio development</li>
                                                        <li>• Hosting & deployment</li>
                                                        <li>• Interview preparation</li>
                                                        <li>• Certification</li>
                                                    </ul>

                                                </div>

                                            </div>

                                        </div>

                                    </main>

                                </div>
                            </section>
                        </div>
                    </div>
                </section>

            </main >
        </MainLayout >
    )
}

export default Courses