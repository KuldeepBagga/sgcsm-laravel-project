import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import FileDropzone from "@/Components/FileDropzone";
import { RELATION, QUALIFICATION, STATES, COURSE_CATEGORY, CERTIFICATE_TYPE } from '@/data/RawData';
import { height } from "@fortawesome/free-brands-svg-icons/fa11ty";

export default function Form() {
    const { certificate, errors } = usePage().props;
    const STATUS = ["ACTIVE", "DEACTIVE", "SUSPENDED", "CANCELLED"];

    const { data, setData, post, put, processing, reset, progress } = useForm({
        certificate_number: certificate ? certificate.certificate_number : "",
        conducted_by: certificate ? certificate.conducted_by : "",
        duration: certificate ? certificate.duration : "",
        grade: certificate ? certificate.grade : "",
        registration_no: certificate ? certificate.registration_no : "",
        issued_date: certificate ? certificate.issued_date : "",
        certificate_type: certificate ? certificate.certificate_type : "",
        //course_type: certificate ? certificate.course_type : "",
        //show_marksheet: certificate ? certificate.show_marksheet : "NO",
        typing_speed: certificate ? certificate.typing_speed : "",
        shorthand_speed: certificate ? certificate.shorthand_speed : "",
        accuracy: certificate ? certificate.accuracy : "",
        certificate_image: certificate ? certificate.certificate_image : "",
        image: certificate? certificate.image: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (certificate) {
            put(route("admin.certificate.update", certificate.id));
        } else {
            post(route("admin.certificate.store"), {
                preserveScroll: true,
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
                                        onChange={(e) => setData("certificate_number", e.target.value)}
                                    />
                                    <InputError
                                        message={errors.certificate_number}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="conducted_by"
                                        value="Conducted By"
                                    />
                                    <TextInput
                                        id="conducted_by"
                                        type="text"
                                        value={data.conducted_by}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "conducted_by",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.conducted_by}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="duration"
                                        value="Duration"
                                    />
                                    <TextInput
                                        id="duration"
                                        type="text"
                                        value={data.duration}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "duration",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.duration}
                                        className="mt-2"
                                    />
                                </div>


                                <div>
                                    <InputLabel
                                        htmlFor="grade"
                                        value="Grade"
                                    />
                                    <TextInput
                                        id="grade"
                                        type="text"
                                        value={data.grade}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "grade",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.grade}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="registration_no"
                                        value="Registration Number"
                                    />
                                    <TextInput
                                        id="registration_no"
                                        type="text"
                                        value={data.registration_no}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "registration_no",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.registration_no}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="issued_date"
                                        value="Issue Date"
                                    />
                                    <TextInput
                                        id="issued_date"
                                        type="date"
                                        value={data.issued_date}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "issued_date",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.issued_date}
                                        className="mt-2"
                                    />
                                </div>


                                <div>
                                    <InputLabel
                                        htmlFor="certificate_type"
                                        value="Diploma / Certificate"
                                    />


                                    <select
                                        value={data.certificate_type}
                                        onChange={(e) => setData('certificate_type', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">SELECT DIPLOMA / CERTIFICATE</option>

                                        {['CERTIFICATE', 'DIPLOMA'].map((item, index) => (
                                            <option key={index} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError
                                        message={errors.certificate_type}
                                        className="mt-2"
                                    />
                                </div>


                                {/* 
                                <div>
                                    <InputLabel
                                        htmlFor="course_type"
                                        value="Course Type"
                                    />
                                    <select
                                        value={data.course_type}
                                        onChange={(e) => setData('course_type', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">SELECT COURSE TYPE</option>

                                        {COURSE_CATEGORY.map((course) => (
                                            <option key={course} value={course}>
                                                {course}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError
                                        message={errors.course_type}
                                        className="mt-2"
                                    />
                                </div> */}


                                {/* <div>
                                    <InputLabel
                                        htmlFor="show_marksheet"
                                        value="Show Marksheet"
                                    />
                                    <select
                                        value={data.show_marksheet}
                                        onChange={(e) => setData('show_marksheet', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        {["YES", "NO"].map((show) => (
                                            <option key={show} value={show}>
                                                {show}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError
                                        message={errors.show_marksheet}
                                        className="mt-2"
                                    />
                                </div> */}

                            </div>

                            <div className="mt-10">
                                <InputLabel
                                    htmlFor="certificate_image"
                                    value="Certificate Image"
                                />

                                <div className="grid grid-cols-7 gap-4 mt-2">
                                    {CERTIFICATE_TYPE.map((item, index) => (
                                        <label
                                            key={index}
                                            className={`cursor-pointer border-2 rounded p-2 ${data.certificate_image === item.value
                                                ? "border-blue-500"
                                                : "border-gray-300"
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="certificate_image"
                                                value={item.value}
                                                checked={data.certificate_image === item.value}
                                                onChange={(e) =>
                                                    setData("certificate_image", e.target.value)
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
                                    message={errors.certificate_image}
                                    className="mt-2"
                                />
                            </div>


                            <div className="grid grid-cols-1 gap-4 mt-10">

                                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                                    Fill required for typing certificate
                                </h2>

                                <div>
                                    <InputLabel
                                        htmlFor="typing_speed"
                                        value="English/Hindi Typing Speed"
                                    />
                                    <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 py-1">
                                        Eg : Hindi/English Typewriting--Speed Per Minute-40/45 word.
                                    </span>
                                    <TextInput
                                        id="typing_speed"
                                        type="text"
                                        value={data.typing_speed}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "typing_speed",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.typing_speed}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="shorthand_speed"
                                        value="Shorthand Speed"
                                    />
                                    <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 py-1">
                                        Eg : Hindi shorthand--Speed Per Minute-100 words.
                                    </span>
                                    <TextInput
                                        id="shorthand_speed"
                                        type="text"
                                        value={data.shorthand_speed}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "shorthand_speed",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.shorthand_speed}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="accuracy"
                                        value="Accuracy"
                                    />
                                    <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 py-1">
                                        Eg : Typing/shorthand accuracy.
                                    </span>
                                    <TextInput
                                        id="accuracy"
                                        type="text"
                                        value={data.accuracy}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "accuracy",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.accuracy}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size="md">
                                    {certificate ? "Update" : "Save"}
                                </PrimaryButton>
                                <Link href={route("admin.certificate.index")}>
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
