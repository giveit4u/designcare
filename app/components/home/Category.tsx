'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Tab Data Structure
type Tab = {
    id: number;
    label: string;
    subtitle: string;
    sizeClass?: string;
    // Pre-calculated dimensions ensuring pixel-perfect match with Webflow CSS rules
    dimensions: { width: string; height: string };
    objectPosition?: string; // Add optional objectPosition
    paddingTop?: string; // Add optional paddingTop
    images: { src: string; alt: string; width?: number; height?: number }[];
};

const TABS: Tab[] = [
    {
        id: 1,
        label: '브랜딩',
        subtitle: 'CI, BI / 로고 / 가이드라인',
        sizeClass: '', // Default: width 26rem, padding-top 75% -> 19.5rem height
        dimensions: { width: '26rem', height: '19.5rem' },
        images: [
            { src: '/images/Branding-01_b.webp', alt: 'branding & Logo Design' },
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
        dimensions: { width: '20rem', height: '32rem' },
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
        dimensions: { width: '20rem', height: '32rem' },
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
        dimensions: { width: '26rem', height: '26rem' },
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
        dimensions: { width: '26rem', height: '26rem' },
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
        dimensions: { width: '34rem', height: '19.7rem' },
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
        dimensions: { width: '20rem', height: '32rem' },
        objectPosition: '50% 0%', // Set object position to top center
        images: [
            { src: '/images/webdesign-001.avif', alt: 'web design portfolio 1' },
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
        dimensions: { width: '32rem', height: '18.24rem' }, // 32rem * 0.57 (padding-top) = 18.24rem
        objectPosition: '50% 0%', // Also likely useful for apps
        images: [
            { src: '/images/Web_App-01.webp', alt: 'app design portfolio 1' },
            { src: '/images/Web_App-02.webp', alt: 'app design portfolio 2' },
            { src: '/images/Web_App-03.avif', alt: 'app design portfolio 3' },
            { src: '/images/Web_App-04.avif', alt: 'app design portfolio 4' },
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
        sizeClass: '', // Same as Branding
        dimensions: { width: '26rem', height: '19.5rem' },
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

    const activeTab = TABS.find(tab => tab.id === activeTabId) || TABS[0];

    // Dynamic duration calculation: 40s for ~12 images -> ~3.5s per image
    // This ensures consistent visual speed regardless of image count
    const marqueeDuration = activeTab.images.length * 3.5;

    return (
        <section id="service" className="section_layout504">
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
                                            onClick={() => setActiveTabId(tab.id)}
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
                                                {/* Marquee Wrapper: Replaces 'layout504_image-list-top' grid with Flex for animation */}
                                                <div
                                                    className="layout504_image-list-top"
                                                    style={{
                                                        overflow: 'hidden',
                                                        width: '100%',
                                                    }}
                                                >
                                                    <motion.div
                                                        style={{
                                                            display: 'flex',
                                                            width: 'max-content',
                                                        }}
                                                        animate={{ x: ["0%", "-50%"] }}
                                                        transition={{
                                                            duration: marqueeDuration,
                                                            ease: "linear",
                                                            repeat: Infinity,
                                                        }}
                                                        key={activeTab.id} // Reset animation on tab change
                                                    >
                                                        {/* Duplicate list for smooth seamless loop - flattened for perfect timing */}
                                                        {[...activeTab.images, ...activeTab.images].map((img, index) => (
                                                            <div
                                                                key={`${activeTab.id}-${index}`}
                                                                className={`layout504_image-wrapper ${activeTab.sizeClass || ''}`}
                                                                style={{
                                                                    flexShrink: 0,
                                                                    position: 'relative',
                                                                    width: activeTab.dimensions.width,
                                                                    height: activeTab.dimensions.height,
                                                                    paddingTop: '0',
                                                                    marginRight: '1rem',
                                                                    overflow: 'hidden',
                                                                    borderRadius: '9px',
                                                                    border: '1px solid var(--base-color-neutral--neutral-lighter-200)'
                                                                }}
                                                            >
                                                                <Image
                                                                    src={img.src}
                                                                    alt={img.alt}
                                                                    fill
                                                                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 26rem, 26rem"
                                                                    className="layout504_image transition-transform duration-500 hover:scale-[1.07]"
                                                                    style={{
                                                                        objectFit: 'cover',
                                                                        objectPosition: activeTab.objectPosition || 'center',
                                                                        borderRadius: '0',
                                                                        border: 'none'
                                                                    }}
                                                                />
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
        </section>
    );
}
