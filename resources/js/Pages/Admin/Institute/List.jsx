import DangerButton from '@/Components/DangerButton'
import Pagination from '@/Components/Pagination'
import PrimaryButton from '@/Components/PrimaryButton'
import Toast from '@/Components/Toast'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, router, useForm, usePage } from '@inertiajs/react'
import React, { useEffect } from 'react'
import Swal from 'sweetalert2';
import TextInput from '@/Components/TextInput';

function List() {
    const { flash, institute, auth } = usePage().props;
    const { data, setData, processing } = useForm({
        center_code: '',
        center_name: '',
        director: '',
        state: '',
        city: '',
        pincode: '',
        district: '',
        authorization: ''
    });

    useEffect(() => {

        const hasFilters = Object.values(data).some(value => value);

        if (!hasFilters) return;

        const timeout = setTimeout(() => {
            router.get(route('admin.institute.index'), data, {
                preserveState: true,
                replace: true
            });
        }, 1000);

        return () => clearTimeout(timeout);

    }, [data]);

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
                router.delete(route('admin.institute.destroy', id));
            }
        });
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
                            {auth?.user?.permissions?.includes('institute.create') &&
                                <Link href={route('admin.institute.create')}>
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
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">

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
                                                id="center_name"
                                                type="text"
                                                value={data.center_name}
                                                className="block w-full"
                                                onChange={(e) => setData('center_name', e.target.value)}
                                            />
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <TextInput
                                                id="director"
                                                type="text"
                                                value={data.director}
                                                className="block w-full"
                                                onChange={(e) => setData('director', e.target.value)}
                                            />
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <select
                                                value={data.state}
                                                onChange={(e) => setData('state', e.target.value)}
                                                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                            >
                                                <option value="">STATE..</option>
                                                {[...new Set(institute?.data?.map(c => c.state))].map((state, i) => (
                                                    <option key={i} value={state}>
                                                        {state}
                                                    </option>
                                                ))}
                                            </select>
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <select
                                                value={data.city}
                                                onChange={(e) => setData('city', e.target.value)}
                                                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                            >
                                                <option value="">CITY..</option>
                                                {[...new Set(institute?.data?.map(c => c.city))].map((city, i) => (
                                                    <option key={i} value={city}>
                                                        {city}
                                                    </option>
                                                ))}
                                            </select>
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <TextInput
                                                id="pincode"
                                                type="text"
                                                value={data.pincode}
                                                className="block w-full"
                                                onChange={(e) => setData('pincode', e.target.value)}
                                            />
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <TextInput
                                                id="district"
                                                type="text"
                                                value={data.district}
                                                className="block w-full"
                                                onChange={(e) => setData('district', e.target.value)}
                                            />
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                            <select
                                                value={data.authorization}
                                                onChange={(e) => setData('authorization', e.target.value)}
                                                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                            >
                                                <option value="">AUTHORIZATION..</option>
                                                {[...new Set(institute?.data?.map(c => c.authorization))].map((authorization, i) => (
                                                    <option key={i} value={authorization}>
                                                        {authorization}
                                                    </option>
                                                ))}
                                            </select>
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300"></th>
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
                                                    <div className="flex justify-end gap-2">
                                                        {auth?.user?.permissions?.includes('institute.update') &&
                                                            <Link href={route('admin.institute.edit', item.id)}>
                                                                <PrimaryButton
                                                                    size='sm'
                                                                    type="button"
                                                                >
                                                                    Edit
                                                                </PrimaryButton>
                                                            </Link>
                                                        }
                                                        {auth?.user?.permissions?.includes('institute.delete') &&
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