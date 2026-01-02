'use client';
import { useState } from 'react';

export default function Pricing() {
    const [activeTab, setActiveTab] = useState('Tab 1'); // Tab 1 = 1개월, Tab 2 = 3개월

    return (
        <section id="price" className="section_pricing25">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="pricing25_component">
                            <div className="margin-bottom margin-xxlarge">
                                <div className="text-align-center">
                                    <div className="max-width-large align-center">
                                        <div className="margin-bottom margin-small">
                                            <h2 className="heading-style-h2 text-align-center">구독료</h2>
                                        </div>
                                        <p className="text-size-medium text-align-center">당신의 비즈니스에 맞는 최적의 디자인 구독 서비스</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pricing25_tabs w-tabs">
                                <div className="tabs-menu w-tab-menu">
                                    <a onClick={() => setActiveTab('Tab 1')} className={`tab-link w-inline-block w-tab-link ${activeTab === 'Tab 1' ? 'w--current' : ''}`}>
                                        <div>1개월</div>
                                    </a>
                                    <a onClick={() => setActiveTab('Tab 2')} className={`tab-link w-inline-block w-tab-link ${activeTab === 'Tab 2' ? 'w--current' : ''}`}>
                                        <div>3개월</div>
                                    </a>
                                </div>

                                <div className="w-tab-content">

                                    {/* Tab 1 Content: 1 Month */}
                                    <div className={`pricing25_tab-pane w-tab-pane ${activeTab === 'Tab 1' ? 'w--tab-active' : ''}`}>
                                        <div className="w-layout-grid pricing25_plans">

                                            {/* Starter Plan */}
                                            <div className="pricing25_plan">
                                                <div className="margin-bottom margin-tiny">
                                                    <div className="heading-style-h4">Starter</div>
                                                </div>
                                                <div>다양한 디자인과 빠른 실행을 원하는 기업</div>
                                                <div className="margin-vertical margin-medium"><div className="divider-horizontal"></div></div>
                                                <div className="heading-style-h1">198<span className="text-span-12">만원</span><span className="text-span-6">/월</span></div>
                                                <div className="margin-top margin-medium">
                                                    <a href="#inquiry" className="button w-button">구독문의</a>
                                                </div>
                                                <div className="margin-vertical margin-medium"><div className="divider-horizontal"></div></div>
                                                <div className="pricing25_feature-list">
                                                    {/* Simplified feature items for brevity, assuming standard check icon */}
                                                    <div className="pricing25_feature"><div>SNS 광고 이미지</div></div>
                                                    <div className="pricing25_feature"><div>상세페이지</div></div>
                                                    <div className="pricing25_feature"><div>이벤트 배너</div></div>
                                                </div>
                                            </div>

                                            {/* Basic Plan */}
                                            <div className="pricing25_plan">
                                                <div className="margin-bottom margin-tiny">
                                                    <div className="heading-style-h4">Basic</div>
                                                </div>
                                                <div>사업 확장을 위해 섬세한 디자인 작업이 필요한 기업</div>
                                                <div className="margin-vertical margin-medium"><div className="divider-horizontal"></div></div>
                                                <div className="heading-style-h1">275<span className="text-span-13">만원</span><span className="text-span-5">/월</span></div>
                                                <div className="margin-top margin-medium">
                                                    <a href="#inquiry" className="button w-button">구독문의</a>
                                                </div>
                                                <div className="margin-vertical margin-medium"><div className="divider-horizontal"></div></div>
                                                <div className="pricing25_feature-list">
                                                    <div className="pricing25_feature"><div>스타터 제공 항목</div></div>
                                                    <div className="pricing25_feature"><div>렌딩페이지</div></div>
                                                    <div className="pricing25_feature"><div>패키지 디자인</div></div>
                                                    <div className="pricing25_feature"><div>출력물 / 편집디자인</div></div>
                                                </div>
                                            </div>

                                            {/* Pro Plan */}
                                            <div className="pricing25_plan">
                                                <div className="margin-bottom margin-tiny">
                                                    <div className="heading-style-h4">Pro</div>
                                                </div>
                                                <div>전문 디자인팀으로 탄탄한 브랜딩을 원하시는 기업</div>
                                                <div className="margin-vertical margin-medium"><div className="divider-horizontal"></div></div>
                                                <div className="heading-style-h1">352<span className="text-span-14">만원</span><span className="text-span-4">/월</span></div>
                                                <div className="margin-top margin-medium">
                                                    <a href="#inquiry" className="button w-button">구독문의</a>
                                                </div>
                                                <div className="margin-vertical margin-medium"><div className="divider-horizontal"></div></div>
                                                <div className="pricing25_feature-list">
                                                    <div className="pricing25_feature"><div>베이직 제공 항목</div></div>
                                                    <div className="pricing25_feature"><div>브랜딩</div></div>
                                                    <div className="pricing25_feature"><div>홈페이지 제작</div></div>
                                                    <div className="pricing25_feature"><div>UI/UX, 서비스 기획</div></div>
                                                    <div className="pricing25_feature"><div>Wab, App 개발 / AI 업무자동화 구축</div></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Tab 2 Content: 3 Months */}
                                    <div className={`pricing25_tab-pane w-tab-pane ${activeTab === 'Tab 2' ? 'w--tab-active' : ''}`}>
                                        <div className="w-layout-grid pricing25_plans">
                                            {/* Starter Plan 3 Months */}
                                            <div className="pricing25_plan">
                                                <div className="margin-bottom margin-tiny"><div className="heading-style-h4">Starter</div></div>
                                                <div>다양한 디자인과 빠른 실행을 원하는 기업</div>
                                                <div className="margin-vertical margin-medium"><div className="divider-horizontal"></div></div>
                                                <div className="margin-bottom margin-xxsmall"><div className="heading-style-h1">534<span className="text-span-8">만원</span><span className="text-span-9">/3개월</span></div></div>
                                                <div className="text-weight-medium">Save 10%</div>
                                                <div className="margin-top margin-medium"><a href="#inquiry" className="button w-button">구독문의</a></div>
                                                <div className="margin-vertical margin-medium"><div className="divider-horizontal"></div></div>
                                                <div className="pricing25_feature-list">
                                                    <div className="pricing25_feature"><div>SNS 광고 이미지</div></div>
                                                    <div className="pricing25_feature"><div>상세페이지</div></div>
                                                    <div className="pricing25_feature"><div>이벤트 배너</div></div>
                                                </div>
                                            </div>

                                            {/* Basic Plan 3 Months */}
                                            <div className="pricing25_plan">
                                                <div className="margin-bottom margin-tiny"><div className="heading-style-h4">Basic</div></div>
                                                <div>사업 확장을 위해 다양한 디자인 작업이 필요한 기업</div>
                                                <div className="margin-vertical margin-medium"><div className="divider-horizontal"></div></div>
                                                <div className="margin-bottom margin-xxsmall"><div className="heading-style-h1">742<span className="text-span-10">만원</span><span className="text-span-7">/3개월</span></div></div>
                                                <div className="text-weight-medium">Save 10%</div>
                                                <div className="margin-top margin-medium"><a href="#inquiry" className="button w-button">구독문의</a></div>
                                                <div className="margin-vertical margin-medium"><div className="divider-horizontal"></div></div>
                                                <div className="pricing25_feature-list">
                                                    <div className="pricing25_feature"><div>스타터 제공 항목</div></div>
                                                    <div className="pricing25_feature"><div>렌딩페이지</div></div>
                                                    <div className="pricing25_feature"><div>패키지 디자인</div></div>
                                                    <div className="pricing25_feature"><div>출력물 / 편집디자인</div></div>
                                                </div>
                                            </div>

                                            {/* Pro Plan 3 Months */}
                                            <div className="pricing25_plan">
                                                <div className="margin-bottom margin-tiny"><div className="heading-style-h4">Pro</div></div>
                                                <div>전문 디자인팀으로 탄탄한 브랜딩을 원하는 기업</div>
                                                <div className="margin-vertical margin-medium"><div className="divider-horizontal"></div></div>
                                                <div className="margin-bottom margin-xxsmall"><div className="heading-style-h1">950<span className="text-span-11">만원</span><span className="text-span-7">/3개월</span></div></div>
                                                <div className="text-weight-medium">Save 10%</div>
                                                <div className="margin-top margin-medium"><a href="#inquiry" className="button w-button">구독문의</a></div>
                                                <div className="margin-vertical margin-medium"><div className="divider-horizontal"></div></div>
                                                <div className="pricing25_feature-list">
                                                    <div className="pricing25_feature"><div>베이직 제공 항목</div></div>
                                                    <div className="pricing25_feature"><div>브랜딩</div></div>
                                                    <div className="pricing25_feature"><div>홈페이지 제작</div></div>
                                                    <div className="pricing25_feature"><div>UI/UX, 서비스 기획</div></div>
                                                    <div className="pricing25_feature"><div>Web, App 개발 / AI 업무자동화 구축</div></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
