'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GALLERY_IMAGES = [
    { src: '/images/business-card-design.webp', alt: 'business card design' },
    { src: '/images/67c182c497a5cddec7839092_6cc506df-7115-4fc2-ba0d-fc1909a1146a.avif', alt: 'editorial design' },
    { src: '/images/package-design_8.jpg', alt: 'package design' },
    { src: '/images/package-design_6.jpg', alt: 'package design' },
    { src: '/images/web-design-11_1.avif', alt: 'web design' },
    { src: '/images/SNS-advertising_6.webp', alt: 'SNS advertising' }
];

// Duplicate for infinite scroll
const INFINITE_IMAGES = [...GALLERY_IMAGES, ...GALLERY_IMAGES, ...GALLERY_IMAGES];

export default function ImageGallery() {
    const totalOriginal = GALLERY_IMAGES.length;
    // Start at the first image of the middle set (index 6 for 6 images)
    // This ensures the first image aligns perfectly with the margin on load.
    const [currentIndex, setCurrentIndex] = useState(totalOriginal);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const handleNext = () => {
        setTransitionEnabled(true);
        setCurrentIndex(prev => prev + 1);
    };

    const handlePrev = () => {
        setTransitionEnabled(true);
        setCurrentIndex(prev => prev - 1);
    };

    const goToIndex = (index: number) => {
        setTransitionEnabled(true);
        setCurrentIndex(totalOriginal + index);
    };

    // Reset logic: when animation finishes outside the middle set range, snap back to same image in middle set
    const onAnimationComplete = () => {
        if (currentIndex >= totalOriginal * 2) {
            setTransitionEnabled(false);
            setCurrentIndex(currentIndex - totalOriginal);
        } else if (currentIndex < totalOriginal) {
            setTransitionEnabled(false);
            setCurrentIndex(currentIndex + totalOriginal);
        }
    };

    // logicIndex for dots stays 0-5
    const logicalIndex = ((currentIndex % totalOriginal) + totalOriginal) % totalOriginal;


    return (
        <section className="section_gallery22 overflow-hidden bg-white">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large !pb-0">
                        <div className="gallery22_component">
                            <div className="margin-bottom margin-xxlarge">
                                <div className="max-width-large">
                                    <div className="margin-bottom margin-small">
                                        <h2 className="heading-style-h2">이미지 갤러리</h2>
                                    </div>
                                    <p className="text-size-medium">디자인케어 서비스를 만나보세요.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider Container - Starts at text line, overflows to the right */}
            <div className="relative pb-12">
                <div
                    className="slider-track-container"
                    style={{
                        marginLeft: 'calc(max(5%, (100vw - 1360px) / 2) + 20px)',
                        overflow: 'visible',
                        clipPath: 'inset(0 -100vw 0 0)' // Clip left side at margin, allow infinite right overflow
                    }}
                >
                    <motion.div
                        className="flex"
                        animate={{ x: `calc(-${currentIndex} * (min(36.66vw, 440px) + 2rem))` }}
                        transition={transitionEnabled ? {
                            type: "tween",
                            ease: [0.25, 0.1, 0.25, 1],
                            duration: 0.6
                        } : { duration: 0 }}
                        onAnimationComplete={onAnimationComplete}
                    >
                        {INFINITE_IMAGES.map((img, index) => (
                            <div
                                key={index}
                                className="gallery22_slide flex-shrink-0"
                                style={{ width: 'calc(min(36.66vw, 440px) + 2rem)', paddingRight: '2rem' }}
                            >
                                <div className="gallery22_image-wrapper overflow-hidden rounded-[8px] border border-[#eee]">
                                    <Image
                                        src={`/api/watermark?url=${img.src}&v=6`}
                                        alt={img.alt}
                                        width={440}
                                        height={440}
                                        className="gallery22_image block w-full aspect-square object-cover"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Navigation Wrapper */}
                <div className="padding-global">
                    <div className="container-large">
                        <div className="flex justify-between items-center mt-12 pb-24">
                            {/* Pagination Dots */}
                            <div className="flex gap-2">
                                {GALLERY_IMAGES.map((_, index) => (
                                    <div
                                        key={index}
                                        onClick={() => goToIndex(index)}
                                        className={`h-[10px] rounded-full cursor-pointer transition-all duration-300 ${index === logicalIndex ? 'w-5 bg-black' : 'w-[10px] bg-[#ccc] hover:bg-gray-400'}`}
                                    />
                                ))}
                            </div>

                            {/* Arrow Buttons */}
                            <div className="flex gap-4">
                                <motion.button
                                    onClick={handlePrev}
                                    className="w-[3rem] h-[3rem] flex items-center justify-center rounded-full cursor-pointer transition-all duration-300"
                                    initial={{ border: '1px solid #ccc', backgroundColor: '#ffffff', color: '#000000' }}
                                    whileHover={{ backgroundColor: '#ccc', color: '#000000' }}
                                    aria-label="Previous Slide"
                                >
                                    <div className="w-[1rem] h-[1rem] flex items-center justify-center">
                                        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </motion.button>
                                <motion.button
                                    onClick={handleNext}
                                    className="w-[3rem] h-[3rem] flex items-center justify-center rounded-full cursor-pointer transition-all duration-300"
                                    initial={{ border: '1px solid #ccc', backgroundColor: '#ffffff', color: '#000000' }}
                                    whileHover={{ backgroundColor: '#ccc', color: '#000000' }}
                                    aria-label="Next Slide"
                                >
                                    <div className="w-[1rem] h-[1rem] flex items-center justify-center">
                                        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
