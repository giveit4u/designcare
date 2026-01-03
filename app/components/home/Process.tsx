'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Process() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const steps = [
        {
            num: "1",
            title: "서비스 선택",
            desc: "메신저 상담을 통해 이용하고자 하는 서비스를 선택합니다.",
            src: "/images/다양한-작업-이미지-2.png"
        },
        {
            num: "2",
            title: "요청 가이드 안내",
            desc: "메신저로 디자인 프로세스와 정확한 업무 파악을 위해 요구되는 질의사항을 안내합니다.",
            src: "/images/web-design-17_1.avif"
        },
        {
            num: "3",
            title: "전문가와의 상담",
            desc: "디자인 요구 사항을 전문가와 함께 논의하여 맞춤형 솔루션을 제공합니다.",
            src: "/images/Meeting-spaces.avif"
        },
        {
            num: "4",
            title: "디자인 제작 및 피드백",
            desc: "제작된 디자인을 검토하고 필요한 수정 요청을 할 수 있습니다.",
            src: "/images/67d6ed9cf53741a3703c9e5e_ff8c6fd3-0233-4167-a1c2-89d9bf975fb1.avif"
        }
    ];

    return (
        <section id="process" className="section_layout297">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <motion.div
                            className="margin-bottom margin-xxlarge"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="max-width-large">
                                <div className="margin-bottom margin-small">
                                    <h2 className="heading-style-h2">서비스 이용 방법</h2>
                                </div>
                                <p className="text-size-medium">한번에 한가지씩 필요한 디자인 프로젝트를 요청할 수 있습니다.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="layout297_component"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-10%" }}
                            variants={containerVariants}
                        >
                            <div className="w-layout-grid layout297_list">
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        className="layout297_item"
                                        variants={itemVariants}

                                    >
                                        <div className="margin-bottom margin-small">
                                            <div className="layout297_image-wrapper" style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #ccc' }}>
                                                <Image
                                                    src={step.src}
                                                    alt={step.title}
                                                    width={960}
                                                    height={600}
                                                    className="layout297_image hover:scale-105 transition-transform duration-700"
                                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="margin-bottom margin-xsmall">
                                            <h3 className="heading-style-h5">{step.num}. {step.title}</h3>
                                        </div>
                                        <p>{step.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
