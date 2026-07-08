import { Map } from 'lucide-react'
import React from 'react'
import { BiEnvelope, BiGlobe, BiPhone } from 'react-icons/bi'

function Footer() {
    return (
        <>
            <footer className="relative bg-[url('/images/footer-bg.jpg')] bg-cover bg-center text-white">

                <div className="absolute inset-0 bg-black/90"></div>

                <div className="relative max-w-7xl mx-auto px-6 py-14">

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

                        <div>
                            <img src="/images/logo.png" className="h-12 mb-5" alt="Logo" />

                            <p className="text-gray-300 leading-7">
                                Sanjay Gandhi Computer Saksharta Mission Trust provides quality
                                education through authorized study centres across India.
                            </p>
                        </div>


                        <div>
                            <h3 className="text-xl font-bold uppercase mb-6 border-b border-white/30 pb-2">
                                Quick Links
                            </h3>

                            <ul className="space-y-3 text-gray-300">
                                <li><a href="#" className="hover:text-yellow-400 transition">Admit Card</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Result</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">News & Event</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Rules & Regulations</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Social Activity</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Contact Us</a></li>
                            </ul>
                        </div>


                        <div>
                            <h3 className="text-xl font-bold uppercase mb-6 border-b border-white/30 pb-2">
                                Useful Links
                            </h3>

                            <ul className="space-y-3 text-gray-300">
                                <li><a href="#" className="hover:text-yellow-400 transition">Registration Process</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Director Message</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Affiliation & Authority</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Career</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Payment Mode</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Jobs</a></li>
                            </ul>
                        </div>


                        <div>
                            <h3 className="text-xl font-bold uppercase mb-6 border-b border-white/30 pb-2">
                                Get In Touch
                            </h3>

                            <ul className="space-y-3 text-gray-300">
                                <li><a href="#" className="hover:text-yellow-400 transition">Registration Process</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Director Message</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Affiliation & Authority</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Career</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Payment Mode</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition">Jobs</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="border-t border-white/20 my-7"></div>

                    <p className='text-center text-gray-300 mb-2'>
                        E-199 A, Street No.-70, Mahavir Enclave Part-III Main Beer Bazar Road, New Delhi - 110059
                    </p>


                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">

                        <div className="flex items-center gap-2">
                            <BiPhone size={20} className='text-yellow-400' />
                            +91-8920206335
                        </div>

                        <div className="flex items-center gap-2">
                            <BiEnvelope size={20} className='text-yellow-400' />
                            info@sgcsmindia.org
                        </div>

                        <div className="flex items-center gap-2">
                            <BiEnvelope size={20} className='text-yellow-400' />
                            sgcsmindia@gmail.com
                        </div>

                        <div className="flex items-center gap-2">
                            <BiGlobe size={20} className='text-yellow-400' />
                            www.sgcsmindia.org
                        </div>

                        <div className="flex items-center gap-2">
                            <BiPhone size={20} className='text-yellow-400' />
                            +91-8010819359
                        </div>

                    </div>

                    <div className="border-t border-white/20 my-10"></div>

                    {/* <div className="flex justify-center mt-10">

                        <div className="flex gap-2">

                            <span className="w-10 h-12 rounded-lg border-2 border-green-400 bg-gray-900 flex items-center justify-center text-xl font-bold">0</span>
                            <span className="w-10 h-12 rounded-lg border-2 border-green-400 bg-gray-900 flex items-center justify-center text-xl font-bold">0</span>
                            <span className="w-10 h-12 rounded-lg border-2 border-green-400 bg-gray-900 flex items-center justify-center text-xl font-bold">0</span>
                            <span className="w-10 h-12 rounded-lg border-2 border-green-400 bg-gray-900 flex items-center justify-center text-xl font-bold">5</span>
                            <span className="w-10 h-12 rounded-lg border-2 border-green-400 bg-gray-900 flex items-center justify-center text-xl font-bold">8</span>
                            <span className="w-10 h-12 rounded-lg border-2 border-green-400 bg-gray-900 flex items-center justify-center text-xl font-bold">7</span>
                            <span className="w-10 h-12 rounded-lg border-2 border-green-400 bg-gray-900 flex items-center justify-center text-xl font-bold">8</span>
                            <span className="w-10 h-12 rounded-lg border-2 border-green-400 bg-gray-900 flex items-center justify-center text-xl font-bold">5</span>
                            <span className="w-10 h-12 rounded-lg border-2 border-green-400 bg-gray-900 flex items-center justify-center text-xl font-bold">3</span>
                            <span className="w-10 h-12 rounded-lg border-2 border-green-400 bg-gray-900 flex items-center justify-center text-xl font-bold">1</span>

                        </div>

                    </div> */}


                    <div className="text-center mt-8 text-gray-300 text-sm">
                        Copyright ©2026 <span className="text-white font-semibold">sgcsmindia.org</span>. All Rights Reserved.
                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer