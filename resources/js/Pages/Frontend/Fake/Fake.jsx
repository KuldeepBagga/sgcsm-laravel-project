import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function Fake() {
    return (
        <MainLayout>
            <Head title="Fake SGCSM" />
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
                                    SGCSM | FAKE
                                </span>

                                <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">
                                    Fake SGCSM
                                </h1>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="py-14 md:py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                            <section className="lg:col-span-12">

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                    <div className="lg:col-span-8 text-lg">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-2">BEWARE OF FAKE SGCSM</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            "(SGCSM) Sanjay Gandhi Computer Saksharta Mission H.O Delhi are the Registered and One and only Owner of the name "(SGCSM) Sanjay Gandhi Computer Saksharta Mission)" & have got registered trademark & copyright in the name of "(SGCSM) Sanjay Gandhi Computer Saksharta Mission As per law, no person or organization can use the Name "(SGCSM) Sanjay Gandhi Computer Saksharta Mission " in any form, without the prior permission from our organization. Below mentioned are the listed of Fake Organizations using the Name of Sanjay Gandhi illegally.
                                        </p>
                                    </div>
                                    <div className="lg:col-span-4">
                                        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop"
                                            alt="Students learning on computers" loading="lazy"
                                            className="w-full h-auto rounded-lg shadow-lg" />
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export default Fake