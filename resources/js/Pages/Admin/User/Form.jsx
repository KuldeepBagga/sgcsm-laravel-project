import DangerButton from '@/Components/DangerButton';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import React from 'react'

function Form() {
    const { user } = usePage().props;

    const { data, setData, post, put, processing, errors, reset } = useForm({});

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {user ? 'Edit User' : 'Create User'}
                </h2>
            }
        >
            <Head title={user ? 'Edit User' : 'Create User'} />


            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            {user ? 'Edit User' : 'Create User'}
                        </h2>

                        <form onSubmit={handleSubmit}>



                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size='md'>
                                    {user ? 'Update' : 'Save'}
                                </PrimaryButton>
                                <Link href={route('user.index')}>
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