import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import PrimaryButton from '@/Components/PrimaryButton'
import DangerButton from '@/Components/DangerButton'
import { Head, Link, router, usePage } from '@inertiajs/react'
import Toast from '@/Components/Toast'
import Pagination from '@/Components/Pagination'
import Swal from 'sweetalert2'

function List() {
    const { question, flash, auth, exam_id } = usePage().props;
    console.log(question)

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
                router.delete(route('admin.online-exam-questions.destroy', id));
            }
        });
    };

    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                Questions List
            </h2>
        }>

            <Head title='Exam Name' />

            <Toast message={flash.success} type="success" />
            <Toast message={flash.error} type="error" />


            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-10xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                                    Questions List
                                </h2>
                            </div>

                            <div className="flex items-center gap-3">

                                {auth?.user?.permissions.includes('online-exam-questions.create') &&
                                    <Link href={route('admin.online-exam-bulk-upload.index', { exam_id })} className='inline-flex items-center justify-center rounded-md border border-transparent bg-gray-800 text-white font-semibold uppercase tracking-widest transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white  dark:focus:bg-white dark:active:bg-gray-300 dark:focus:ring-offset-gray-800 px-4 py-2 text-sm'>
                                        Bulk Upload
                                    </Link>
                                }

                                {auth?.user?.permissions.includes('online-exam-questions.create') &&
                                    <Link href={route('admin.online-exam-questions.create', { exam_id })}>
                                        <PrimaryButton type="button">
                                            Create
                                        </PrimaryButton>
                                    </Link>
                                }

                                <Link href={route('admin.online-exam.course.index')}>
                                    <DangerButton>
                                        Back
                                    </DangerButton>
                                </Link>
                                
                            </div>
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

                                        <th className="px-6 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Actions
                                        </th>
                                    </tr>

                                </thead>

                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-gray-900">

                                    {question?.data?.length > 0 ? (
                                        question.data.map((item, index) => (
                                            <tr
                                                key={item.id || index}
                                                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                                            >
                                                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                                                    {index + 1}
                                                </td>

                                                <td className="px-6 py-4">
                                                    <div className="mb-4">
                                                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                                            {item.question.toUpperCase()}
                                                        </h3>
                                                    </div>

                                                    <div className="flex flex-wrap gap-2">
                                                        {item.answers.map((answer, index) => (
                                                            <div
                                                                key={index}
                                                                className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${answer.correct_answer
                                                                    ? "border-green-200 bg-green-50 text-green-800 dark:border-green-700 dark:bg-green-900/20 dark:text-green-300"
                                                                    : "border-red-200 bg-red-50 text-red-800 dark:border-red-700 dark:bg-red-900/20 dark:text-red-300"
                                                                    }`}
                                                            >
                                                                <span>{answer.answer.toUpperCase()}</span>

                                                                <span
                                                                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${answer.correct_answer
                                                                        ? "bg-green-600"
                                                                        : "bg-red-600"
                                                                        }`}
                                                                >
                                                                    {answer.correct_answer ? "✓" : "✕"}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4 text-right space-x-2">
                                                    <div className="flex justify-end gap-2">

                                                        {auth.user.permissions.includes('online-exam-questions.update') &&
                                                            <Link href={route('admin.online-exam-questions.edit', { question: item.id, exam_id: exam_id })}>
                                                                <PrimaryButton
                                                                    size='sm'
                                                                    type="button"
                                                                >
                                                                    Edit
                                                                </PrimaryButton>
                                                            </Link>
                                                        }
                                                        {auth.user.permissions.includes('online-exam-questions.delete') &&
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
                            links={question?.links}
                            from={question?.from}
                            to={question?.to}
                            total={question?.total}
                        />
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    )
}

export default List