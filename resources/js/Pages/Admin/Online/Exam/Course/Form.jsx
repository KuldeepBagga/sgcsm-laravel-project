import DangerButton from '@/Components/DangerButton'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import { STATES } from '@/data/RawData'
import FileDropzone from "@/Components/FileDropzone";

export default function Form() {
    const { exam } = usePage().props;

    console.log(exam);


    const { data, setData, post, put, processing, errors, reset, progress } = useForm({
        name: exam?.name || '',
        status: exam?.status || ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()

        if (exam) {
            put(route('admin.online-exam.course.update', exam.id));
        } else {
            post(route('admin.online-exam.course.store'), {
                forceFormData: true,
                onFinish: () => reset('name'),
            });
        }
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {exam ? 'Edit Exam' : 'Create Exam'}
                </h2>
            }
        >
            <Head title={exam ? 'Edit Exam' : 'Create Exam'} />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            {exam ? 'Edit Exam' : 'Create Exam'}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <InputLabel htmlFor="name" value="Exam Name" />
                                    <TextInput
                                        id="name"
                                        type="text"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('name', e.target.value)}
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="status" value="Status" />
                                    <select
                                        value={data.status}
                                        onChange={(e) => setData('status', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">SELECT STATUS</option>

                                        {['ACTIVE', 'BLOCKED'].map((item, index) => (
                                            <option key={index} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError message={errors.status} className="mt-3" />
                                </div>
                            </div>

                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size='md'>
                                    {exam ? 'Update' : 'Save'}
                                </PrimaryButton>
                                <Link href={route('admin.online-exam.course.index')}>
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