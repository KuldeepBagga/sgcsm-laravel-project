import Modal from '@/Components/Modal'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import React, { useEffect, useState } from 'react'
import { router, useForm, usePage } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import axios from 'axios';

function Form({ show, onClose }) {
    const { course } = usePage().props;
    const [_courseData, setCourseData] = useState();
    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        name: '',
        student_id: '',
        email: '',
        phone: '',
        course_id: '',
        date_of_birth: '',
        total_fees: 0,
        payment_date: '',
        amount_paid: 0,
        payment_method: 'Cash',
    });

    const totalFees = _courseData?.fee_structure?.amount || 0;

    const getCourse = course.map(item => ({
        value: item.id,
        label: item.name
    }));

    const handleClose = () => {
        reset();
        clearErrors();
        onClose();
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('student.store'), {
            onSuccess: () => {
                handleClose();
            },
            onError: (e) => {
                console.log(e)
            }
        })
    }

    useEffect(() => {
        if (!data.course_id) return;

        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(
                    route('student.get.course', data.course_id)
                );
                setCourseData(response);
                setData('total_fees', response?.fee_structure?.amount || 0);

            } catch (error) {
                console.error(error.response?.data || error.message);
            }
        };

        fetchData();
    }, [data.course_id]);

    return (
        <Modal
            show={show}
            onClose={onClose}
            title="Add Student"
        >
            <section className="w-full px-1">

                {/* Header */}
                <header className="mb-3 p-5 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        ADD STUDENT
                    </h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        ENTER SUDENTS DETAILS
                    </p>
                </header>

                <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>

                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Student Name */}
                            <div>
                                <InputLabel
                                    htmlFor="name"
                                    value="Full Name"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                />

                                <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-2 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                />

                                <InputError message={errors.name} className="mt-2" />
                            </div>


                            <div>
                                <InputLabel
                                    htmlFor="student_id"
                                    value="Student Id"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                />

                                <TextInput
                                    id="student_id"
                                    type="text"
                                    name="student_id"
                                    value={data.student_id}
                                    className="mt-2 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                    autoComplete="student_id"
                                    onChange={(e) => setData('student_id', e.target.value)}
                                />

                                <InputError message={errors.student_id} className="mt-2" />
                            </div>


                            <div>
                                <InputLabel
                                    htmlFor="email"
                                    value="Email"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                />

                                <TextInput
                                    id="email"
                                    type="text"
                                    name="email"
                                    value={data.email}
                                    className="mt-2 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                    autoComplete="email"
                                    onChange={(e) => setData('email', e.target.value)}
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="phone"
                                    value="Phone No"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                />
                                <TextInput
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    value={data.phone}
                                    className="mt-2 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                    autoComplete="phone"
                                    onChange={(e) => setData('phone', e.target.value)}
                                />
                                <InputError message={errors.phone} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="course_id"
                                    value="Course"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                />

                                <SelectInput
                                    name="course_id"
                                    value={data.course_id}
                                    className="mt-2 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                    onChange={(e) => {
                                        setData('course_id', e.target.value);
                                    }}
                                    options={getCourse}
                                />

                                <InputError message={errors.course_id} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="date_of_birth"
                                    value="Date of Birth"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                />
                                <TextInput
                                    id="date_of_birth"
                                    type="date"
                                    name="date_of_birth"
                                    value={data.date_of_birth}
                                    className="mt-2 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                    autoComplete="date_of_birth"
                                    onChange={(e) => setData('date_of_birth', e.target.value)}
                                />


                                <InputError message={errors.date_of_birth} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="total_fees"
                                    value="Total Fees (₹)"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                />
                                <TextInput
                                    id="total_fees"
                                    type="text"
                                    name="total_fees"
                                    value={_courseData?.fee_structure?.amount || 0}
                                    className="mt-2 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                    autoComplete="total_fees"
                                    onChange={(e) => setData('total_fees', e.target.value)}
                                    readOnly
                                />

                                <InputError message={errors.total_fees} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="payment_date"
                                    value="Payment Date"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                />
                                <TextInput
                                    id="payment_date"
                                    type="date"
                                    name="payment_date"
                                    value={data.payment_date}
                                    className="mt-2 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                    autoComplete="payment_date"
                                    onChange={(e) => setData('payment_date', e.target.value)}
                                />


                                <InputError message={errors.payment_date} className="mt-2" />
                            </div>

                        </div>

                        <div className="mt-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm">

                            {/* Header */}
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Initial Payment <span className="text-sm text-gray-400">(Optional)</span>
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    If student is paying fees at the time of admission, enter the amount here.
                                </p>
                            </div>

                            {/* Inputs Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                                {/* Amount Paid */}
                                <div>
                                    <InputLabel value="Amount Paid (₹)" />
                                    <TextInput
                                        type="number"
                                        name="amount_paid"
                                        value={data.amount_paid}
                                        onChange={(e) => setData('amount_paid', e.target.value)}
                                        className="mt-2 w-full rounded-xl"
                                    />
                                    <InputError message={errors.amount_paid} className="mt-2" />
                                </div>

                                {/* Payment Method */}
                                <div>
                                    <InputLabel value="Payment Method" />
                                    <select
                                        value={data.payment_method}
                                        name='payment_method'
                                        onChange={(e) => setData('payment_method', e.target.value)}
                                        className="mt-2 w-full rounded-xl border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <option value="Cash">Cash</option>
                                        <option value="UPI">UPI</option>
                                        <option value="Card">Card</option>
                                        <option value="Bank Transfer">Bank Transfer</option>
                                    </select>
                                </div>

                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2 text-sm">

                                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                                    <span>Total Fees:</span>
                                    <span className="font-medium text-gray-900 dark:text-white">
                                        ₹{totalFees}
                                    </span>
                                </div>

                                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                                    <span>Amount Paid:</span>
                                    <span className="font-medium text-green-600">
                                        ₹{data.amount_paid || 0}
                                    </span>
                                </div>

                                <div className="flex justify-between font-semibold">
                                    <span className="text-gray-900 dark:text-white">
                                        Pending Amount:
                                    </span>
                                    <span className="text-red-600">
                                        ₹ {Math.max(0, totalFees - data.amount_paid)}
                                    </span>
                                </div>

                            </div>

                        </div>
                    </div>


                    {/* Footer */}
                    <div className="flex justify-end items-center gap-3 pt-1 border-t border-gray-200 dark:border-gray-700">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                        >
                            Cancel
                        </button>
                        <div className='py-2'>
                            <PrimaryButton className="px-6 py-2.5 rounded-xl" disabled={processing}>
                                {processing ? "Please Wait" : "Save Student"}
                            </PrimaryButton>
                        </div>


                    </div>

                </form>
            </section>
        </Modal>
    )
}

export default Form