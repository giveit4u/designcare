'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const faqs = [
        {
            question: "구독 서비스란 무엇인가요?",
            answer: "구독 서비스는 매달 새로운 디자인을 제공하는 서비스입니다. 고객의 필요에 맞춘 다양한 디자인 솔루션을 제공합니다. 이를 통해 비즈니스와의 지속적인 파트너십을 구축할 수 있습니다."
        },
        {
            question: "어떤 디자인을 제공하나요?",
            answer: "로고, 웹사이트, 인쇄물 등 다양한 디자인 서비스를 제공합니다. 고객의 요구에 맞춰 맞춤형 디자인을 제작합니다. 모든 디자인은 전문 디자인 팀이 직접 작업합니다."
        },
        {
            question: "구독 비용은 얼마인가요?",
            answer: "구독 비용은 스타터부터 프로 단계까지 다양하게 준비되어 있습니다. 귀사의 규모와 필요 리소스를 상담하시면 최적의 플랜을 추천해 드립니다."
        },
        {
            question: "디자인 수정은 가능한가요?",
            answer: "네, 무제한에 가까운 수정 요청이 가능합니다. 고객의 최종 만족도가 저희의 제작 목표입니다."
        },
        {
            question: "서비스 시작 방법은?",
            answer: "홈페이지의 '구독문의' 버튼을 통해 신청하거나 카카오톡 상담을 통해 바로 시작하실 수 있습니다."
        }
    ];

    return (
        <section className="section_faq3">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="faq3_component">
                            <div className="w-layout-grid faq3_content">
                                <motion.div
                                    className="faq3_content-left"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <div className="margin-bottom margin-small">
                                        <h2 className="heading-style-h2">자주 묻는 질문</h2>
                                    </div>
                                    <p className="text-size-medium">디자인 구독 서비스에 대한 궁금증을 해결해 드립니다.</p>
                                    <div className="margin-top margin-medium">
                                        <div className="button-group">
                                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                <Link href="#contact" className="button is-secondary w-button">문의하기</Link>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="faq3_list"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={containerVariants}
                                >
                                    {faqs.map((faq, index) => (
                                        <motion.div
                                            key={index}
                                            className="faq3_accordion border-b border-[#e5e7eb] last:border-0"
                                            variants={itemVariants}
                                        >
                                            <div
                                                className="faq3_question py-6 flex justify-between items-center group"
                                                onClick={() => toggleAccordion(index)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <div className={`text-size-medium text-weight-bold transition-colors duration-300 ${activeIndex === index ? 'text-black' : 'text-gray-600 group-hover:text-black'}`}>
                                                    {faq.question}
                                                </div>
                                                <motion.div
                                                    className="faq3_icon-wrapper"
                                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <div className="icon-embed-small w-embed">
                                                        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L16 20.3536L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z" fill="currentColor"></path>
                                                        </svg>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <AnimatePresence>
                                                {activeIndex === index && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        className="faq3_answer overflow-hidden"
                                                    >
                                                        <div className="pb-6">
                                                            <p className="text-size-medium text-gray-700 leading-relaxed">{faq.answer}</p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
