import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import { STATES } from '@/data/RawData'

function Form() {
    const { flash, franchise } = usePage().props;

    const { data, setData, post, put, processing, errors, reset } = useForm({
        center_name: franchise?.center_name || '',
        director: franchise?.director || '',
        state: franchise?.state || '',
        city: franchise?.city || '',
        district: franchise?.district || '',
        pin: franchise?.pin || '',
        email: franchise?.email || '',
        phone: franchise?.phone || '',
        mobile: franchise?.mobile || ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (franchise) {
            put(route('franchise.update', franchise.id), {
                onFinish: () => reset(),
            });
        } else {
            post(route('franchise.store'), {
                onSuccess: () => reset(),
            });
        }
    }
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {franchise ? 'Edit Franchise' : 'Create Franchise'}
                </h2>
            }
        >
            <Head title={franchise ? 'Edit Franchise' : 'Create Franchise'} />

            <div className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">

                        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                            {franchise ? 'Edit Franchise' : 'Create Franchise'}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">

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
                                    <InputLabel htmlFor="phone" value="Phone (Optional)" />
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

                            </div>

                            <div className="mt-6">
                                <PrimaryButton disabled={processing} size='md'>
                                    {franchise ? 'Update' : 'Save'}
                                </PrimaryButton>
                                <Link href={route('franchise.index')}>
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