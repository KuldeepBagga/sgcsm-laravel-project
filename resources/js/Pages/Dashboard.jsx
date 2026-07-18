import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { CardSim } from 'lucide-react';


export default function Dashboard() {
    const { auth, user_data } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {auth?.user?.roles?.includes('student') ? `SGCSM | Student Dashboard` : `Dashboard`}
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {auth.user.roles.includes('student') ?
                        <>
                            <div className="overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 mb-10">
                                <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                                    <div className="grid grid-cols-2 items-center">
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                                Student Information
                                            </h2>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Personal Details
                                            </p>
                                        </div>

                                        <div className="flex justify-end">
                                            <Link
                                                href={route('home')}
                                                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2 text-gray-700 shadow-sm transition hover:border-slate-500 hover:text-slate-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 3l9 7.5M5 9.5V21h14V9.5" />
                                                </svg>

                                                Go  Home
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <table className="w-full">
                                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">

                                            <tr>
                                                <td className="py-4 w-1/3 font-semibold text-gray-600 dark:text-gray-300">
                                                    Email
                                                </td>
                                                <td className="py-4 text-gray-800 dark:text-white">
                                                    {auth?.user?.email}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="py-4 font-semibold text-gray-600 dark:text-gray-300">
                                                    Mobile
                                                </td>
                                                <td className="py-4 text-gray-800 dark:text-white">
                                                    {user_data?.phone}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="py-4 font-semibold text-gray-600 dark:text-gray-300">
                                                    Registration No.
                                                </td>
                                                <td className="py-4">
                                                    <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                                                        {user_data?.registration_no}
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="py-4 font-semibold text-gray-600 dark:text-gray-300">
                                                    State
                                                </td>
                                                <td className="py-4 text-gray-800 dark:text-white">
                                                    {user_data?.state}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="py-4 font-semibold text-gray-600 dark:text-gray-300">
                                                    Course
                                                </td>
                                                <td className="py-4 text-gray-800 dark:text-white">
                                                    {user_data?.course?.name}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="py-4 font-semibold text-gray-600 dark:text-gray-300">
                                                    Center Name
                                                </td>
                                                <td className="py-4 text-gray-800 dark:text-white">
                                                    {user_data?.institute?.center_name}
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                                <div className="p-6 text-gray-900 dark:text-gray-100">
                                    <h3 className='text-2xl mb-3 px-2'>LINKS</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <a href={route('admin.online.exam.regsiter')} className="group bg-gradient-to-b from-slate-900 to-slate-800 text-slate border-2 border-slate-700 p-10 rounded-2xl transition duration-300 hover:border-slate-500">
                                            <div className="rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                                                <img src='/images/online-exam-icon.png' className='background-transparent' />
                                            </div>
                                            <h3 className="text-xl font-semibold text-slate-100">
                                                Online Exam
                                            </h3>
                                            <p className="text-gray-500 mt-2 text-sm">
                                                Start your online examination securely from anywhere.
                                            </p>
                                        </a>


                                        <a target='_blank' href={route('admin.print.icard', user_data?.registration_no)} className="group bg-gradient-to-b from-slate-900 to-slate-800 text-slate border-2 border-slate-700 p-10 rounded-2xl transition duration-300 hover:border-slate-500">
                                            <div className="rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                                                <img src='/images/print-icard-icon.png' className='background-transparent' />
                                            </div>
                                            <h3 className="text-xl font-semibold text-slate-100">
                                                Print Your I-Card
                                            </h3>
                                            <p className="text-gray-500 mt-2 text-sm">
                                                Get your icard online from any where.
                                            </p>
                                        </a>


                                        <a href="#" className="group bg-gradient-to-b from-slate-900 to-slate-800 text-slate border-2 border-slate-700 p-10 rounded-2xl transition duration-300 hover:border-slate-500">
                                            <div className="rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                                                <img src='/images/download-admit-card-icon.png' className='background-transparent' />
                                            </div>
                                            <h3 className="text-xl font-semibold text-slate-100">
                                                Get Your Admit Card
                                            </h3>
                                            <p className="text-gray-500 mt-2 text-sm">
                                                Get your Admit card online from any where.
                                            </p>
                                        </a>

                                        {/* <a href="#" className="group bg-gradient-to-b from-slate-900 to-slate-800 text-slate border-2 border-slate-700 p-10 rounded-2xl transition duration-300 hover:border-slate-500">
                                            <div className="rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                                                <img src='/images/start-exam-icon.png' className='background-transparent' />
                                            </div>
                                            <h3 className="text-xl font-semibold text-slate-100">
                                                Online Exam
                                            </h3>
                                            <p className="text-gray-500 mt-2 text-sm">
                                                Start your online examination securely from anywhere.
                                            </p>
                                        </a> */}

                                        <a href={route('home.certificate.index')} target='_blank' className="group bg-gradient-to-b from-slate-900 to-slate-800 text-slate border-2 border-slate-700 p-10 rounded-2xl transition duration-300 hover:border-slate-500">
                                            <div className="rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                                                <img src='/images/certificate-verification-icon.png' className='background-transparent' />
                                            </div>
                                            <h3 className="text-xl font-semibold text-slate-100">
                                                Get Your Certificate Verified
                                            </h3>
                                            <p className="text-gray-500 mt-2 text-sm">
                                                Get your certificate verified from any where.
                                            </p>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </>
                        : <>admin or franchise</>}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
