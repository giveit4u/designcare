import Image from 'next/image';

export default function Logos() {
    const logos = [
        "/images/logo-webflow.svg",
        "/images/logo-webflow.svg", // Placeholder for Relume
        "/images/logo-webflow.svg",
        "/images/logo-webflow.svg", // Placeholder for Relume
        "/images/logo-webflow.svg",
        "/images/logo-webflow.svg", // Placeholder for Relume
        "/images/logo-webflow.svg",
        "/images/logo-webflow.svg", // Placeholder for Relume
        "/images/logo-webflow.svg",
        "/images/logo-webflow.svg", // Placeholder for Relume
        "/images/logo-webflow.svg",
        "/images/logo-webflow.svg", // Placeholder for Relume
        "/images/logo-webflow.svg",
        "/images/logo-webflow.svg", // Placeholder for Relume
        "/images/logo-webflow.svg",
        "/images/logo-webflow.svg", // Placeholder for Relume
    ];

    return (
        <section className="section_logo3">
            <div className="padding-section-medium">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="margin-bottom margin-large">
                            <div className="text-align-center">
                                <div className="max-width-large align-center">
                                    <h2 className="heading-style-h6">수 많은 기업들이 선택한 디자인 파트너</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logo3_component">
                    {/* Added inline styles for flex gap as fallback, and removed opacity/grayscale for better visibility */}
                    <div className="animate-marquee" style={{ display: 'flex', gap: '2rem', padding: '1rem 0' }}>
                        {[...logos, ...logos].map((src, index) => (
                            <div key={index} className="logo3_wrapper" style={{ flexShrink: 0 }}>
                                <Image
                                    src={src}
                                    alt="Partner Logo"
                                    width={150}
                                    height={50}
                                    className="logo3_logo"
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
