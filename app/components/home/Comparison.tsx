'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Comparison() {
    return (
        <section className="section_layout12">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="layout12_component">
                            <div className="w-layout-grid layout12_content">
                                <motion.div
                                    className="layout12_content-left"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="margin-bottom margin-small">
                                        <h2 className="heading-style-h3">채용은 부담스러운데...  우리 회사를 위한 전담 디자이너가 있다면?</h2>
                                    </div>
                                    <div className="margin-bottom margin-medium">
                                        <p className="text-size-medium">1명의 디자이너 비용으로 각 파트별 전문 디자인팀을 구독하여, 브랜드 경쟁력을 높이세요.</p>
                                    </div>
                                    <div className="w-layout-grid layout12_item-list">
                                        <div className="layout12_item">
                                            <div className="margin-bottom margin-xsmall">
                                                <div className="layout12_item-icon-wrapper">
                                                    <div className="icon w-embed"><svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3V3ZM20 11H4V19H20V11ZM20 9V5H4V9H20ZM14 15H18V17H14V15Z" fill="currentColor"></path>
                                                    </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="margin-bottom margin-xsmall">
                                                <h3 className="heading-style-h6">비용 절감</h3>
                                            </div>
                                            <p>경력직 디자이너를 직접 채용할 때보다 40% 이상 비용 절감 효과</p>
                                        </div>
                                        <div className="layout12_item">
                                            <div className="margin-bottom margin-xsmall">
                                                <div className="layout12_item-icon-wrapper">
                                                    <div className="icon w-embed"><svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3 19V5.69999C2.99994 5.49471 3.06305 5.29439 3.18077 5.12622C3.29849 4.95806 3.4651 4.83019 3.658 4.75999L13.329 1.24399C13.4045 1.21649 13.4856 1.20762 13.5653 1.21812C13.645 1.22862 13.721 1.25819 13.7869 1.30431C13.8527 1.35043 13.9065 1.41175 13.9436 1.48306C13.9807 1.55438 14 1.63359 14 1.71399V6.66699L20.316 8.77199C20.5152 8.83834 20.6885 8.9657 20.8112 9.13604C20.934 9.30637 21.0001 9.51102 21 9.72099V19H23V21H1V19H3ZM5 19H12V3.85499L5 6.40099V19ZM19 19V10.442L14 8.77499V19H19Z" fill="currentColor"></path>
                                                    </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="margin-bottom margin-xsmall">
                                                <h3 className="heading-style-h6">경쟁력 강화</h3>
                                            </div>
                                            <p className="paragraph-2">경력 10년차 이상 팀장급 디자이너가 직접 담당하여 브랜드 경쟁력을 높이세요.</p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="layout12_image-wrapper"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <Image
                                        src="/images/comparison-main.avif"
                                        alt="Cost comparison chart"
                                        width={600}
                                        height={600}
                                        className="layout12_image"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
