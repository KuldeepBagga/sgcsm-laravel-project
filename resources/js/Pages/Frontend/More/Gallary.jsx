import React, { useState } from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head, usePage } from '@inertiajs/react'
import { X } from "lucide-react";

function Gallary() {

    const { gallery } = usePage().props;

    const [selectedImage, setSelectedImage] = useState(null);

    const publications = gallery?.map(item => {
        return {
            image: `/storage/${item.image}`,
            title: ''
        }
    }) || [];

    return (
        <MainLayout>
            <Head title="Our Gallery" />

            <main className="bg-slate-50">
                <section className="relative overflow-hidden bg-slate-950">
                    <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop"
                        alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/85 to-slate-900/40"></div>

                    <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
                        <div className="max-w-3xl text-white">
                            <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">
                                <i className="fa-solid fa-book-open"></i>
                                SGCSM | Gallery
                            </span>
                            <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">Our Gallery</h1>
                        </div>
                    </div>
                </section>

                <section className="py-14 md:py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                            <div>
                                <p className="text-sm font-bold text-blue-700 uppercase">Publication Gallery</p>
                                <h2 className="mt-2 text-3xl md:text-4xl font-black text-slate-900">Click Any Image To Preview</h2>
                            </div>
                            <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
                                <i className="fa-solid fa-magnifying-glass-plus text-blue-600"></i>
                                Popup image viewer
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {publications.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(item.image)}
                                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close Button */}
                    <button
                        className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-red-500 transition"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={28} />
                    </button>

                    {/* Image */}
                    <img
                        src={selectedImage}
                        alt="Preview"
                        className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </MainLayout>
    )
}

export default Gallary