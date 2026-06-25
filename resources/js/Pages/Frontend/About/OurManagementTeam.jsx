import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head, usePage } from '@inertiajs/react'

function OurManagementTeam() {
    const { our_team } = usePage().props;
    return (
        <MainLayout>
            <Head title="Our Management Team" />

            <main className="bg-slate-50">
                <section className="relative overflow-hidden bg-slate-950">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-35"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/85 to-slate-900/25"></div>

                    <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
                        <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold text-white">
                            <i className="fa-solid fa-building-columns"></i>
                            SGCSM | Our Team
                        </span>

                        <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase text-white">
                            Our Management Team
                        </h1>
                    </div>
                </section>

                <section className="py-10 bg-gray-50">
                    {our_team && our_team.length > 0 ? (
                        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                            {our_team.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition overflow-hidden group border border-gray-100"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={`/storage/${item.image}`}
                                            alt={item.name}
                                            className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                                        />
                                    </div>

                                    <div className="p-6 text-center">
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            {item.name}
                                        </h3>

                                        <p className="text-green-600 font-medium mt-2">
                                            {item.designation}
                                        </p>

                                        <ul className="text-sm text-gray-600 mt-4 space-y-2">
                                            <li>
                                                <a
                                                    href={`mailto:${item.email}`}
                                                    className="flex items-center justify-center gap-2 hover:text-blue-600"
                                                >
                                                    📧 {item.email}
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href={`tel:+91${item.phone}`}
                                                    className="flex items-center justify-center gap-2 hover:text-blue-600"
                                                >
                                                    📞 +91 {item.phone}
                                                </a>
                                            </li>

                                            <li className="flex items-center justify-center gap-2">
                                                🕒 9:00 AM - 6:00 PM
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}

                        </div>
                    ) : (
                        <div className="max-w-7xl mx-auto bg-yellow-100 p-4 font-semibold text-gray-700 border border-yellow-200 rounded-md">
                            No Record Found!
                        </div>
                    )}
                </section>
            </main>
        </MainLayout>
    )
}
export default OurManagementTeam