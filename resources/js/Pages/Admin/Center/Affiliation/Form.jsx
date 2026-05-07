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
    const { affiliation } = usePage().props;
    const STATUS = ["ACTIVE", "DEACTIVE", "SUSPENDED", "CANCELLED"];
    
    const { data, setData, post, put, processing, errors, reset, progress } =
        useForm({
            certificate_number: affiliation?.certificate_number || "",
            director: affiliation?.director || "",
            center_name: affiliation?.center_name || "",
            district: affiliation?.district || "",
            issue_date: affiliation?.issue_date || "",
            expire_date: affiliation?.expire_date || "",
            status: affiliation?.status || "",
            center_code: affiliation?.center_code || "",
        });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (affiliation) {
            put(route("admin.center_affiliation.update", affiliation.id));
        } else {
            post(route("admin.center_affiliation.store"), {
                onSuccess: () => reset(),
            });
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {affiliation
                        ? "Edit Center Affiliation"
                        : "Create Center Affiliation"}
                </h2>
            }
        >
            <Head
                title={
                    affiliation
                        ? "Edit Center Affiliation"
                        : "Create Center Affiliation"
                }
            />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            {affiliation
                                ? "Edit Center Affiliation"
                                : "Create Center Affiliation"}
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

                                <div>
                                    <InputLabel
                                        htmlFor="director"
                                        value="Name of Director"
                                    />
                                    <TextInput
                                        id="director"
                                        type="text"
                                        value={data.director}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("director", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.director}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="center_name"
                                        value="Center Name"
                                    />
                                    <TextInput
                                        id="center_name"
                                        type="text"
                                        value={data.center_name}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "center_name",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.center_name}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="district"
                                        value="District"
                                    />
                                    <TextInput
                                        id="district"
                                        type="text"
                                        value={data.district}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("district", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.district}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="issue_date"
                                        value="issue_date"
                                    />
                                    <TextInput
                                        id="issue_date"
                                        type="text"
                                        value={data.issue_date}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "issue_date",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.issue_date}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="expire_date"
                                        value="Expire Date"
                                    />
                                    <TextInput
                                        id="expire_date"
                                        type="text"
                                        value={data.expire_date}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "expire_date",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.expire_date}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="status"
                                        value="Status"
                                    />
                                    <select
                                        value={data.status}
                                        onChange={(e) =>
                                            setData("status", e.target.value)
                                        }
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">Select Status</option>

                                        {STATUS.map((status) => (
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
                                    <InputLabel
                                        htmlFor="center_code"
                                        value="Center Code"
                                    />
                                    <TextInput
                                        id="center_code"
                                        type="text"
                                        value={data.center_code}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "center_code",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.center_code}
                                        className="mt-2"
                                    />
                                </div>


                            </div>

                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size="md">
                                    {affiliation ? "Update" : "Save"}
                                </PrimaryButton>
                                <Link href={route("admin.center_affiliation.index")}>
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
