import React, { useEffect, useState } from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head, Link, router, usePage } from '@inertiajs/react'

function Courses() {
    const { courses, searchTerm } = usePage().props;
    const [search, setSearch] = useState(searchTerm);
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProcessing(true);
            if (search.trim() === "") return;
            router.get(route("courses.search"), { search }, { preserveState: true });
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

                                    <div className="lg:col-span-12">

                                        <div className="mb-6">
                                            <h2 className="text-3xl font-bold">
                                                Search Results
                                            </h2>

                                            <p className="text-gray-500 mt-2">
                                                {courses.length} course(s) found
                                                {/* {search && <> for <span className="font-semibold">"{search}"</span></>} */}
                                            </p>
                                        </div>

                                        {courses.length > 0 ? (
                                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
                                                {courses.map((course) => (
                                                    <Link
                                                        key={course.id}
                                                        href={route('courses.show', {
                                                            id: course.id,
                                                            category: course.category,
                                                        })}
                                                        className="group bg-white rounded-3xl p-7 border border-gray-200 shadow-sm hover:shadow-xl transition"
                                                    >
                                                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600">
                                                            {course.name.toUpperCase()}
                                                        </h3>

                                                        <div className="mt-5 space-y-2 text-gray-600">
                                                            <p>
                                                                <i className="fa-solid fa-clock text-blue-500 mr-2"></i>
                                                                Duration: {course.duration} Months
                                                            </p>

                                                            <p>
                                                                <i className="fa-solid fa-user-graduate text-green-500 mr-2"></i>
                                                                Eligibility: {course.eligibility}
                                                            </p>
                                                        </div>

                                                        <div className="mt-6 text-blue-600 font-semibold">
                                                            View Details →
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="bg-white rounded-3xl border border-dashed border-gray-300 py-20 text-center">
                                                <i className="fa-solid fa-magnifying-glass text-6xl text-gray-300"></i>

                                                <h3 className="text-3xl font-bold mt-6">
                                                    No courses found
                                                </h3>

                                                <p className="text-gray-500 mt-3">
                                                    Try searching with a different keyword.
                                                </p>
                                            </div>
                                        )}

                                    </div>

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