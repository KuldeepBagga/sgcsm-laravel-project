import DangerButton from '@/Components/DangerButton'
import Pagination from '@/Components/Pagination'
import PrimaryButton from '@/Components/PrimaryButton'
import Toast from '@/Components/Toast'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, router, useForm, usePage } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import TextInput from '@/Components/TextInput'

function List() {
    const { flash, course, auth } = usePage().props;

    const { data, setData, processing } = useForm({
        name: '',
        category: ''
    });

    useEffect(() => {
        const hasFilters = Object.values(data).some(value => value);
        if (!hasFilters) return;

        const timeout = setTimeout(() => {
            router.get(route('admin.course.index'), {
                name: data.name,
                category: data.category
            }, {
                preserveState: true,
                replace: true
            });
        }, 1000);

        return () => clearTimeout(timeout);

    }, [data.name, data.category]);

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
                router.delete(route('admin.course.destroy', id));
            }
        });
    };


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Course
                </h2>
            }
        >
            <Head title="Course" />

            <Toast message={flash.success} type="success" />
            <Toast message={flash.error} type="error" />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-10xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Course List
                            </h2>
                            {auth?.user?.permissions?.includes('course.create') &&
                                <Link href={route('admin.course.create')}>
                                    <PrimaryButton>
                                        Create
                                    </PrimaryButton>
                                </Link>}
                        </div>


                        <div className="w-full overflow-x-auto">
                            <table className="min-w-[700px] w-full text-sm md:text-base border border-gray-200 dark:border-gray-700 rounded-lg">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            ID
                                        </th>
                                        <th className="px-1 py-0 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Category
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Actions
                                        </th>
                                    </tr>

                                    <tr>
                                        <th className='px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300'>
                                            {/* ID filter (optional) */}
                                        </th>

                                        <th className='text-left text-sm font-medium text-gray-600 dark:text-gray-300'>
                                            <TextInput
                                                id="name"
                                                type="text"
                                                value={data.name}
                                                className="block w-full"
                                                onChange={(e) => setData('name', e.target.value)}
                                            />
                                        </th>

                                        <th className="px-6 py-2">
                                            <select
                                                value={data.category}
                                                onChange={(e) => setData('category', e.target.value)}
                                                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                            >
                                                <option value="">SELECT CATEGORY</option>
                                                {[...new Set(course?.data?.map(c => c.category))].map((cat, i) => (
                                                    <option key={i} value={cat}>
                                                        {cat}
                                                    </option>
                                                ))}
                                            </select>
                                        </th>

                                        <th className="px-6 py-2 text-right">

                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-gray-900">

                                    {course?.data?.length > 0 ? (
                                        course.data.map((item, index) => (
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
                                                    {item.category}
                                                </td>

                                                <td className="px-6 py-4 text-right space-x-2">
                                                    {auth.user.permissions.includes('course_module.view') &&
                                                        <Link href={route('admin.course-module.index', { id: item.id })}>
                                                            <PrimaryButton
                                                                size='sm'
                                                            >
                                                                Modules
                                                            </PrimaryButton>
                                                        </Link>
                                                    }

                                                    {auth.user.permissions.includes('course.update') &&
                                                        <Link href={route('admin.course.edit', item.id)}>
                                                            <PrimaryButton
                                                                size='sm'
                                                            >
                                                                Edit
                                                            </PrimaryButton>
                                                        </Link>
                                                    }
                                                    {auth.user.permissions.includes('course.delete') &&
                                                        <DangerButton
                                                            size="sm"
                                                            onClick={() => handleDelete(item.id)}
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
                            links={course.links}
                            from={course.from}
                            to={course.to}
                            total={course.total}
                        />
                    </div>
                </div>
            </div>

        </AuthenticatedLayout >
    )
}

export default List