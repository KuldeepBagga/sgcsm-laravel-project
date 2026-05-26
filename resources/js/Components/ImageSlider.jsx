import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ImageSlider({
    images = [],
    autoSlide = true,
    intervalTime = 3000,
}) {

    // Duplicate Images For Infinite Loop
    const sliderImages = [...images, ...images];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [transition, setTransition] = useState(true);

    // Auto Slide
    useEffect(() => {

        if (!autoSlide) return;

        const interval = setInterval(() => {
            nextSlide();
        }, intervalTime);

        return () => clearInterval(interval);

    }, [currentIndex]);

    // Infinite Loop Reset
    useEffect(() => {

        if (currentIndex === images.length) {

            setTimeout(() => {

                setTransition(false);
                setCurrentIndex(0);

            }, 700);

        }

    }, [currentIndex, images.length]);

    // Restore Transition
    useEffect(() => {

        if (!transition) {

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setTransition(true);
                });
            });

        }

    }, [transition]);

    // Next
    const nextSlide = () => {

        setCurrentIndex((prev) => prev + 1);

    };

    // Prev
    const prevSlide = () => {

        if (currentIndex === 0) {

            setTransition(false);
            setCurrentIndex(images.length);

            requestAnimationFrame(() => {

                requestAnimationFrame(() => {
                    setTransition(true);
                    setCurrentIndex(images.length - 1);
                });

            });

        } else {

            setCurrentIndex((prev) => prev - 1);

        }

    };

    return (
        <section className="relative py-10 bg-gray-100 overflow-hidden">

            {/* Left Button */}
            <button
                onClick={prevSlide}
                className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-slate-700 text-white flex items-center justify-center shadow-xl"
            >
                <FaChevronLeft />
            </button>

            {/* Right Button */}
            <button
                onClick={nextSlide}
                className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-slate-700 text-white flex items-center justify-center shadow-xl"
            >
                <FaChevronRight />
            </button>

            {/* Slider */}
            <div className="overflow-hidden px-16">

                <div
                    className={`flex gap-8 ${
                        transition
                            ? 'transition-transform duration-700 ease-in-out'
                            : ''
                    }`}
                    style={{
                        transform: `translateX(-${currentIndex * 320}px)`,
                    }}
                >

                    {sliderImages.map((image, index) => (

                        <div
                            key={index}
                            className="min-w-[280px] h-[170px] rounded-2xl overflow-hidden flex-shrink-0 shadow-lg"
                        >
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                className="w-full h-full object-cover hover:scale-110 transition duration-500"
                            />
                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}