import DangerButton from '@/Components/DangerButton'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import FileDropzone from "@/Components/FileDropzone";
import Select from 'react-select';

export default function Form() {
    const { exam_user, assign_exam, exam } = usePage().props;
    console.log(assign_exam);


    const durations = [
        { value: 30, label: "00:30 HOURS" },
        { value: 60, label: "01:00 HOURS" },
        { value: 120, label: "02:00 HOURS" },
        { value: 150, label: "02:30 HOURS" },
        { value: 180, label: "03:00 HOURS" },
        { value: 240, label: "04:00 HOURS" },
        { value: 270, label: "04:30 HOURS" },
    ];

    const { data, setData, post, put, processing, errors, reset, progress } = useForm({
        user_id: assign_exam?.user_id || '',
        exam_id: assign_exam?.exam_id || '',
        status: assign_exam?.status || '',
        exam_time: assign_exam?.exam_time || ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        if (assign_exam) {
            put(route('admin.online-exam-assign.update', assign_exam.id));
        } else {
            post(route('admin.online-exam-assign.store'), {
                onFinish: () => reset(),
            });
        }
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {assign_exam ? 'Edit Assign Exam' : 'Create Assign Exam'}
                </h2>
            }
        >
            <Head title={assign_exam ? 'Edit Assign Exam' : 'Create Assign Exam'} />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            {assign_exam ? 'Edit Assign Exam' : 'Create Assign Exam'}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">

                                <div>
                                    <InputLabel htmlFor="user_id" value="Registration No" />
                                    <Select
                                        options={exam_user.map(c => ({ value: c.user_id, label: c.student.registration_no }))}

                                        value={exam_user
                                            .map(c => ({ value: c.user_id, label: c.student.registration_no }))
                                            .find(opt => opt.value === Number(data.user_id))
                                        }

                                        onChange={(selected) => setData('user_id', selected?.value)}

                                        isClearable
                                        placeholder="SELECT REGISTRATION NO"
                                        className="mt-1 block w-full"

                                        classNames={{
                                            control: () =>
                                                "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600",

                                            valueContainer: () => "px-2 py-1",
                                            input: () => "text-gray-900 dark:text-gray-300",
                                            placeholder: () => "text-gray-400",

                                            menu: () =>
                                                "mt-1 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg",

                                            option: ({ isFocused, isSelected }) =>
                                                `px-3 py-2 cursor-pointer ${isSelected
                                                    ? "bg-indigo-500 text-white"
                                                    : isFocused
                                                        ? "bg-indigo-100 dark:bg-gray-800"
                                                        : "text-gray-900 dark:text-gray-300"
                                                }`,
                                        }}
                                    />
                                    <InputError message={errors.user_id} className="mt-2" />
                                </div>


                                <div>
                                    <InputLabel htmlFor="exam_id" value="Exam" />
                                    <Select
                                        options={exam.map(c => ({ value: c.id, label: c.name }))}

                                        value={exam
                                            .map(c => ({ value: c.id, label: c.name }))
                                            .find(opt => opt.value === Number(data.exam_id))
                                        }

                                        onChange={(selected) => setData('exam_id', selected?.value)}

                                        isClearable
                                        placeholder="SELECT EXAM"
                                        className="mt-1 block w-full"

                                        classNames={{
                                            control: () =>
                                                "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600",

                                            valueContainer: () => "px-2 py-1",
                                            input: () => "text-gray-900 dark:text-gray-300",
                                            placeholder: () => "text-gray-400",

                                            menu: () =>
                                                "mt-1 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg",

                                            option: ({ isFocused, isSelected }) =>
                                                `px-3 py-2 cursor-pointer ${isSelected
                                                    ? "bg-indigo-500 text-white"
                                                    : isFocused
                                                        ? "bg-indigo-100 dark:bg-gray-800"
                                                        : "text-gray-900 dark:text-gray-300"
                                                }`,
                                        }}
                                    />
                                    <InputError message={errors.exam_id} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="status" value="Status" />
                                    <select
                                        onChange={(e) => setData('status', e.target.value)}
                                        value={data.status}
                                        className='rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full'
                                    >
                                        <option value="">SELECT STATUS.</option>

                                        {['ACTIVE', 'BLOCKED'].map((item, index) =>
                                            <option value={item} key={index}>{item}</option>
                                        )}

                                    </select>

                                    <InputError message={errors.status} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="exam_time" value="Exam Time" />
                                    <select
                                        value={data.exam_time}
                                        onChange={(e) => setData('exam_time', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">SELECT EXAM TIME</option>

                                        {durations.map((duration) => (
                                            <option key={duration.value} value={duration.value}>
                                                {duration.label}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError message={errors.exam_time} className="mt-2" />
                                </div>

                            </div>

                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size='md'>
                                    {assign_exam ? 'Update' : 'Save'}
                                </PrimaryButton>
                                <Link href={route('admin.online-exam-assign.index')}>
                                    <DangerButton className='mx-3' size='md'>
                                        Cancel
                                    </DangerButton>
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}