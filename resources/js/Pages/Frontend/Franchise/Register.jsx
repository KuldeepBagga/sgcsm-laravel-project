import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import InputError from '@/Components/InputError';

function FranchiseRegister() {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        center_name: '',
        director: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        postal_code: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('franchise-store'), {
            preserveState: false,
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <MainLayout>
            <Head title="Franchise Register" />
            {flash.success && (
                <main className="bg-slate-50">
                    <div className="flex items-center justify-center bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
                        <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 text-center">
                            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
                                <svg
                                    className="w-10 h-10 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>

                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                Thank You!
                            </h1>

                            <p className="text-gray-600 mb-8">
                                Your franchise application has been submitted successfully.
                                Our team will review your details and contact you soon.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={route('home')}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    Back to Home
                                </Link>

                                <Link
                                    href={route('contact')}
                                    className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            )}

            {!flash.success && (
                <main className="bg-slate-50">
                    <section className="relative overflow-hidden bg-slate-950">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop"
                            alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/85 to-slate-900/25"></div>

                        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
                            <div className="grid lg:grid-cols-12 gap-10 items-end">
                                <div className="lg:col-span-8 text-white">
                                    <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">
                                        <i className="fa-solid fa-building-columns"></i>
                                        SGCSM | Franchise
                                    </span>

                                    <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">
                                        Franchise Registration
                                    </h1>

                                    <p className="mt-5 text-lg md:text-xl text-blue-50 max-w-2xl">
                                        Submit your study center details for affiliation review and training center opportunities.
                                    </p>
                                </div>

                                <div className="lg:col-span-4">
                                    <div className="grid grid-cols-3 gap-3 text-center text-white">
                                        <div className="bg-white/12 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                                            <div className="text-2xl font-black">01</div>
                                            <div className="text-xs text-blue-100 mt-1">Apply</div>
                                        </div>
                                        <div className="bg-white/12 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                                            <div className="text-2xl font-black">02</div>
                                            <div className="text-xs text-blue-100 mt-1">Review</div>
                                        </div>
                                        <div className="bg-white/12 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                                            <div className="text-2xl font-black">03</div>
                                            <div className="text-xs text-blue-100 mt-1">Connect</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-14 md:py-16">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                <aside className="lg:col-span-4">
                                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                                        <div className="p-7 border-b border-slate-100">
                                            <p className="text-sm font-bold text-blue-700 uppercase">Center Affiliation</p>
                                            <h2 className="mt-2 text-3xl font-black text-slate-900">Register Your Study Center</h2>
                                            <p className="mt-3 text-slate-600">
                                                Keep your details accurate so the SGCSM team can verify the center and contact the director.
                                            </p>
                                        </div>

                                        <div className="p-7 space-y-5">
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                                                    <i className="fa-solid fa-certificate"></i>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-slate-900">Authorized Center</h3>
                                                    <p className="text-slate-600 text-sm mt-1">Apply for study center affiliation.</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                                                    <i className="fa-solid fa-user-graduate"></i>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-slate-900">Skill Training</h3>
                                                    <p className="text-slate-600 text-sm mt-1">Support students with job-oriented courses.</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center">
                                                    <i className="fa-solid fa-headset"></i>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-slate-900">Next Step Support</h3>
                                                    <p className="text-slate-600 text-sm mt-1">Our team can follow up after submission.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>

                                <section className="lg:col-span-8">
                                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                                        <div className="px-6 md:px-8 py-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                            <div>
                                                <p className="text-sm font-bold text-blue-700 uppercase">Online Form</p>
                                                <h2 className="mt-1 text-2xl md:text-3xl font-black text-slate-900">
                                                    Franchise Registration Details
                                                </h2>
                                            </div>
                                            <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
                                                <i className="fa-solid fa-shield-halved text-green-600"></i>
                                                Required fields
                                            </span>
                                        </div>

                                        <form onSubmit={handleSubmit} id="franchiseForm" className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <label className="block md:col-span-2">
                                                <span className="text-sm font-bold text-slate-700 uppercase">Name of the Study Center</span>
                                                <input type="text" name="center_name"
                                                    onChange={(e) => setData('center_name', e.target.value)}
                                                    className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                    placeholder="Enter study center name" />
                                                <InputError message={errors.center_name} className="mt-1 text-sm text-red-600" />
                                            </label>

                                            <label className="block md:col-span-2">
                                                <span className="text-sm font-bold text-slate-700 uppercase">Center Head / Director's Name</span>
                                                <input type="text" name="director"
                                                    onChange={(e) => setData('director', e.target.value)}
                                                    className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                    placeholder="Enter director name" />
                                                <InputError message={errors.director} className="mt-1 text-sm text-red-600" />
                                            </label>

                                            <label className="block">
                                                <span className="text-sm font-bold text-slate-700 uppercase">State</span>
                                                <input type="text" name="state"
                                                    onChange={(e) => setData('state', e.target.value)}
                                                    className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                    placeholder="State" />
                                                <InputError message={errors.state} className="mt-1 text-sm text-red-600" />
                                            </label>

                                            <label className="block">
                                                <span className="text-sm font-bold text-slate-700 uppercase">District</span>
                                                <input type="text" name="district"
                                                    onChange={(e) => setData('district', e.target.value)}
                                                    className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                    placeholder="District" />
                                                <InputError message={errors.district} className="mt-1 text-sm text-red-600" />
                                            </label>

                                            <label className="block">
                                                <span className="text-sm font-bold text-slate-700 uppercase">Block</span>
                                                <input type="text" name="block"
                                                    onChange={(e) => setData('block', e.target.value)}
                                                    className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                    placeholder="Block" />
                                                <InputError message={errors.block} className="mt-1 text-sm text-red-600" />
                                            </label>

                                            <label className="block">
                                                <span className="text-sm font-bold text-slate-700 uppercase">City</span>
                                                <input type="text" name="city"
                                                    onChange={(e) => setData('city', e.target.value)}
                                                    className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                    placeholder="City" />
                                                <InputError message={errors.city} className="mt-1 text-sm text-red-600" />
                                            </label>

                                            <label className="block">
                                                <span className="text-sm font-bold text-slate-700 uppercase">Pin Code</span>
                                                <input type="text" name="pin_code" inputMode="numeric"
                                                    onChange={(e) => setData('pin_code', e.target.value)}
                                                    className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                    placeholder="Pin code" />
                                                <InputError message={errors.pin_code} className="mt-1 text-sm text-red-600" />
                                            </label>

                                            <label className="block">
                                                <span className="text-sm font-bold text-slate-700 uppercase">E-mail</span>
                                                <input type="text" name="email"
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                    placeholder="Email address" />
                                                <InputError message={errors.email} className="mt-1 text-sm text-red-600" />
                                            </label>

                                            <label className="block md:col-span-2">
                                                <span className="text-sm font-bold text-slate-700 uppercase">Ph./ Mobile (STD Code)</span>
                                                <input type="tel" name="phone"
                                                    onChange={(e) => setData('phone', e.target.value)}
                                                    className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                    placeholder="Phone or mobile number" />
                                                <InputError message={errors.phone} className="mt-1 text-sm text-red-600" />
                                            </label>

                                            <label className="block md:col-span-2">
                                                <span className="text-sm font-bold text-slate-700 uppercase">Message</span>
                                                <textarea name="message" rows="5"
                                                    onChange={(e) => setData('message', e.target.value)}
                                                    className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 resize-y"
                                                    placeholder="Write your message"></textarea>
                                                <InputError message={errors.message} className="mt-1 text-sm text-red-600" />
                                            </label>

                                            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between pt-2">
                                                <p id="formStatus" className="text-sm font-semibold text-green-700 hidden">
                                                    Thank you. Your registration details are ready to submit.
                                                </p>

                                                <button type="submit"
                                                    className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
                                                    <i className="fa-solid fa-paper-plane"></i>
                                                    Submit Registration
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>
                </main>
            )}
        </MainLayout>
    )
}

export default FranchiseRegister