import React from 'react'

function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            EduLearn
                        </h3>

                        <p>
                            Modern online education platform for students worldwide.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold text-white mb-4">
                            Quick Links
                        </h4>

                        <ul className="space-y-2">
                            <li><a href="index.html" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Courses</a></li>
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold text-white mb-4">
                            Courses
                        </h4>

                        <ul className="space-y-2">
                            <li>Development</li>
                            <li>Design</li>
                            <li>Marketing</li>
                            <li>Business</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold text-white mb-4">
                            Follow Us
                        </h4>

                        <div className="flex gap-4 text-2xl">
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>

                </div>

                <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-6">
                    &copy; 2026 EduLearn. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer