import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head, useForm, usePage } from '@inertiajs/react'
import { STATES } from '@/data/RawData.js';
import InputError from "@/Components/InputError";
import DataTable, { SortOrder } from 'react-data-table-component';

function AuthorizedStudyCenter() {

    const { institutes } = usePage().props;

    const { data, setData, post, processing, errors, reset, progress } = useForm({
        states: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('authorized-study-center.show'), {
            preserveScroll: true,
            //onSuccess: () => reset()
        });
    };

    const COLUMNS = [
        { name: 'Center Code', selector: row => row.center_code, sortable: true },
        { name: 'Name', selector: row => row.director, sortable: true },
        { name: 'Center Name', selector: row => row.center_name, sortable: true }
    ];

    return (
        <MainLayout>
            <Head title="Authorized Study Center" />

            <main className="bg-slate-50">
                <section className="relative overflow-hidden bg-slate-950">
                    <img
                        src="/images/photo-1522202176988-66273c2fd55f.jpeg"
                        alt="Authorized Study Center"
                        className="absolute inset-0 w-full h-full object-cover opacity-35"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/85 to-slate-900/25"></div>

                    <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
                        <div className="grid lg:grid-cols-12 gap-10 items-end">
                            <div className="lg:col-span-8 text-white">
                                <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">
                                    <i className="fa-solid fa-building-columns"></i>
                                    Authorized Study Center
                                </span>

                                <h1 className="mt-5 text-4xl md:text-5xl font-black leading-tight uppercase">
                                    Authorized Study Center
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-10">
                    <form onSubmit={handleSubmit}>
                        <div className="bg-white rounded-3xl shadow-xl border p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
                                <div className="lg:col-span-10">
                                    <label className="block text-gray-700 font-semibold mb-3">
                                        Select State
                                    </label>

                                    <select
                                        value={data.states}
                                        onChange={(e) => setData('states', e.target.value)}
                                        className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                        <option value="">Select State...</option>
                                        {STATES.map((item, index) =>
                                            <option value={item} key={index}>
                                                {item}
                                            </option>
                                        )}
                                    </select>
                                    <InputError message={errors.states} className="mt-3" />
                                </div>

                                <div className="lg:col-span-2">
                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold shadow-lg transition duration-300">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="bg-white rounded-3xl shadow-xl border overflow-hidden mt-10">
                        <DataTable
                            columns={COLUMNS}
                            data={institutes}
                            pagination
                            responsive
                        />
                    </div>
                </section>
            </main>


        </MainLayout>
    )
}

export default AuthorizedStudyCenter