import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function FranchiseRegister() {
    return (
        <MainLayout>
            <Head title="Franchise Register" />

            <main class="bg-slate-50">
                <section class="relative overflow-hidden bg-slate-950">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop"
                        alt="" class="absolute inset-0 w-full h-full object-cover opacity-35" />
                    <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/85 to-slate-900/25"></div>

                    <div class="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
                        <div class="grid lg:grid-cols-12 gap-10 items-end">
                            <div class="lg:col-span-8 text-white">
                                <span class="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">
                                    <i class="fa-solid fa-building-columns"></i>
                                    SGCSM | Franchise
                                </span>

                                <h1 class="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">
                                    Franchise Registration
                                </h1>

                                <p class="mt-5 text-lg md:text-xl text-blue-50 max-w-2xl">
                                    Submit your study center details for affiliation review and training center opportunities.
                                </p>
                            </div>

                            <div class="lg:col-span-4">
                                <div class="grid grid-cols-3 gap-3 text-center text-white">
                                    <div class="bg-white/12 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                                        <div class="text-2xl font-black">01</div>
                                        <div class="text-xs text-blue-100 mt-1">Apply</div>
                                    </div>
                                    <div class="bg-white/12 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                                        <div class="text-2xl font-black">02</div>
                                        <div class="text-xs text-blue-100 mt-1">Review</div>
                                    </div>
                                    <div class="bg-white/12 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                                        <div class="text-2xl font-black">03</div>
                                        <div class="text-xs text-blue-100 mt-1">Connect</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="py-14 md:py-16">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <aside class="lg:col-span-4">
                                <div class="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                                    <div class="p-7 border-b border-slate-100">
                                        <p class="text-sm font-bold text-blue-700 uppercase">Center Affiliation</p>
                                        <h2 class="mt-2 text-3xl font-black text-slate-900">Register Your Study Center</h2>
                                        <p class="mt-3 text-slate-600">
                                            Keep your details accurate so the SGCSM team can verify the center and contact the director.
                                        </p>
                                    </div>

                                    <div class="p-7 space-y-5">
                                        <div class="flex gap-4">
                                            <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                                                <i class="fa-solid fa-certificate"></i>
                                            </div>
                                            <div>
                                                <h3 class="font-bold text-slate-900">Authorized Center</h3>
                                                <p class="text-slate-600 text-sm mt-1">Apply for study center affiliation.</p>
                                            </div>
                                        </div>

                                        <div class="flex gap-4">
                                            <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                                                <i class="fa-solid fa-user-graduate"></i>
                                            </div>
                                            <div>
                                                <h3 class="font-bold text-slate-900">Skill Training</h3>
                                                <p class="text-slate-600 text-sm mt-1">Support students with job-oriented courses.</p>
                                            </div>
                                        </div>

                                        <div class="flex gap-4">
                                            <div class="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center">
                                                <i class="fa-solid fa-headset"></i>
                                            </div>
                                            <div>
                                                <h3 class="font-bold text-slate-900">Next Step Support</h3>
                                                <p class="text-slate-600 text-sm mt-1">Our team can follow up after submission.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>

                            <section class="lg:col-span-8">
                                <div class="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                                    <div class="px-6 md:px-8 py-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                        <div>
                                            <p class="text-sm font-bold text-blue-700 uppercase">Online Form</p>
                                            <h2 class="mt-1 text-2xl md:text-3xl font-black text-slate-900">
                                                Franchise Registration Details
                                            </h2>
                                        </div>
                                        <span class="inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
                                            <i class="fa-solid fa-shield-halved text-green-600"></i>
                                            Required fields
                                        </span>
                                    </div>

                                    <form id="franchiseForm" class="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <label class="block md:col-span-2">
                                            <span class="text-sm font-bold text-slate-700 uppercase">Name of the Study Center</span>
                                            <input type="text" name="study_center" required
                                                class="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                placeholder="Enter study center name" />
                                        </label>

                                        <label class="block md:col-span-2">
                                            <span class="text-sm font-bold text-slate-700 uppercase">Center Head / Director's Name</span>
                                            <input type="text" name="director_name" required
                                                class="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                placeholder="Enter director name" />
                                        </label>

                                        <label class="block">
                                            <span class="text-sm font-bold text-slate-700 uppercase">State</span>
                                            <input type="text" name="state" required
                                                class="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                placeholder="State" />
                                        </label>

                                        <label class="block">
                                            <span class="text-sm font-bold text-slate-700 uppercase">Distt</span>
                                            <input type="text" name="district" required
                                                class="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                placeholder="District" />
                                        </label>

                                        <label class="block">
                                            <span class="text-sm font-bold text-slate-700 uppercase">Block</span>
                                            <input type="text" name="block" required
                                                class="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                placeholder="Block" />
                                        </label>

                                        <label class="block">
                                            <span class="text-sm font-bold text-slate-700 uppercase">City</span>
                                            <input type="text" name="city" required
                                                class="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                placeholder="City" />
                                        </label>

                                        <label class="block">
                                            <span class="text-sm font-bold text-slate-700 uppercase">Pin Code</span>
                                            <input type="text" name="pin_code" inputmode="numeric" required
                                                class="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                placeholder="Pin code" />
                                        </label>

                                        <label class="block">
                                            <span class="text-sm font-bold text-slate-700 uppercase">E-mail</span>
                                            <input type="email" name="email" required
                                                class="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                placeholder="Email address" />
                                        </label>

                                        <label class="block md:col-span-2">
                                            <span class="text-sm font-bold text-slate-700 uppercase">Ph./ Mobile (STD Code)</span>
                                            <input type="tel" name="phone" required
                                                class="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                placeholder="Phone or mobile number" />
                                        </label>

                                        <label class="block md:col-span-2">
                                            <span class="text-sm font-bold text-slate-700 uppercase">Message</span>
                                            <textarea name="message" rows="5"
                                                class="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 resize-y"
                                                placeholder="Write your message"></textarea>
                                        </label>

                                        <div class="md:col-span-2 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between pt-2">
                                            <p id="formStatus" class="text-sm font-semibold text-green-700 hidden">
                                                Thank you. Your registration details are ready to submit.
                                            </p>

                                            <button type="submit"
                                                class="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
                                                <i class="fa-solid fa-paper-plane"></i>
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
        </MainLayout>
    )
}

export default FranchiseRegister