import React from 'react'

function Header() {
    return (
        <>
        
            <div className="bg-blue-700 text-white text-sm">
                <div className="max-w-screen-2xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
                        <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-gray-200">
                            <i className="fa-solid fa-phone"></i>
                            <span>+91 98765 43210</span>
                        </a>

                        <a href="mailto:info@edulearn.com" className="flex items-center gap-2 hover:text-gray-200">
                            <i className="fa-solid fa-envelope"></i>
                            <span>info@edulearn.com</span>
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-gray-200">Facebook</a>
                        <a href="#" className="hover:text-gray-200">Instagram</a>
                        <a href="#" className="hover:text-gray-200">LinkedIn</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header