import React from 'react'
import AuthencatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, router, useForm, usePage } from '@inertiajs/react'
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';


function Form() {
    const { exam_id } = usePage().props;

    const { data, setData, post, errors, processing, reset } = useForm({
        exam_id: exam_id,
        file: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('admin.online-exam-bulk-upload.post'), {
            preserveScroll: true,
            preserveState: true,
            forceFormData: true,
            onSuccess: () => reset()
        })
    }

    return (
        <AuthencatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Bulk Upload
                </h2>
            }
        >
            <Head title='Bulk Upload' />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            Bulk Upload
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <InputLabel htmlFor="bulk_upload" value="Bulk Uploads / ( csv, xls, xlxs )" />
                                    <input
                                        id="file"
                                        type="file"
                                        accept=".xlsx,.xls"
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                        onChange={(e) => setData('file', e.target.files[0])}
                                    />
                                    <InputError message={errors.file} className="mt-2" />
                                </div>

                            </div>

                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size='md'>
                                    {'Save'}
                                </PrimaryButton>
                                <Link href={route('admin.online-exam-questions.index', { exam_id })}>
                                    <DangerButton className='mx-3' size='md'>
                                        Cancel
                                    </DangerButton>
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </AuthencatedLayout>
    )
}

export default Form
