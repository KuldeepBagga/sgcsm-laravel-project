import React, { useState } from 'react'
import MainLayout from '../../../Layouts/MainLayout'
import { Head, Link, router, useForm, usePage } from '@inertiajs/react'
import InputError from '@/Components/InputError'

function ValidityAuthorization() {
    const { certificate } = usePage().props;
    console.log(certificate);

    const [show, setShow] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        certificate_no: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('validity-authorization.post'), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                reset()
                setShow(true)
            },
            onError: () => setShow(false)
        });
    }

    return (
        <MainLayout>
            <Head title="Validity and Authorization" />

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
                                    SGCSM | Validity And Authorization
                                </span>

                                <h1 className="mt-5 text-4xl md:text-5xl font-black leading-tight uppercase">
                                    Validity And Authorization
                                </h1>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="py-14 md:py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        {!show &&
                            <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-10">
                                <form className="space-y-6" onSubmit={handleSubmit}>

                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-3">
                                            Certificate Number
                                        </label>

                                        <div className="relative">

                                            <input
                                                type="text"
                                                value={data.certificate_no}
                                                onChange={(e) => setData('certificate_no', e.target.value)}
                                                placeholder="Enter Certificate Number"
                                                className="w-full rounded-2xl border border-gray-300 pl-14 pr-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                            />

                                            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    />
                                                </svg>

                                            </div>

                                        </div>

                                        <InputError message={errors.certificate_no} className="mt-2" />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 transition duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        Get Details
                                    </button>

                                </form>
                            </div>
                        }

                        {show &&
                            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

                                <div className="overflow-x-auto">

                                    <table className="w-full">

                                        <thead className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                                            <tr>
                                                <th className="px-6 py-4 text-left font-semibold">Certificate No</th>
                                                <th className="px-6 py-4 text-left font-semibold">Director</th>
                                                <th className="px-6 py-4 text-left font-semibold">Center Name</th>
                                                <th className="px-6 py-4 text-left font-semibold">Issue Date</th>
                                                <th className="px-6 py-4 text-left font-semibold">Expiry Date</th>
                                                <th className="px-6 py-4 text-left font-semibold">District</th>
                                                <th className="px-6 py-4 text-center font-semibold">Status</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            <tr className="border-b hover:bg-indigo-50 transition">

                                                <td className="px-6 py-5 font-semibold text-indigo-600">
                                                    {certificate?.certificate_number}
                                                </td>

                                                <td className="px-6 py-5 text-gray-700">
                                                    {certificate?.institute?.director.toUpperCase()}
                                                </td>

                                                <td className="px-6 py-5">
                                                    <div>
                                                        <p className="font-semibold text-gray-800">
                                                            {certificate?.institute?.center_name.toUpperCase()}
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            Authorized Study Center
                                                        </p>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-5 text-gray-600">
                                                    {certificate?.issue_date}
                                                </td>

                                                <td className="px-6 py-5 text-gray-600">
                                                    {certificate?.expire_date}
                                                </td>

                                                <td className="px-6 py-5">
                                                    <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
                                                        {certificate?.institute?.district}
                                                    </span>
                                                </td>

                                                <td className="px-6 py-5 text-center">
                                                    {certificate?.status === "ACTIVE" ?
                                                        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                                                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                                                            {certificate?.status.toUpperCase()}
                                                        </span>
                                                        :
                                                        <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-700">
                                                            <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
                                                            {certificate?.status.toUpperCase()}
                                                        </span>
                                                    }

                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                    <div className="flex justify-center items-center py-5">
                                        <Link
                                            href={route('validity-authorization.index')}
                                            type="button"
                                            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-3 text-white font-semibold shadow-lg hover:from-indigo-700 hover:to-blue-700 hover:shadow-xl"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 19l-7-7 7-7"
                                                />
                                            </svg>

                                            Go Back
                                        </Link>
                                    </div>


                                </div>

                            </div>
                        }

                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export default ValidityAuthorization