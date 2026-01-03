'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion, AnimatePresence, useAnimation, useMotionValue } from 'framer-motion';

// Tab Data Structure
type Tab = {
    id: number;
    label: string;
    subtitle: string;
    sizeClass?: string;
    dimensions: { width: string; height: string };
    objectPosition?: string;
    paddingTop?: string;
    images: { src: string; alt: string; width?: number; height?: number; detailImages?: string[] }[];
};

const TABS: Tab[] = [
    {
        id: 1,
        label: '브랜딩',
        subtitle: 'CI, BI / 로고 / 가이드라인',
        sizeClass: '',
        dimensions: { width: '416px', height: '312px' },
        paddingTop: '0',
        images: [
            {
                src: '/images/Branding-01_b.webp',
                alt: 'branding & Logo Design',
                detailImages: [
                    '/images/Branding-01_b.webp',
                    '/images/Branding-02_k.avif',
                    '/images/Branding-03_e.avif',
                    '/images/Branding-04_s.avif'
                ]
            },
            { src: '/images/Branding-02_k.avif', alt: 'branding & Logo Design' },
            { src: '/images/Branding-03_e.avif', alt: 'branding & Logo Design' },
            { src: '/images/Branding-04_s.avif', alt: 'branding & Logo Design' },
            { src: '/images/Branding-05_f.avif', alt: 'branding & Logo Design' },
            { src: '/images/Branding-06_p.avif', alt: 'branding & Logo Design' },
            { src: '/images/Branding-07_a.png', alt: 'branding & Logo Design' },
            { src: '/images/Branding-08_b.png', alt: 'branding & Logo Design' },
            { src: '/images/Branding-09_r.png', alt: 'branding & Logo Design' },
            { src: '/images/Branding-10_t.avif', alt: 'branding & Logo Design' },
            { src: '/images/Branding-11_z.png', alt: 'branding & Logo Design' },
            { src: '/images/Branding-12_f.png', alt: 'branding & Logo Design' },
        ]
    },
    {
        id: 2,
        label: '인쇄물',
        subtitle: '포스터 / 명함 / 전단지 / 책자 / 리플렛 / X배너 / 플랜카드 / 사인물',
        sizeClass: '_20x32',
        dimensions: { width: '320px', height: '512px' },
        paddingTop: '0',
        images: [
            { src: '/images/Prints-01.jpg', alt: 'print design' },
            { src: '/images/Prints-02.jpg', alt: 'print design' },
            { src: '/images/Prints-03.avif', alt: 'print design' },
            { src: '/images/Prints-04.avif', alt: 'print design' },
            { src: '/images/Prints-05.jpg', alt: 'print design' },
            { src: '/images/Prints-06.avif', alt: 'print design' },
            { src: '/images/Prints-07.avif', alt: 'print design' },
            { src: '/images/Prints-08.avif', alt: 'print design' },
            { src: '/images/Prints-09.webp', alt: 'print design' },
            { src: '/images/Prints-10.webp', alt: 'print design' },
            { src: '/images/Prints-11.avif', alt: 'print design' },
            { src: '/images/Prints-12.avif', alt: 'print design' },
        ]
    },
    {
        id: 3,
        label: '상세페이지',
        subtitle: '스마트스토어 / 오픈마켓 / 와디즈 / 텀블벅 / 카탈로그',
        sizeClass: '_20x32',
        dimensions: { width: '320px', height: '512px' },
        paddingTop: '0',
        images: [
            { src: '/images/Detail-01.webp', alt: 'detail page' },
            { src: '/images/Detail-02.avif', alt: 'detail page' },
            { src: '/images/Detail-03.webp', alt: 'detail page' },
            { src: '/images/Detail-04.webp', alt: 'detail page' },
            { src: '/images/Detail-05.webp', alt: 'detail page' },
            { src: '/images/Detail-06.webp', alt: 'detail page' },
            { src: '/images/Detail-07.webp', alt: 'detail page' },
            { src: '/images/Detail-08.webp', alt: 'detail page' },
            { src: '/images/Detail-09.webp', alt: 'detail page' },
            { src: '/images/Detail-10.webp', alt: 'detail page' },
            { src: '/images/Detail-11.webp', alt: 'detail page' },
            { src: '/images/Detail-12.webp', alt: 'detail page' },
        ]
    },
    {
        id: 4,
        label: 'SNS 광고',
        subtitle: '인스타그램 / 페이스북 / 블로그 / 카드뉴스 / 썸네일',
        sizeClass: '_26x26',
        dimensions: { width: '416px', height: '416px' },
        paddingTop: '0',
        images: [
            { src: '/images/sns-01.webp', alt: 'sns ad' },
            { src: '/images/sns-02.webp', alt: 'sns ad' },
            { src: '/images/sns-03.webp', alt: 'sns ad' },
            { src: '/images/sns-04.webp', alt: 'sns ad' },
            { src: '/images/sns-05.webp', alt: 'sns ad' },
            { src: '/images/sns-06.webp', alt: 'sns ad' },
            { src: '/images/sns-07.jpg', alt: 'sns ad' },
            { src: '/images/sns-08.webp', alt: 'sns ad' },
            { src: '/images/sns-09.webp', alt: 'sns ad' },
            { src: '/images/sns-10.webp', alt: 'sns ad' },
            { src: '/images/sns-11.webp', alt: 'sns ad' },
            { src: '/images/sns-12.webp', alt: 'sns ad' },
        ]
    },
    {
        id: 5,
        label: '패키지',
        subtitle: '단상자 / 싸바리박스 / 파우치 / 라벨 / 쇼핑백',
        sizeClass: '_26x26',
        dimensions: { width: '416px', height: '416px' },
        paddingTop: '0',
        images: [
            { src: '/images/Package-01.jpg', alt: 'package design' },
            { src: '/images/Package-02.jpg', alt: 'package design' },
            { src: '/images/Package-03.jpg', alt: 'package design' },
            { src: '/images/Package-04.jpg', alt: 'package design' },
            { src: '/images/Package-05.jpg', alt: 'package design' },
            { src: '/images/Package-06.jpg', alt: 'package design' },
            { src: '/images/Package-07.jpg', alt: 'package design' },
            { src: '/images/Package-08.jpg', alt: 'package design' },
            { src: '/images/Package-09.jpg', alt: 'package design' },
            { src: '/images/Package-10.jpg', alt: 'package design' },
            { src: '/images/Package-11.jpg', alt: 'package design' },
            { src: '/images/Package-12.jpg', alt: 'package design' },
        ]
    },
    {
        id: 6,
        label: '제안서',
        subtitle: '회사소개서 / 사업계획서 / 제안서 / IR자료',
        sizeClass: '_34x16',
        dimensions: { width: '544px', height: '315px' },
        paddingTop: '0',
        images: [
            { src: '/images/Proposal-01.avif', alt: 'proposal' },
            { src: '/images/Proposal-02.avif', alt: 'proposal' },
            { src: '/images/Proposal-03.avif', alt: 'proposal' },
            { src: '/images/Proposal-04.avif', alt: 'proposal' },
            { src: '/images/Proposal-05.avif', alt: 'proposal' },
            { src: '/images/Proposal-06.avif', alt: 'proposal' },
            { src: '/images/Proposal-07.avif', alt: 'proposal' },
            { src: '/images/Proposal-08.avif', alt: 'proposal' },
            { src: '/images/Proposal-09.avif', alt: 'proposal' },
            { src: '/images/Proposal-10.avif', alt: 'proposal' },
            { src: '/images/Proposal-11.avif', alt: 'proposal' },
            { src: '/images/Proposal-12.avif', alt: 'proposal' },
        ]
    },
    {
        id: 7,
        label: '웹디자인',
        subtitle: '자사몰 / 랜딩페이지 / 프로모션 / 이벤트',
        sizeClass: '_20x32',
        dimensions: { width: '320px', height: '512px' },
        paddingTop: '0',
        objectPosition: '50% 0%',
        images: [
            {
                src: '/images/webdesign-001.avif',
                alt: 'web design portfolio 1',
                detailImages: [
                    '/images/webdesign-001.avif',
                    '/images/webdesign-002.avif',
                    '/images/webdesign-003.avif'
                ]
            },
            { src: '/images/webdesign-002.avif', alt: 'web design portfolio 2' },
            { src: '/images/webdesign-003.avif', alt: 'web design portfolio 3' },
            { src: '/images/webdesign-004.avif', alt: 'web design portfolio 4' },
            { src: '/images/webdesign-005.avif', alt: 'web design portfolio 5' },
            { src: '/images/webdesign-006.avif', alt: 'web design portfolio 6' },
            { src: '/images/webdesign-007.avif', alt: 'web design portfolio 7' },
            { src: '/images/webdesign-008.avif', alt: 'web design portfolio 8' },
            { src: '/images/webdesign-009.avif', alt: 'web design portfolio 9' },
            { src: '/images/webdesign-010.avif', alt: 'web design portfolio 10' },
            { src: '/images/webdesign-011.avif', alt: 'web design portfolio 11' },
            { src: '/images/webdesign-012.avif', alt: 'web design portfolio 12' },
        ]
    },
    {
        id: 8,
        label: '웹 / 앱개발',
        subtitle: '하이브리드앱 / 네이티브앱 / 웹사이트 / 관리자페이지',
        sizeClass: '_32x20',
        dimensions: { width: '512px', height: '292px' },
        paddingTop: '0',
        objectPosition: '50% 0%',
        images: [
            { src: '/images/Web_App-01.webp', alt: 'app design portfolio 1' },
            { src: '/images/Web_App-02.webp', alt: 'app design portfolio 2' },
            { src: '/images/Web_App-03.avif', alt: 'app design portfolio 3' },
            { src: '/images/Web_App-04.webp', alt: 'app design portfolio 4' },
            { src: '/images/Web_App-05.png', alt: 'app design portfolio 5' },
            { src: '/images/Web_App-06.avif', alt: 'app design portfolio 6' },
            { src: '/images/Web_App-07.png', alt: 'app design portfolio 7' },
            { src: '/images/Web_App-08.avif', alt: 'app design portfolio 8' },
            { src: '/images/Web_App-09.avif', alt: 'app design portfolio 9' },
            { src: '/images/Web_App-10.avif', alt: 'app design portfolio 10' },
            { src: '/images/Web_App-11.webp', alt: 'app design portfolio 11' },
            { src: '/images/Web_App-12.webp', alt: 'app design portfolio 12' },
        ]
    },
    {
        id: 9,
        label: '인테리어',
        subtitle: '주거공간 / 상업공간 / 사무공간 / 전시공간',
        sizeClass: '',
        dimensions: { width: '416px', height: '312px' },
        paddingTop: '0',
        images: [
            { src: '/images/Interior-01.avif', alt: 'interior design' },
            { src: '/images/Interior-02.avif', alt: 'interior design' },
            { src: '/images/Interior-03.avif', alt: 'interior design' },
            { src: '/images/Interior-04.avif', alt: 'interior design' },
            { src: '/images/Interior-05.avif', alt: 'interior design' },
            { src: '/images/Interior-06.avif', alt: 'interior design' },
            { src: '/images/Interior-07.avif', alt: 'interior design' },
            { src: '/images/Interior-08.avif', alt: 'interior design' },
            { src: '/images/Interior-09.avif', alt: 'interior design' },
            { src: '/images/Interior-10.avif', alt: 'interior design' },
            { src: '/images/Interior-11.avif', alt: 'interior design' },
            { src: '/images/Interior-12.avif', alt: 'interior design' },
        ]
    },
];

export default function Category() {
    const [activeTabId, setActiveTabId] = useState<number>(1);
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [currentDetailIndex, setCurrentDetailIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const controls = useAnimation();
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    const activeTab = TABS.find(tab => tab.id === activeTabId) || TABS[0];

    // Ultra-reliable infinite marquee logic
    useEffect(() => {
        if (!mounted || !marqueeRef.current) return;

        let animationFrame: number;
        const speed = 1.56; // Increased speed by 30% (1.2 * 1.3)

        const move = () => {
            if (!isDragging && !selectedImage && !isHovered) {
                const totalWidth = marqueeRef.current?.scrollWidth || 0;
                const singleSetWidth = totalWidth / 3;

                let nextX = x.get() - speed;

                // Seamless reset point
                if (nextX <= -singleSetWidth) {
                    nextX += singleSetWidth;
                }

                x.set(nextX);
            }
            animationFrame = requestAnimationFrame(move);
        };

        animationFrame = requestAnimationFrame(move);

        return () => cancelAnimationFrame(animationFrame);
    }, [mounted, isDragging, !!selectedImage, isHovered, activeTabId]);

    const handleImageClick = (img: any) => {
        if (!isDragging) {
            setSelectedImage(img);
            setCurrentDetailIndex(0);
        }
    };

    return (
        <section id="portfolio" className="section_layout504">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large single-padding">
                        <div className="layout504_component">
                            <div className="margin-bottom margin-xxlarge">
                                <div className="text-align-center">
                                    <div className="max-width-large align-center">
                                        <div className="margin-bottom margin-small">
                                            <h2 className="heading-style-h2 text-align-center break-keep">
                                                브랜드 성장을 위한 디자인 케어 서비스
                                            </h2>
                                        </div>
                                        <p className="text-size-medium text-align-center break-keep">
                                            중소기업을 위한 맞춤형 디자인케어 서비스는 다양하고 고품질 디자인으로 비즈니스 성장을 지원합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="layout504_tabs w-tabs">
                                <div className="layout504_tabs-menu w-tab-menu no-scrollbar">
                                    {TABS.map((tab) => (
                                        <a
                                            key={tab.id}
                                            className={`layout504_tab-link w-inline-block w-tab-link ${activeTabId === tab.id ? 'w--current' : ''}`}
                                            onClick={() => {
                                                setActiveTabId(tab.id);
                                                x.set(0);
                                            }}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <div>{tab.label}</div>
                                        </a>
                                    ))}
                                </div>

                                <div className="layout504_tabs-content w-tab-content">
                                    <div className="layout504_tab-pane w-tab-pane w--tab-active">
                                        <p className="text-size-small text-align-center break-keep">
                                            {activeTab.subtitle}
                                        </p>
                                        <div className="layout504_content-bottom">
                                            <div className="layout504_images-layout">
                                                <div
                                                    ref={containerRef}
                                                    className="layout504_image-list-top"
                                                    onMouseEnter={() => setIsHovered(true)}
                                                    onMouseLeave={() => setIsHovered(false)}
                                                    style={{
                                                        overflow: 'hidden',
                                                        width: '100%',
                                                        cursor: isDragging ? 'grabbing' : 'grab',
                                                        touchAction: 'none'
                                                    }}
                                                >
                                                    <motion.div
                                                        ref={marqueeRef}
                                                        drag="x"
                                                        onDragStart={() => setIsDragging(true)}
                                                        onDragEnd={() => {
                                                            setTimeout(() => setIsDragging(false), 50);
                                                            // Normalize x after drag to stay within the first set
                                                            const totalWidth = marqueeRef.current?.scrollWidth || 0;
                                                            const singleSetWidth = totalWidth / 3;
                                                            let finalX = x.get();
                                                            while (finalX > 0) finalX -= singleSetWidth;
                                                            while (finalX <= -singleSetWidth) finalX += singleSetWidth;
                                                            x.set(finalX);
                                                        }}
                                                        style={{
                                                            display: 'flex',
                                                            width: 'max-content',
                                                            x
                                                        }}
                                                        key={activeTab.id}
                                                    >
                                                        {[...activeTab.images, ...activeTab.images, ...activeTab.images].map((img, index) => (
                                                            <div
                                                                key={`${activeTab.id}-${index}`}
                                                                onClick={() => handleImageClick(img)}
                                                                onContextMenu={(e) => e.preventDefault()}
                                                                className={`layout504_image-wrapper ${activeTab.sizeClass || ''} cursor-pointer group`}
                                                                style={{
                                                                    flexShrink: 0,
                                                                    position: 'relative',
                                                                    width: activeTab.dimensions.width,
                                                                    height: activeTab.dimensions.height,
                                                                    paddingTop: 0,
                                                                    marginRight: '1rem',
                                                                    borderRadius: '12px',
                                                                    overflow: 'hidden',
                                                                    WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                                                                    pointerEvents: isDragging ? 'none' : 'auto',
                                                                    userSelect: 'none'
                                                                }}
                                                            >
                                                                <Image
                                                                    src={`/api/watermark?url=${img.src}&v=5`}
                                                                    alt={img.alt}
                                                                    fill
                                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                                    className="layout504_image transition-transform duration-500 group-hover:scale-[1.07] select-none"
                                                                    style={{
                                                                        objectFit: 'cover',
                                                                        objectPosition: activeTab.objectPosition || 'center'
                                                                    }}
                                                                    draggable={false}
                                                                    unoptimized
                                                                />
                                                                <div className="absolute inset-0 pointer-events-none rounded-[12px] border border-[#ccc] z-10" />
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {mounted && createPortal(
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9999999] flex items-center justify-center bg-black/90 p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <div
                                className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row max-w-[80vw] max-h-[80vh] shadow-2xl"
                                style={{ width: 'auto' }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="relative flex-1 bg-gray-100 p-6 flex flex-col" style={{ minWidth: '36vw', maxWidth: '45vw', height: '80vh' }}>
                                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                                        <div className="w-full shadow-xl">
                                            <img
                                                src={`/api/watermark?url=${(selectedImage.detailImages && selectedImage.detailImages.length > 0)
                                                    ? selectedImage.detailImages[currentDetailIndex]
                                                    : selectedImage.src}&v=5`}
                                                alt={selectedImage.alt}
                                                className="w-full h-auto block select-none"
                                                onContextMenu={(e) => e.preventDefault()}
                                                draggable={false}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[225px] bg-white flex flex-col border-l border-gray-200">
                                    <div className="p-6 pb-4 flex justify-between items-center bg-white z-10 border-b border-gray-50">
                                        <h3 className="font-bold" style={{ fontSize: '1rem' }}>Select View</h3>
                                        <button onClick={() => setSelectedImage(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-900">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-4 pb-6">
                                        <div className="flex flex-col gap-3">
                                            {(selectedImage.detailImages || [selectedImage.src]).slice(0, 5).map((src: string, idx: number) => (
                                                <div
                                                    key={idx}
                                                    onClick={() => setCurrentDetailIndex(idx)}
                                                    className={`relative aspect-square cursor-pointer rounded-md overflow-hidden transition-all`}
                                                    onContextMenu={(e) => e.preventDefault()}
                                                >
                                                    <Image
                                                        src={`/api/watermark?url=${src}&v=5`}
                                                        alt="thumbnail"
                                                        fill
                                                        style={{ objectFit: 'cover' }}
                                                        draggable={false}
                                                        unoptimized
                                                    />
                                                    <div className={`absolute inset-0 pointer-events-none rounded-md border-2 transition-colors z-10 ${currentDetailIndex === idx ? 'border-black' : 'border-[#ccc]'}`} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
}
