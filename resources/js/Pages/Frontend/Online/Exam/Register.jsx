import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import Toast from "@/Components/Toast";

function Register() {
    const { auth, user_data, flash, exam_register } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        user_id: auth?.user?.id
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.online.exam.regsiter.post'), {
            preserveScroll: true,
            preserveState: true,
        })
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {auth?.user?.roles?.includes('student') ? `SGCSM | Online Exam Register` : `Dashboard`}
                </h2>
            }
        >
            <Head title='Register Online Exam' />

            <form onSubmit={handleSubmit}>
                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
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
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

                                    <Toast message={flash.success} type="success" />
                                    <Toast message={flash.error} type="error" />

                                    {exam_register ?
                                        <Link className='inline-flex items-center justify-center rounded-md border border-transparent bg-gray-800 text-white font-semibold uppercase tracking-widest transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white  dark:focus:bg-white dark:active:bg-gray-300 dark:focus:ring-offset-gray-800 px-5 py-3 text-base'
                                            href={route('admin.online-exam-start')}
                                        >
                                            Start Exam
                                        </Link>
                                        :
                                        <PrimaryButton size={'lg'}>
                                            Apply For Online Exam
                                        </PrimaryButton>
                                    }

                                    <Link
                                        href={route('admin.dashboard')}
                                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        Go Back
                                    </Link>

                                    <InputError message={errors.user_id} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </AuthenticatedLayout>
    )
}

export default Register