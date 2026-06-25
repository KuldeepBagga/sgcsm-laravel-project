import { useForm, usePage, Head, Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import FileDropzone from "@/Components/FileDropzone";

function Form() {

    const { notice } = usePage().props;
    const [preview, setPreview] = useState(null);
    const { data, setData, post, put, processing, errors, reset, progress } = useForm({
        name: notice?.name || '',
        message: notice?.message || ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (notice) {
            put(route('admin.notice.update', notice.id))
        } else {
            post(route('admin.notice.store'), {
                onSuccess: reset()
            });
        }
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {notice ? 'Edit Notice' : 'Create Notice'}
                </h2>
            }
        >
            <Head title={notice ? 'Edit Notice' : 'Create Notice'} />


            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            {notice ? 'Edit Notice' : 'Create Notice'}
                        </h2>

                        <form onSubmit={handleSubmit}>

                            <div className='grid grid-cols-1 gap-2'>
                                <div>
                                    <InputLabel htmlFor="name" value="Name" />
                                    <TextInput
                                        className="w-full"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                    />
                                    <InputError message={errors.name} className="mt-3" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="message" value="Message" />
                                    <textarea
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 w-full"
                                    ></textarea>
                                    <InputError message={errors.message} className="mt-3" />
                                </div>
                            </div>

                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size='md'>
                                    {notice ? 'Update' : 'Save'}
                                </PrimaryButton>
                                <Link href={route('admin.notice.index')}>
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
    )
}

export default Form