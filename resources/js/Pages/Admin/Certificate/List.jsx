import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import Toast from "@/Components/Toast";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import TextInput from '@/Components/TextInput'

function List() {
    const { flash, certificate, auth } = usePage().props;

    const { data, setData, processing } = useForm({
        certificate_number: '',
        center_code: '',
        enrollment_no: ''
    });


    useEffect(() => {
        const hasFilters = Object.values(data).some(value => value);
        if (!hasFilters) return;

        const timeout = setTimeout(() => {
            router.get(route('admin.certificate.index'), {
                certificate_number: data.certificate_number,
                enrollment_no: data.enrollment_no,
                center_code: data.center_code,
            }, {
                preserveState: true,
                replace: true
            });
        }, 1000);

        return () => clearTimeout(timeout);

    }, [data.certificate_number, data.enrollment_no, data.center_code, data.status]);

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
                router.delete(route("admin.certificate.destroy", id));
            }
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Certificate
                </h2>
            }
        >
            <Head title="Center Certificate" />

            <Toast message={flash.success} type="success" />
            <Toast message={flash.error} type="error" />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-10xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Certificate List
                            </h2>

                            {auth.user.permissions.includes(
                                "certificate.create",
                            ) && (
                                    <Link href={route("admin.certificate.create")}>
                                        <PrimaryButton>Create</PrimaryButton>
                                    </Link>
                                )}
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden border-solid">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            ID
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Certificate Number
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Center Code
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Enrollment No
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Issue Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Type
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Actions
                                        </th>
                                    </tr>

                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300"></th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <TextInput
                                                id="certificate_number"
                                                type="text"
                                                value={data.certificate_number}
                                                className="block w-full"
                                                onChange={(e) => setData('certificate_number', e.target.value)}
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
                                            <TextInput
                                                id="enrollment_no"
                                                type="text"
                                                value={data.enrollment_no}
                                                className="block w-full"
                                                onChange={(e) => setData('enrollment_no', e.target.value)}
                                            />
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300"></th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300"></th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300"></th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-gray-900">
                                    {certificate?.data?.length > 0 ? (
                                        certificate.data.map((item, index) => (
                                            <tr
                                                key={item.id || index}
                                                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                                            >
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {index + 1}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.certificate_number}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.student?.center_code}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.student?.registration_no}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.issued_date}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.certificate_type}
                                                </td>

                                                <td className="px-6 py-4 text-right space-x-2">
                                                    {auth.user.permissions.includes("certificate.generate") &&
                                                        <PrimaryButton
                                                            size="sm"
                                                            onClick={() => window.open(route('admin.certificate.generate', item.id), "_blank")}
                                                        >
                                                            Generate
                                                        </PrimaryButton>
                                                    }
                                                    {auth.user.permissions.includes(
                                                        "certificate.update",
                                                    ) && (
                                                            <Link
                                                                href={route(
                                                                    "admin.certificate.edit",
                                                                    item.id,
                                                                )}
                                                            >
                                                                <PrimaryButton size="sm">
                                                                    Edit
                                                                </PrimaryButton>
                                                            </Link>
                                                        )}
                                                    {auth.user.permissions.includes(
                                                        "certificate.delete",
                                                    ) && (
                                                            <DangerButton
                                                                size="sm"
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        item.id,
                                                                    )
                                                                }
                                                            >
                                                                Delete
                                                            </DangerButton>
                                                        )}
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
                            links={certificate.links}
                            from={certificate.from}
                            to={certificate.to}
                            total={certificate.total}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default List;
