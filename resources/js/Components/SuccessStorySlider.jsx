import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';


export default function SuccessStorySlider({ testimonials }) {

    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto Slide
    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentSlide((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );

        }, 4000);

        return () => clearInterval(interval);

    }, []);

    // Next Slide
    const nextSlide = () => {

        setCurrentSlide((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );

    };

    // Previous Slide
    const prevSlide = () => {

        setCurrentSlide((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );

    };

    return (
        <section className="py-10 bg-gray-200 overflow-hidden">

            {/* Heading */}
            <div className="text-center mb-12">

                                <h2 className="text-3xl md:text-5xl font-black leading-tight text-gray-800 uppercase">
                                    OUR SUCCESS STORIES
                                </h2>

                                <div className="w-40 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mt-5 rounded-full"></div>

                            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Prev Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-slate-800 text-white flex items-center justify-center shadow-2xl"
                >
                    <FaChevronLeft />
                </button>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-slate-800 text-white flex items-center justify-center shadow-2xl"
                >
                    <FaChevronRight />
                </button>

                {/* Slider */}
                <div className="overflow-hidden">

                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    >

                        {testimonials.map((item, index) => (

                            <div
                                key={index}
                                className="min-w-full px-10"
                            >

                                <div className="grid lg:grid-cols-2 gap-8">

                                    {/* Card */}
                                    <div className="bg-white rounded-3xl shadow-lg p-10 flex flex-col md:flex-row gap-8 items-center">

                                        {/* Left */}
                                        <div className="flex flex-col items-center">

                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-32 h-32 rounded-xl object-cover"
                                            />

                                            <div className="bg-pink-600 text-white font-bold text-center px-5 py-3 rounded mt-4">
                                                {item.name}
                                            </div>

                                        </div>

                                        {/* Right */}
                                        <div>

                                            <FaQuoteLeft className="text-blue-700 text-3xl mb-5" />

                                            <p className="text-2xl leading-relaxed text-gray-700">
                                                {item.message}
                                            </p>

                                        </div>

                                    </div>

                                    {/* Duplicate Card */}
                                    <div className="hidden lg:flex bg-white rounded-3xl shadow-lg p-10 gap-8 items-center">

                                        {/* Left */}
                                        <div className="flex flex-col items-center">

                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-32 h-32 rounded-xl object-cover"
                                            />

                                            <div className="bg-pink-600 text-white font-bold text-center px-5 py-3 rounded mt-4">
                                                {item.name}
                                            </div>

                                        </div>

                                        {/* Right */}
                                        <div>

                                            <FaQuoteLeft className="text-blue-700 text-3xl mb-5" />

                                            <p className="text-2xl leading-relaxed text-gray-700">
                                                {item.message}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}