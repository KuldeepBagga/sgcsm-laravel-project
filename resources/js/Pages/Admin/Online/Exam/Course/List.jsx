import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import PrimaryButton from '@/Components/PrimaryButton'
import DangerButton from '@/Components/DangerButton'
import { Head, Link, router, usePage } from '@inertiajs/react'
import Toast from '@/Components/Toast'
import Pagination from '@/Components/Pagination'
import Swal from 'sweetalert2'

function List() {
    const { exam, flash, auth } = usePage().props;

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#6366f1',
            cancelButtonColor: '#ef4444',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route('admin.online-exam.course.destroy', id));
            }
        });
    };

    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                Exam List
            </h2>
        }>

            <Head title='Exam Name' />

            <Toast message={flash.success} type="success" />
            <Toast message={flash.error} type="error" />


            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-10xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Exam List
                            </h2>
                            {auth?.user?.permissions?.includes('online.exam.course.create') &&
                                <Link href={route('admin.online-exam.course.create')}>
                                    <PrimaryButton>
                                        Create
                                    </PrimaryButton>
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
                                            Exam Name
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

                                    {exam?.data?.length > 0 ? (
                                        exam.data.map((item, index) => (
                                            <tr
                                                key={item.id || index}
                                                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                                            >
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {index + 1}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.name}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    <span
                                                        className={`px-2 py-1 rounded-full text-xs font-medium ${item.status ===
                                                            "ACTIVE"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-red-100 text-red-700"
                                                            }`}
                                                    >
                                                        {item.status}
                                                    </span>
                                                </td>

                                                <td className="px-6 py-4 text-right space-x-2">
                                                    <div className="flex justify-end gap-2">

                                                        <Link href={route('admin.online-exam-questions.index', { exam_id: item.id })}>
                                                            <PrimaryButton size='sm' type="button">
                                                                Questions
                                                            </PrimaryButton>
                                                        </Link>


                                                        {auth?.user?.permissions?.includes('online.exam.course.update') &&
                                                            <Link href={route('admin.online-exam.course.edit', item.id)}>
                                                                <PrimaryButton
                                                                    size='sm'
                                                                    type="button"
                                                                >
                                                                    Edit
                                                                </PrimaryButton>
                                                            </Link>
                                                        }
                                                        {auth?.user?.permissions?.includes('online.exam.course.delete') &&
                                                            <DangerButton
                                                                size="sm"
                                                                onClick={() => handleDelete(item.id)}
                                                            >
                                                                Delete
                                                            </DangerButton>
                                                        }
                                                    </div>
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
                            links={exam?.links}
                            from={exam?.from}
                            to={exam?.to}
                            total={exam?.total}
                        />
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    )
}

export default List