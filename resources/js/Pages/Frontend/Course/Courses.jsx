import React, { useEffect, useState } from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head, Link, router, usePage } from '@inertiajs/react'

function Courses() {
    const { course, all_course, searchTerm } = usePage().props;
    const [search, setSearch] = useState(searchTerm);
    const [processing, setProcessing] = useState(false);

    const icons = [
        "💻", "🖥️", "⌨️", "🖱️", "📱",
        "🌐", "🛜", "☁️", "🧠", "🤖",
        "⚙️", "🛠️", "🔧", "🔩", "📡",
        "🚀", "🛰️", "💾", "💿", "📀",
        "🔒", "🔑", "🛡️", "🧪", "📊",
        "📈", "📉", "📚", "📖", "📝",
        "🎓", "🏆", "🎯", "💡", "🔬",
        "🧬", "🎨", "🖌️", "📷", "🎥",
        "🎬", "🎧", "🎤", "🎮", "🕹️",
        "📦", "🧩", "🗂️", "📂", "📁"
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setProcessing(true);
            if (search.trim() === "") return;
            router.get(route("courses.search"), { search }, { preserveState: true});
        }, 1500);

        return () => {
            clearTimeout(timer);
            setProcessing(false);
        };

    }, [search]);

    return (
        <MainLayout>
            <Head title="Courses" />
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
                                    SGCSM | Course
                                </span>

                                <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">
                                    Our Courses
                                </h1>

                            </div>

                        </div>
                    </div>
                </section>
                <section className="py-14 md:py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <section className="lg:col-span-12">
                                <div className="relative mb-8">
                                    <input
                                        type="text"
                                        placeholder="Search Courses..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-14 pr-5 text-gray-700 shadow-sm focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition"
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>

                                <div className="grid lg:grid-cols-12 gap-8">

                                    <aside className="lg:col-span-3">

                                        <div className="bg-white rounded-[30px] shadow-xl border border-gray-100 overflow-hidden">

                                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                                                <h2 className="text-3xl font-bold text-white">
                                                    Our Courses
                                                </h2>
                                            </div>

                                            <div className="p-5 h-[760px] overflow-y-auto space-y-4">
                                                {all_course?.map((item) => (
                                                    <Link
                                                        href={route('courses.show', { id: item.id, category: item.category })}
                                                        key={item.id}
                                                        className="w-full flex items-center justify-between bg-gradient-to-r from-slate-800 to-slate-700 text-white px-5 py-4 rounded-2xl font-semibold shadow-lg hover:scale-[1.02] transition"
                                                    >
                                                        <button>
                                                            <span>{item.short_name}</span>
                                                            <span>→</span>
                                                        </button>
                                                    </Link>
                                                ))}
                                            </div>

                                        </div>

                                    </aside>

                                    <main className="lg:col-span-9">
                                        {course ?

                                            <>
                                                <div
                                                    className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-8 lg:p-12 shadow-2xl mb-10">

                                                    <div className="relative z-10">

                                                        <span
                                                            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-medium mb-6">
                                                            🚀 Professional Certification Course
                                                        </span>

                                                        <h1 className="text-lg lg:text-5xl font-extrabold text-white leading-tight">
                                                            {course?.name.toUpperCase()}
                                                        </h1>

                                                        {/* <p className="text-blue-100 text-xl mt-5">
                                                    Learn modern web technologies with real-world projects and practical
                                                    training.
                                                </p> */}

                                                        <div className="flex flex-wrap gap-5 mt-10">

                                                            <div
                                                                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-5 min-w-[230px]">
                                                                <p className="text-blue-200 text-sm mb-1">
                                                                    Duration
                                                                </p>

                                                                <h3 className="text-white text-2xl font-bold">
                                                                    {course?.duration} MONTHS
                                                                </h3>
                                                            </div>

                                                            <div
                                                                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-5 min-w-[230px]">
                                                                <p className="text-blue-200 text-sm mb-1">
                                                                    Eligibility
                                                                </p>

                                                                <h3 className="text-white text-2xl font-bold">
                                                                    {course?.eligibility.toUpperCase()}
                                                                </h3>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                                <div>

                                                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
                                                        {course?.modules?.map((item, index) => {
                                                            const icon = icons[index % icons.length];

                                                            return (
                                                                <div
                                                                    key={index}
                                                                    className="group bg-white rounded-[28px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                                                                >
                                                                    <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
                                                                        {icon}
                                                                    </div>

                                                                    <h3 className="text-2xl font-bold text-slate-900 mb-5">
                                                                        {item.title.toUpperCase()}
                                                                    </h3>

                                                                    <ul className="space-y-3 text-gray-600 leading-relaxed">
                                                                        {item?.contents?.map((content, idx) => (
                                                                            <li key={idx}>
                                                                                • {content.content.toUpperCase()}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>

                                                </div>

                                            </>
                                            :
                                            <>
                                                <div
                                                    className="relative overflow-hidden rounded-[35px] p-8 lg:p-12 mb-10 bg-yellow-100 border border-yellow-400">
                                                    No Course Found!
                                                </div>
                                            </>
                                        }


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