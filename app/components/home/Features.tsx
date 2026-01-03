'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Features() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const featureItems = [
        {
            src: "/images/editorial-design-1.avif",
            title: "다양한 서비스를 한번에.!",
            desc: "브랜딩, 홈페이지, 인쇄물 등 다양한 서비스 제공"
        },
        {
            src: "/images/app-design-5.avif",
            title: "품질은 높이고.! 비용은 낮추고.!",
            desc: "비용 절감과 품질향상, 두 마리 토끼를 한번에"
        },
        {
            src: "/images/image-11.avif",
            title: "사용자 중심 맞춤형 디자인.!",
            desc: "귀사의 브랜드에 최적화된 디자인 솔루션 제공"
        }
    ];

    return (
        <section className="section_layout240">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <motion.div
                            className="layout240_component"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-10%" }}
                            variants={containerVariants}
                        >
                            <motion.div className="margin-bottom margin-xxlarge" variants={itemVariants}>
                                <div className="text-align-center">
                                    <div className="max-width-large align-center">
                                        <h2 className="heading-style-h3">사용자 중심 디자인으로 비즈니스 가치를 극대화</h2>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="w-layout-grid layout240_list">
                                {featureItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="layout240_item"
                                        variants={itemVariants}
                                        whileHover={{
                                            y: -8,
                                            transition: { duration: 0.3, ease: "easeOut" }
                                        }}
                                    >
                                        <div className="margin-bottom margin-medium">
                                            <div className="layout240_image-wrapper" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #ccc' }}>
                                                <Image
                                                    src={item.src}
                                                    alt={item.title}
                                                    width={400}
                                                    height={300}
                                                    className="layout240_image transition-transform duration-700 hover:scale-110"
                                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="margin-bottom margin-xsmall">
                                            <h3 className="heading-style-h5">{item.title}</h3>
                                        </div>
                                        <p>{item.desc}</p>
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
