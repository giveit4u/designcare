'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "구독 서비스란 무엇인가요?",
            answer: "구독 서비스는 매달 새로운 디자인을 제공하는 서비스입니다. 고객의 필요에 맞춘 다양한 디자인 솔루션을 제공합니다. 이를 통해 비즈니스의 경쟁력을 높일 수 있습니다."
        },
        {
            question: "어떤 디자인을 제공하나요?",
            answer: "로고, 웹사이트, 인쇄물 등 다양한 디자인 서비스를 제공합니다. 고객의 요구에 맞춰 맞춤형 디자인을 제작합니다. 모든 디자인은 전문 디자이너가 담당합니다."
        },
        {
            question: "구독 비용은 얼마인가요?",
            answer: "구독 비용은 선택한 서비스에 따라 다릅니다. 합리적인 가격으로 다양한 디자인을 이용할 수 있습니다. 자세한 내용은 홈페이지를 통해 확인하실 수 있습니다."
        },
        {
            question: "디자인 수정은 가능한가요?",
            answer: "네, 디자인 수정이 가능합니다. 고객의 피드백을 반영하여 최종 결과물을 완성합니다. 만족할 때까지 수정 작업을 진행합니다."
        },
        {
            question: "서비스 이용 방법은?",
            answer: "홈페이지에서 구독문의를 통해 신청해주세요. 구독 이후 필요한 디자인 요청을 하실 수 있습니다. 간편한 절차로 디자인 서비스를 이용하세요."
        }
    ];

    return (
        <section className="section_faq3">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="faq3_component">
                            <div className="w-layout-grid faq3_content">
                                <div className="faq3_content-left">
                                    <div className="margin-bottom margin-small">
                                        <h2 className="heading-style-h2">자주 묻는 질문</h2>
                                    </div>
                                    <p className="text-size-medium">디자인 구독 서비스에 대한 궁금증을 해결해 드립니다.</p>
                                    <div className="margin-top margin-medium">
                                        <div className="button-group">
                                            <Link href="#inquiry" className="button is-secondary w-button">문의하기</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="faq3_list">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="faq3_accordion border-b border-[#e5e7eb] last:border-0">
                                            <div
                                                className="faq3_question py-6"
                                                onClick={() => toggleAccordion(index)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <div className="text-size-medium text-weight-bold">{faq.question}</div>
                                                <motion.div
                                                    className="faq3_icon-wrapper"
                                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <div className="icon-embed-small w-embed">
                                                        <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z" fill="currentColor"></path>
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
                                                            <p className="text-size-medium">{faq.answer}</p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
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
