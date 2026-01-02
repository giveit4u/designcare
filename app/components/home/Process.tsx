import Image from 'next/image';
import Link from 'next/link';

export default function Process() {
    return (
        <section id="process" className="section_layout297">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="margin-bottom margin-xxlarge">
                            <div className="max-width-large">
                                <div className="margin-bottom margin-small">
                                    <h2 className="heading-style-h2">서비스 이용 방법</h2>
                                </div>
                                <p className="text-size-medium">한번에 한가지씩 필요한 디자인 프로젝트를 요청할 수 있습니다.</p>
                            </div>
                        </div>
                        <div className="layout297_component">
                            <div className="w-layout-grid layout297_list">
                                <div className="layout297_item">
                                    <div className="margin-bottom margin-small">
                                        <div className="layout297_image-wrapper">
                                            <Image
                                                src="/images/다양한-작업-이미지-2.png"
                                                alt="Service Selection"
                                                width={960}
                                                height={600}
                                                className="layout297_image"
                                            />
                                        </div>
                                    </div>
                                    <div className="margin-bottom margin-xsmall">
                                        <h3 className="heading-style-h5">1. 서비스 선택</h3>
                                    </div>
                                    <p>메신저 상담을 통해 이용하고자 하는 서비스를 선택합니다.</p>
                                    <div className="margin-top margin-medium is-hiden">
                                        <div className="button-group">
                                            <Link href="#" className="button is-link is-icon w-inline-block">
                                                <div>자세히</div>
                                                <div className="icon-embed-xxsmall w-embed">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5"></path>
                                                    </svg>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="layout297_item">
                                    <div className="margin-bottom margin-small">
                                        <div className="layout297_image-wrapper">
                                            <Image
                                                src="/images/web-design-17_1.avif"
                                                alt="Guide"
                                                width={960}
                                                height={600}
                                                className="layout297_image"
                                            />
                                        </div>
                                    </div>
                                    <div className="margin-bottom margin-xsmall">
                                        <h3 className="heading-style-h5">2. 요청 가이드 안내</h3>
                                    </div>
                                    <p>메신저로 디자인 프로세스와 정확한 업무 파악을 위해 요구되는 질의사항을 안내합니다.</p>
                                    <div className="margin-top margin-medium is-hiden">
                                        <div className="button-group">
                                            <Link href="#" className="button is-link is-icon w-inline-block">
                                                <div>가입</div>
                                                <div className="icon-embed-xxsmall w-embed">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5"></path>
                                                    </svg>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="layout297_item">
                                    <div className="margin-bottom margin-small">
                                        <div className="layout297_image-wrapper">
                                            <Image
                                                src="/images/Meeting-spaces.avif"
                                                alt="Consultation"
                                                width={960}
                                                height={600}
                                                className="layout297_image"
                                            />
                                        </div>
                                    </div>
                                    <div className="margin-bottom margin-xsmall">
                                        <h3 className="heading-style-h5">3. 전문가와의 상담</h3>
                                    </div>
                                    <p>디자인 요구 사항을 전문가와 함께 논의하여 맞춤형 솔루션을 제공합니다.</p>
                                    <div className="margin-top margin-medium is-hiden">
                                        <div className="button-group">
                                            <Link href="#" className="button is-link is-icon w-inline-block">
                                                <div>상담</div>
                                                <div className="icon-embed-xxsmall w-embed">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5"></path>
                                                    </svg>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="layout297_item">
                                    <div className="margin-bottom margin-small">
                                        <div className="layout297_image-wrapper">
                                            <Image
                                                src="/images/67d6ed9cf53741a3703c9e5e_ff8c6fd3-0233-4167-a1c2-89d9bf975fb1.avif"
                                                alt="Production and Feedback"
                                                width={960}
                                                height={600}
                                                className="layout297_image"
                                            />
                                        </div>
                                    </div>
                                    <div className="margin-bottom margin-xsmall">
                                        <h3 className="heading-style-h5">4. 디자인 제작 및 피드백</h3>
                                    </div>
                                    <p>제작된 디자인을 검토하고 필요한 수정 요청을 할 수 있습니다.</p>
                                    <div className="margin-top margin-medium is-hiden">
                                        <div className="button-group">
                                            <Link href="#" className="button is-link is-icon w-inline-block">
                                                <div>피드백</div>
                                                <div className="icon-embed-xxsmall w-embed">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5"></path>
                                                    </svg>
                                                </div>
                                            </Link>
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
