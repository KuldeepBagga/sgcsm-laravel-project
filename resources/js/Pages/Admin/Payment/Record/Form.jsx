import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import FileDropzone from "@/Components/FileDropzone";

export default function Form() {
    const { payment_record, centerCode } = usePage().props;
    const STATUS = ["ACTIVE", "BLOCKED"];
    const [preview, setPreview] = useState(null);
    const PAYMENT_RECORD_STATUS = ["WATING FOR APPROVAL", "PAYMENT NOT RECIEVED", "PENDING", "APPROVED"];
    const { data, setData, post, put, processing, errors, reset, progress } = useForm({
        transaction_no: payment_record?.transaction_no || '',
        transaction_date: payment_record?.transaction_date || '',
        amount: payment_record?.amount || '',
        status: payment_record?.status || '',
        center_code: payment_record?.center_code || centerCode || '',
       // center_name: payment_record?.center_name || '',
        message: payment_record?.message || ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (payment_record) {
            put(route("admin.payment_record.update", payment_record.id));
        } else {
            post(route("admin.payment_record.store"), {
                forceFormData: true,
                onSuccess: () => reset(),
            });
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {payment_record ? "Edit Payment Record" : "Create Payment Record"}
                </h2>
            }
        >
            <Head title={payment_record ? "Edit Payment Record" : "Create Payment Record"} />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            {payment_record ? "Edit Payment Record" : "Create Payment Record"}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <InputLabel htmlFor="transaction_no" value="Transaction No. / UTR No." />
                                    <TextInput
                                        id="transaction_no"
                                        type="text"
                                        value={data.transaction_no}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("transaction_no", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.transaction_no}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="transaction_date" value="Transaction Date" />
                                    <TextInput
                                        id="transaction_date"
                                        type="date"
                                        value={data.transaction_date}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("transaction_date", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.transaction_date}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="amount" value="Amount" />
                                    <TextInput
                                        id="amount"
                                        type="number"
                                        value={data.amount}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("amount", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.amount}
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

                                        {PAYMENT_RECORD_STATUS.map((status) => (
                                            <option key={status} value={status}>
                                                {status}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError message={errors.status} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="center_code" value="Center Code" />
                                    <TextInput
                                        id="center_code"
                                        type="text"
                                        value={data.center_code}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("center_code", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.center_code}
                                        className="mt-2"
                                    />
                                </div>

                                {/* <div>
                                    <InputLabel htmlFor="center_name" value="Center Name" />
                                    <TextInput
                                        id="center_name"
                                        type="text"
                                        value={data.center_name}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("center_name", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.center_name}
                                        className="mt-2"
                                    />
                                </div> */}

                            </div>

                            <div className="mt-3">
                                <InputLabel htmlFor="message" value="Message" />
                                <textarea
                                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    name="message"
                                    id="message"
                                    onChange={(e) => setData("message", e.target.value)}
                                    value={data.message}
                                >

                                </textarea>
                                <InputError
                                    message={errors.message}
                                    className="mt-2"
                                />
                            </div>


                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size="md">
                                    {payment_record ? "Update" : "Save"}
                                </PrimaryButton>
                                <Link href={route("admin.payment_record.index")}>
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
