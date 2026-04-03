import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, router, useForm, usePage } from '@inertiajs/react'
import { RELATION, QUALIFICATION, STATES } from '@/data/RawData';
import React from 'react'
import axios from 'axios';

function Form() {
    const { student, institute } = usePage().props;
    const { data, setData, post, put, processing, errors, reset } = useForm({
        center_code: '',
        center_name: ''
    });

    const onChangeCenterCode = async (center_code) => {
        if (!center_code) {
            setData('center_name', '');
            return;
        }

        try {
            const res = await axios.get(route('admin.center_name', center_code));
            setData('center_name', res.data.data.center_name || '');
        } catch (error) {
            console.error(error);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {student ? 'Edit Student' : 'Create Student'}
                </h2>
            }
        >
            <Head title={student ? 'Edit Student' : 'Create Student'} />


            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            {student ? 'Edit Student' : 'Create Student'}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <InputLabel htmlFor="name" value="Student Name" />
                                    <TextInput
                                        id="name"
                                        type="text"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('name', e.target.value)}
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="relation" value="Relation" />
                                    <select
                                        value={data.relation}
                                        onChange={(e) => setData('relation', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">Select relation</option>

                                        {RELATION.map((relation) => (
                                            <option key={relation} value={relation}>
                                                {relation}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError message={errors.relation} className="mt-2" />
                                </div>


                                <div>
                                    <InputLabel htmlFor="father_name" value="Father Name" />
                                    <TextInput
                                        id="father_name"
                                        type="text"
                                        value={data.father_name}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('father_name', e.target.value)}
                                    />
                                    <InputError message={errors.father_name} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="mother_name" value="Mother Name" />
                                    <TextInput
                                        id="mother_name"
                                        type="text"
                                        value={data.mother_name}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('mother_name', e.target.value)}
                                    />
                                    <InputError message={errors.mother_name} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="date_joined" value="Date Joined" />
                                    <TextInput
                                        id="date_joined"
                                        type="date"
                                        value={data.date_joined}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('date_joined', e.target.value)}
                                    />
                                    <InputError message={errors.date_joined} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="date_of_birth" value="Date of Birth" />
                                    <TextInput
                                        id="date_of_birth"
                                        type="date"
                                        value={data.date_of_birth}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('date_of_birth', e.target.value)}
                                    />
                                    <InputError message={errors.date_of_birth} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="qualification" value="Qualification" />
                                    <select
                                        value={data.qualification}
                                        onChange={(e) => setData('qualification', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">SELECT QUALIFICATION</option>

                                        {QUALIFICATION.map((qualification) => (
                                            <option key={qualification} value={qualification}>
                                                {qualification}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError message={errors.qualification} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="center_code" value="Center Code" />
                                    <select
                                        value={data.center_code}
                                        onChange={(e) => {
                                            const value = e.target.value;

                                            setData('center_code', value);
                                            onChangeCenterCode(value);
                                        }}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">SELECT CENTER CODE</option>

                                        {institute.map((item, index) => (
                                            <option key={index} value={item.center_code}>
                                                {item.center_code}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError message={errors.center_code} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="center_name" value="Center Name" />
                                    <TextInput
                                        id="center_name"
                                        type="text"
                                        value={data.center_name}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('center_name', e.target.value)}
                                    />
                                    <InputError message={errors.center_name} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="state" value="State" />
                                    <select
                                        value={data.state}
                                        onChange={(e) => setData('state', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">SELECT STATE</option>

                                        {STATES.map((state) => (
                                            <option key={state} value={state}>
                                                {state}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError message={errors.state} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="district" value="District" />
                                    <TextInput
                                        id="district"
                                        type="text"
                                        value={data.district}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('district', e.target.value)}
                                    />

                                    <InputError message={errors.district} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="phone" value="Phone" />
                                    <TextInput
                                        id="phone"
                                        type="text"
                                        value={data.phone}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('phone', e.target.value)}
                                    />

                                    <InputError message={errors.phone} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="aadhar_no" value="Aadhar No" />
                                    <TextInput
                                        id="aadhar_no"
                                        type="text"
                                        value={data.aadhar_no}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('aadhar_no', e.target.value)}
                                    />

                                    <InputError message={errors.aadhar_no} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="paid" value="Paid" />
                                    <select
                                        value={data.paid}
                                        onChange={(e) => setData('paid', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">SELECT PAID</option>

                                        {["PAID", "NOT PAID"].map((paid) => (
                                            <option key={paid} value={paid}>
                                                {paid}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError message={errors.paid} className="mt-2" />
                                </div>


                                <div>
                                    <InputLabel htmlFor="certificate_issue" value="Certificate Issued" />
                                    <select
                                        value={data.certificate_issue}
                                        onChange={(e) => setData('certificate_issue', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">SELECT CERTIFICATE ISSUE</option>

                                        {["ISSUED", "NOT ISSUED"].map((certificate_issue) => (
                                            <option key={certificate_issue} value={certificate_issue}>
                                                {certificate_issue}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError message={errors.certificate_issue} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="course" value="Course" />
                                    <select
                                        value={data.course}
                                        onChange={(e) => setData('course', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">SELECT CERTIFICATE ISSUE</option>

                                        {["BCA", "MCA"].map((course) => (
                                            <option key={course} value={course}>
                                                {course}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError message={errors.course} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="scan" value="Scan" />
                                    <select
                                        value={data.scan}
                                        onChange={(e) => setData('scan', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">SELECT CERTIFICATE ISSUE</option>

                                        {["NOT SCANNED", "SCANNED"].map((scan) => (
                                            <option key={scan} value={scan}>
                                                {scan}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError message={errors.scan} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="image" value="Photo" />
                                    <TextInput
                                        id="image"
                                        type="text"
                                        value={data.image}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('image', e.target.value)}
                                    />

                                    <InputError message={errors.image} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="session_start" value="Session Start" />
                                    <TextInput
                                        id="session_start"
                                        type="number"
                                        value={data.session_start}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('session_start', e.target.value)}
                                    />

                                    <InputError message={errors.session_start} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="session_end" value="Session End" />
                                    <TextInput
                                        id="session_end"
                                        type="number"
                                        value={data.session_end}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('session_end', e.target.value)}
                                    />

                                    <InputError message={errors.session_end} className="mt-2" />
                                </div>

                            </div>


                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size='md'>
                                    {student ? 'Update' : 'Save'}
                                </PrimaryButton>
                                <Link href={route('student.index')}>
                                    <DangerButton className='mx-3' size='md'>
                                        Cancel
                                    </DangerButton>
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}

export default Form