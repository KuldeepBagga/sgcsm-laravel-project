import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import FileDropzone from "@/Components/FileDropzone";
import { ORIGINAL_MARKSHEET, DUPLICATE_MARKSHEET } from '@/data/RawData.js'

export default function Form() {
    const { result_details } = usePage().props;
    const STATUS = ["ACTIVE", "BLOCKED"];

    const { data, setData, post, put, processing, errors, reset, progress } = useForm({
        registration_no: result_details?.registration_no || '',
        duplicate_marksheet: result_details?.duplicate_marksheet || '',
        original_marksheet: result_details?.original_marksheet || '',
        status: result_details?.status || '',
        result_date: result_details?.result_date || ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (result_details) {
            put(route("admin.result_details.update", result_details.id));
        } else {
            post(route("admin.result_details.store"), {
                forceFormData: true,
                onSuccess: () => reset(),
            });
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {result_details ? "Edit Result Details" : "Create Result Details"}
                </h2>
            }
        >
            <Head title={result_details ? "Edit Result Details" : "Create Result Details"} />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            {result_details ? "Edit Result Details" : "Create Result Details"}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">

                                <div>
                                    <InputLabel htmlFor="registration_no" value="Registration No" />
                                    <TextInput
                                        id="registration_no"
                                        type="text"
                                        value={data.registration_no}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("registration_no", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.registration_no}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="status" value="Status" />
                                    <select
                                        value={data.status}
                                        onChange={(e) => setData('status', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">SELECT STATUS..</option>

                                        {['ACTIVE', 'BLOCKED'].map((status) => (
                                            <option key={status} value={status}>
                                                {status}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError
                                        message={errors.status}
                                        className="mt-2"
                                    />
                                </div>


                                <div>
                                    <InputLabel htmlFor="result_date" value="Result Date" />
                                    <TextInput
                                        id="registration_no"
                                        type="date"
                                        value={data.result_date}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("result_date", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.result_date}
                                        className="mt-2"
                                    />
                                </div>
                            </div>


                            <div>
                                <div className="mt-10">
                                    <InputLabel
                                        htmlFor="duplicate_marksheet"
                                        value="Duplicate Marksheet"
                                    />

                                    <div className="grid grid-cols-7 gap-4 mt-2">
                                        {DUPLICATE_MARKSHEET.map((item, index) => (
                                            <label
                                                key={index}
                                                className={`cursor-pointer border-2 rounded p-2 ${data.duplicate_marksheet === item.value
                                                    ? "border-blue-500"
                                                    : "border-gray-300"
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="duplicate_marksheet"
                                                    value={item.value}
                                                    checked={data.duplicate_marksheet === item.value}
                                                    onChange={(e) =>
                                                        setData("duplicate_marksheet", e.target.value)
                                                    }
                                                    className="mb-2"
                                                />

                                                <img
                                                    src={`/storage/${item.value}`}
                                                    alt="Certificate"
                                                    className="h-auto w-30"
                                                />
                                            </label>
                                        ))}
                                    </div>

                                    <InputError
                                        message={errors.duplicate_marksheet}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-10">
                                    <InputLabel
                                        htmlFor="original_marksheet"
                                        value="Original Marksheet"
                                    />

                                    <div className="grid grid-cols-7 gap-4 mt-2">
                                        {ORIGINAL_MARKSHEET.map((item, index) => (
                                            <label
                                                key={index}
                                                className={`cursor-pointer border-2 rounded p-2 ${data.original_marksheet === item.value
                                                    ? "border-blue-500"
                                                    : "border-gray-300"
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="original_marksheet"
                                                    value={item.value}
                                                    checked={data.original_marksheet === item.value}
                                                    onChange={(e) =>
                                                        setData("original_marksheet", e.target.value)
                                                    }
                                                    className="mb-2"
                                                />

                                                <img
                                                    src={`/storage/${item.value}`}
                                                    alt="Certificate"
                                                    className="h-auto w-30"
                                                />
                                            </label>
                                        ))}
                                    </div>

                                    <InputError
                                        message={errors.duplicate_marksheet}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size="md">
                                    {result_details ? "Update" : "Save"}
                                </PrimaryButton>
                                <Link href={route("admin.result_details.index")}>
                                    <DangerButton className="mx-3" size="md">
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
