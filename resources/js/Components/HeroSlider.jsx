import { useEffect, useState } from 'react';

export default function HeroSlider({
    slides = [],
    autoSlide = true,
    intervalTime = 4000,
    height = 'h-screen',

    // Dynamic Content
    title = '',
    description = '',
    buttonText = '',
    buttonLink = '#',
}) {

    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto Slide
    useEffect(() => {

        if (!autoSlide || slides.length <= 1) return;

        const interval = setInterval(() => {

            setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );

        }, intervalTime);

        return () => clearInterval(interval);

    }, [slides.length, autoSlide, intervalTime]);

    // Next Slide
    const nextSlide = () => {

        setCurrentSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );

    };

    // Previous Slide
    const prevSlide = () => {

        setCurrentSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );

    };

    return (
        <section className={`relative w-full ${height} overflow-hidden`}>

            {/* Slides */}
            <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                }}
            >

                {slides.map((slide, index) => (

                    <div
                        key={index}
                        className={`min-w-full ${height}`}
                    >

                        <img
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />

                    </div>

                ))}

            </div>

            {/* Overlay */}
            {(title || description || buttonText) && (

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

                    <div className="text-center text-white px-4">

                        {/* Title */}
                        {title && (

                            <h1 className="text-5xl md:text-7xl font-black">
                                {title}
                            </h1>

                        )}

                        {/* Description */}
                        {description && (

                            <p className="mt-5 text-lg md:text-xl max-w-2xl mx-auto">
                                {description}
                            </p>

                        )}

                        {/* Button */}
                        {buttonText && (

                            <a
                                href={buttonLink}
                                className="inline-block mt-8 bg-pink-600 hover:bg-pink-700 transition px-8 py-4 rounded-2xl font-semibold"
                            >
                                {buttonText}
                            </a>

                        )}

                    </div>

                </div>

            )}

            {/* Previous Button */}
            <button
                onClick={prevSlide}
                className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-12 h-12 rounded-full text-2xl transition"
            >
                ❮
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-12 h-12 rounded-full text-2xl transition"
            >
                ❯
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">

                {slides.map((_, index) => (

                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition ${currentSlide === index
                                ? 'bg-white'
                                : 'bg-white/50'
                            }`}
                    />

                ))}

            </div>

        </section>
    );
}