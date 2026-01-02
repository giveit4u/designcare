'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <header className="section_header49">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <motion.div
                            className="header49_component"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="w-layout-grid header49_content">
                                <div className="header49_content-left">
                                    <h1 className="heading-style-h1">디자인케어 소개</h1>
                                </div>
                                <div className="header49_content-right">
                                    <p className="text-size-medium text-[#4b5563]">
                                        디자인케어는 중소기업을 위한 맞춤형 디자인 서비스를 제공합니다. 10년 이상의 경험을 가진 전문가들이 고객의 비즈니스 성공을 위해 최선을 다합니다.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </header>
    );
}
