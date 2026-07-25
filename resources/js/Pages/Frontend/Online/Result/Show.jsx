import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import Toast from "@/Components/Toast";
import PrimaryButton from "@/Components/PrimaryButton";

function show() {
    const { flash, exam_result } = usePage().props;

    console.log(exam_result);
    const percentage = ((exam_result.correct_answer_count / exam_result.question_count) * 100).toFixed(0);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    SGCSM | Online Exam Result
                </h2>
            }
        >
            <Head title="Online Exam Result" />


            <Toast message={flash.success} type="success" />
            <Toast message={flash.error} type="error" />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
                            <div className="text-center py-5">
                                <h1 className="text-4xl font-bold text-red-600">
                                    {percentage ? percentage : <>N/A</>}
                                </h1>

                                <h2 className="text-2xl font-semibold text-slate-50 mt-2">
                                    YOU ARE
                                    <span className="text-red-600"> QUALIFIED </span>
                                    WITH
                                    <span className="text-red-600"> THIRD DIVISION</span>
                                </h2>
                            </div>

                            <div className="bg-slate-800 p-3 flex gap-6">

                                {/* Student Image */}
                                <div className="w-40 flex justify-center items-start">
                                    <img
                                        src={`/storage/${exam_result?.student?.image}`}
                                        className="w-28 h-36 object-cover border-2 border-white shadow"
                                    />
                                </div>


                                {/* Details Table */}
                                <div className="flex-1">

                                    <div className="grid grid-cols-3 border-b border-gray-700 bg-slate-800 text-slate-100">
                                        <div className="p-4 font-medium text-gray-100">
                                            INSTITUTE/CENTER
                                        </div>
                                        <div className="p-4 col-span-2 text-gray-100">
                                            {exam_result?.institute?.center_name}
                                        </div>
                                    </div>


                                    <div className="grid grid-cols-3 border-b border-gray-700 bg-slate-800 text-slate-100">
                                        <div className="p-4 font-medium text-gray-100">
                                            STUDENT NAME
                                        </div>
                                        <div className="p-4 col-span-2 text-gray-100">
                                            {exam_result?.student?.name}
                                        </div>
                                    </div>


                                    <div className="grid grid-cols-3 border-b border-gray-700 bg-slate-800 text-slate-100">
                                        <div className="p-4 font-medium text-gray-100">
                                            FATHER NAME
                                        </div>
                                        <div className="p-4 col-span-2 text-gray-100">
                                            {exam_result?.student?.father_name}
                                        </div>
                                    </div>


                                    <div className="grid grid-cols-3 border-b border-gray-700 bg-slate-800 text-slate-100">
                                        <div className="p-4 font-medium text-gray-100">
                                            COURSE
                                        </div>
                                        <div className="p-4 col-span-2 text-gray-100">
                                            {exam_result?.student?.course?.name}
                                        </div>
                                    </div>


                                    <div className="grid grid-cols-3 border-b border-gray-700 bg-slate-800 text-slate-100">
                                        <div className="p-4 font-medium text-gray-100">
                                            OBTAINED MARKS
                                        </div>
                                        <div className="p-4 col-span-2 text-gray-100">
                                            {exam_result?.correct_answer_count}
                                        </div>
                                    </div>


                                    <div className="grid grid-cols-3">
                                        <div className="p-4 font-medium text-gray-100">
                                            PERCENTAGE
                                        </div>
                                        <div className="p-4 col-span-2 text-gray-100">
                                            {percentage ?
                                                <>
                                                    {percentage} %
                                                </>
                                                :
                                                <>N/A</>
                                            }
                                        </div>
                                    </div>



                                </div>


                            </div>

                        </div>

                    </div>
                </div>

                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-3 flex justify-center">
                    <Link href={route('admin.dashboard')}>
                        <PrimaryButton>
                            Go Back
                        </PrimaryButton>
                    </Link>
                </div>


            </div>

        </AuthenticatedLayout>
    )
}

export default show