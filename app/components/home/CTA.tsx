import Image from 'next/image';

export default function CTA() {
    return (
        <section className="section_layout3">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="layout3_component">
                            <div className="w-layout-grid layout3_content">
                                <div className="layout3_content-left">
                                    <div className="margin-bottom margin-small">
                                        <h2 className="heading-style-h3">디자인 구독 서비스로 비즈니스 혁신의 새로운 길을 열어보세요</h2>
                                    </div>
                                    <p className="text-size-medium">매달 새로운 디자인으로 귀사의 브랜드를 한층 더 빛나게 합니다. 월 구독으로 손쉽게 비즈니스 혁신을 시작하세요!</p>
                                </div>
                                <div className="layout3_image-wrapper">
                                    {/* Placeholder image used in original. Replacing with a localized placeholder or keep generic if not found. 
                        Assuming the original used a generic placeholder service, we can use a local image if we have one or just a div. 
                        For now, attempting to use a local placeholder if extracted, otherwise keeping the component struct.
                    */}
                                    <div style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                                        <p className="text-size-small text-color-g400">Image Placeholder</p>
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
