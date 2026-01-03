'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type PricingPlan = {
    name: string;
    desc: string;
    price: string;
    period: string;
    features: string[];
    popular?: boolean;
    save?: string;
};

export default function Pricing() {
    const [activeTab, setActiveTab] = useState('Tab 1'); // Tab 1 = 1개월, Tab 2 = 3개월

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const tabContentVariants = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
    };

    const pricingData: Record<string, PricingPlan[]> = {
        'Tab 1': [
            {
                name: 'Starter',
                desc: '다양한 디자인과 빠른 실행을 원하는 기업',
                price: '198',
                period: '/월',
                features: ['SNS 광고 이미지', '상세페이지', '이벤트 배너']
            },
            {
                name: 'Basic',
                desc: '사업 확장을 위해 섬세한 디자인 작업이 필요한 기업',
                price: '275',
                period: '/월',
                features: ['스타터 제공 항목', '렌딩페이지', '패키지 디자인', '출력물 / 편집디자인'],
                popular: true
            },
            {
                name: 'Pro',
                desc: '전문 디자인팀으로 탄탄한 브랜딩을 원하시는 기업',
                price: '352',
                period: '/월',
                features: ['베이직 제공 항목', '브랜딩', '홈페이지 제작', 'UI/UX, 서비스 기획', 'Web, App 개발 / AI 업무자동화']
            }
        ],
        'Tab 2': [
            {
                name: 'Starter',
                desc: '다양한 디자인과 빠른 실행을 원하는 기업',
                price: '534',
                period: '/3개월',
                save: 'Save 10%',
                features: ['SNS 광고 이미지', '상세페이지', '이벤트 배너']
            },
            {
                name: 'Basic',
                desc: '사업 확장을 위해 섬세한 디자인 작업이 필요한 기업',
                price: '742',
                period: '/3개월',
                save: 'Save 10%',
                features: ['스타터 제공 항목', '렌딩페이지', '패키지 디자인', '출력물 / 편집디자인'],
                popular: true
            },
            {
                name: 'Pro',
                desc: '전문 디자인팀으로 탄탄한 브랜딩을 원하시는 기업',
                price: '950',
                period: '/3개월',
                save: 'Save 10%',
                features: ['베이직 제공 항목', '브랜딩', '홈페이지 제작', 'UI/UX, 서비스 기획', 'Web, App 개발 / AI 업무자동화']
            }
        ]
    };

    return (
        <section id="price" className="section_pricing25">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="pricing25_component">
                            <motion.div
                                className="margin-bottom margin-xxlarge"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="text-align-center">
                                    <div className="max-width-large align-center">
                                        <div className="margin-bottom margin-small">
                                            <h2 className="heading-style-h2 text-align-center">구독료</h2>
                                        </div>
                                        <p className="text-size-medium text-align-center">당신의 비즈니스에 맞는 최적의 디자인 구독 서비스</p>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="pricing25_tabs w-tabs">
                                <div className="tabs-menu w-tab-menu">
                                    <a onClick={() => setActiveTab('Tab 1')} className={`tab-link w-inline-block w-tab-link ${activeTab === 'Tab 1' ? 'w--current' : ''}`} style={{ cursor: 'pointer' }}>
                                        <div>1개월</div>
                                    </a>
                                    <a onClick={() => setActiveTab('Tab 2')} className={`tab-link w-inline-block w-tab-link ${activeTab === 'Tab 2' ? 'w--current' : ''}`} style={{ cursor: 'pointer' }}>
                                        <div>3개월</div>
                                    </a>
                                </div>

                                <div className="w-tab-content" style={{ position: 'relative', overflow: 'visible' }}>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            variants={tabContentVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            transition={{ duration: 0.3 }}
                                            className="pricing25_tab-pane w-tab-pane w--tab-active"
                                            style={{ padding: '30px 0', overflow: 'visible' }} // Reduced padding
                                        >
                                            <motion.div
                                                className="w-layout-grid pricing25_plans"
                                                variants={containerVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                style={{ overflow: 'visible', paddingTop: '10px' }} // Tighter top space
                                            >
                                                {pricingData[activeTab].map((plan, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        className={`pricing25_plan ${plan.popular ? 'is-popular' : ''}`}
                                                        variants={cardVariants}
                                                        whileHover={{ y: -10 }}
                                                        style={{
                                                            position: 'relative',
                                                            border: plan.popular ? '2px solid black' : '1px solid #ccc',
                                                            borderRadius: '24px',
                                                            padding: '3rem 2rem 2rem 2rem', // Slightly reduced top padding
                                                            backgroundColor: 'white',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            overflow: 'visible'
                                                        }}
                                                    >
                                                        {plan.popular && (
                                                            <div style={{
                                                                position: 'absolute',
                                                                top: '-16px',
                                                                left: '50%',
                                                                transform: 'translateX(-50%)',
                                                                backgroundColor: 'black',
                                                                color: 'white',
                                                                padding: '6px 16px',
                                                                borderRadius: '20px',
                                                                fontSize: '0.75rem',
                                                                fontWeight: 'bold',
                                                                textTransform: 'uppercase',
                                                                zIndex: 10
                                                            }}>
                                                                Most Popular
                                                            </div>
                                                        )}
                                                        <div className="margin-bottom margin-tiny">
                                                            <div className="heading-style-h4">{plan.name}</div>
                                                        </div>
                                                        <div style={{ minHeight: '3em' }}>{plan.desc}</div>
                                                        <div className="margin-vertical margin-medium">
                                                            <div className="divider-horizontal"></div>
                                                        </div>
                                                        <div className="heading-style-h1">
                                                            {plan.price}<span style={{ fontSize: '1.5rem', fontWeight: 600 }}>만원</span>
                                                            <span style={{ fontSize: '1rem', color: '#666', fontWeight: 400 }}>{plan.period}</span>
                                                        </div>
                                                        {plan.save && (
                                                            <div className="text-weight-medium" style={{ color: '#2ecc71', marginTop: '0.4rem' }}>{plan.save}</div>
                                                        )}
                                                        <div className="margin-top margin-medium">
                                                            <motion.a
                                                                href="#inquiry"
                                                                className={`button w-button ${plan.popular ? '' : 'is-secondary'}`}
                                                                whileHover={{ scale: 1.02 }}
                                                                whileTap={{ scale: 0.98 }}
                                                                style={{ width: '100%', textAlign: 'center' }}
                                                            >
                                                                구독문의
                                                            </motion.a>
                                                        </div>
                                                        <div className="margin-vertical margin-medium">
                                                            <div className="divider-horizontal" style={{ opacity: 0.5 }}></div>
                                                        </div>
                                                        <div className="pricing25_feature-list">
                                                            {plan.features.map((feature, fIdx) => (
                                                                <div key={fIdx} className="pricing25_feature" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#068A32', flexShrink: 0 }}>
                                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                                    </svg>
                                                                    <div style={{ fontSize: '0.95rem', color: '#333' }}>{feature}</div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
