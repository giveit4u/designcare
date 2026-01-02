'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Benefits() {
    return (
        <section className="section_layout10">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="layout10_component">
                            <div className="w-layout-grid layout10_content">
                                <motion.div
                                    className="layout10_content-left"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="margin-bottom margin-small">
                                        <h2 className="heading-style-h3">디자인케어,  브랜드 성장을 위한 필수선택</h2>
                                    </div>
                                    <div className="margin-bottom margin-medium">
                                        <p className="text-size-medium">디자인케어는 귀사의 브랜드와 사업 목표에 완벽하게 맞는 디자인을 제공해 드립니다.</p>
                                    </div>
                                    <div className="w-layout-grid layout10_item-list">
                                        <div className="layout10_item">
                                            <div className="margin-bottom margin-xsmall">
                                                <div className="layout10_item-icon-wrapper">
                                                    <div className="icon w-embed"><svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14 14.252V16.342C13.0949 16.022 12.1263 15.9239 11.1754 16.0558C10.2245 16.1877 9.3192 16.5459 8.53543 17.1002C7.75166 17.6545 7.11234 18.3888 6.67116 19.2414C6.22998 20.094 5.99982 21.04 6 22L4 21.999C3.99969 20.7779 4.27892 19.5729 4.8163 18.4764C5.35368 17.3799 6.13494 16.4209 7.10022 15.673C8.0655 14.9251 9.18918 14.4081 10.3852 14.1616C11.5811 13.9152 12.8177 13.9457 14 14.251V14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z" fill="currentColor"></path>
                                                    </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="margin-bottom margin-xsmall">
                                                <h3 className="heading-style-h6">창의적인 파트너</h3>
                                            </div>
                                            <p>복잡한 계약 없이, 귀사의 사업 성과를 향상시키는 맞춤형 디자인 솔루션을 제공합니다</p>
                                        </div>
                                        <div className="layout10_item">
                                            <div className="margin-bottom margin-xsmall">
                                                <div className="layout10_item-icon-wrapper">
                                                    <div className="icon w-embed"><svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21 20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20ZM11 5H5V19H11V5ZM19 13H13V19H19V13ZM19 5H13V11H19V5Z" fill="currentColor"></path>
                                                    </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="margin-bottom margin-xsmall">
                                                <h3 className="heading-style-h6">일관된 디자인</h3>
                                            </div>
                                            <p className="paragraph-2">일관성이 없는 외주와 달리 구독서비스는 전담 디자이너를 통해 해당 브랜드의 일관된 최상의 결과물을 보장합니다.</p>
                                        </div>
                                    </div>
                                    <div className="margin-top margin-medium">
                                        <div className="button-group">
                                            <a href="#inquiry" className="button is-link is-icon w-inline-block">
                                                <div>문의하기</div>
                                                <div className="icon-embed-xxsmall w-embed"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5"></path></svg></div>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="layout10_image-wrapper"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <Image
                                        src="/images/benefits_meeting.avif"
                                        alt="Design Care Benefits"
                                        width={600}
                                        height={600}
                                        className="layout10_image"
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
