import React, { useEffect, useRef, useState } from 'react'
import '../../../css/welcome.css'
import { FaBookOpen, FaChevronLeft, FaChevronRight, FaGraduationCap, FaLaptop } from 'react-icons/fa';
import ImageSlider from '@/Components/ImageSlider';
import HeroSlider from '@/Components/HeroSlider';
import SuccessStorySlider from '@/Components/SuccessStorySlider';
import MainLayout from '../../Layouts/MainLayout';
import { Head } from '@inertiajs/react';

const notices = [
    {
        title: 'स्वर्णिम अवसर',
        description:
            'राष्ट्रीय स्तर की संस्था से जुड़ने का एक स्वर्णिम अवसर।',
    },
    {
        title: 'नई सूचना',
        description:
            'सभी विद्यार्थियों के लिए नए कोर्स उपलब्ध हैं।',
    },
];

const slides = [
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=2070&auto=format&fit=crop',
];

const ourGallery = [
    'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200',
    'https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200',
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200',
    'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200',
    'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200',
    'https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200',
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200',
    'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200',
    'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200',
];

const Linkage = [
    'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200',
    'https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200',
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200',
    'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200',
    'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200',
    'https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200',
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200',
    'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200',
    'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200',
];


const testimonials = [
    {
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'SHANTANU SINGH',
        message:
            'I am able to live my life smoothly because of SGCSM. SGCSM helped me grow my future and achieve my goals. Thanks to SGCSM for the support and guidance.',
    },
    {
        image: 'https://randomuser.me/api/portraits/women/45.jpg',
        name: 'PRIYA SHARMA',
        message:
            'SGCSM changed my career completely. The teachers and support system are truly amazing and helpful.',
    },
    {
        image: 'https://randomuser.me/api/portraits/men/55.jpg',
        name: 'ROHIT KUMAR',
        message:
            'The courses are practical and industry focused. I got confidence and skills after joining SGCSM.',
    },
];

