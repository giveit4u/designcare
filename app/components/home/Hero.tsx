'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const columns = [
        [
            { src: "/images/hero-image-L01.avif", alt: "leaflet design" },
            { src: "/images/hero-image-L02.webp", alt: "web design" },
            { src: "/images/hero-image-L03.avif", alt: "business card design" },
            { src: "/images/hero-image-L04.avif", alt: "editorial design" },
            { src: "/images/hero-image-L05.webp", alt: "detail page" },
            { src: "/images/hero-image-L06.webp", alt: "app design" },
        ],
        [
            { src: "/images/hero-image-R01.webp", alt: "detail page" },
            { src: "/images/hero-image-R02.avif", alt: "business card design" },
            { src: "/images/hero-image-R03.webp", alt: "web design" },
            { src: "/images/hero-image-R04.avif", alt: "sign design" },
            { src: "/images/hero-image-R05.webp", alt: "app design" },
            { src: "/images/hero-image-R06.avif", alt: "editorial design" },
        ]
    ];

    return (
        <header id="Top" className="section_header76 overflow-hidden bg-white">
            <div className="w-layout-grid header76_component">
                <motion.div
                    className="header76_content-left z-10"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="margin-bottom margin-small">
                        <h1 className="heading-style-h1 break-keep">
                            디자인 구독 서비스로 <br />
                            비용절감과 경쟁력 높이세요
                        </h1>
                    </motion.div>
                    <motion.p variants={itemVariants} className="text-size-medium max-width-small break-keep">
                        구인공고, 면접, 연봉협상 등 힘든 채용과정과 비용이 부담되시나요? 디자인 구독 서비스로 비용절감과 브랜드 경쟁력을 높여 드립니다.
                    </motion.p>
                    <motion.div variants={itemVariants} className="margin-top margin-medium">
                        <div className="button-group">
                            <Link href="#inquiry" className="button w-button">구독문의</Link>
                            <Link href="#category" className="button is-secondary w-button">더 알아보기</Link>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="header76_content-right">
                    <div
                        className="flex gap-4 overflow-hidden h-full items-start w-full justify-center"
                        style={{
                            maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
                        }}
                    >
                        {columns.map((colImages, colIndex) => (
                            <div key={colIndex} className="flex-1 min-w-0 flex-shrink-0">
                                <motion.div
                                    className="flex flex-col gap-4 pb-4"
                                    initial={{
                                        y: colIndex === 0 ? "-27.08%" : "0%"
                                    }}
                                    animate={{
                                        y: colIndex === 0 ? ["-27.08%", "-52.08%"] : ["0%", "-25%"]
                                    }}
                                    transition={{
                                        duration: 45,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                >
                                    {/* Repeat images multiple times to ensure continuous flow */}
                                    {[...colImages, ...colImages, ...colImages, ...colImages].map((img, imgIndex) => (
                                        <div key={imgIndex} className="w-full aspect-[371/445] flex-shrink-0 relative">
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                fill
                                                sizes="(max-width: 768px) 50vw, 33vw"
                                                className="rounded-[9px] shadow-sm object-cover"
                                                priority={colIndex < 2 && imgIndex < 12}
                                            />
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
