
import PrimaryButton from '@/Components/PrimaryButton'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import React, { useState } from 'react'
import ModalForm from '../Student/ModalForm'
import Pagination from '@/Components/Pagination'
import { Button } from '@headlessui/react'
import StudentDetails from './StudentDetails'


function List() {
    const [showModal, setShowModal] = useState(false);
    const [showStudentDetailsModal, setShowStudentDetailsModal] = useState(false);
    const [studentId, setStudentId] = useState(null)
    const { student } = usePage().props;

    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                Student Management
            </h2>
        }>
            <Head title='Student Management' />

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
                                        <th className="px-6 py-3">Course</th>
                                        <th className="px-6 py-3">Total Fees</th>
                                        <th className="px-6 py-3">Paid</th>
                                        <th className="px-6 py-3">Pending</th>
                                        <th className="px-6 py-3">Payment Date</th>
                                        <th className="px-6 py-3">Status</th>
                                        <th className="px-6 py-3 text-center">Actions</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200">
                                    {student?.data?.length > 0 ? (
                                        student.data.map((item, index) => (
                                            <tr key={item.id} className="hover:bg-gray-800 transition">
                                                <td className="px-6 py-4 font-medium text-gray-200">
                                                    {index + 1}
                                                </td>

                                                <td className="px-6 py-4 font-medium text-gray-200">
                                                    {item.name}
                                                </td>

                                                <td className="px-6 py-4 font-medium text-gray-200">
                                                    {item.course}
                                                </td>

                                                <td className="px-6 py-4 font-medium text-gray-200">
                                                    {item.total_fees}
                                                </td>

                                                <td className="px-6 py-4 font-medium text-gray-200">
                                                    {item.total_paid}
                                                </td>
                                                <td className="px-6 py-4 font-medium text-gray-200">
                                                    {item.pending}
                                                </td>
                                                <td className="px-6 py-4 font-medium text-gray-200">
                                                    {new Date(item.created_at).toLocaleDateString('en-IN')}
                                                </td>
                                                <td className="px-6 py-4 font-medium text-gray-200">
                                                    <span
                                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${item.status === 'Paid'
                                                            ? 'bg-green-100 text-green-700'
                                                            : item.status === 'Partial'
                                                                ? 'bg-yellow-100 text-yellow-700'
                                                                : 'bg-red-100 text-red-700'
                                                            }`}
                                                    >
                                                        {item.status}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="flex items-center gap-2">
                                                        <Button
                                                            className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-1.5 rounded-lg shadow-sm transition"
                                                            onClick={() => {
                                                                setShowStudentDetailsModal(true)
                                                                setStudentId(item.id)
                                                            }}
                                                        >
                                                            View
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="px-6 py-4 text-center text-gray-400">
                                                No fee structures found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination
                        links={student.links}
                        from={student.from}
                        to={student.to}
                        total={student.total}
                    />
                </div>
            </div>

            <ModalForm
                show={showModal}
                onClose={() => setShowModal(false)}
            />
            <StudentDetails
                showStudentDetailsModal={showStudentDetailsModal}
                closeStudentDetailsModal={() => setShowStudentDetailsModal(false)}
                id={studentId}
            />
        </AuthenticatedLayout>
    )
}

export default List