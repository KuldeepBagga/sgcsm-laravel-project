import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function OurAccount() {
    return (
        <MainLayout>
            <Head title="Our Account" />
            <main className="bg-slate-50">

                <div className="bg-gray-100 min-h-screen py-10 px-6">

                    {/* Container */}
                    <div className="max-w-7xl mx-auto">

                        {/* Heading */}
                        <div className="text-center mb-12">

                            <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold">
                                Payment Information
                            </span>

                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5">
                                Bank Details
                            </h1>

                            <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
                                Make payments securely using the bank account details or scan the QR code.
                            </p>

                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                            {/* Left Side */}
                            <div className="lg:col-span-2 space-y-8">

                                {/* SBI Card */}
                                <div className="bg-white rounded-3xl shadow-xl border overflow-hidden hover:shadow-2xl transition duration-300">

                                    {/* Header */}
                                    <div className="bg-gradient-to-r from-blue-700 to-indigo-700 px-8 py-6">

                                        <h2 className="text-3xl font-bold text-white">
                                            State Bank of India
                                        </h2>

                                    </div>

                                    {/* Content */}
                                    <div className="p-8">

                                        {/* Logo */}
                                        <div className="flex items-center gap-5 mb-8">

                                            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">

                                                <div className="w-14 h-14 rounded-full bg-blue-600 relative">

                                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-6 bg-white rounded-t-full"></div>

                                                </div>

                                            </div>

                                            <div>

                                                <h3 className="text-3xl font-bold text-gray-900">
                                                    State Bank of India
                                                </h3>

                                                <p className="text-gray-500 text-lg mt-2">
                                                    THE BANKER TO EVERY INDIAN
                                                </p>

                                            </div>

                                        </div>

                                        {/* Details */}
                                        <div className="space-y-5">

                                            <div className="flex flex-col md:flex-row md:items-center gap-2">

                                                <span className="text-blue-600 font-bold text-lg">
                                                    Account Holder :
                                                </span>

                                                <span className="text-gray-800 font-semibold text-lg">
                                                    SANJAY GANDHI COMPUTER SAKSHARTA MISSION
                                                </span>

                                            </div>

                                            <div className="flex flex-col md:flex-row md:items-center gap-2">

                                                <span className="text-blue-600 font-bold text-lg">
                                                    Account No :
                                                </span>

                                                <span className="text-gray-800 font-semibold text-lg">
                                                    35059000934
                                                </span>

                                            </div>

                                            <div className="flex flex-col md:flex-row md:items-center gap-2">

                                                <span className="text-blue-600 font-bold text-lg">
                                                    IFSC :
                                                </span>

                                                <span className="text-gray-800 font-semibold text-lg">
                                                    SBIN0004384
                                                </span>

                                            </div>

                                            <div className="flex flex-col md:flex-row md:items-start gap-2">

                                                <span className="text-blue-600 font-bold text-lg">
                                                    Address :
                                                </span>

                                                <span className="text-gray-800 font-semibold text-lg">
                                                    Sector 10, Dwarka, New Delhi (India)
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* PNB Card */}
                                <div className="bg-white rounded-3xl shadow-xl border overflow-hidden hover:shadow-2xl transition duration-300">

                                    {/* Header */}
                                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-6">

                                        <h2 className="text-3xl font-bold text-white">
                                            Punjab National Bank
                                        </h2>

                                    </div>

                                    {/* Content */}
                                    <div className="p-8">

                                        {/* Logo */}
                                        <div className="flex items-center gap-5 mb-8">

                                            <div className="w-28 h-20 rounded-2xl bg-yellow-100 flex items-center justify-center">

                                                <span className="text-5xl font-black text-yellow-600">
                                                    pnb
                                                </span>

                                            </div>

                                            <div>

                                                <h3 className="text-3xl font-bold text-gray-900">
                                                    Punjab National Bank
                                                </h3>

                                                <p className="text-gray-500 text-lg mt-2">
                                                    Trusted Banking Partner
                                                </p>

                                            </div>

                                        </div>

                                        {/* Details */}
                                        <div className="space-y-5">

                                            <div className="flex flex-col md:flex-row md:items-center gap-2">

                                                <span className="text-orange-600 font-bold text-lg">
                                                    Account Holder :
                                                </span>

                                                <span className="text-gray-800 font-semibold text-lg">
                                                    SANJAY GANDHI COMPUTER SAKSHARTA MISSION
                                                </span>

                                            </div>

                                            <div className="flex flex-col md:flex-row md:items-center gap-2">

                                                <span className="text-orange-600 font-bold text-lg">
                                                    Account No :
                                                </span>

                                                <span className="text-gray-800 font-semibold text-lg">
                                                    4641002100000534
                                                </span>

                                            </div>

                                            <div className="flex flex-col md:flex-row md:items-center gap-2">

                                                <span className="text-orange-600 font-bold text-lg">
                                                    IFSC :
                                                </span>

                                                <span className="text-gray-800 font-semibold text-lg">
                                                    PUNB0444700
                                                </span>

                                            </div>

                                            <div className="flex flex-col md:flex-row md:items-start gap-2">

                                                <span className="text-orange-600 font-bold text-lg">
                                                    Address :
                                                </span>

                                                <span className="text-gray-800 font-semibold text-lg">
                                                    Sector 10, Dwarka, New Delhi (India)
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* QR Section */}
                            <div>

                                <div className="bg-white rounded-3xl shadow-xl border overflow-hidden sticky top-8">

                                    {/* Header */}
                                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">

                                        <h2 className="text-3xl font-bold text-white">
                                            Scan And Pay
                                        </h2>

                                    </div>

                                    {/* QR Content */}
                                    <div className="p-8 text-center">

                                        {/* QR */}
                                        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-3xl p-6">

                                            <img
                                                src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=SGCSM-PAYMENT"
                                                alt="QR Code"
                                                className="w-full rounded-2xl shadow-md"
                                            />

                                        </div>

                                        {/* Text */}
                                        <div className="mt-8">

                                            <h3 className="text-2xl font-bold text-gray-900">
                                                UPI Payment
                                            </h3>

                                            <p className="text-gray-600 mt-4 leading-relaxed">
                                                Scan the QR code using any UPI app such as
                                                Google Pay, PhonePe, Paytm, or BHIM to make payment instantly.
                                            </p>

                                        </div>

                                        {/* Supported */}
                                        <div className="mt-8 flex flex-wrap justify-center gap-3">

                                            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                                                UPI
                                            </span>

                                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                                                BHIM
                                            </span>

                                            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                                                Paytm
                                            </span>

                                            <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
                                                PhonePe
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </main>
        </MainLayout>
    )
}

export default OurAccount