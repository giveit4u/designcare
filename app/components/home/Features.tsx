import Image from 'next/image';

export default function Features() {
    return (
        <section className="section_layout240">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="layout240_component">
                            <div className="margin-bottom margin-xxlarge">
                                <div className="text-align-center">
                                    <div className="max-width-large align-center">
                                        <h2 className="heading-style-h3">사용자 중심 디자인으로 비즈니스 가치를 극대화</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="w-layout-grid layout240_list">

                                <div className="layout240_item">
                                    <div className="margin-bottom margin-medium">
                                        <div className="layout240_image-wrapper">
                                            <Image
                                                src="/images/editorial-design-1.avif"
                                                alt="editorial design"
                                                width={400}
                                                height={300}
                                                className="layout240_image"
                                            />
                                        </div>
                                    </div>
                                    <div className="margin-bottom margin-xsmall">
                                        <h3 className="heading-style-h5">다양한 서비스를 한번에.!</h3>
                                    </div>
                                    <p>브랜딩, 홈페이지, 인쇄물 등 다양한 서비스 제공</p>
                                    <div className="margin-top margin-medium is-hiden">
                                        <div className="button-group is-center">
                                            <a href="#" className="button is-link is-icon w-inline-block">
                                                <div>자세히보기</div>
                                                <div className="icon-embed-xxsmall w-embed"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5"></path></svg></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="layout240_item">
                                    <div className="margin-bottom margin-medium">
                                        <div className="layout240_image-wrapper">
                                            <Image
                                                src="/images/app-design-5.avif"
                                                alt="app design"
                                                width={400}
                                                height={300}
                                                className="layout240_image"
                                            />
                                        </div>
                                    </div>
                                    <div className="margin-bottom margin-xsmall">
                                        <h3 className="heading-style-h5">품질은 높이고.! 비용은 낮추고.!</h3>
                                    </div>
                                    <p>비용 절감과 품질향상, 두 마리 토끼를 한번에</p>
                                    <div className="margin-top margin-medium is-hiden">
                                        <div className="button-group is-center">
                                            <a href="#" className="button is-link is-icon w-inline-block">
                                                <div>가입하기</div>
                                                <div className="icon-embed-xxsmall w-embed"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5"></path></svg></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="layout240_item">
                                    <div className="margin-bottom margin-medium">
                                        <div className="layout240_image-wrapper">
                                            <Image
                                                src="/images/image-11.avif"
                                                alt=""
                                                width={400}
                                                height={300}
                                                className="layout240_image"
                                            />
                                        </div>
                                    </div>
                                    <div className="margin-bottom margin-xsmall">
                                        <h3 className="heading-style-h5">사용자 중심 맞춤형 디자인.!</h3>
                                    </div>
                                    <p>귀사의 브랜드에 최적화된 디자인 솔루션 제공</p>
                                    <div className="margin-top margin-medium is-hiden">
                                        <div className="button-group is-center">
                                            <a href="#" className="button is-link is-icon w-inline-block">
                                                <div>문의하기</div>
                                                <div className="icon-embed-xxsmall w-embed"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5"></path></svg></div>
                                            </a>
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
