import DangerButton from '@/Components/DangerButton'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import { STATES } from '@/data/RawData'
import FileDropzone from "@/Components/FileDropzone";

export default function Form() {
    const AUTHORIZATION = ["ISSUED", "NOT ISSUED", "CLOSED", "NOT WORKING"];
    const STATUS = ["ACTIVE", "BLACKLISTED", "DELETED"];
    const AUTHORIZED = ["Authorized", "Unauthorized"];
    const [preview, setPreview] = useState(null);
    const { institute } = usePage().props;

    const { data, setData, post, put, processing, errors, reset, progress } = useForm({
        center_code: institute?.center_code || '',
        center_name: institute?.center_name || '',
        image: null,
        email: institute?.email || '',
        address: institute?.address || '',
        city: institute?.city || '',
        state: institute?.state || '',
        pin: institute?.pin || '',
        district: institute?.district || '',
        mobile: institute?.mobile || '',
        phone: institute?.phone || '',
        director: institute?.director || '',
        authorization: institute?.authorization || '',
        status: institute?.status || '',
        reference: institute?.reference || '',
        authorized: institute?.authorized || '',
    });


    const handleFile = (files) => {
        const file = files[0];
        if (file) {
            setData("image", file);
            setPreview(URL.createObjectURL(file));
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!data.image) {
            delete data.image;
        }
        if (institute) {
            put(route('institute.update', institute.id));
        } else {
            post(route('institute.store'), {
                forceFormData: true,
                onFinish: () => reset('name'),
            });
        }
    }

    useEffect(() => {
        if (institute?.image) {
            setPreview(`/storage/${institute.image}`);
        }
    }, [institute]);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {institute ? 'Edit institute' : 'Create institute'}
                </h2>
            }
        >
            <Head title={institute ? 'Edit institute' : 'Create institute'} />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            {institute ? 'Edit institute' : 'Create institute'}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <InputLabel htmlFor="center_code" value="Center Code" />
                                    <TextInput
                                        id="center_code"
                                        type="text"
                                        value={data.center_code}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('center_code', e.target.value)}
                                    />
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
                                    <InputLabel htmlFor="email" value="Email" />
                                    <TextInput
                                        id="email"
                                        type="text"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="address" value="Address" />
                                    <TextInput
                                        id="address"
                                        type="text"
                                        value={data.address}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('address', e.target.value)}
                                    />
                                    <InputError message={errors.address} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="city" value="City" />
                                    <TextInput
                                        id="city"
                                        type="text"
                                        value={data.city}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('city', e.target.value)}
                                    />
                                    <InputError message={errors.city} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="state" value="State" />
                                    <select
                                        value={data.state}
                                        onChange={(e) => setData('state', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">Select State</option>

                                        {STATES.map((state) => (
                                            <option key={state} value={state}>
                                                {state}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError message={errors.state} className="mt-2" />
                                </div>


                                <div>
                                    <InputLabel htmlFor="pin" value="Pin" />
                                    <TextInput
                                        id="pin"
                                        type="text"
                                        value={data.pin}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('pin', e.target.value)}
                                    />
                                    <InputError message={errors.pin} className="mt-2" />
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
                                    <InputLabel htmlFor="mobile" value="Mobile" />
                                    <TextInput
                                        id="mobile"
                                        type="text"
                                        value={data.mobile}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('mobile', e.target.value)}
                                    />
                                    <InputError message={errors.mobile} className="mt-2" />
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
                                    <InputLabel htmlFor="director" value="Director" />
                                    <TextInput
                                        id="director"
                                        type="text"
                                        value={data.director}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('director', e.target.value)}
                                    />
                                    <InputError message={errors.director} className="mt-2" />
                                </div>


                                <div>
                                    <InputLabel htmlFor="authorization" value="Authorization" />
                                    <select
                                        value={data.authorization}
                                        onChange={(e) => setData('authorization', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">Select Authorization</option>

                                        {AUTHORIZATION.map((authorization, index) => (
                                            <option key={authorization} value={authorization}>
                                                {authorization}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError message={errors.authorization} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="status" value="status" />
                                    <select
                                        value={data.status}
                                        onChange={(e) => setData('status', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">Select Status</option>

                                        {STATUS.map((status, index) => (
                                            <option key={status} value={status}>
                                                {status}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError message={errors.authorization} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="reference" value="Reference" />
                                    <TextInput
                                        id="reference"
                                        type="text"
                                        value={data.reference}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('reference', e.target.value)}
                                    />
                                    <InputError message={errors.reference} className="mt-2" />
                                </div>


                                <div>
                                    <InputLabel htmlFor="authorized" value="Authorized" />
                                    <select
                                        value={data.authorized}
                                        onChange={(e) => setData('authorized', e.target.value)}
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
                                    >
                                        <option value="">Select Authorized</option>

                                        {AUTHORIZED.map((authorized, index) => (
                                            <option key={authorized} value={index}>
                                                {authorized}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError message={errors.authorization} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="image" value="Photo" className='mb-2' />
                                    
                                    {!preview && <FileDropzone onFileSelect={handleFile} />}

                                    {preview &&
                                        <>
                                            <img src={preview} className="w-32 mt-2 rounded" />
                                            <DangerButton
                                                size='sm'
                                                className='mt-3'
                                                onClick={() => {
                                                    setPreview(null);
                                                    setData('image', null);
                                                }}
                                            >
                                                Remove
                                            </DangerButton>
                                        </>
                                    }

                                    {progress && (
                                        <div className="w-full bg-gray-200 rounded">
                                            <div
                                                className="bg-indigo-600 text-xs text-white p-1 rounded"
                                                style={{ width: `${progress.percentage}%` }}
                                            >
                                                {progress.percentage}%
                                            </div>
                                        </div>
                                    )}

                                    <InputError message={errors.image} className='mt-2' />
                                </div>
                            </div>

                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size='md'>
                                    {institute ? 'Update' : 'Save'}
                                </PrimaryButton>
                                <Link href={route('institute.index')}>
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
    );
}