export default function Home() {

    return (
        <>
            <Head title="Sanjay Gandhi Computer Saksharta Mission" />
            <MainLayout>
                <HeroSlider slides={slides} />
                <section className="py-10">
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="text-center">
                            <h2 className="text-4xl font-bold mb-4">WELCOME TO SGCSM</h2>
                        </div>

                        <div>
                            <p> Sanjay Gandhi Computer Saksharta Mission Trust has been registered under the Public Trust Act 1882,
                                (Reg.No.2327) from Govt. Of India N.C.T., Delhi, working in different fields of Programme & Commercial
                                Training Organization is also certified by ISO 9001: 2015 Org..</p>
                            <p className="text-center mt-3">
                                <a href="#" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">Read More</a>
                            </p>
                        </div>
                    </div>
                </section>


                <section className="py-10">
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="grid md:grid-cols-3 gap-8">

                            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
                                <div className="text-blue-600 text-4xl mb-4">
                                    <FaGraduationCap size={50} />
                                </div>

                                <h3 className="text-2xl font-semibold mb-3">
                                    CENTER LOGIN
                                </h3>

                                <p className="text-gray-600">
                                    Learn from experienced instructors with real-world knowledge.
                                </p>

                                <p className="py-5"><a href="#"
                                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">Login</a></p>

                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
                                <div className="text-blue-600 text-4xl mb-4">
                                    <FaBookOpen size={50} />
                                </div>

                                <h3 className="text-2xl font-semibold mb-3">
                                    STUDENT LOGIN
                                </h3>

                                <p className="text-gray-600">
                                    Access high-quality educational content anytime anywhere.
                                </p>

                                <p className="py-5"><a href="#"
                                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">Login</a></p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
                                <div className="text-blue-600 text-4xl mb-4">
                                    <FaLaptop size={50} />
                                </div>

                                <h3 className="text-2xl font-semibold mb-3">
                                    FRANCHISE REGISTRATION
                                </h3>

                                <p className="text-gray-600">
                                    Study from your home with flexible and interactive learning.
                                </p>

                                <p className="py-5"><a href="franchise-registration.html"
                                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">Register</a></p>

                            </div>

                        </div>
                    </div>
                </section>


                <section className="bg-[#020617] py-16">
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-white">
                                OUR ACHIEVEMENTS
                            </h2>
                            <p className="text-gray-300 mt-3">
                                Trusted by thousands of students across India
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                            <div className="relative bg-white rounded-b-3xl overflow-hidden shadow-2xl text-center">

                                <div className="bg-sky-500 h-40 clip-path-polygon flex items-center justify-center">
                                    <div className="w-28 h-28 bg-white p-2 rounded-full border-4 border-sky-500">
                                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
                                            className="w-full h-full object-cover rounded-full" />
                                    </div>
                                </div>

                                <div className="py-8 px-4">
                                    <h3 className="text-5xl font-extrabold text-red-600">3000+</h3>
                                    <p className="text-2xl font-bold text-red-600">STUDY CENTERS</p>
                                    <p className="text-gray-700 text-xl mt-2">In India</p>
                                </div>

                                <div className="bg-gradient-to-r from-red-700 to-red-500 h-16"></div>
                            </div>

                            <div className="relative bg-white rounded-b-3xl overflow-hidden shadow-2xl text-center">

                                <div className="bg-pink-500 h-40 clip-path-polygon flex items-center justify-center">
                                    <div className="w-28 h-28 bg-white p-2 rounded-full border-4 border-pink-500">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
                                            className="w-full h-full object-cover rounded-full" />
                                    </div>
                                </div>

                                <div className="py-8 px-4">
                                    <h3 className="text-5xl font-extrabold text-pink-600">100+</h3>
                                    <p className="text-2xl font-bold text-pink-600">COURSES</p>
                                    <p className="text-gray-700 text-xl mt-2">Available</p>
                                </div>

                                <div className="bg-gradient-to-r from-pink-700 to-pink-500 h-16"></div>
                            </div>

                            <div className="relative bg-white rounded-b-3xl overflow-hidden shadow-2xl text-center">

                                <div className="bg-yellow-400 h-40 clip-path-polygon flex items-center justify-center">
                                    <div className="w-28 h-28 bg-white p-2 rounded-full border-4 border-yellow-400">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
                                            className="w-full h-full object-cover rounded-full" />
                                    </div>
                                </div>

                                <div className="py-8 px-4">
                                    <h3 className="text-4xl font-extrabold text-orange-500">85K+</h3>
                                    <p className="text-2xl font-bold text-red-500">Happy Students</p>
                                    <p className="text-gray-700 text-lg mt-2">Around the Country</p>
                                </div>

                                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-16"></div>
                            </div>

                            <div className="relative bg-white rounded-b-3xl overflow-hidden shadow-2xl text-center">

                                <div className="bg-green-600 h-40 clip-path-polygon flex items-center justify-center">
                                    <div className="w-28 h-28 bg-white p-2 rounded-full border-4 border-green-600">
                                        <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                                            className="w-full h-full object-cover rounded-full" />
                                    </div>
                                </div>

                                <div className="py-8 px-4">
                                    <h3 className="text-5xl font-extrabold text-green-600">11+</h3>
                                    <p className="text-2xl font-bold text-green-600">STATES</p>
                                    <p className="text-gray-700 text-xl mt-2">Covered</p>
                                </div>

                                <div className="bg-gradient-to-r from-green-700 to-green-500 h-16"></div>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="relative py-14 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 overflow-hidden">

                    <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"></div>

                    <div className="relative max-w-7xl mx-auto px-4">

                        <div className="text-center mb-12">

                            <span className="inline-block px-6 py-2 rounded-full bg-pink-100 text-pink-700 font-semibold tracking-wide mb-4">
                                India's Trusted Computer Institute
                            </span>

                            <h2 className="text-3xl md:text-5xl font-black leading-tight text-gray-800 uppercase">
                                Best Franchise In India
                            </h2>

                            <div className="w-40 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mt-5 rounded-full"></div>

                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                            <div className="lg:col-span-3">

                                <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-3xl shadow-2xl overflow-hidden">

                                    <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-6 py-5 text-center">

                                        <h2 className="text-xl font-bold text-white">
                                            Recently Joined Students
                                        </h2>

                                    </div>

                                    <div className="h-[520px] overflow-hidden relative">

                                        <div className="animate-marquee py-6 space-y-8 px-5">

                                            <div className="bg-white rounded-3xl p-5 shadow-lg hover:-translate-y-1 transition duration-300">

                                                <img src="https://randomuser.me/api/portraits/women/65.jpg"
                                                    className="w-28 h-36 object-cover rounded-2xl mx-auto border-4 border-pink-100 shadow-md" />

                                                <h3 className="mt-4 text-xl font-bold text-gray-800 text-center">
                                                    MANISHA SAINI
                                                </h3>

                                                <p className="text-center text-pink-600 text-sm mt-1">
                                                    Web Designing Student
                                                </p>

                                            </div>

                                            <div className="bg-white rounded-3xl p-5 shadow-lg hover:-translate-y-1 transition duration-300">

                                                <img src="https://randomuser.me/api/portraits/women/45.jpg"
                                                    className="w-28 h-36 object-cover rounded-2xl mx-auto border-4 border-blue-100 shadow-md" />

                                                <h3 className="mt-4 text-xl font-bold text-gray-800 text-center">
                                                    PRIYA SHARMA
                                                </h3>

                                                <p className="text-center text-blue-600 text-sm mt-1">
                                                    Tally Prime Student
                                                </p>

                                            </div>

                                            <div className="bg-white rounded-3xl p-5 shadow-lg hover:-translate-y-1 transition duration-300">

                                                <img src="https://randomuser.me/api/portraits/men/32.jpg"
                                                    className="w-28 h-36 object-cover rounded-2xl mx-auto border-4 border-purple-100 shadow-md" />

                                                <h3 className="mt-4 text-xl font-bold text-gray-800 text-center">
                                                    ROHIT KUMAR
                                                </h3>

                                                <p className="text-center text-purple-600 text-sm mt-1">
                                                    Graphic Designing
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="lg:col-span-6">

                                <div className="relative overflow-hidden rounded-[35px] shadow-2xl border-4 border-white h-[590px]">

                                    <HeroSlider slides={[
                                        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
                                        'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
                                        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
                                        'https://images.unsplash.com/photo-1552664730-d307ca884978',
                                    ]} height="h-[590px]" />
                                </div>

                            </div>

                            <div className="lg:col-span-3">

                                <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-3xl shadow-2xl overflow-hidden">

                                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-5 text-center">

                                        <h2 className="text-xl font-bold text-white">
                                            Excellence Centers
                                        </h2>

                                    </div>

                                    <div className="h-[520px] overflow-hidden relative">

                                        <div className="animate-marquee py-6 space-y-8 px-5">

                                            <div className="bg-white rounded-3xl p-5 shadow-lg hover:-translate-y-1 transition duration-300">

                                                <img src="https://randomuser.me/api/portraits/men/55.jpg"
                                                    className="w-28 h-36 object-cover rounded-2xl mx-auto border-4 border-yellow-100 shadow-md" />

                                                <h3 className="mt-4 text-lg font-bold text-gray-800 text-center">
                                                    Mr. DHARM RAJ PRAJAPATI
                                                </h3>

                                                <p className="text-center text-yellow-600 font-semibold mt-1">
                                                    ⭐ Rank #9 Center
                                                </p>

                                            </div>

                                            <div className="bg-white rounded-3xl p-5 shadow-lg hover:-translate-y-1 transition duration-300">

                                                <img src="https://randomuser.me/api/portraits/men/44.jpg"
                                                    className="w-28 h-36 object-cover rounded-2xl mx-auto border-4 border-blue-100 shadow-md" />

                                                <h3 className="mt-4 text-lg font-bold text-gray-800 text-center">
                                                    Mr. DHIRENDRA KUMAR
                                                </h3>

                                                <p className="text-center text-blue-600 font-semibold mt-1">
                                                    ⭐ Rank #10 Center
                                                </p>

                                            </div>

                                            <div className="bg-white rounded-3xl p-5 shadow-lg hover:-translate-y-1 transition duration-300">

                                                <img src="https://randomuser.me/api/portraits/men/41.jpg"
                                                    className="w-28 h-36 object-cover rounded-2xl mx-auto border-4 border-green-100 shadow-md" />

                                                <h3 className="mt-4 text-lg font-bold text-gray-800 text-center">
                                                    Mr. AMIT SHARMA
                                                </h3>

                                                <p className="text-center text-green-600 font-semibold mt-1">
                                                    ⭐ Rank #11 Center
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>



                <section className="bg-gray-100 py-16">
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="text-center mb-12">

                            <h2 className="text-3xl md:text-5xl font-black leading-tight text-gray-800 uppercase">
                                OUR COURSE
                            </h2>

                            <div className="w-40 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mt-5 rounded-full"></div>

                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

                            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-5 text-center">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-red-100">
                                    <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-gray-800">
                                    Computer Course
                                </h3>
                            </div>

                            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-5 text-center">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-pink-100">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-gray-800">
                                    Teaching
                                </h3>
                            </div>
                            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-5 text-center">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-100">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/6/69/NIELIT_Logo.png"
                                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition duration-500" />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-gray-800">
                                    NIELIT
                                </h3>
                            </div>

                            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-5 text-center">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-100">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-gray-800">
                                    Beauty Course
                                </h3>
                            </div>

                            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-5 text-center">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-green-100">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2830/2830284.png"
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-gray-800">
                                    Banking
                                </h3>
                            </div>

                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-5">

                            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-5 text-center">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-red-100">
                                    <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-gray-800">
                                    Computer Course
                                </h3>
                            </div>
                            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-5 text-center">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-pink-100">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-gray-800">
                                    Teaching
                                </h3>
                            </div>

                            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-5 text-center">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-100">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/6/69/NIELIT_Logo.png"
                                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition duration-500" />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-gray-800">
                                    NIELIT
                                </h3>
                            </div>

                            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-5 text-center">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-100">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-gray-800">
                                    Beauty Course
                                </h3>
                            </div>
                            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-5 text-center">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-green-100">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2830/2830284.png"
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-gray-800">
                                    Banking
                                </h3>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="bg-black py-16">
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                            <div>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase leading-tight">
                                    Be Aware of Fake SgCSM
                                </h2>

                                <p className="text-gray-300 text-lg mt-4">
                                    Fake organizations are illegally using the name of SgCSM.
                                    Please verify before taking admission or franchise.
                                </p>

                                <button
                                    className="mt-6 bg-gray-800 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-lg">
                                    Information About Fake SgCSM
                                </button>
                            </div>

                            <div className="flex justify-center md:justify-end">
                                <div
                                    className="w-40 h-40 border-[10px] border-red-600 rotate-180 rounded-3xl flex items-center justify-center transform rotate-45">

                                    <div className="-rotate-45 text-red-600 text-7xl font-extrabold">
                                        !
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-10">
                    <div className="max-w-7xl mx-auto px-4">

                        <div className="relative flex justify-center">
                            <div className="text-center mb-12">

                                <h2 className="text-3xl md:text-5xl font-black leading-tight text-gray-800 uppercase">
                                    SANJAY GANDHI COMPUTER SAKSHARTA MISSION
                                </h2>
                                <div className="w-40 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mt-5 rounded-full"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                            <div className="lg:col-span-3">
                                <div className="bg-white rounded-3xl shadow-lg overflow-hidden border">

                                    <div className="bg-gradient-to-r from-blue-700 to-indigo-700 px-6 py-5">
                                        <h2 className="text-2xl font-bold text-white">
                                            Quick Links
                                        </h2>
                                    </div>
                                    <div className="h-[500px] overflow-hidden relative">

                                        <div className="p-5 space-y-3">

                                            <a href="#"
                                                className="flex items-center justify-between px-4 py-4 rounded-2xl bg-gray-50 hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-sm">
                                                <span className="font-medium text-gray-700 group-hover:text-white">
                                                    📄 Bank Details
                                                </span>
                                                <span className="group-hover:text-white">→</span>
                                            </a>

                                            <a href="#"
                                                className="flex items-center justify-between px-4 py-4 rounded-2xl bg-gray-50 hover:bg-green-600 hover:text-white transition-all duration-300 group shadow-sm">
                                                <span className="font-medium text-gray-700 group-hover:text-white">
                                                    📚 Suggestions
                                                </span>
                                                <span className="group-hover:text-white">→</span>
                                            </a>

                                            <a href="#"
                                                className="flex items-center justify-between px-4 py-4 rounded-2xl bg-gray-50 hover:bg-purple-600 hover:text-white transition-all duration-300 group shadow-sm">
                                                <span className="font-medium text-gray-700 group-hover:text-white">
                                                    🏆 Job Seekers
                                                </span>
                                                <span className="group-hover:text-white">→</span>
                                            </a>

                                            <a href="franchise-registration.html"
                                                className="flex items-center justify-between px-4 py-4 rounded-2xl bg-gray-50 hover:bg-pink-600 hover:text-white transition-all duration-300 group shadow-sm">
                                                <span className="font-medium text-gray-700 group-hover:text-white">
                                                    💳 Franchise
                                                </span>
                                                <span className="group-hover:text-white">→</span>
                                            </a>

                                            <a href="#"
                                                className="flex items-center justify-between px-4 py-4 rounded-2xl bg-gray-50 hover:bg-red-600 hover:text-white transition-all duration-300 group shadow-sm">
                                                <span className="font-medium text-gray-700 group-hover:text-white">
                                                    ⚙ Validation Authorization
                                                </span>
                                                <span className="group-hover:text-white">→</span>
                                            </a>

                                            <a href="#"
                                                className="flex items-center justify-between px-4 py-4 rounded-2xl bg-gray-50 hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-sm">
                                                <span className="font-medium text-gray-700 group-hover:text-white">
                                                    📄 Bank Details
                                                </span>
                                                <span className="group-hover:text-white">→</span>
                                            </a>

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="lg:col-span-6">


                                <div className="bg-white/80 backdrop-blur-xl rounded-[32px] shadow-2xl border border-white/50 overflow-hidden">

                                    <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 px-6 py-5">

                                        <div className="flex items-center justify-between">

                                            <h2 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-3">
                                                📢 Important Notice
                                            </h2>

                                            <span className="bg-white/20 text-white text-xs md:text-sm px-4 py-1 rounded-full backdrop-blur-md">
                                                SGCSM Updates
                                            </span>

                                        </div>

                                    </div>

                                    <div className="notice-wrapper bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl">

                                        {/* Top Fade */}
                                        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10" />

                                        {/* Bottom Fade */}
                                        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10" />

                                        <div className="notice-track px-6 py-8">

                                            {/* Original Items */}
                                            {notices.map((notice, index) => (

                                                <div
                                                    key={index}
                                                    className="bg-white p-5 rounded-2xl shadow"
                                                >
                                                    <h3 className="font-bold text-red-600">
                                                        {notice.title}
                                                    </h3>

                                                    <p className="mt-2 text-gray-700 leading-7">
                                                        {notice.description}
                                                    </p>
                                                </div>

                                            ))}

                                            {/* Duplicate Items */}
                                            {notices.map((notice, index) => (

                                                <div
                                                    key={`duplicate-${index}`}
                                                    className="bg-white p-5 rounded-2xl shadow"
                                                >
                                                    <h3 className="font-bold text-red-600">
                                                        {notice.title}
                                                    </h3>

                                                    <p className="mt-2 text-gray-700 leading-7">
                                                        {notice.description}
                                                    </p>
                                                </div>

                                            ))}

                                        </div>

                                    </div>

                                </div>




                            </div>

                            <div className="lg:col-span-3">
                                <div className="bg-white rounded-3xl shadow-lg overflow-hidden border">

                                    <div className="bg-gradient-to-r from-indigo-700 to-blue-700 px-6 py-5">
                                        <h2 className="text-2xl font-bold text-white">
                                            Important Links
                                        </h2>
                                    </div>

                                    <div className="h-[500px] overflow-hidden relative">

                                        <div className="p-5 space-y-3">

                                            <a href="#"
                                                className="flex items-center justify-between px-4 py-4 rounded-2xl bg-gray-50 hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-sm">
                                                <span className="font-medium text-gray-700 group-hover:text-white">
                                                    📄 Online Exam
                                                </span>
                                                <span className="group-hover:text-white">→</span>
                                            </a>

                                            <a href="#"
                                                className="flex items-center justify-between px-4 py-4 rounded-2xl bg-gray-50 hover:bg-green-600 hover:text-white transition-all duration-300 group shadow-sm">
                                                <span className="font-medium text-gray-700 group-hover:text-white">
                                                    📚 Certificate Verification
                                                </span>
                                                <span className="group-hover:text-white">→</span>
                                            </a>

                                            <a href="#"
                                                className="flex items-center justify-between px-4 py-4 rounded-2xl bg-gray-50 hover:bg-purple-600 hover:text-white transition-all duration-300 group shadow-sm">
                                                <span className="font-medium text-gray-700 group-hover:text-white">
                                                    🏆 Downloads
                                                </span>
                                                <span className="group-hover:text-white">→</span>
                                            </a>

                                            <a href="#"
                                                className="flex items-center justify-between px-4 py-4 rounded-2xl bg-gray-50 hover:bg-pink-600 hover:text-white transition-all duration-300 group shadow-sm">
                                                <span className="font-medium text-gray-700 group-hover:text-white">
                                                    💳 Center Verification
                                                </span>
                                                <span className="group-hover:text-white">→</span>
                                            </a>

                                            <a href="#"
                                                className="flex items-center justify-between px-4 py-4 rounded-2xl bg-gray-50 hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-sm">
                                                <span className="font-medium text-gray-700 group-hover:text-white">
                                                    📄 Online Exam
                                                </span>
                                                <span className="group-hover:text-white">→</span>
                                            </a>

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <SuccessStorySlider testimonials={testimonials} />

                <section className="relative py-10 bg-gray-100 overflow-hidden">

                    <div className="text-center mb-12">

                        <h2 className="text-3xl md:text-5xl font-black leading-tight text-gray-800 uppercase">
                            OUR GALLERY
                        </h2>

                        <div className="w-40 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mt-5 rounded-full"></div>

                    </div>

                    <ImageSlider images={ourGallery} />
                </section>


                <section className="relative py-20 overflow-hidden">

                    <div className="absolute inset-0">
                        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" className="w-full h-full object-cover" alt="" />
                        <div className="absolute inset-0 bg-black/75"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4">

                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-bold text-white uppercase tracking-wide">
                                News & Media
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

                            <div className="group flex flex-col items-center">

                                <div
                                    className="relative w-52 h-52 rounded-full bg-white border-[8px] border-red-500 shadow-[0_0_25px_rgba(255,0,0,0.4)] flex items-center justify-center transition duration-300 group-hover:scale-105">

                                    <span className="absolute -top-2 w-5 h-5 bg-black border-4 border-red-500 rounded-full"></span>
                                    <span className="absolute -bottom-2 left-10 w-5 h-5 bg-black border-4 border-red-500 rounded-full"></span>

                                    <div
                                        className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[18px] border-t-transparent border-b-[18px] border-b-transparent border-l-[22px] border-l-red-500">
                                    </div>

                                    <div className="text-center">
                                        <div className="text-7xl mb-4">📰</div>
                                        <h3 className="text-2xl font-bold text-orange-600">
                                            News Paper Ad
                                        </h3>
                                    </div>

                                </div>
                            </div>

                            <div className="group flex flex-col items-center">

                                <div
                                    className="relative w-52 h-52 rounded-full bg-white border-[8px] border-red-500 shadow-[0_0_25px_rgba(255,0,0,0.4)] flex items-center justify-center transition duration-300 group-hover:scale-105">

                                    <span className="absolute -top-2 w-5 h-5 bg-black border-4 border-red-500 rounded-full"></span>
                                    <span className="absolute -bottom-2 left-10 w-5 h-5 bg-black border-4 border-red-500 rounded-full"></span>

                                    <div
                                        className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[18px] border-t-transparent border-b-[18px] border-b-transparent border-l-[22px] border-l-red-500">
                                    </div>

                                    <div className="text-center">
                                        <div className="text-7xl mb-4">▶️</div>
                                        <h3 className="text-2xl font-bold text-blue-700">
                                            Video
                                        </h3>
                                    </div>

                                </div>
                            </div>

                            <div className="group flex flex-col items-center">

                                <div
                                    className="relative w-52 h-52 rounded-full bg-white border-[8px] border-green-500 shadow-[0_0_25px_rgba(34,197,94,0.4)] flex items-center justify-center transition duration-300 group-hover:scale-105">

                                    <span className="absolute -top-2 w-5 h-5 bg-black border-4 border-green-500 rounded-full"></span>
                                    <span className="absolute -bottom-2 left-10 w-5 h-5 bg-black border-4 border-green-500 rounded-full"></span>

                                    <div
                                        className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[18px] border-t-transparent border-b-[18px] border-b-transparent border-l-[22px] border-l-green-500">
                                    </div>

                                    <div className="text-center">
                                        <div className="text-7xl mb-4">📺</div>
                                        <h3 className="text-2xl font-bold text-green-700">
                                            TV Ad
                                        </h3>
                                    </div>

                                </div>
                            </div>

                            <div className="group flex flex-col items-center">

                                <div
                                    className="relative w-52 h-52 rounded-full bg-white border-[8px] border-red-500 shadow-[0_0_25px_rgba(255,0,0,0.4)] flex items-center justify-center transition duration-300 group-hover:scale-105">

                                    <span className="absolute -top-2 w-5 h-5 bg-black border-4 border-red-500 rounded-full"></span>
                                    <span className="absolute -bottom-2 left-10 w-5 h-5 bg-black border-4 border-red-500 rounded-full"></span>

                                    <div
                                        className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[18px] border-t-transparent border-b-[18px] border-b-transparent border-l-[22px] border-l-red-500">
                                    </div>

                                    <div className="text-center">
                                        <div className="text-7xl mb-4">▶️</div>
                                        <h3 className="text-2xl font-bold text-red-600">
                                            YouTube
                                        </h3>
                                    </div>

                                </div>
                            </div>

                            <div className="group flex flex-col items-center">

                                <div
                                    className="relative w-52 h-52 rounded-full bg-white border-[8px] border-green-500 shadow-[0_0_25px_rgba(34,197,94,0.4)] flex items-center justify-center transition duration-300 group-hover:scale-105">

                                    <span className="absolute -top-2 w-5 h-5 bg-black border-4 border-green-500 rounded-full"></span>
                                    <span className="absolute -bottom-2 left-10 w-5 h-5 bg-black border-4 border-green-500 rounded-full"></span>

                                    <div
                                        className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[18px] border-t-transparent border-b-[18px] border-b-transparent border-l-[22px] border-l-green-500">
                                    </div>

                                    <div className="text-center">
                                        <div className="text-7xl mb-4">📻</div>
                                        <h3 className="text-2xl font-bold text-green-700">
                                            Radio Ad
                                        </h3>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section className="relative py-10 bg-gray-100 overflow-hidden">

                    <div className="text-center">

                        <h2 className="text-3xl md:text-5xl font-black leading-tight text-gray-800 uppercase">
                            LINKAGE
                        </h2>

                        <div className="w-40 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mt-5 rounded-full"></div>

                    </div>

                    <ImageSlider images={Linkage} />
                </section>


                <section className="py-20 bg-blue-600 text-white text-center">
                    <div className="max-w-4xl mx-auto px-6">

                        <h2 className="text-4xl font-bold mb-6">
                            Start Learning Today
                        </h2>

                        <p className="text-lg text-blue-100 mb-8">
                            Join thousands of students improving their skills every day.
                        </p>

                        <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100">
                            Join Now
                        </button>

                    </div>
                </section>

            </MainLayout>

        </>
    )
}



