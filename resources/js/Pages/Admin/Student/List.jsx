import { Head, Link, router, usePage } from '@inertiajs/react'
import PrimaryButton from '@/Components/PrimaryButton';
import Toast from '@/Components/Toast'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import DangerButton from '@/Components/DangerButton'
import Pagination from '@/Components/Pagination'
import Swal from 'sweetalert2';
import TextInput from '@/Components/TextInput';

function List() {
    const { flash, student } = usePage().props;

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
                router.delete(route('student.destroy', id));
            }
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Student
                </h2>
            }
        >

            <Head title="Student" />
            <Toast message={flash.success} type="success" />
            <Toast message={flash.error} type="error" />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-10xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Student List
                            </h2>

                            <Link href={route('student.create')}>
                                <PrimaryButton>
                                    Create
                                </PrimaryButton>
                            </Link>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden border-solid">
                                <thead className="bg-gray-100 dark:bg-gray-700 text-center">
                                    <tr>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            ID
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Name
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Father Name
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Registration Id
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Date of Birth
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Course
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Scan
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Center Code
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Certificate Issued
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Paid
                                        </th>
                                        <th className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Certificate No
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-gray-900">
                                    {student?.data?.length > 0 ? (
                                        student.data.map((item, index) => (

                                            <tr
                                                key={item.id || index}
                                                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition text-center"
                                            >
                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {index + 1}
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.name}
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.relation} - {item.father_name}
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.registration_no}
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.date_of_birth}
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.course.name}
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    <span className={`px-2 py-1 text-white rounded-md text-xs ${item.scan === 'SCANNED' ? 'bg-green-500' : 'bg-red-500'
                                                        }`}>
                                                        {item.scan}
                                                    </span>
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.center_code}
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    <span className={`px-2 py-1 rounded-md text-white text-xs ${item.certificate_issued === 'ISSUED' ? 'bg-green-500' : 'bg-red-500'
                                                        }`}>
                                                        {item.certificate_issued}
                                                    </span>
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    <span className={`px-2 py-1 rounded-md text-white text-xs ${item.paid === 'PAID' ? 'bg-green-500' : 'bg-red-500'
                                                        }`}>
                                                        {item.paid}
                                                    </span>
                                                </td>

                                                <td className="px-2 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {item.certificate_no}
                                                </td>

                                                <td className="px-2 py-2 text-right space-x-2">
                                                    <Link href={route('student.edit', item.id)}>
                                                        <PrimaryButton size='sm'>Edit</PrimaryButton>
                                                    </Link>
                                                    <DangerButton size="sm" onClick={() => handleDelete(item.id)}>
                                                        Delete
                                                    </DangerButton>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="20" className="px-6 py-6 text-center text-gray-500 dark:text-gray-400">
                                                No data found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <Pagination
                            links={student?.links}
                            from={student?.from}
                            to={student?.to}
                            total={student?.total}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default List