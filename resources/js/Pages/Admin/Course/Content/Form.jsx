import DangerButton from '@/Components/DangerButton'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import { COURSE_CATEGORY } from '@/data/RawData'
import FileDropzone from "@/Components/FileDropzone";
import { Textarea } from '@headlessui/react'

export default function Form() {
    const { course_id, module_id, module_content } = usePage().props;

    const { data, setData, post, put, processing, errors, reset, progress } = useForm({
        content: module_content?.content || '',
        module_id: module_content?.module_id || module_id,
        course_id: course_id
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        if (module_content) {
            put(route('admin.course-content.update', module_content.id));
        } else {
            post(route('admin.course-content.store'), {
                onFinish: () => reset(),
            });
        }
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {module_content ? 'Edit Course Module Content' : 'Create Course Module Content'}
                </h2>
            }
        >
            <Head title={module_content ? 'Edit Course Module Content' : 'Create Course Module Content'} />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            {module_content ? 'Edit Course Module Content' : 'Create Course Module Content'}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-4">

                                <div>
                                    <InputLabel htmlFor="content" value="Content" />
                                    <Textarea
                                        onChange={(e) => setData('content', e.target.value)}
                                        value={data.content}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                    </Textarea>
                                    <InputError message={errors.content} className="mt-2" />
                                </div>

                            </div>

                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size='md'>
                                    {module_content ? 'Update' : 'Save'}
                                </PrimaryButton>
                                <Link href={route('admin.course-content.index', { course_id: course_id, module_id: module_id })}>
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