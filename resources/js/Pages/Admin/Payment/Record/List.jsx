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
    const { flash, payment_record, auth } = usePage().props;

    const { data, setData, processing } = useForm({
        transaction_no: '',
        center_code: '',
        status: ''
    })

    useEffect(() => {
        const hasFilters = Object.values(data).some(value => value);

        if (!hasFilters) return;

        const timeout = setTimeout(() => {
            router.get(route('admin.payment_record.index'), {
                transaction_no: data?.transaction_no,
                center_code: data?.center_code,
                status: data?.status
            }, {
                preserveState: true,
                replace: true
            })
        }, 1000);

        return () => clearTimeout(timeout);
    }, [data]);

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
                router.delete(route("admin.payment_record.destroy", id));
            }
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Payment Record
                </h2>
            }
        >
            <Head title="Payment Record" />

            <Toast message={flash.success} type="success" />
            <Toast message={flash.error} type="error" />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-10xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Payment Record List
                            </h2>
                            {auth?.user?.permissions?.includes('payment_record.create') &&
                                <Link href={route("admin.payment_record.create")}>
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
                                            Transaction No
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Center Code
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Actions
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300"></th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <TextInput
                                                id="transaction_no"
                                                type="text"
                                                value={data.transaction_no}
                                                className="block w-full"
                                                onChange={(e) => setData('transaction_no', e.target.value)}
                                            />
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <TextInput
                                                id="center_code"
                                                type="text"
                                                value={data.center_code}
                                                className="block w-full"
                                                onChange={(e) => setData('center_code', e.target.value)}
                                            />
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <select
                                                value={data.status}
                                                onChange={(e) => setData('status', e.target.value)}
                                                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                            >
                                                <option value="">STATUS..</option>
                                                {[...new Set(payment_record?.data?.map(c => c.status))].map((status, i) => (
                                                    <option key={i} value={status}>
                                                        {status}
                                                    </option>
                                                ))}
                                            </select>
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300"></th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-gray-900">
                                    {payment_record?.data?.length > 0 ? (
                                        payment_record.data.map((item, index) => (
                                            <tr
                                                key={item.id || index}
                                                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                                            >
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {index + 1}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.transaction_no}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.center_code}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    <span
                                                        className={`px-2 py-1 rounded-full text-xs font-medium ${item.status ===
                                                            "APPROVED"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-red-100 text-red-700"
                                                            }`}
                                                    >
                                                        {item.status}
                                                    </span>
                                                </td>

                                                <td className="px-6 py-4 text-right space-x-2">
                                                    {auth?.user?.permissions?.includes('payment_record.update') &&
                                                        <Link
                                                            href={route("admin.payment_record.edit", item.id,)}
                                                        >
                                                            <PrimaryButton size="sm">
                                                                Edit
                                                            </PrimaryButton>
                                                        </Link>
                                                    }
                                                    {auth?.user?.permissions?.includes('payment_record.delete') &&
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
                        {/* <Pagination
                            links={payment_record.links}
                            from={payment_record.from}
                            to={payment_record.to}
                            total={payment_record.total}
                        /> */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default List;
