'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ServiceTabs() {
    const [activeTab, setActiveTab] = useState('Tab 1');

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    return (
        <header id="category" className="section_layout504">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large single-padding">
                        <div className="layout504_component">
                            <div className="margin-bottom margin-xxlarge">
                                <div className="text-align-center">
                                    <div className="max-width-large align-center">
                                        <div className="margin-bottom margin-small">
                                            <h2 className="heading-style-h2 text-align-center">브랜드 성장을 위한 디자인 케어 서비스</h2>
                                        </div>
                                        <p className="text-size-medium text-align-center">중소기업을 위한 맞춤형 디자인케어 서비스는 다양하고 고품질 디자인으로 비즈니스 성장을 지원합니다.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="layout504_tabs w-tabs">
                                <div className="layout504_tabs-menu no-scrollbar w-tab-menu">
                                    {['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5', 'Tab 6', 'Tab 7', 'Tab 8', 'Tab 9'].map((tab, index) => {
                                        const labels = ['브랜딩', '인쇄물', '상세페이지', 'SNS 광고', '패키지', '제안서', '웹디자인', '웹 / 앱개발', '인테리어'];
                                        return (
                                            <a
                                                key={tab}
                                                onClick={() => handleTabClick(tab)}
                                                className={`layout504_tab-link w-inline-block w-tab-link ${activeTab === tab ? 'w--current' : ''}`}
                                            >
                                                <div>{labels[index]}</div>
                                            </a>
                                        );
                                    })}
                                </div>
                                <div className="layout504_tabs-content w-tab-content">

                                    {/* Tab 1: 브랜딩 */}
                                    <div className={`layout504_tab-pane w-tab-pane ${activeTab === 'Tab 1' ? 'w--tab-active' : ''}`}>
                                        <p className="text-size-small text-align-center">CI, BI / 로고 / 가이드라인</p>
                                        <div className="layout504_content-bottom">
                                            <div className="layout504_images-layout">
                                                <div className="layout504_image-list-top">
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper">
                                                            <Image src="/images/business-card-design.webp" fill alt="business card design" className="layout504_image" />
                                                        </div>
                                                        <div className="layout504_image-wrapper">
                                                            <Image src="/images/kreta_1.avif" fill alt="branding & Logo Design" className="layout504_image" />
                                                        </div>
                                                        <div className="layout504_image-wrapper">
                                                            <Image src="/images/EIN_1.avif" fill alt="branding & Logo Design" className="layout504_image" />
                                                        </div>
                                                        <div className="layout504_image-wrapper">
                                                            <Image src="/images/sungjin_1.avif" fill alt="branding & Logo Design" className="layout504_image" />
                                                        </div>
                                                        <div className="layout504_image-wrapper">
                                                            <Image src="/images/F-plus_1.avif" fill alt="branding & Logo Design" className="layout504_image" />
                                                        </div>
                                                        <div className="layout504_image-wrapper">
                                                            <Image src="/images/아빠자리_1.avif" fill alt="branding & Logo Design" className="layout504_image" />
                                                        </div>
                                                    </div>
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper">
                                                            <Image src="/images/포레스트.png" fill alt="branding & Logo Design" className="layout504_image" />
                                                        </div>
                                                        <div className="layout504_image-wrapper">
                                                            <Image src="/images/바로.png" fill alt="branding & Logo Design" className="layout504_image" />
                                                        </div>
                                                        <div className="layout504_image-wrapper">
                                                            <Image src="/images/라잇나우_1.avif" fill alt="branding & Logo Design" className="layout504_image" />
                                                        </div>
                                                        <div className="layout504_image-wrapper">
                                                            <Image src="/images/텍사스고릴라_1.avif" fill alt="branding & Logo Design" className="layout504_image" />
                                                        </div>
                                                        <div className="layout504_image-wrapper">
                                                            <Image src="/images/직페이.png" fill alt="branding & Logo Design" className="layout504_image" />
                                                        </div>
                                                        <div className="layout504_image-wrapper">
                                                            <Image src="/images/logo-13.png" fill alt="branding" className="layout504_image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tab 2: 인쇄물 */}
                                    <div className={`layout504_tab-pane w-tab-pane ${activeTab === 'Tab 2' ? 'w--tab-active' : ''}`}>
                                        <p className="text-size-small text-align-center">포스터 / 명함 / 전단지 / 책자 / 리플렛 / X배너 / 플랜카드 / 사인물</p>
                                        <div className="layout504_content-bottom">
                                            <div className="layout504_images-layout">
                                                <div className="layout504_image-list-top">
                                                    {/* Simplified for brevity (representative images) */}
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper _20x32">
                                                            <Image src="/images/detail-page.jpg" fill alt="detail page" className="layout504_image" />
                                                        </div>
                                                        <div className="layout504_image-wrapper _20x32">
                                                            <Image src="/images/detail-page_2.jpg" fill alt="detail page" className="layout504_image" />
                                                        </div>
                                                        <div className="layout504_image-wrapper _20x32">
                                                            <Image src="/images/business-card-design.avif" fill alt="business card design" className="layout504_image" />
                                                        </div>
                                                        <div className="layout504_image-wrapper _20x32">
                                                            <Image src="/images/business-card-design-.avif" fill alt="business card design" className="layout504_image" />
                                                        </div>
                                                    </div>
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper _20x32">
                                                            <Image src="/images/leaflet-design.avif" fill alt="leaflet design" className="layout504_image" />
                                                        </div>
                                                        <div className="layout504_image-wrapper _20x32">
                                                            <Image src="/images/editorial-design.avif" fill alt="editorial design" className="layout504_image" />
                                                        </div>
                                                        <div className="layout504_image-wrapper _20x32">
                                                            <Image src="/images/SNS-advertising_2.webp" fill alt="SNS advertising" className="layout504_image" />
                                                        </div>
                                                        <div className="layout504_image-wrapper _20x32">
                                                            <Image src="/images/SNS-advertising_3.webp" fill alt="SNS advertising" className="layout504_image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tab 3: 상세페이지 */}
                                    <div className={`layout504_tab-pane w-tab-pane ${activeTab === 'Tab 3' ? 'w--tab-active' : ''}`}>
                                        <p className="text-size-small text-align-center">제품 / 서비스 / 오픈마켓 / 자사몰 / 배너</p>
                                        <div className="layout504_content-bottom">
                                            <div className="layout504_images-layout">
                                                <div className="layout504_image-list-top">
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper _20x32"><Image src="/images/SNS-advertising.webp" fill alt="SNS" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _20x32"><Image src="/images/상세-1_1.avif" fill alt="detail" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _20x32"><Image src="/images/detail-page_9.webp" fill alt="detail" className="layout504_image" /></div>
                                                    </div>
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper _20x32"><Image src="/images/detail-page_1.webp" fill alt="detail" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _20x32"><Image src="/images/detail-page_3.webp" fill alt="detail" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _20x32"><Image src="/images/detail-page_2.webp" fill alt="detail" className="layout504_image" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tab 4: SNS 광고 */}
                                    <div className={`layout504_tab-pane w-tab-pane ${activeTab === 'Tab 4' ? 'w--tab-active' : ''}`}>
                                        <p className="text-size-small text-align-center">카드뉴스 / 썸네일 / 광고배너</p>
                                        <div className="layout504_content-bottom">
                                            <div className="layout504_images-layout">
                                                <div className="layout504_image-list-top">
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper _26x26"><Image src="/images/1600w-7i9zs4XT9ww.webp" fill alt="SNS" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _26x26"><Image src="/images/SNS-advertising_8.webp" fill alt="SNS" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _26x26"><Image src="/images/SNS-advertising_4.webp" fill alt="SNS" className="layout504_image" /></div>
                                                    </div>
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper _26x26"><Image src="/images/SNS-advertising.jpg" fill alt="SNS" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _26x26"><Image src="/images/SNS-advertising_10.webp" fill alt="SNS" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _26x26"><Image src="/images/SNS-advertising_9.webp" fill alt="SNS" className="layout504_image" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tab 5: 패키지 */}
                                    <div className={`layout504_tab-pane w-tab-pane ${activeTab === 'Tab 5' ? 'w--tab-active' : ''}`}>
                                        <p className="text-size-small text-align-center">단상자 / 포장박스 / 쇼핑백 / 파우치</p>
                                        <div className="layout504_content-bottom">
                                            <div className="layout504_images-layout">
                                                <div className="layout504_image-list-top">
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper _26x26"><Image src="/images/package-design_1.jpg" fill alt="package" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _26x26"><Image src="/images/package-design_4.jpg" fill alt="package" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _26x26"><Image src="/images/package-design_5.jpg" fill alt="package" className="layout504_image" /></div>
                                                    </div>
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper _26x26"><Image src="/images/package-design_3.jpg" fill alt="package" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _26x26"><Image src="/images/package-design_8.jpg" fill alt="package" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _26x26"><Image src="/images/package-design_10.jpg" fill alt="package" className="layout504_image" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tab 6: 제안서 */}
                                    <div className={`layout504_tab-pane w-tab-pane ${activeTab === 'Tab 6' ? 'w--tab-active' : ''}`}>
                                        <p className="text-size-small text-align-center">회사소개서 / 서비스(제품) 소개서 / 투자제안서 / PPT디자인</p>
                                        <div className="layout504_content-bottom">
                                            <div className="layout504_images-layout">
                                                <div className="layout504_image-list-top">
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper _34x16"><Image src="/images/proposal_2.avif" fill alt="proposal" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _34x16"><Image src="/images/proposal.avif" fill alt="proposal" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _34x16"><Image src="/images/proposal_1.avif" fill alt="proposal" className="layout504_image" /></div>
                                                    </div>
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper _34x16"><Image src="/images/proposal_4.avif" fill alt="proposal" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _34x16"><Image src="/images/proposal_6.avif" fill alt="proposal" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _34x16"><Image src="/images/proposal_10.avif" fill alt="proposal" className="layout504_image" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tab 7: 웹디자인 */}
                                    <div className={`layout504_tab-pane w-tab-pane ${activeTab === 'Tab 7' ? 'w--tab-active' : ''}`}>
                                        <p className="text-size-small text-align-center">프로모션 / 이벤트 / 랜딩페이지 / 홈페이지</p>
                                        <div className="layout504_content-bottom">
                                            <div className="layout504_images-layout">
                                                <div className="layout504_image-list-top">
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper _20x32"><Image src="/images/e83d8258200113.5a0d516f56ee4_1.avif" fill alt="web" className="layout504_image top" /></div>
                                                        <div className="layout504_image-wrapper _20x32"><Image src="/images/64fae34c6a8a134cba5e7e70ef8984f0_1.avif" fill alt="web" className="layout504_image top" /></div>
                                                        <div className="layout504_image-wrapper _20x32"><Image src="/images/m10_home-1_1.avif" fill alt="web" className="layout504_image top" /></div>
                                                    </div>
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper _20x32"><Image src="/images/web-design-12.avif" fill alt="web" className="layout504_image top" /></div>
                                                        <div className="layout504_image-wrapper _20x32"><Image src="/images/web-design-13.avif" fill alt="web" className="layout504_image top" /></div>
                                                        <div className="layout504_image-wrapper _20x32"><Image src="/images/web-design-14.avif" fill alt="web" className="layout504_image top" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tab 8: UI/UX */}
                                    <div className={`layout504_tab-pane w-tab-pane ${activeTab === 'Tab 8' ? 'w--tab-active' : ''}`}>
                                        <p className="text-size-small text-align-center">UI/UX / 서비스기획 / 웹,앱개발 / 프로그래밍</p>
                                        <div className="layout504_content-bottom">
                                            <div className="layout504_images-layout">
                                                <div className="layout504_image-list-top">
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper _32x20"><Image src="/images/page_18.webp" fill alt="UIUX" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _32x20"><Image src="/images/전자계약-웹.webp" fill alt="UIUX" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _32x20"><Image src="/images/바로-사이니지-시스템-1_1.avif" fill alt="UIUX" className="layout504_image" /></div>
                                                    </div>
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper _32x20"><Image src="/images/app-design.png" fill alt="UIUX" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper _32x20"><Image src="/images/app-design-2.avif" fill alt="UIUX" className="layout504_image top" /></div>
                                                        <div className="layout504_image-wrapper _32x20"><Image src="/images/app-design-3.avif" fill alt="UIUX" className="layout504_image" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tab 9: 인테리어 */}
                                    <div className={`layout504_tab-pane w-tab-pane ${activeTab === 'Tab 9' ? 'w--tab-active' : ''}`}>
                                        <p className="text-size-small text-align-center">평면기획 / 기본설계 / 상세설계 / 감리 / 시공</p>
                                        <div className="layout504_content-bottom">
                                            <div className="layout504_images-layout">
                                                <div className="layout504_image-list-top">
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper"><Image src="/images/interior-design_3.avif" fill alt="interior" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper"><Image src="/images/interior-design_2.avif" fill alt="interior" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper"><Image src="/images/interior-design_1.avif" fill alt="interior" className="layout504_image" /></div>
                                                    </div>
                                                    <div className="layout504_image-list">
                                                        <div className="layout504_image-wrapper"><Image src="/images/7_1.avif" fill alt="interior" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper"><Image src="/images/interior-design_4.avif" fill alt="interior" className="layout504_image" /></div>
                                                        <div className="layout504_image-wrapper"><Image src="/images/interior-design_5.avif" fill alt="interior" className="layout504_image" /></div>
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
            </div>
        </header>
    );
}
