import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import React, { useState } from 'react';

function Form() {
    const { role, allPermissions, selectedPermissions } = usePage().props;

    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: role?.name || '',
        permissions: selectedPermissions || []
    });

    const [available, setAvailable] = useState(
        allPermissions.filter(p => !selectedPermissions?.includes(p.id))
    );

    const [selected, setSelected] = useState(
        allPermissions.filter(p => selectedPermissions?.includes(p.id))
    );

    const [leftSelected, setLeftSelected] = useState([]);
    const [rightSelected, setRightSelected] = useState([]);

    const moveRight = () => {
        const moveItems = available.filter(item => leftSelected.includes(item.id));

        const newSelected = [...selected, ...moveItems];
        const newAvailable = available.filter(item => !leftSelected.includes(item.id));

        setSelected(newSelected);
        setAvailable(newAvailable);
        setLeftSelected([]);

        setData('permissions', newSelected.map(p => p.id));
    };

    const moveLeft = () => {
        const moveItems = selected.filter(item => rightSelected.includes(item.id));

        const newAvailable = [...available, ...moveItems];
        const newSelected = selected.filter(item => !rightSelected.includes(item.id));

        setAvailable(newAvailable);
        setSelected(newSelected);
        setRightSelected([]);

        setData('permissions', newSelected.map(p => p.id));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (role) {
            put(route('role.update', role.id));
        } else {
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

                        <form onSubmit={handleSubmit}>

                            {/* NAME */}
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

                            {/* PERMISSIONS */}
                            <div className="py-6">
                                <InputLabel value="Permissions" />

                                <div className="flex items-center gap-4 mt-3">

                                    {/* LEFT BOX */}
                                    <select
                                        multiple
                                        className="w-full h-56 rounded-md border-gray-300 dark:bg-gray-700 dark:text-white"
                                        onChange={(e) =>
                                            setLeftSelected(
                                                Array.from(e.target.selectedOptions, o => Number(o.value))
                                            )
                                        }
                                    >
                                        {available.map(item => (
                                            <option key={item.id} value={item.id} className="uppercase">
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>

                                    <div className="flex flex-col gap-2">
                                        <button
                                            type="button"
                                            onClick={moveRight}
                                            className="px-3 py-1 bg-green-900 text-white rounded"
                                            disabled={!leftSelected.length}
                                        >
                                            →
                                        </button>

                                        <button
                                            type="button"
                                            onClick={moveLeft}
                                            className="px-3 py-1 bg-green-900 text-white rounded"
                                            disabled={!rightSelected.length}
                                        >
                                            ←
                                        </button>
                                    </div>

                                    <select
                                        multiple
                                        className="w-full h-56 rounded-md border-gray-300 dark:bg-gray-700 dark:text-white"
                                        onChange={(e) =>
                                            setRightSelected(
                                                Array.from(e.target.selectedOptions, o => Number(o.value))
                                            )
                                        }
                                    >
                                        {selected.map(item => (
                                            <option key={item.id} value={item.id} className="uppercase">
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                            </div>

                            <div className="mt-6">
                                <PrimaryButton disabled={processing}>
                                    {role ? 'Update' : 'Save'}
                                </PrimaryButton>

                                <Link href={route('role.index')}>
                                    <DangerButton className='mx-3'>
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

export default Form;