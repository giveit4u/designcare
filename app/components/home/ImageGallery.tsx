import Image from 'next/image';

export default function ImageGallery() {
    const images = [
        '/images/business-card-design.webp',
        '/images/67c182c497a5cddec7839092_6cc506df-7115-4fc2-ba0d-fc1909a1146a.avif',
        '/images/package-design_8.jpg',
        '/images/package-design_6.jpg',
        '/images/web-design-11_1.avif',
        '/images/SNS-advertising_6.webp'
    ];

    return (
        <section className="section_gallery22">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="gallery22_component">
                            <div className="margin-bottom margin-xxlarge">
                                <div className="max-width-large">
                                    <div className="margin-bottom margin-small">
                                        <h2 className="heading-style-h2">이미지 갤러리</h2>
                                    </div>
                                    <p className="text-size-medium">디자인케어 서비스를 만나보세요.</p>
                                </div>
                            </div>

                            {/* CSS Scroll Snap Slider replacement for standard Webflow slider */}
                            <div className="gallery22_slider-container" style={{ display: 'flex', overflowX: 'auto', gap: '1rem', scrollSnapType: 'x mandatory', paddingBottom: '1rem', userSelect: 'none' }}>
                                {images.map((src, index) => (
                                    <div key={index} style={{ flex: '0 0 auto', width: '300px', height: '200px', position: 'relative', scrollSnapAlign: 'start', borderRadius: '8px', overflow: 'hidden' }}>
                                        <Image
                                            src={src}
                                            alt={`Gallery Image ${index + 1}`}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                ))}
                                {/* Duplicating for length if needed, or just keeping these 6 */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
