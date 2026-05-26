import React, { useState } from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'
import { X } from "lucide-react";

function Gallary() {

    const [selectedImage, setSelectedImage] = useState(null);

    const publications = [
        {
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
            title: "Computer Education Prospectus",
        },
        {
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
            title: "Training Program Brochure",
        },
        {
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop",
            title: "Center Affiliation Manual",
        },
        {
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
            title: "Annual Activity Report",
        },
        {
            image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format&fit=crop",
            title: "Student Notice Circular",
        },
        {
            image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop",
            title: "Skill Development Magazine",
        },
        {
            image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop",
            title: "Examination Guidelines",
        },
        {
            image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
            title: "Digital Learning Handbook",
        },
    ];


    return (
        <MainLayout>
            <Head title="Our Gallery" />

            <main class="bg-slate-50">
                <section class="relative overflow-hidden bg-slate-950">
                    <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop"
                        alt="" class="absolute inset-0 w-full h-full object-cover opacity-30" />
                    <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/85 to-slate-900/40"></div>

                    <div class="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
                        <div class="max-w-3xl text-white">
                            <span class="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">
                                <i class="fa-solid fa-book-open"></i>
                                SGCSM | Gallery
                            </span>
                            <h1 class="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">Our Gallery</h1>
                        </div>
                    </div>
                </section>

                <section class="py-14 md:py-16">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                            <div>
                                <p class="text-sm font-bold text-blue-700 uppercase">Publication Gallery</p>
                                <h2 class="mt-2 text-3xl md:text-4xl font-black text-slate-900">Click Any Image To Preview</h2>
                            </div>
                            <div class="inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
                                <i class="fa-solid fa-magnifying-glass-plus text-blue-600"></i>
                                Popup image viewer
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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