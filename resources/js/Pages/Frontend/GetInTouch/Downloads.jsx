import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head, Link } from '@inertiajs/react'

function Downloads() {
    return (
        <MainLayout>
            <Head title="Downloads" />

            <main className="bg-slate-50">
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
                                    SGCSM | Downloads
                                </span>

                                <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">
                                    Downloads
                                </h1>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="max-w-5xl mx-auto px-6 py-10">
                    <div className="bg-white rounded-3xl shadow-lg border overflow-hidden">

                        <div className="flex items-center justify-between p-5 border-b hover:bg-gray-50 transition">
                            <div className="flex items-center gap-4">

                                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M7 7V3h10v4m-5 4v8m0 0l-3-3m3 3l3-3" />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Admission Form.pdf
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        PDF • 1.2 MB
                                    </p>
                                </div>

                            </div>

                            <a href="/images/Student_Admission_Form.pdf"
                                download='/images/Student_Admission_Form.pdf'
                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-medium transition">
                                Download
                            </a>
                        </div>

                        <div className="flex items-center justify-between p-5 border-b hover:bg-gray-50 transition">
                            <div className="flex items-center gap-4">

                                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M7 7V3h10v4m-5 4v8m0 0l-3-3m3 3l3-3" />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Prospectus.docx
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        DOCX • 850 KB
                                    </p>
                                </div>

                            </div>

                            <a href="/images/Voucher2.pdf"
                                download="/images/Voucher2.pdf"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-medium transition">
                                Download
                            </a>
                        </div>

                        <div className="flex items-center justify-between p-5 hover:bg-gray-50 transition">
                            <div className="flex items-center gap-4">

                                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M7 7V3h10v4m-5 4v8m0 0l-3-3m3 3l3-3" />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Course Syllabus.zip
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        ZIP • 5.4 MB
                                    </p>
                                </div>

                            </div>

                            <a href="/images/c6a87cf1-98a3-45eb-9b15-791f3701f796.pdf"
                                download="/images/c6a87cf1-98a3-45eb-9b15-791f3701f796.pdf"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-medium transition">
                                Download
                            </a>
                        </div>

                    </div>

                </section>
            </main>

        </MainLayout>
    )
}

export default Downloads