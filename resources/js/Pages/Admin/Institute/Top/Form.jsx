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
    const { topInstitute, institute } = usePage().props;
    
    const { data, setData, post, put, processing, errors, reset, progress } = useForm({
        institute_id: topInstitute?.institute_id || '',
        rank: topInstitute?.rank || ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        if (topInstitute) {
            put(route('admin.top_institute.update', topInstitute?.id ));
        } else {
            post(route('admin.top_institute.store'), {
                onFinish: () => reset(),
            });
        }
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {topInstitute ? 'Edit top_institute' : 'Create top_institute'}
                </h2>
            }
        >
            <Head title={topInstitute ? 'Edit top_institute' : 'Create top_institute'} />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            {topInstitute ? 'Edit top_institute' : 'Create top_institute'}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-4">

                                <div>
                                    <InputLabel htmlFor="institute_id" value="Institute" />
                                    <Select
                                        options={institute?.map(c => ({ value: c.id, label: c.center_name }))}

                                        value={institute?.map(c => ({ value: c.id, label: c.center_name })).find(opt => opt.value === Number(data.institute_id))}

                                        onChange={(selected) => setData('institute_id', selected?.value)}

                                        isClearable
                                        placeholder="SELECT COURSE"
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
                                    <InputError message={errors.institute_id} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="rank" value="Rank" />
                                    <TextInput
                                        id="rank"
                                        type="text"
                                        value={data.rank}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('rank', e.target.value)}
                                    />
                                    <InputError message={errors.rank} className="mt-2" />
                                </div>

                            </div>

                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size='md'>
                                    {topInstitute ? 'Update' : 'Save'}
                                </PrimaryButton>
                                <Link href={route('admin.top_institute.index')}>
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