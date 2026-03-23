import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, router, useForm, usePage } from '@inertiajs/react'
import React, { useState } from 'react'
import Form from '../Structure/ModalForm'
import PrimaryButton from '@/Components/PrimaryButton'
import Toast from "@/components/Toast";
import Pagination from '@/Components/Pagination'
import DangerButton from '@/Components/DangerButton'

function List() {
    const { delete: destroy, processing } = useForm();
    const [showModal, setShowModal] = useState(false)
    const { flash, fee_structure } = usePage().props;
    const [deletingId, setDeletingId] = useState(null);

    const handleDelete = (id) => {
        if (!confirm("Are you sure?")) return;

        setDeletingId(id);

        router.delete(route("fee.structure.destroy", id), {
            preserveScroll: true,
            onFinish: () => setDeletingId(null),
        });
    };


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Manage Fee Structure
                </h2>
            }
        >
            <Head title='Fee Structure' />

            <Toast message={flash.success} type="success" />
            <Toast message={flash.error} type="error" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                    <div className="py-4 flex justify-end">
                        <PrimaryButton onClick={() => setShowModal(true)}>
                            Add Student
                        </PrimaryButton>
                    </div>

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="overflow-x-auto dark:bg-gray-700 shadow-md rounded-xl">
                            <table className="min-w-full text-sm text-left text-gray-600">

                                <thead className="bg-gray-800 text-xs uppercase text-gray-200">
                                    <tr>
                                        <th className="px-6 py-3">#Student Id</th>
                                        <th className="px-6 py-3">Name</th>
                                        <th className="px-6 py-3">Amount</th>
                                        <th className="px-6 py-3">Fee Type</th>
                                        <th className="px-6 py-3 text-center">Actions</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200">
                                    {fee_structure?.data?.length > 0 ? (
                                        fee_structure.data.map((item, index) => (
                                            <tr key={item.id} className="hover:bg-gray-800 transition">
                                                <td className="px-6 py-4 font-medium text-gray-200">
                                                    {index + 1}
                                                </td>

                                                <td className="px-6 py-4 font-medium text-gray-200">
                                                    {item.name}
                                                </td>

                                                <td className="px-6 py-4 font-medium text-gray-200">
                                                    ₹ {item.amount}
                                                </td>

                                                <td className="px-6 py-4 font-medium text-gray-200">
                                                    <span className='px-3 py-1 text-xs font-semibold text-gray-100 bg-gray-900 rounded-full'>
                                                        {item.fee_type}
                                                    </span>
                                                </td>

                                                <td className="px-6 py-4 text-center space-x-2">

                                                    <button
                                                        type="button"
                                                        disabled={deletingId === item.id}
                                                        onClick={() => handleDelete(item.id)}
                                                        className={`bg-red-600 hover:bg-red-500 text-white text-xs px-3 py-1 rounded-lg shadow-sm transition ${deletingId === item.id
                                                            ? "opacity-50 cursor-not-allowed"
                                                            : ""
                                                            }`}
                                                    >
                                                        {deletingId === item.id ? "Deleting..." : "Delete"}
                                                    </button>

                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-4 text-center text-gray-400">
                                                No fee structures found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination
                        links={fee_structure.links}
                        from={fee_structure.from}
                        to={fee_structure.to}
                        total={fee_structure.total}
                    />
                </div>
            </div>

            <Form
                show={showModal}
                onClose={() => setShowModal(false)}
            />
        </AuthenticatedLayout>
    )
}

export default List