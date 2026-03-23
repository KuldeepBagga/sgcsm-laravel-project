import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { router, useForm, usePage } from '@inertiajs/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function StudentDetails({ showStudentDetailsModal, closeStudentDetailsModal, id }) {
    const [studentData, setStudentData] = useState(null);
    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({})

    const handleClose = () => {
        closeStudentDetailsModal()
    }
    useEffect(() => {
        if (!id) return;

        const getStudentDetails = async () => {
            try {
                const { data } = await axios.get(route('student.get.details', id));
                setStudentData(data);
            } catch (error) {
                console.error(error);
            }
        };

        getStudentDetails();
    }, [id]);

    return (
        <Modal
            show={showStudentDetailsModal}
            onClose={closeStudentDetailsModal}
            title="Student Details"
        >
            <section className="w-full px-1">
                <header className="mb-3 p-5 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        STUDENT DETAILS
                    </h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        ENTER SUDENTS DETAILS
                    </p>
                </header>

                <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>

                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div>
                                <div className='text-gray-300'>Name</div>
                                <div className='text-gray-300  text-lg'>{studentData?.data[0]?.name.toUpperCase()}</div>
                            </div>

                            <div>
                                <div className='text-gray-300'>Roll No</div>
                                <div className='text-gray-300  text-lg'>{studentData?.data[0]?.student_id?.toUpperCase()}</div>
                            </div>

                            <div>
                                <div className='text-gray-300'>Course</div>
                                <div className='text-gray-300  text-lg'>{studentData?.data[0]?.course?.toUpperCase()}</div>
                            </div>

                            <div>
                                <div className='text-gray-300'>Date of Birth</div>
                                <div className='text-gray-300  text-lg'>{studentData?.data[0]?.date_of_birth?.toUpperCase()}</div>
                            </div>

                            <div>
                                <div className='text-gray-300'>Fees</div>
                                <div className='text-gray-300  text-lg'>₹ {studentData?.data[0]?.total_fees}</div>
                            </div>

                            <div>
                                <div className='text-gray-300'>Total Paid</div>
                                <div className='text-gray-300  text-lg'>₹ {studentData?.data[0]?.total_paid}</div>
                            </div>

                            <div>
                                <div className='text-gray-300'>Pending</div>
                                <div className='text-gray-300  text-lg'>₹ {studentData?.data[0]?.pending}</div>
                            </div>

                            <div>
                                <div className='text-gray-300'>Status</div>
                                <div className='text-gray-300  text-lg'>
                                    <span className='bg-gray-50 text-gray-800 border-gray-800 rounded-lg px-3 py-1 text-sm font-semibold'>{studentData?.data[0]?.status}</span>
                                </div>
                            </div>

                        </div>

                        <div className="mt-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm">

                            <div className="mb-4">
                                <div className='flex justify-between items-center p-2'>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Payment History
                                    </h3>
                                    <div>
                                        Payment
                                    </div>
                                </div>

                            </div>
                            <div>
                                {studentData?.data[0]?.payments?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center bg-gray-200 shadow-md rounded-lg p-4 border"
                                    >
                                        <div>
                                            <p className="text-lg font-semibold text-gray-900">
                                                ₹{item.amount_paid}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {new Date(item.created_at).toLocaleDateString()}
                                            </p>
                                        </div>

                                        <div>
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm font-medium bg-green-700 text-green-100`}
                                            >
                                                {item.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>


                    <div className="flex justify-end items-center gap-3 p-2 border-t border-gray-200 dark:border-gray-700">
                        <button
                            type="button"
                            onClick={() => handleClose()}
                            className="px-4 py-2 text-sm font-medium text-gray-100 hover:text-gray-100 dark:text-gray-100 dark:hover:text-white transition
                            bg-red-800 rounded-lg hover:bg-red-900"
                        >
                            Cancel
                        </button>

                    </div>
                </form>
            </section>
        </Modal>
    )
}

export default StudentDetails