import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { STATES } from "@/data/RawData";
import FileDropzone from "@/Components/FileDropzone";

export default function Form() {
    const { ourteam } = usePage().props;
    const STATUS = ["ACTIVE", "BLOCKED"];
    const [preview, setPreview] = useState(null);

    const { data, setData, post, put, processing, errors, reset, progress } =
        useForm({
            name: ourteam?.name || "",
            designation: ourteam?.designation || "",
            phone: ourteam?.phone || "",
            status: ourteam?.status || "",
            email: ourteam?.email || "",
            image: "",
        });

    const handleFile = (files) => {
        const file = files[0];
        if (file) {
            setData("image", file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.image) {
            delete data.image;
        }
        if (ourteam) {
            put(route("admin.ourteam.update", ourteam.id));
        } else {
            post(route("admin.ourteam.store"), {
                forceFormData: true,
                onSuccess: () => reset(),
            });
        }
    };

    useEffect(() => {
        if (ourteam?.image) {
            setPreview(`/storage/${ourteam.image}`);
        }
    }, [ourteam]);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {ourteam ? "Edit Our Team" : "Create Our Team"}
                </h2>
            }
        >
            <Head title={ourteam ? "Edit Our Team" : "Create Our Team"} />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            {ourteam ? "Edit Our Team" : "Create Our Team"}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <InputLabel htmlFor="name" value="Name" />
                                    <TextInput
                                        id="name"
                                        type="text"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="designation"
                                        value="Designation"
                                    />
                                    <TextInput
                                        id="designation"
                                        type="text"
                                        value={data.designation}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "designation",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.designation}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="email" value="Email" />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="phone" value="Phone" />
                                    <TextInput
                                        id="phone"
                                        type="number"
                                        value={data.phone}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.phone}
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

                                        {STATUS.map((status, index) => (
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
                            </div>

                            <div className="mt-3">
                                <div>
                                    <InputLabel
                                        htmlFor="image"
                                        value="Photo"
                                        className="mb-2"
                                    />

                                    {!preview && (
                                        <FileDropzone
                                            onFileSelect={handleFile}
                                        />
                                    )}

                                    {preview && (
                                        <>
                                            <img
                                                src={preview}
                                                className="w-32 mt-2 rounded"
                                            />
                                            <DangerButton
                                                size="sm"
                                                className="mt-3"
                                                onClick={() => {
                                                    setPreview(null);
                                                    setData("image", null);
                                                }}
                                            >
                                                Remove
                                            </DangerButton>
                                        </>
                                    )}

                                    {progress && (
                                        <div className="w-full bg-gray-200 rounded">
                                            <div
                                                className="bg-indigo-600 text-xs text-white p-1 rounded"
                                                style={{
                                                    width: `${progress.percentage}%`,
                                                }}
                                            >
                                                {progress.percentage}%
                                            </div>
                                        </div>
                                    )}

                                    <InputError
                                        message={errors.image}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size="md">
                                    {ourteam ? "Update" : "Save"}
                                </PrimaryButton>
                                <Link href={route("admin.ourteam.index")}>
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
