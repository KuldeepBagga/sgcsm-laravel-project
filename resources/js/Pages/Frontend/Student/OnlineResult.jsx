import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import InputError from '@/components/InputError'

function OnlineResult() {
    const { result_details } = usePage().props;

    console.log(result_details);

    const { data, setData, post, processing, errors, reset } = useForm({
        registration_no: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('online-result.post'), {
            preserveState: true,
            onSuccess: () => {
                reset('registration_no')
            }
        });
    };

    return (
        <MainLayout>
            <Head title="Online Result" />
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
                                    SGCSM | Online Result
                                </span>
                                <h1 className="mt-5 text-4xl md:text-5xl font-black leading-tight uppercase">
                                    Online Result
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>


                {result_details ? (
                    <div className="container mx-auto max-w-4xl py-20 px-4">
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">

                            {/* Header */}
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5">
                                <h2 className="text-2xl font-bold text-white">
                                    Your Result
                                </h2>
                                <p className="text-blue-100 text-sm mt-1">
                                    View your examination result below
                                </p>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                                Registration No
                                            </th>
                                            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t hover:bg-blue-50 transition duration-200">
                                            <td className="px-6 py-5 font-medium text-gray-800">
                                                {result_details.registration_no}
                                            </td>
                                            <td className="px-6 py-5 text-center">
                                                <button
                                                    type='button'
                                                    onClick={() => window.open(route('display-online-result.get', result_details.id), '_blank')}
                                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300">
                                                    View Result
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Footer */}
                            <div className="bg-gray-50 border-t px-6 py-4 flex justify-center">
                                <Link href={route('online-result')}>
                                    <button className="bg-white border border-gray-300 hover:border-blue-500 hover:text-blue-600 px-6 py-2.5 rounded-lg font-medium shadow-sm transition-all duration-300">
                                        ← Go Back
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                )
                    :
                    (


                        <div
                            className="bg-gradient-to-br flex items-center justify-center px-6 py-12">
                            <div className="w-full max-w-5xl bg-white rounded-[35px] shadow-2xl overflow-hidden">
                                <div className="p-8 md:p-14">
                                    <form className="space-y-8" onSubmit={handleSubmit}>
                                        <div>
                                            <label className="block text-gray-800 font-semibold text-lg mb-4f py-3">
                                                Registration No :
                                            </label>
                                            <div className="relative">
                                                <input type="text"
                                                    onChange={(e) => setData('registration_no', e.target.value)}
                                                    placeholder="Enter Registration number"
                                                    className="w-full border border-gray-300 rounded-2xl px-6 py-5 pl-14 text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />

                                                    </svg>
                                                </div>
                                            </div>
                                            <InputError
                                                message={errors.registration_no}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div>
                                            <button 
                                                type="submit"
                                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg transition duration-300">
                                                Get Details
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    )}





            </main>
        </MainLayout>
    )
}

export default OnlineResult