import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function Contact() {
    return (
        <MainLayout>
            <Head title="Contact" />
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
                                        SGCSM | Contact
                                    </span>

                                    <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">
                                        Contact Us
                                    </h1>

                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="max-w-7xl mx-auto px-6 py-16">

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                            {/* Contact Details */}
                            <div className="lg:col-span-2 space-y-8">

                                {/* Head Office */}
                                <div className="bg-white rounded-[30px] shadow-xl border overflow-hidden">

                                    {/* Header */}
                                    <div className="bg-gradient-to-r from-blue-700 to-indigo-700 px-8 py-5">

                                        <h2 className="text-3xl font-bold text-white">
                                            Head Office
                                        </h2>

                                    </div>

                                    {/* Content */}
                                    <div className="p-8 space-y-6">

                                        {/* Delhi */}
                                        <div className="flex items-start gap-5">

                                            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-7 h-7 text-blue-600"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >

                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                                                    />

                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />

                                                </svg>

                                            </div>

                                            <div>

                                                <h3 className="text-2xl font-bold text-gray-900">
                                                    Delhi
                                                </h3>

                                                <p className="text-gray-600 text-lg mt-2">
                                                    Main Administrative Office
                                                </p>

                                            </div>

                                        </div>

                                        {/* Contacts */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                            <div className="border rounded-2xl p-6">

                                                <p className="text-gray-500 text-sm">
                                                    Contact Person
                                                </p>

                                                <h4 className="text-xl font-bold text-gray-900 mt-2">
                                                    Babita
                                                </h4>

                                                <p className="text-blue-600 font-semibold text-lg mt-2">
                                                    8010819359
                                                </p>

                                            </div>

                                            <div className="border rounded-2xl p-6">

                                                <p className="text-gray-500 text-sm">
                                                    Contact Person
                                                </p>

                                                <h4 className="text-xl font-bold text-gray-900 mt-2">
                                                    Raj
                                                </h4>

                                                <p className="text-blue-600 font-semibold text-lg mt-2">
                                                    8920206335
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* Coordinators */}
                                <div className="bg-white rounded-[30px] shadow-xl border overflow-hidden">

                                    {/* Header */}
                                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-5">

                                        <h2 className="text-3xl font-bold text-white">
                                            Our Coordinators
                                        </h2>

                                    </div>

                                    {/* Content */}
                                    <div className="p-8 space-y-6">

                                        {/* Coordinator */}
                                        <div className="border rounded-2xl p-6 hover:shadow-lg transition">

                                            <h3 className="text-xl font-bold text-gray-900">
                                                HP State Coordinator
                                            </h3>

                                            <p className="text-green-600 font-semibold text-lg mt-3">
                                                8010819359
                                            </p>

                                        </div>

                                        {/* Coordinator */}
                                        <div className="border rounded-2xl p-6 hover:shadow-lg transition">

                                            <h3 className="text-xl font-bold text-gray-900">
                                                UP Distt Coordinator (SULTANPUR)
                                            </h3>

                                            <p className="text-green-600 font-semibold text-lg mt-3">
                                                Mr. Narendra Kumar — 8010819359
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* Right Sidebar */}
                            <div className="space-y-8">

                                {/* Email Card */}
                                <div className="bg-white rounded-[30px] shadow-xl border overflow-hidden">

                                    {/* Header */}
                                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-5">

                                        <h2 className="text-3xl font-bold text-white">
                                            Email Us
                                        </h2>

                                    </div>

                                    {/* Content */}
                                    <div className="p-8">

                                        <div className="space-y-6">

                                            {/* Official Email */}
                                            <div className="flex items-start gap-5">

                                                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center shrink-0">

                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-7 h-7 text-purple-600"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >

                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M16 12H8m8 0l-8-8m8 8l-8 8"
                                                        />

                                                    </svg>

                                                </div>

                                                <div>

                                                    <p className="text-gray-500 text-sm">
                                                        Official Email
                                                    </p>

                                                    <h3 className="text-lg font-bold text-gray-900 mt-2 break-all">
                                                        info@sgcsmindia.org
                                                    </h3>

                                                </div>

                                            </div>

                                            {/* Support Email */}
                                            <div className="flex items-start gap-5">

                                                <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center shrink-0">

                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-7 h-7 text-pink-600"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >

                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M16 12H8m8 0l-8-8m8 8l-8 8"
                                                        />

                                                    </svg>

                                                </div>

                                                <div>

                                                    <p className="text-gray-500 text-sm">
                                                        Support Email
                                                    </p>

                                                    <h3 className="text-lg font-bold text-gray-900 mt-2 break-all">
                                                        infosgcsm@gmail.com
                                                    </h3>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                </div>

            </main>
        </MainLayout>
    )
}

export default Contact