import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function PublicNotice() {
    return (
        <MainLayout>
            <Head title="Public Notice" />
            <main className="bg-slate-50">

                <div className="bg-gray-100 min-h-screen">

                    <section className="relative overflow-hidden bg-slate-950">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop"
                            alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/85 to-slate-900/25"></div>

                        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
                            <div className="grid lg:grid-cols-12 gap-10 items-end">
                                <div className="lg:col-span-8 text-white">
                                    <span
                                        className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">
                                        <i className="fa-solid fa-building-columns"></i>
                                        SGCSM | Public Notice
                                    </span>

                                    <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">
                                        Public Notice
                                    </h1>

                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Notices Section */}
                    <section className="max-w-7xl mx-auto px-6 py-16">

                        {/* Top Bar */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

                            <div>

                                <h2 className="text-4xl font-bold text-gray-900">
                                    Latest Notices
                                </h2>

                                <p className="text-gray-600 text-lg mt-2">
                                    Important information for students, institutes, and study centers.
                                </p>

                            </div>

                        </div>

                        {/* Notice Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                            {/* Notice cards commented properly */}

                            {/*
                <div className="bg-white rounded-[30px] shadow-xl border overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300">
                    Card Content
                </div>
                */}

                        </div>

                    </section>

                </div>

            </main>
        </MainLayout>
    )
}

export default PublicNotice