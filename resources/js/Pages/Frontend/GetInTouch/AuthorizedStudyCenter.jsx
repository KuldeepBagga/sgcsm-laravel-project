import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function AuthorizedStudyCenter() {
    return (
        <MainLayout>
            <Head title="Authorized Study Center" />

            <main className="bg-slate-50">
                <section className="relative overflow-hidden bg-slate-950">
                    <img
                        src="/images/photo-1522202176988-66273c2fd55f.jpeg"
                        alt="Authorized Study Center"
                        className="absolute inset-0 w-full h-full object-cover opacity-35"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/85 to-slate-900/25"></div>

                    <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
                        <div className="grid lg:grid-cols-12 gap-10 items-end">
                            <div className="lg:col-span-8 text-white">
                                <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">
                                    <i className="fa-solid fa-building-columns"></i>
                                    Authorized Study Center
                                </span>

                                <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">
                                    Authorized Study Center
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-10">
                    {/* Filter Section */}
                    <div className="bg-white rounded-3xl shadow-xl border p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
                            <div className="lg:col-span-10">
                                <label className="block text-gray-700 font-semibold mb-3">
                                    Select State
                                </label>

                                <select className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                    <option>Uttar Pradesh</option>
                                    <option>Delhi</option>
                                    <option>Haryana</option>
                                    <option>Punjab</option>
                                    <option>Rajasthan</option>
                                    <option>Madhya Pradesh</option>
                                </select>
                            </div>

                            <div className="lg:col-span-2">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold shadow-lg transition duration-300">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="bg-white rounded-3xl shadow-xl border overflow-hidden mt-10">
                        {/* Table Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 p-6 border-b bg-gray-50">
                            <div className="flex items-center gap-3">
                                <span className="text-gray-600 font-medium">
                                    Show
                                </span>

                                <select className="border border-gray-300 rounded-xl px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>10</option>
                                    <option>25</option>
                                    <option>50</option>
                                </select>

                                <span className="text-gray-600 font-medium">
                                    entries
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <label className="text-gray-700 font-medium">
                                    Search:
                                </label>

                                <input
                                    type="text"
                                    placeholder="Search center..."
                                    className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
                                    <tr>
                                        <th className="px-6 py-5 text-left font-semibold">
                                            Center Code
                                        </th>

                                        <th className="px-6 py-5 text-left font-semibold">
                                            Center Name
                                        </th>

                                        <th className="px-6 py-5 text-left font-semibold">
                                            Director Name
                                        </th>

                                        <th className="px-6 py-5 text-left font-semibold">
                                            Status
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-blue-50 transition">
                                        <td className="px-6 py-5 font-semibold text-gray-900">
                                            UP-817
                                        </td>

                                        <td className="px-6 py-5 text-gray-700">
                                            Sagar Computer Institute
                                        </td>

                                        <td className="px-6 py-5 text-gray-700">
                                            SAGAR SRIVASTAVA
                                        </td>

                                        <td className="px-6 py-5">
                                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                                                Active
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-blue-50 transition">
                                        <td className="px-6 py-5 font-semibold text-gray-900">
                                            DL-104
                                        </td>

                                        <td className="px-6 py-5 text-gray-700">
                                            Bright Future Academy
                                        </td>

                                        <td className="px-6 py-5 text-gray-700">
                                            RAHUL SHARMA
                                        </td>

                                        <td className="px-6 py-5">
                                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                                                Active
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-blue-50 transition">
                                        <td className="px-6 py-5 font-semibold text-gray-900">
                                            HR-225
                                        </td>

                                        <td className="px-6 py-5 text-gray-700">
                                            Tech Vision Institute
                                        </td>

                                        <td className="px-6 py-5 text-gray-700">
                                            AMIT KUMAR
                                        </td>

                                        <td className="px-6 py-5">
                                            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-5 p-6 border-t bg-gray-50">
                            <div className="text-gray-600">
                                Showing 1 to 3 of 3 entries
                            </div>

                            <div className="flex items-center gap-3">
                                <button className="px-5 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transition">
                                    Previous
                                </button>

                                <button className="w-11 h-11 rounded-xl bg-blue-600 text-white font-semibold">
                                    1
                                </button>

                                <button className="px-5 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transition">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </MainLayout>
    )
}

export default AuthorizedStudyCenter