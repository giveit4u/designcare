'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <section className="section_layout3">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="layout3_component">
                            <div className="w-layout-grid layout3_content">
                                <motion.div
                                    className="layout3_content-left"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <div className="margin-bottom margin-small">
                                        <h2 className="heading-style-h3">디자인 구독 서비스로 비즈니스 혁신의 새로운 길을 열어보세요</h2>
                                    </div>
                                    <p className="text-size-medium">매달 새로운 디자인으로 귀사의 브랜드를 한층 더 빛나게 합니다. 월 구독으로 손쉽게 비즈니스 혁신을 시작하세요!</p>
                                    <div className="margin-top margin-medium">
                                        <motion.a
                                            href="#contact"
                                            className="button is-secondary w-button"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            지금 시작하기
                                        </motion.a>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="layout3_image-wrapper"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #ccc' }}
                                >
                                    <Image
                                        src="/images/benefits_meeting.avif"
                                        alt="Design Subscription"
                                        width={800}
                                        height={600}
                                        className="layout3_image"
                                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
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
