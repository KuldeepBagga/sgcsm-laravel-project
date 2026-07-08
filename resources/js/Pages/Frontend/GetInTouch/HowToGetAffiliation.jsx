import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'

function HowToGetAffiliation() {
    return (
        <MainLayout>
            <Head title="How to Get Affiliation" />

            <main className="bg-slate-50">
                <section className="relative overflow-hidden bg-slate-950">
                    <img src="images/photo-1522202176988-66273c2fd55f.jpeg?q=80&w=1400&auto=format&fit=crop" alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-35" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/85 to-slate-900/25"></div>

                    <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
                        <div className="grid lg:grid-cols-12 gap-10 items-end">
                            <div className="lg:col-span-8 text-white">
                                <span
                                    className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">
                                    <i className="fa-solid fa-building-columns"></i>
                                    How to get affiliation
                                </span>

                                <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight uppercase">
                                    How to get affiliation
                                </h1>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="max-w-7xl mx-auto px-6 py-14">

                    <div className="space-y-10">

                        <div className="bg-white rounded-3xl shadow-lg border p-8">

                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                How to Take a Membership
                            </h2>

                            <div className="space-y-5 text-gray-700 leading-relaxed">

                                <p>
                                    On receiving this offer, a prospective study centre should apply
                                    with complete details of self, premises, available hardware,
                                    and plan for business development in the format of the data sheet.
                                </p>

                                <p>
                                    Receipt of the application and data sheet at the controlling office
                                    of SGCSM would be followed by a personal interview with the Director
                                    SGCSM and a visit by a team of SGCSM professionals at the
                                    prospective centre, if needed.
                                </p>

                            </div>

                        </div>

                        <div className="bg-white rounded-3xl shadow-lg border p-8">

                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Eligibility Criteria For SGCSM Study Center
                            </h2>

                            <div className="grid md:grid-cols-1 gap-6">

                                <div className="border rounded-2xl p-6 hover:shadow-lg transition">

                                    <div
                                        className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl mb-5">
                                        ✓
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900">
                                        Infrastructure Investment
                                    </h3>

                                    <p className="text-gray-600 mt-3 leading-relaxed">
                                        Should be willing to invest required amount of money in setting
                                        up a centre with proper infrastructure and main power.
                                    </p>

                                </div>

                                <div className="border rounded-2xl p-6 hover:shadow-lg transition">

                                    <div
                                        className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl mb-5">
                                        ✓
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900">
                                        Quality Training
                                    </h3>

                                    <p className="text-gray-600 mt-3 leading-relaxed">
                                        Should have commitment for providing quality training to students.
                                    </p>

                                </div>

                                <div className="border rounded-2xl p-6 hover:shadow-lg transition">

                                    <div
                                        className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl mb-5">
                                        ✓
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900">
                                        SGCSM Procedures
                                    </h3>

                                    <p className="text-gray-600 mt-3 leading-relaxed">
                                        Should be willing to be a part of the SGCSM team in accepting
                                        the terms, conditions, and procedures laid down by SGCSM.
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="bg-white rounded-3xl shadow-lg border p-8">

                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Infrastructure Requirement
                            </h2>

                            <div className="overflow-x-auto">

                                <table className="w-full border border-gray-200 rounded-2xl overflow-hidden">

                                    <thead className="bg-blue-600 text-white">
                                        <tr>
                                            <th className="p-4 text-left">Specification</th>
                                            <th className="p-4 text-center">Metro City</th>
                                            <th className="p-4 text-center">Non Metro City</th>
                                            <th className="p-4 text-center">Tehsil / Village</th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white text-gray-700">

                                        <tr className="border-b">
                                            <td className="p-4 font-medium">Area (Sq.Ft.)</td>
                                            <td className="p-4 text-center">800</td>
                                            <td className="p-4 text-center">500</td>
                                            <td className="p-4 text-center">350</td>
                                        </tr>

                                        <tr className="border-b bg-gray-50">
                                            <td className="p-4 font-medium">No. of Class Rooms</td>
                                            <td className="p-4 text-center">2</td>
                                            <td className="p-4 text-center">2</td>
                                            <td className="p-4 text-center">2</td>
                                        </tr>

                                        <tr className="border-b">
                                            <td className="p-4 font-medium">Sitting Capacity Per Class</td>
                                            <td className="p-4 text-center">20</td>
                                            <td className="p-4 text-center">20</td>
                                            <td className="p-4 text-center">15</td>
                                        </tr>

                                        <tr className="border-b bg-gray-50">
                                            <td className="p-4 font-medium">Lab Room</td>
                                            <td className="p-4 text-center">1</td>
                                            <td className="p-4 text-center">1</td>
                                            <td className="p-4 text-center">1</td>
                                        </tr>

                                        <tr>
                                            <td className="p-4 font-medium">No. of Systems</td>
                                            <td className="p-4 text-center">10</td>
                                            <td className="p-4 text-center">8</td>
                                            <td className="p-4 text-center">6</td>
                                        </tr>

                                    </tbody>

                                </table>

                            </div>

                        </div>

                        <div className="bg-white rounded-3xl shadow-lg border p-8">

                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Hardware Requirements
                            </h2>

                            <div className="grid md:grid-cols-1 gap-6">

                                <div className="border rounded-2xl p-6">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Server & Systems
                                    </h3>

                                    <p className="text-gray-600 mt-3">
                                        One Pentium server with nodes connected as per SGCSM site specification.
                                    </p>
                                </div>

                                <div className="border rounded-2xl p-6">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Printer & Internet
                                    </h3>

                                    <p className="text-gray-600 mt-3">
                                        Necessary hardware compatibility for internet and printers
                                        (Dot Matrix / Inkjet).
                                    </p>
                                </div>

                                <div className="border rounded-2xl p-6">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Power Backup
                                    </h3>

                                    <p className="text-gray-600 mt-3">
                                        UPS (500 VA) or Generator backup is required.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="bg-white rounded-3xl shadow-lg border p-8">

                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Manpower Requirement
                            </h2>

                            <div className="space-y-6">

                                <div className="border rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        Administrator / Manager
                                    </h3>

                                    <p className="text-gray-600 mt-3">
                                        Knowledge of computer software training, experience, and good management skills.
                                    </p>
                                </div>

                                <div className="border rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        Faculty
                                    </h3>

                                    <p className="text-gray-600 mt-3">
                                        Thorough knowledge of subject, disciplined, and student problem solving capacity.
                                    </p>
                                </div>

                                <div className="border rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        Counselor / Receptionist
                                    </h3>

                                    <p className="text-gray-600 mt-3">
                                        Pleasant personality with communication skills and course knowledge.
                                    </p>
                                </div>

                                <div className="border rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        Marketing Executive
                                    </h3>

                                    <p className="text-gray-600 mt-3">
                                        Experienced, hardworking, and good communication skills.
                                    </p>
                                </div>

                                <div className="border rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        Office Boys
                                    </h3>

                                    <p className="text-gray-600 mt-3">
                                        Disciplined and experienced staff members.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="bg-white rounded-3xl shadow-lg border p-8">

                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Profitability of Operation
                            </h2>

                            <div className="space-y-5 text-gray-700 leading-relaxed">

                                <p>
                                    The granting of study centre status would be possible after careful
                                    study of market potential and the number of students graduating
                                    from relevant streams.
                                </p>

                                <p>
                                    The specifics in terms of operational economics will be discussed
                                    personally with each study centre.
                                </p>

                                <p>
                                    The study centres are required to make a study of Engineering Colleges,
                                    Polytechnics, Science Colleges, and other institutes in the area.
                                </p>

                            </div>

                        </div>

                        <div className="bg-white rounded-3xl shadow-lg border p-8">

                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Expectation From The Affiliated Study Centre
                            </h2>

                            <div className="space-y-5 text-gray-700 leading-relaxed">

                                <p>
                                    The study centre should be located at a prime location with separate
                                    classrooms, computer lab, and reception/office room.
                                </p>

                                <p>
                                    The centre should have proper ventilation, lighting,
                                    and clean surroundings.
                                </p>

                                <p>
                                    The SGCSM study centre shall abide by the agreement and conditions
                                    followed by all SGCSM centres.
                                </p>

                                <p>
                                    The study centre shall conduct courses as per the rules and syllabi
                                    laid down by SGCSM.
                                </p>

                                <p>
                                    The study centre shall deposit an advance non-refundable affiliation fee
                                    at the time of signing the agreement.
                                </p>

                            </div>

                        </div>

                        <div className="bg-white rounded-3xl shadow-lg border p-8">

                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Equipment & Facilities
                            </h2>

                            <div className="space-y-5 text-gray-700 leading-relaxed">

                                <p>
                                    Depending on the area potential and consultation with SGCSM,
                                    the study centre should acquire computers, printers, tools,
                                    and software required for training.
                                </p>

                                <p>
                                    The study centre should maintain a well-equipped library with
                                    books prescribed by SGCSM.
                                </p>

                                <p>
                                    Students should have easy access to books and periodicals.
                                </p>

                            </div>

                        </div>

                        <div className="bg-white rounded-3xl shadow-lg border p-8">

                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Operations
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">

                                <div className="border rounded-2xl p-5">
                                    • Internal systems and procedures
                                </div>

                                <div className="border rounded-2xl p-5">
                                    • External Interface
                                </div>

                                <div className="border rounded-2xl p-5">
                                    • Co-ordinations
                                </div>

                                <div className="border rounded-2xl p-5">
                                    • Purchase of classes and practical
                                </div>

                                <div className="border rounded-2xl p-5">
                                    • Examination procedure
                                </div>

                                <div className="border rounded-2xl p-5">
                                    • Certificate issue procedures
                                </div>

                            </div>

                        </div>

                        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl shadow-xl p-10 text-white">

                            <h2 className="text-3xl font-bold mb-8">
                                Agreement / Terms & Conditions
                            </h2>

                            <div className="space-y-6 text-blue-100 leading-relaxed">

                                <p>
                                    1. Renewal of authorization for the next year will be FREE
                                    on admission of at least 50-60 students annually,
                                    otherwise renewal fee of Rs. 1500/- will be charged.
                                </p>

                                <p>
                                    2. Registration form of every student must reach Head Office /
                                    Regional Office within 15 days of admission.
                                </p>

                                <p>
                                    3. Centre director has to pay royalty/course fee share to Head Office.
                                </p>

                                <p>
                                    4. Submission of admission form without H.O share will not be accepted.
                                </p>

                                <p>
                                    5. SGCSM reserves the right to make changes in terms,
                                    renewal fee, or royalty fee without prior notice.
                                </p>

                                <p>
                                    6. Any type of fee will not be refundable under any circumstances.
                                </p>

                                <p>
                                    7. No liabilities regarding staff salaries, taxes, computers,
                                    software, or official problems will be borne by SGCSM Delhi.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>
            </main>
        </MainLayout>
    )
}

export default HowToGetAffiliation