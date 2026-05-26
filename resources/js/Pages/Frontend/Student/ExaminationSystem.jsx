import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function ExaminationSystem() {
    return (
        <MainLayout>
            <Head title="Examination System" />
            <main className="bg-slate-50">

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-slate-950">

                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop"
                        alt="Examination System"
                        className="absolute inset-0 w-full h-full object-cover opacity-35"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/85 to-slate-900/25"></div>

                    <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">

                        <div className="grid lg:grid-cols-12 gap-10 items-end">

                            <div className="lg:col-span-8 text-white">

                                <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">

                                    <i className="fa-solid fa-building-columns"></i>

                                  SGCSM | Examination System

                                </span>

                                <h1 className="mt-5 text-4xl md:text-5xl font-black leading-tight uppercase">
                                    Examination System
                                </h1>

                            </div>

                        </div>

                    </div>

                </section>

                {/* Cards Section */}
                <section className="pb-16 pt-14">

                    <div className="max-w-6xl mx-auto px-6">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                            {/* Online Exam Card */}
                            <div className="bg-white rounded-[30px] shadow-xl overflow-hidden border hover:-translate-y-2 hover:shadow-2xl transition duration-300">

                                {/* Image */}
                                <div className="relative">

                                    <img
                                        src="images/741af7f2-9567-47b3-980e-348d48dff4b6.jpg"
                                        alt="Online Examination"
                                        className="w-full h-72 object-cover"
                                    />

                                    {/* Badge */}
                                    <div className="absolute top-5 left-5 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        Online Mode
                                    </div>

                                </div>

                                {/* Content */}
                                <div className="p-8">

                                    <h2 className="text-3xl font-bold text-gray-900">
                                        Online Examination
                                    </h2>

                                    <p className="text-gray-600 mt-5 text-lg leading-relaxed">

                                        <span className="font-semibold text-gray-900">
                                            Online Examinations
                                        </span>{" "}

                                        are conducted at assigned study centers through a computer-based
                                        platform. The process is designed to provide a secure,
                                        efficient, and technology-driven assessment experience for students.

                                    </p>

                                    {/* Features */}
                                    <div className="mt-8 space-y-4">

                                        <div className="flex items-center gap-4">

                                            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                                ✓
                                            </div>

                                            <p className="text-gray-700">
                                                Computer Based Examination
                                            </p>

                                        </div>

                                        <div className="flex items-center gap-4">

                                            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                                ✓
                                            </div>

                                            <p className="text-gray-700">
                                                Secure & Fast Evaluation
                                            </p>

                                        </div>

                                        <div className="flex items-center gap-4">

                                            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                                ✓
                                            </div>

                                            <p className="text-gray-700">
                                                Technology Driven Process
                                            </p>

                                        </div>

                                    </div>

                                    {/* Button */}
                                    <div className="mt-10">

                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg transition"
                                        >

                                            Login

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >

                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 5l7 7-7 7"
                                                />

                                            </svg>

                                        </a>

                                    </div>

                                </div>

                            </div>

                            {/* Offline Exam Card */}
                            <div className="bg-white rounded-[30px] shadow-xl overflow-hidden border hover:-translate-y-2 hover:shadow-2xl transition duration-300">

                                {/* Image */}
                                <div className="relative">

                                    <img
                                        src="images/d9e63847-9c20-4865-b69e-2bcbdeb89660.jpg"
                                        alt="Offline Examination"
                                        className="w-full h-72 object-cover"
                                    />

                                    {/* Badge */}
                                    <div className="absolute top-5 left-5 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        Offline Mode
                                    </div>

                                </div>

                                {/* Content */}
                                <div className="p-8">

                                    <h2 className="text-3xl font-bold text-gray-900">
                                        Offline Examination
                                    </h2>

                                    <p className="text-gray-600 mt-5 text-lg leading-relaxed">

                                        <span className="font-semibold text-gray-900">
                                            Offline Examinations
                                        </span>{" "}

                                        are conducted at assigned study centers in a controlled
                                        environment. Evaluation is based on written theory papers
                                        designed to assess the student's understanding of course subjects.

                                    </p>

                                    {/* Features */}
                                    <div className="mt-8 space-y-4">

                                        <div className="flex items-center gap-4">

                                            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                                                ✓
                                            </div>

                                            <p className="text-gray-700">
                                                Written Theory Examination
                                            </p>

                                        </div>

                                        <div className="flex items-center gap-4">

                                            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                                                ✓
                                            </div>

                                            <p className="text-gray-700">
                                                Controlled Examination Environment
                                            </p>

                                        </div>

                                        <div className="flex items-center gap-4">

                                            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                                                ✓
                                            </div>

                                            <p className="text-gray-700">
                                                Subject Understanding Assessment
                                            </p>

                                        </div>

                                    </div>

                                    {/* Button */}
                                    <div className="mt-10">

                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg transition"
                                        >

                                            View Details

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >

                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 5l7 7-7 7"
                                                />

                                            </svg>

                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </main>
        </MainLayout>
    )
}

export default ExaminationSystem