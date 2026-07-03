import React, { useRef, useState } from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import InputError from '@/Components/InputError'


function StudentVerification() {
    const { student } = usePage().props;
    const [showDetails, setShowDetails] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        registration_no: '',
        center_code: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('student-verification.post'), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                reset();
                setShowDetails(true);
            },
        });
    }

    return (
        <MainLayout>
            <Head title="Student Verification" />

            <main className="bg-slate-50">
                {!showDetails &&
                    <>
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
                                            Student Details
                                        </span>

                                        <h1 className="mt-5 text-4xl md:text-5xl font-black leading-tight uppercase">
                                            Student Details
                                        </h1>
                                    </div>

                                </div>
                            </div>
                        </section>

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

                                                <input type="text" placeholder="Enter Registration number"
                                                    value={data.registration_no}
                                                    onChange={e => setData('registration_no', e.target.value.toUpperCase())}
                                                    className="w-full border border-gray-300 rounded-2xl px-6 py-5 pl-14 text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />

                                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">

                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">

                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />

                                                    </svg>

                                                </div>


                                            </div>
                                            <InputError message={errors.registration_no} className="mt-2" />

                                        </div>

                                        <div>

                                            <label className="block text-gray-800 font-semibold text-lg mb-4f py-3">
                                                Center Code :
                                            </label>

                                            <div className="relative">

                                                <input type="text" placeholder="Enter Center Code"
                                                    value={data.center_code}
                                                    onChange={e => setData('center_code', e.target.value.toUpperCase())}
                                                    className="w-full border border-gray-300 rounded-2xl px-6 py-5 pl-14 text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />

                                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">

                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">

                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />

                                                    </svg>

                                                </div>


                                            </div>
                                            <InputError message={errors.center_code} className="mt-2" />

                                        </div>

                                        <div>

                                            <button type="submit"
                                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg transition duration-300">

                                                Get Details

                                            </button>

                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>
                    </>
                }
                {showDetails &&
                    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
                        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-6 flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold">Student Verified</h2>
                                    <p className="text-green-100">
                                        SGCSM has verified the student details.
                                    </p>
                                </div>
                            </div>


                            <div className="p-8">

                                <div className="grid lg:grid-cols-4 gap-8">


                                    <div className="flex flex-col items-center">
                                        <img
                                            src={`/storage/${student.image}`}
                                            className="w-44 h-52 rounded-2xl border-4 border-gray-200 object-cover shadow-lg"
                                        />

                                        <div className="mt-5 bg-green-100 text-green-700 font-semibold px-5 py-2 rounded-full">
                                            VERIFIED
                                        </div>
                                    </div>


                                    <div className="lg:col-span-3">

                                        <div className="grid md:grid-cols-2 gap-5">

                                            <div className="border rounded-2xl p-5">
                                                <p className="text-sm text-gray-500">Registration No</p>
                                                <h4 className="font-bold text-lg mt-1">{student.registration_no}</h4>
                                            </div>

                                            <div className="border rounded-2xl p-5">
                                                <p className="text-sm text-gray-500">Student Name</p>
                                                <h4 className="font-bold text-lg mt-1">
                                                    {student.name.toUpperCase()}
                                                </h4>
                                            </div>

                                            <div className="border rounded-2xl p-5">
                                                <p className="text-sm text-gray-500">Father's Name</p>
                                                <h4 className="font-semibold mt-1">
                                                    {student.father_name.toUpperCase()}
                                                </h4>
                                            </div>

                                            <div className="border rounded-2xl p-5">
                                                <p className="text-sm text-gray-500">Date of Birth</p>
                                                <h4 className="font-semibold mt-1">
                                                    {student.date_of_birth}
                                                </h4>
                                            </div>

                                            <div className="border rounded-2xl p-5 md:col-span-2">
                                                <p className="text-sm text-gray-500">Course</p>
                                                <h4 className="font-semibold mt-1">
                                                    {student.course.name}
                                                </h4>
                                            </div>

                                            <div className="border rounded-2xl p-5">
                                                <p className="text-sm text-gray-500">Date Joined</p>
                                                <h4 className="font-semibold mt-1">
                                                    {student.date_joined}
                                                </h4>
                                            </div>

                                            <div className="border rounded-2xl p-5">
                                                <p className="text-sm text-gray-500">Center Name</p>

                                                {student.center_name}

                                            </div>

                                            <div className="border rounded-2xl p-5">
                                                <p className="text-sm text-gray-500">Center Code</p>
                                                <h4 className="font-semibold mt-1">
                                                    {student.center_code}
                                                </h4>
                                            </div>

                                            <div className="border rounded-2xl p-5">
                                                <p className="text-sm text-gray-500">Status</p>

                                                <span
                                                    className="inline-flex mt-2 bg-green-600 text-white px-5 py-2 rounded-full font-semibold">
                                                    Verified
                                                </span>
                                            </div>

                                        </div>

                                    </div>

                                </div>


                                <div
                                    className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-xl">
                                    <p className="text-sm text-gray-700">
                                        <strong>Note:</strong>
                                        If you need to update your registration or personal
                                        information, please contact us at <span className="font-semibold">sgcsmindia@gmail.com</span> or call <span className="font-semibold">8920206335</span>.
                                    </p>
                                </div>


                                <div className="text-center mt-8">
                                    <Link
                                        to="/student/verify-certificate"
                                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition text-white px-10 py-4 rounded-2xl font-semibold shadow-lg"
                                    >

                                        ← Verify Another Student
                                    </Link>

                                </div>

                            </div>

                        </div>
                    </div>
                }
            </main>
        </MainLayout>
    )
}

export default StudentVerification