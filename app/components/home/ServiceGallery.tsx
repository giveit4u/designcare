'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServiceGallery() {
    const settings = [
        { title: '브랜딩', subtitle: 'CI, BI / 로고 / 가이드라인', img: '/images/brand-1_1.avif' },
        { title: '인쇄물', subtitle: '포스터 / 명함 / 전단지 / 책자 / X배너 / 사인물', img: '/images/business-card-design.avif' },
        { title: '상세페이지', subtitle: '제품 / 서비스 / 오픈마켓 / 자사몰 / 배너', img: '/images/detail-page_8.webp' },
        { title: 'SNS 광고', subtitle: '카드뉴스 / 썸네일 / 광고배너', img: '/images/SNS-advertising_4.webp' },
        { title: '패키지', subtitle: '단상자 / 포장박스 / 쇼핑백 / 파우치', img: '/images/package-design_2.jpg' },
        { title: '제안서', subtitle: '회사, 서비스, 제품소개서 / 투자제안서 / PPT', img: '/images/proposal.avif' },
        { title: '웹디자인', subtitle: '프로모션 / 이벤트 / 랜딩페이지 / 홈페이지', img: '/images/web-design-13.avif' },
        { title: '웹 / 앱 개발', subtitle: 'UI/UX / 서비스기획 / 웹,앱개발 / 프로그래밍', img: '/images/app-design.png' },
    ];

    return (
        <section id="service" className="section_gallery6">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="gallery6_component">
                            <div className="margin-bottom margin-xxlarge">
                                <div className="text-align-center">
                                    <div className="max-width-large align-center">
                                        <div className="margin-bottom margin-small">
                                            <h2 className="heading-style-h2 text-align-center">디자인케어 서비스</h2>
                                        </div>
                                        <p className="text-size-medium text-align-center">사업에 필요한 각 분야별 전담 디자인 서비스로 경쟁력을 높여 드립니다.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-layout-grid gallery6_grid-list gap-8">
                                <div className="w-layout-grid gallery6_row gap-6">
                                    {settings.slice(0, 4).map((item, index) => (
                                        <motion.a
                                            key={index}
                                            href="#"
                                            className="gallery6_lightbox-link w-inline-block w-lightbox group"
                                            whileHover={{ y: -8 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        >
                                            <div className="gallery6_image-wrapper">
                                                <div className="relative w-full aspect-square rounded-[12px] overflow-hidden mb-4 border border-[#e0e0e0] shadow-sm group-hover:shadow-xl transition-shadow duration-300">
                                                    <Image
                                                        src={item.img}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-black/5 p-4 flex flex-col justify-start">
                                                        <h4 className="heading-style-h4 box bg-white/80 self-start px-3 py-1 rounded-[4px] backdrop-blur-sm">{item.title}</h4>
                                                    </div>
                                                </div>
                                                <p className="paragraph text-[#4b5563] text-sm leading-relaxed">{item.subtitle}</p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                                <div className="w-layout-grid gallery6_row gap-6 mt-8">
                                    {settings.slice(4, 8).map((item, index) => (
                                        <motion.a
                                            key={index + 4}
                                            href="#"
                                            className="gallery6_lightbox-link w-inline-block w-lightbox group"
                                            whileHover={{ y: -8 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        >
                                            <div className="gallery6_image-wrapper">
                                                <div className="relative w-full aspect-square rounded-[12px] overflow-hidden mb-4 border border-[#e0e0e0] shadow-sm group-hover:shadow-xl transition-shadow duration-300">
                                                    <Image
                                                        src={item.img}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-black/5 p-4 flex flex-col justify-start">
                                                        <h4 className="heading-style-h4 box bg-white/80 self-start px-3 py-1 rounded-[4px] backdrop-blur-sm">{item.title}</h4>
                                                    </div>
                                                </div>
                                                <p className="paragraph text-[#4b5563] text-sm leading-relaxed">{item.subtitle}</p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
