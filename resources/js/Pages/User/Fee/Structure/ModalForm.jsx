import Modal from '@/Components/Modal'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import { useEffect } from 'react';

function Form({ show, onClose }) {

    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        name: '',
        fee_type: '',
        amount: ''
    });

    const handleClose = () => {
        reset();
        clearErrors();
        onClose();
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('fee.structure.store'), {
            onSuccess: () => {
                handleClose();
            }
        });
    };

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
                        Add Fee Head
                    </h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Create a new fee category
                    </p>
                </header>

                <form className="space-y-6" onSubmit={submit}>

                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Student Name */}
                            <div>
                                <InputLabel
                                    htmlFor="fee_head_name"
                                    value="Fee Head Name"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                />

                                <TextInput
                                    id="fee_head_name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-2 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                    autoComplete="fee_head_name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                />

                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            {/* Class */}
                            <div>
                                <InputLabel
                                    htmlFor="amount"
                                    value="Amount"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                />

                                <TextInput
                                    id="amount"
                                    type="text"
                                    name="amount"
                                    value={data.amount}
                                    className="mt-2 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                    autoComplete="amount"
                                    onChange={(e) => setData('amount', e.target.value)}
                                />

                                <InputError message={errors.amount} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="fee_type"
                                    value="Fee Type"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                />

                                <SelectInput
                                    name="fee_type"
                                    value={data.fee_type}
                                    className="mt-2 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                    onChange={(e) => setData('fee_type', e.target.value)}
                                    options={[
                                        { value: 'Mandatory', label: 'Mandatory' },
                                    ]}
                                />

                                <InputError message={errors.fee_type} className="mt-2" />
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