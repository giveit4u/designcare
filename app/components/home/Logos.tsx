import Image from 'next/image';

export default function Logos() {
    const logos = [
        "/images/01. logo-Baro.png",
        "/images/02. logo-ixcon.png",
        "/images/03. logo-eliot.png",
        "/images/04. logo-liroom.png",
        "/images/05. logo-vivliv.png",
        "/images/06. logo-underpin.png",
        "/images/07. logo-rightnow.png",
        "/images/08. logo-j&j.png",
        "/images/09. logo-blue origin.png",
        "/images/10. logo-want.png",
        "/images/11. logo-fairpass.png",
        "/images/12. logo-zikcompany.svg",
        "/images/13. logo-my weight.png",
        "/images/14. logo-brosfit.png",
        "/images/15. logo-chainG.png",
        "/images/16. logo-zikpay.png",
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
                    {/* Seamless loop using padding-right instead of gap for perfect calculation at -50% */}
                    <div className="animate-marquee" style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '2.5rem 0'
                    }}>
                        {[...logos, ...logos].map((src, index) => (
                            <div key={index} className="logo3_wrapper" style={{
                                flexShrink: 0,
                                paddingRight: '4rem', // 2x spacing (prev was 2rem)
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image
                                    src={src}
                                    alt="Partner Logo"
                                    width={150}
                                    height={50}
                                    className="logo3_logo"
                                    style={{
                                        objectFit: 'contain',
                                        width: 'auto',
                                        height: '40px',
                                        maxWidth: '140px'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
