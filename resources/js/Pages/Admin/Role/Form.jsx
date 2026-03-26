import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import React from 'react'

function Form() {
    const { role, allPermissions, selectedPermissions } = usePage().props;

    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: role?.name || '',
        permissions: selectedPermissions || []
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (role) {
            // update
            put(route('role.update', role.id));
        } else {
            // create
            post(route('role.store'), {
                onFinish: () => reset('name', 'permissions'),
            });
        }
    };


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {role ? 'Edit Role' : 'Create Role'}
                </h2>
            }
        >
            <Head title={role ? 'Edit Role' : 'Create Role'} />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            {role ? 'Edit Role' : 'Create Role'}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div>
                                <InputLabel htmlFor="name" value="Name" />

                                <TextInput
                                    id="name"
                                    type="text"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('name', e.target.value)}
                                />

                                <InputError message={errors.name} className="mt-2" />
                            </div>


                            <div className="py-4">
                                <InputLabel htmlFor="permissions">Permissions</InputLabel>

                                <select
                                    multiple
                                    value={data.permissions.map(String)} // convert to string for select
                                    onChange={(e) =>
                                        setData(
                                            'permissions',
                                            Array.from(e.target.selectedOptions, (option) =>
                                                Number(option.value) // convert back to number
                                            )
                                        )
                                    }
                                    className="mt-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white h-40"
                                >
                                    {allPermissions?.map((item) => (
                                        <option key={item.id} value={item.id} className="uppercase">
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>


                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size='md'>
                                    {role ? 'Update' : 'Save'}
                                </PrimaryButton>
                                <Link href={route('role.index')}>
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