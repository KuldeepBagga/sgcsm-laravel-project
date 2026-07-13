import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Header() {
    return (
        <>

            <div className="bg-blue-700 text-white text-sm">
                <div className="max-w-screen-2xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
                        <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-gray-200">
                            <FaPhone size={22} />
                            <span>
                                8920206335
                            </span>
                        </a>

                        <a href="mailto:info@edulearn.com" className="flex items-center gap-2 hover:text-gray-200">
                            <FaEnvelope size={22} />
                            <span>info@edulearn.com</span>
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://tinyurl.com/24am9w39" target='_blank' className="hover:text-gray-200">
                            <FaFacebook size={22} />
                        </a>
                        <a href="https://www.instagram.com/sgcsmskills/" target='_blank' className="hover:text-gray-200">
                            <FaInstagram size={22} />
                        </a>
                        <a href="https://tinyurl.com/2hskutzh" target='_blank' className="hover:text-gray-200">
                            <FaLinkedin size={22} />
                        </a>
                        <a href="https://x.com/sgcsmindia1" target='_blank' className="hover:text-gray-200">
                            <FaXTwitter size={22} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCHyMh-_Vcll1FXy-n8J7X7Q" target='_blank' className="hover:text-gray-200">
                            <FaYoutube size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header