import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import Toast from "@/Components/Toast";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import TextInput from "@/Components/TextInput";

function List() {
    const { flash, result_details, auth } = usePage().props;

    const { data, setData, processing } = useForm({
        transaction_no: '',
        center_code: '',
        status: ''
    })

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#6366f1",
            cancelButtonColor: "#ef4444",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.result_details.destroy", id));
            }
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Result Details
                </h2>
            }
        >
            <Head title="Result Details" />

            <Toast message={flash.success} type="success" />
            <Toast message={flash.error} type="error" />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-10xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Result Details List
                            </h2>
                            {auth?.user?.permissions?.includes('result_details.create') &&
                                <Link href={route("admin.result_details.create")}>
                                    <PrimaryButton>Create</PrimaryButton>
                                </Link>
                            }
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden border-solid">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            ID
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Enrollment No
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-gray-900">
                                    {result_details?.data?.length > 0 ? (
                                        result_details.data.map((item, index) => (
                                            <tr
                                                key={item.id || index}
                                                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                                            >
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {index + 1}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.registration_no}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    <span
                                                        className={`px-2 py-1 rounded-full text-xs font-medium ${item.status ===
                                                            "ACTIVE"
                                                            ? "bg-green-200 text-green-900"
                                                            : "bg-red-200 text-red-900"
                                                            }`}
                                                    >
                                                        {item.status}
                                                    </span>
                                                </td>

                                                <td className="px-6 py-4 text-right space-x-2">
                                                    {auth?.user?.permissions?.includes('result.marksheet.show') &&
                                                        <button
                                                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-800 text-white font-semibold uppercase tracking-widest transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:active:bg-gray-300 dark:focus:ring-offset-gray-800 px-2 py-1 text-xs"
                                                            onClick={() =>
                                                                window.open(
                                                                    route('admin.marksheet.generate', item.id),
                                                                    '_blank',
                                                                )
                                                            }
                                                        >
                                                            Original Result
                                                        </button>
                                                    }
                                                    {auth?.user?.permissions?.includes('result.marksheet.show') &&
                                                        <button
                                                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-800 text-white font-semibold uppercase tracking-widest transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:active:bg-gray-300 dark:focus:ring-offset-gray-800 px-2 py-1 text-xs"
                                                            onClick={() =>
                                                                window.open(
                                                                    route('admin.duplicate_online_result.show', item.id),
                                                                    '_blank',
                                                                )
                                                            }
                                                        >
                                                            Duplicate Result
                                                        </button>
                                                    }

                                                    {auth?.user?.permissions?.includes('result.create') &&
                                                        <Link
                                                            href={route('admin.result.index', { id: item.id })}
                                                            target="_blank"
                                                        >
                                                            <PrimaryButton size="sm">
                                                                Add Result
                                                            </PrimaryButton>
                                                        </Link>
                                                    }
                                                    {auth?.user?.permissions?.includes('result_details.update') &&
                                                        <Link
                                                            href={route("admin.result_details.edit", item.id)}
                                                        >
                                                            <PrimaryButton size="sm">
                                                                Edit
                                                            </PrimaryButton>
                                                        </Link>
                                                    }
                                                    {auth?.user?.permissions?.includes('result_details.delete') &&
                                                        <DangerButton
                                                            size="sm"
                                                            onClick={() =>
                                                                handleDelete(item.id)
                                                            }
                                                        >
                                                            Delete
                                                        </DangerButton>
                                                    }
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="10"
                                                className="px-6 py-6 text-center text-gray-500 dark:text-gray-400"
                                            >
                                                No data found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <Pagination
                            links={result_details.links}
                            from={result_details.from}
                            to={result_details.to}
                            total={result_details.total}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default List;
