import DangerButton from '@/Components/DangerButton'
import Pagination from '@/Components/Pagination'
import PrimaryButton from '@/Components/PrimaryButton'
import Toast from '@/Components/Toast'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, router, usePage } from '@inertiajs/react'
import React from 'react'
import Swal from 'sweetalert2';

function List() {
    const { flash, institute } = usePage().props;

    const handleDelete = (id) => {
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#6366f1',
        //     cancelButtonColor: '#ef4444',
        //     confirmButtonText: 'Yes, delete it!'
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         router.delete(route('institute.destroy', id));
        //     }
        // });
    };


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Institute
                </h2>
            }
        >
            <Head title="Institute" />

            <Toast message={flash.success} type="success" />
            <Toast message={flash.error} type="error" />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-10xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Institute List
                            </h2>

                            <Link href={route('institute.create')}>
                                <PrimaryButton>
                                    Create
                                </PrimaryButton>
                            </Link>
                        </div>


                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden border-solid">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            ID
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Center Code
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Center Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Director
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            State
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            City
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            PinCode
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Disctrict
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Authorization
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-gray-900">

                                    {institute?.data?.length > 0 ? (
                                        institute.data.map((item, index) => (
                                            <tr
                                                key={item.id || index}
                                                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                                            >
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {index + 1}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.center_code}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.center_name}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.director}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.state}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.city}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.pin}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.district}
                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.authorization}
                                                </td>



                                                <td className="px-6 py-4 text-right space-x-2">
                                                    <Link href={route('institute.edit', item.id)}>
                                                        <PrimaryButton
                                                            size='sm'
                                                        >
                                                            Edit
                                                        </PrimaryButton>
                                                    </Link>
                                                    <DangerButton
                                                        size="sm"
                                                        onClick={() => handleDelete(item.id)}
                                                    >
                                                        Delete
                                                    </DangerButton>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="3"
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
                            links={institute.links}
                            from={institute.from}
                            to={institute.to}
                            total={institute.total}
                        />
                    </div>
                </div>
            </div>

        </AuthenticatedLayout >
    )
}

export default List