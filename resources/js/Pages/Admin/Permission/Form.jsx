import DangerButton from '@/Components/DangerButton'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import React from 'react'

function From() {

    const { permission} = usePage().props;

    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: permission?.name || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault()

        if (permission) {
            put(route('permission.update', permission.id));
        } else {
            post(route('permission.store'), {
                onFinish: () => reset('name'),
            });
        }
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {permission ? 'Edit Permission' : 'Create Permission'}
                </h2>
            }
        >
            <Head title={permission ? 'Edit Permission' : 'Create Permission'} />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            {permission ? 'Edit Permission' : 'Create Permission'}
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

                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size='md'>
                                    {permission ? 'Update' : 'Save'}
                                </PrimaryButton>
                                <Link href={route('permission.index')}>
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

export default From