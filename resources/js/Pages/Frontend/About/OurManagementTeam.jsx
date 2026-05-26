import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function OurManagementTeam() {
    return (
        <MainLayout>
            <Head title="Our Management Team" />

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
                                    <i className="fa-solid fa-building-columns"></i>
                                  SGCSM | Our Team
                                </span>

                                <h1 class="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">
                                    Our Management Team
                                </h1>
                            </div>

                        </div>
                    </div>
                </section>



                <section class="py-10 bg-gray-50">
                    <div class="max-w-7xl mx-auto px-6">

                        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div
                                class="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden group border border-gray-100">

                                <div class="relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
                                        alt="Team Member"
                                        class="w-full h-80 object-cover group-hover:scale-105 transition duration-500" />
                                </div>

                                <div class="p-6 text-center">
                                    <h3 class="text-2xl font-bold text-gray-900">
                                        Amit Kumar
                                    </h3>

                                    <p class="text-green-600 font-medium mt-2">
                                        Operations Manager
                                    </p>

                                    <p class="text-gray-600 text-sm mt-4 leading-relaxed">
                                        <ul>
                                            <li>
                                                <a href="mailto:amit@example.com"
                                                    class="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                        aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                                                    </svg>
                                                    amit@example.com
                                                </a>
                                            </li>
                                            <li>
                                                <a href="tel:+919876543210"
                                                    class="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                        aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M3 5a2 2 0 0 1 2-2h2.5a1 1 0 0 1 .93.63l1.2 2.8a1 1 0 0 1-.2 1.02L8.4 10.6a12.04 12.04 0 0 0 5 5l2.2-1.6a1 1 0 0 1 1.02-.2l2.8 1.2A1 1 0 0 1 21 18.5V21a2 2 0 0 1-2 2h-0.5A19 19 0 0 1 3 5z" />
                                                    </svg>
                                                    +91 98765 43210
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    class="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                        aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    9:00 AM - 6:00 PM
                                                </a>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>

                            <div
                                class="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden group border border-gray-100">

                                <div class="relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
                                        alt="Team Member"
                                        class="w-full h-80 object-cover group-hover:scale-105 transition duration-500" />
                                </div>

                                <div class="p-6 text-center">
                                    <h3 class="text-2xl font-bold text-gray-900">
                                        Amit Kumar
                                    </h3>

                                    <p class="text-green-600 font-medium mt-2">
                                        Operations Manager
                                    </p>

                                    <p class="text-gray-600 text-sm mt-4 leading-relaxed">
                                        <ul>
                                            <li>
                                                <a href="mailto:amit@example.com"
                                                    class="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                        aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                                                    </svg>
                                                    amit@example.com
                                                </a>
                                            </li>
                                            <li>
                                                <a href="tel:+919876543210"
                                                    class="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                        aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M3 5a2 2 0 0 1 2-2h2.5a1 1 0 0 1 .93.63l1.2 2.8a1 1 0 0 1-.2 1.02L8.4 10.6a12.04 12.04 0 0 0 5 5l2.2-1.6a1 1 0 0 1 1.02-.2l2.8 1.2A1 1 0 0 1 21 18.5V21a2 2 0 0 1-2 2h-0.5A19 19 0 0 1 3 5z" />
                                                    </svg>
                                                    +91 98765 43210
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    class="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                        aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    9:00 AM - 6:00 PM
                                                </a>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>

                            <div
                                class="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden group border border-gray-100">

                                <div class="relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
                                        alt="Team Member"
                                        class="w-full h-80 object-cover group-hover:scale-105 transition duration-500" />
                                </div>

                                <div class="p-6 text-center">
                                    <h3 class="text-2xl font-bold text-gray-900">
                                        Amit Kumar
                                    </h3>

                                    <p class="text-green-600 font-medium mt-2">
                                        Operations Manager
                                    </p>

                                    <p class="text-gray-600 text-sm mt-4 leading-relaxed">
                                        <ul>
                                            <li>
                                                <a href="mailto:amit@example.com"
                                                    class="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                        aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                                                    </svg>
                                                    amit@example.com
                                                </a>
                                            </li>
                                            <li>
                                                <a href="tel:+919876543210"
                                                    class="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                        aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M3 5a2 2 0 0 1 2-2h2.5a1 1 0 0 1 .93.63l1.2 2.8a1 1 0 0 1-.2 1.02L8.4 10.6a12.04 12.04 0 0 0 5 5l2.2-1.6a1 1 0 0 1 1.02-.2l2.8 1.2A1 1 0 0 1 21 18.5V21a2 2 0 0 1-2 2h-0.5A19 19 0 0 1 3 5z" />
                                                    </svg>
                                                    +91 98765 43210
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    class="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                        aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    9:00 AM - 6:00 PM
                                                </a>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>

                            <div
                                class="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden group border border-gray-100">

                                <div class="relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
                                        alt="Team Member"
                                        class="w-full h-80 object-cover group-hover:scale-105 transition duration-500" />
                                </div>

                                <div class="p-6 text-center">
                                    <h3 class="text-2xl font-bold text-gray-900">
                                        Amit Kumar
                                    </h3>

                                    <p class="text-green-600 font-medium mt-2">
                                        Operations Manager
                                    </p>

                                    <p class="text-gray-600 text-sm mt-4 leading-relaxed">
                                        <ul>
                                            <li>
                                                <a href="mailto:amit@example.com"
                                                    class="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                        aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                                                    </svg>
                                                    amit@example.com
                                                </a>
                                            </li>
                                            <li>
                                                <a href="tel:+919876543210"
                                                    class="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                        aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M3 5a2 2 0 0 1 2-2h2.5a1 1 0 0 1 .93.63l1.2 2.8a1 1 0 0 1-.2 1.02L8.4 10.6a12.04 12.04 0 0 0 5 5l2.2-1.6a1 1 0 0 1 1.02-.2l2.8 1.2A1 1 0 0 1 21 18.5V21a2 2 0 0 1-2 2h-0.5A19 19 0 0 1 3 5z" />
                                                    </svg>
                                                    +91 98765 43210
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    class="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                        aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    9:00 AM - 6:00 PM
                                                </a>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


            </main>
        </MainLayout>
    )
}
export default OurManagementTeam