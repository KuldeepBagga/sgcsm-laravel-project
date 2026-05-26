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
    const { certificate } = usePage().props;
    const STATUS = ["ACTIVE", "DEACTIVE", "SUSPENDED", "CANCELLED"];

    const { data, setData, post, put, processing, errors, reset, progress } =
        useForm({});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (certificate) {
            put(route("admin.certificate.update", certificate.id));
        } else {
            post(route("admin.certificate.store"), {
                onSuccess: () => reset(),
            });
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {certificate
                        ? "Edit Certificate"
                        : "Create Certificate"}
                </h2>
            }
        >
            <Head
                title={
                    certificate
                        ? "Edit Certificate"
                        : "Create Certificate"
                }
            />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            {certificate
                                ? "Edit Certificate"
                                : "Create Certificate"}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <InputLabel
                                        htmlFor="certificate_number"
                                        value="Certificate Number"
                                    />
                                    <TextInput
                                        id="certificate_number"
                                        type="text"
                                        value={data.certificate_number}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "certificate_number",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.certificate_number}
                                        className="mt-2"
                                    />
                                </div>

                            </div>

                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size="md">
                                    {certificate ? "Update" : "Save"}
                                </PrimaryButton>
                                <Link href={route("admin.center_certificate.index")}>
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
