import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "@inertiajs/react";


export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <>
            <nav className="bg-white shadow-md sticky top-0 z-50">

                <div className="max-w-screen-2xl mx-auto px-4">

                    <div className="flex items-center justify-between h-20">

                        {/* Logo */}
                        <Link
                            href={route('home')}
                            className="text-3xl font-extrabold text-blue-600"
                        >
                            <img
                                src='/images/logo.png'
                                alt="SGCSM"
                                className="h-12 w-auto inline-block mr-2"
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">

                            <li>
                                <Link
                                    href={route('home')}
                                    className="hover:text-blue-600 transition"
                                >
                                    Home
                                </Link>
                            </li>

                            {/* About Dropdown */}
                            <li className="relative group">

                                <button className="flex items-center gap-1 hover:text-blue-600 transition">
                                    About Us
                                    <span className="text-xs">▼</span>
                                </button>

                                <div className="absolute left-0 top-full w-60 bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">

                                    <Link href={route('about-us')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">
                                        About Us
                                    </Link>

                                    <Link href={route('mission-vision')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">
                                        Mission & Vision
                                    </Link>

                                    <Link href={route('our-dream')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">
                                        Our Dream
                                    </Link>

                                    <Link href={route('advantages')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">
                                        Advantages
                                    </Link>

                                    <Link href={route('directors-message')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">
                                        Director's Message
                                    </Link>

                                    <Link href={route('our-management-team')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">
                                        Our Management Team
                                    </Link>

                                </div>

                            </li>

                            <li className="relative group">
                                <button className="flex items-center gap-1 hover:text-blue-600 transition">
                                    Courses
                                    <span className="text-xs">▼</span>
                                </button>
                                <div className="absolute left-0 top-full w-60 bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                                    <Link href={route('courses')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Computer Course</Link>
                                    <Link href={route('courses')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Teacher Training Course</Link>
                                    <Link href={route('courses')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">NIELIT Course</Link>
                                    <Link href={route('courses')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Boutique Course</Link>
                                    <Link href={route('courses')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Beauty Course</Link>
                                    <Link href={route('courses')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">UG & PG Course</Link>
                                    <Link href={route('courses')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Yoga Course</Link>
                                    <Link href={route('courses')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">NDLM Course</Link>
                                    <Link href={route('courses')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Advance Course</Link>
                                </div>
                            </li>


                            <li className="relative group">
                                <button className="flex items-center gap-1 hover:text-blue-600 transition">
                                    Get In Touch
                                    <span className="text-xs">▼</span>
                                </button>
                                <div className="absolute left-0 top-full w-60 bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                                    <Link href={route('downloads')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Downloads</Link>
                                    <Link href={route('appreciation-letters')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Appreciation Letters</Link>
                                    <Link href={route('linkage-affiliation')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Linkage &amp; Affiliation</Link>
                                    <Link href={route('how-to-get-affiliation')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">How to Get Affiliation</Link>
                                    <Link href={route('authorized-study-center')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Authorized Study Center</Link>
                                </div>
                            </li>


                            <li className="relative group">
                                <button className="flex items-center gap-1 hover:text-blue-600 transition">
                                    Student Services
                                    <span className="text-xs">▼</span>
                                </button>
                                <div className="absolute left-0 top-full w-60 bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                                    <Link href={route('student-login')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Student Login</Link>
                                    <Link href={route('verify-certificate')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Verify Certificate</Link>
                                    <Link href={route('online-admit-card')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Online Admit Card</Link>
                                    <Link href={route('student-verification')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Student Verification</Link>
                                    <Link href={route('online-result')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Online Result</Link>
                                    <Link href={route('online-advance-result')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Online Advance Result</Link>
                                    <Link href={route('examination-system')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Examination System</Link>
                                </div>
                            </li>



                            <li className="relative group">
                                <button className="flex items-center gap-1 hover:text-blue-600 transition">
                                    Center Section
                                    <span className="text-xs">▼</span>
                                </button>
                                <div className="absolute left-0 top-full w-60 bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <Link href={route('asc-login')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">ASC Login</Link>
                                        <Link href={route('our-account')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Our Account (Bank Details)</Link>
                                        <Link href={route('business-support')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Business Support System</Link>
                                        <Link href={route('sgcsm-rules')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">SGCSM Rules & regulation</Link>
                                    </div>
                                </div>
                            </li>


                            <li className="relative group">
                                <button className="flex items-center gap-1 hover:text-blue-600 transition">
                                    Franchise
                                    <span className="text-xs">▼</span>
                                </button>
                                <div className="absolute left-0 top-full w-60 bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <Link href={route('franchise-register')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Online apply for Franchise</Link>
                                            <Link href="#" className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Off Line Affiliation Form</Link>
                                            <Link href={route('public-notice')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Public Notice</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li className="relative group">
                                <button className="flex items-center gap-1 hover:text-blue-600 transition">
                                    More
                                    <span className="text-xs">▼</span>
                                </button>
                                <div className="absolute left-0 top-full w-60 bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <Link href={route('our-publication')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Our Publication</Link>
                                            <Link href={route('gallary')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Gallary</Link>
                                            <Link href={route('placement-cell')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Placement Cell</Link>
                                            <Link href={route('news-events')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">News & Events</Link>
                                            <Link href={route('media-coverage')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Media Coverage</Link>
                                            <Link href={route('our-study-materials')} className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600">Our Study Materials</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <Link href={route('contact')} className="hover:text-blue-600 transition">
                                    Contact
                                </Link>
                            </li>

                        </ul>

                        {/* Right Side */}
                        <div className="flex items-center gap-3">

                            <button className="hidden sm:block bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
                                Login
                            </button>

                            {/* Mobile Button */}
                            <button
                                onClick={() => setMobileMenu(!mobileMenu)}
                                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg border text-2xl"
                            >

                                {mobileMenu ? (
                                    <FaTimes />
                                ) : (
                                    <FaBars />
                                )}

                            </button>

                        </div>

                    </div>

                </div>

                <div
                    className={`lg:hidden bg-white border-t shadow-xl transition-all duration-300 overflow-hidden ${mobileMenu
                        ? 'max-h-[1000px]'
                        : 'max-h-0'
                        }`}
                >

                    <div className="px-4 py-5 space-y-3">

                        {/* Home */}
                        <Link href="/" className="block px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600">
                            Home
                        </Link>

                        {/* About Dropdown */}
                        <div>

                            <button
                                onClick={() =>
                                    setOpenDropdown(
                                        openDropdown === 'about'
                                            ? null
                                            : 'about'
                                    )
                                }
                                className="w-full flex justify-between items-center px-4 py-3 rounded-xl hover:bg-blue-50"
                            >
                                About Us
                                <span>
                                    {openDropdown === 'about' ? '−' : '+'}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openDropdown === 'about'
                                    ? 'max-h-96 mt-2'
                                    : 'max-h-0'
                                    }`}
                            >

                                <div className="ml-4 space-y-2">

                                    <Link
                                        href={route('about-us')}
                                        className="block px-4 py-2 rounded-lg hover:bg-blue-50"
                                    >
                                        About Us
                                    </Link>

                                    <Link
                                        href={route('mission-vision')}
                                        className="block px-4 py-2 rounded-lg hover:bg-blue-50"
                                    >
                                        Mission & Vision
                                    </Link>

                                    <Link
                                        href={route('our-dream')}
                                        className="block px-4 py-2 rounded-lg hover:bg-blue-50"
                                    >
                                        Our Dream
                                    </Link>

                                </div>

                            </div>

                        </div>

                        {/* Courses Dropdown */}
                        <div>

                            <button
                                onClick={() =>
                                    setOpenDropdown(
                                        openDropdown === 'courses'
                                            ? null
                                            : 'courses'
                                    )
                                }
                                className="w-full flex justify-between items-center px-4 py-3 rounded-xl hover:bg-blue-50"
                            >
                                Courses
                                <span>
                                    {openDropdown === 'courses' ? '−' : '+'}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openDropdown === 'courses'
                                    ? 'max-h-96 mt-2'
                                    : 'max-h-0'
                                    }`}
                            >

                                <div className="ml-4 space-y-2">

                                    <Link
                                        href={route('courses')}
                                        className="block px-4 py-2 rounded-lg hover:bg-blue-50"
                                    >
                                        Computer Course
                                    </Link>

                                    <Link
                                        href={route('courses')}
                                        className="block px-4 py-2 rounded-lg hover:bg-blue-50"
                                    >
                                        NIELIT Course
                                    </Link>

                                    <Link
                                        href={route('courses')}
                                        className="block px-4 py-2 rounded-lg hover:bg-blue-50"
                                    >
                                        Advance Course
                                    </Link>

                                </div>

                            </div>

                        </div>

                        {/* Contact */}
                        <Link
                            href={route('contact')}
                            className="block px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600"
                        >
                            Contact
                        </Link>

                    </div>

                </div>

            </nav>
        </>
    );
}