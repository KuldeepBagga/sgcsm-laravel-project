import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import InputError from "@/Components/InputError";

function OnlineAdmitCard() {

    const { student } = usePage().props;

    console.log(student);


    const { data, setData, post, processing, progress, reset, errors } = useForm({
        registration_no: 'SGCSM/IND/0001'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('online-admit-card.show'), {
            preserveScroll: true,
        })
    }

    return (
        <MainLayout>
            <Head title="Online Admit Card" />
            <main className="bg-slate-50">
                <section className="relative overflow-hidden bg-slate-950">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop"
                        alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />

                    <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
                        <div className="grid lg:grid-cols-12 gap-10 items-end">
                            <div className="lg:col-span-8 text-white">
                                <span
                                    className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">
                                    <i className="fa-solid fa-building-columns"></i>
                                    SGCSM | Online Exam Card
                                </span>
                                <h1 className="mt-5 text-4xl md:text-5xl font-black leading-tight uppercase">
                                    Online Exam Card
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className="bg-gradient-to-br flex items-center justify-center px-6 py-12">
                    <div className={`w-full max-w-5xl  ${!student && "rounded-[35px] shadow-2xl bg-white"} overflow-hidden`}>
                        {student &&
                            <>
                                <div className="overflow-x-auto rounded-xl">
                                    <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
                                        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 uppercase text-xs">
                                            <tr>
                                                <th className="px-6 py-4 font-semibold">Student Name</th>
                                                <th className="px-6 py-4 font-semibold">Registration No</th>
                                                <th className="px-6 py-4 font-semibold text-center">Action</th>
                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
                                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                    {student?.name}
                                                </td>

                                                <td className="px-6 py-4">
                                                    {student?.registration_no}
                                                </td>

                                                <td className="px-6 py-4 text-center">
                                                    <a
                                                        target='_blank'
                                                        href={route('online-admit-card.display', {registration_no: student?.registration_no})}
                                                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm"
                                                    >
                                                        View
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>


                                </div>

                                <div className='flex justify-center mt-3'>
                                    <Link href={route('online-admit-card')} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm">
                                        Go Back
                                    </Link>
                                </div>
                            </>
                        }
                        {!student &&
                            <div className="p-8 md:p-14">
                                <>
                                    <form className="space-y-8" onSubmit={handleSubmit}>
                                        <div>
                                            <label className="block text-gray-800 font-semibold text-lg mb-4f py-3">
                                                Enrollment No :
                                            </label>
                                            <div className="relative">
                                                <input type="text" placeholder="Enter Enrollment number"
                                                    value={data.registration_no}
                                                    onChange={(e) => setData('registration_no', e.target.value)}
                                                    className="w-full border border-gray-300 rounded-2xl px-6 py-5 pl-14 text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <InputError message={errors.registration_no} className="mt-3" />
                                        </div>
                                        <div>
                                            <button type="submit"
                                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg transition duration-300">
                                                Get Details
                                            </button>
                                        </div>
                                    </form>
                                </>

                            </div>
                        }
                    </div>
                </div>
            </main>
        </MainLayout>
    )
}

export default OnlineAdmitCard