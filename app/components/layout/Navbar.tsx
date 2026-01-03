'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (isMenuOpen && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen, isMobile]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = ['portfolio', 'service', 'price', 'process'];

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        const handleScroll = () => {
            if (window.scrollY < 100) {
                setActiveSection('');
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { href: '#portfolio', label: '디자인케어', id: 'portfolio' },
        { href: '#service', label: '서비스', id: 'service' },
        { href: '#price', label: '요금제', id: 'price' },
        { href: '#process', label: '이용방법', id: 'process' },
    ];

    return (
        <div data-collapse="small" data-animation="default" data-duration="400" role="banner"
            className="navbar1_component w-nav fixed top-0 w-full z-[1000]"
            style={{
                backgroundColor: 'transparent',
                marginTop: isMobile ? '10px' : '1.5rem',
                paddingLeft: isMobile ? '20px' : '5%',
                paddingRight: isMobile ? '20px' : '5%',
                display: 'flex',
                alignItems: 'center',
                pointerEvents: isMobile ? 'auto' : 'none',
                zIndex: 1002 // Ensure header stays on top
            }}>
            <div className="navbar13_container" style={{
                maxWidth: isMobile ? '100%' : '1200px',
                width: isMobile ? '100%' : 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: isMobile ? '6px' : '0.5rem',
                paddingRight: isMobile ? '6px' : '0.5rem',
                height: isMobile ? '64px' : 'auto',
                minHeight: isMobile ? '64px' : '4.5rem',
                borderRadius: '50px',
                backgroundColor: 'white',
                boxShadow: '4px 4px 20px rgba(0,0,0,0.1)',
                position: 'relative',
                pointerEvents: 'auto',
                zIndex: 1003
            }}>
                <Link href="#Top" className="navbar13_logo-link w-nav-brand" onClick={closeMenu}>
                    <Image
                        src="/images/icon-dc-256-1.png"
                        alt="Designcare Logo"
                        width={210}
                        height={56}
                        className="navbar13_logo"
                        style={{
                            height: isMobile ? '52px' : '3.5rem',
                            width: 'auto',
                            borderRadius: '100px'
                        }}
                        priority
                    />
                </Link>

                <nav role="navigation"
                    className={`navbar13_menu w-nav-menu ${isMenuOpen && isMobile ? 'w--nav-menu-open' : ''}`}
                    style={isMobile ? {
                        display: isMenuOpen ? 'flex' : 'none',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        marginTop: '0',
                        backgroundColor: '#222222',
                        paddingLeft: '7.5%',
                        paddingRight: '7.5%',
                        paddingTop: '50px',
                        paddingBottom: '30px',
                        width: '100vw',
                        position: 'fixed',
                        top: '84px', // 10px margin + 64px header + 10px gap
                        left: '0',
                        height: 'calc(100vh - 84px)',
                        borderTopLeftRadius: '24px',
                        borderTopRightRadius: '24px',
                        overflow: 'hidden',
                        zIndex: 1000
                    } : {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: '0.5rem',
                        position: 'static',
                        backgroundColor: 'transparent',
                        height: 'auto',
                        width: 'auto',
                        padding: '0 1rem'
                    }}>
                    <div className="navbar13_menu-link-wrapper" style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        width: isMobile ? '100%' : 'auto',
                        flex: isMobile ? '0 0 auto' : 'none',
                        gap: isMobile ? '0' : '0'
                    }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const targetId = link.href.replace('#', '');
                                    const element = document.getElementById(targetId);
                                    if (element) {
                                        const offset = 80;
                                        const bodyRect = document.body.getBoundingClientRect().top;
                                        const elementRect = element.getBoundingClientRect().top;
                                        const elementPosition = elementRect - bodyRect;
                                        const offsetPosition = elementPosition - offset;

                                        window.scrollTo({
                                            top: offsetPosition,
                                            behavior: 'smooth'
                                        });
                                    }
                                    if (isMobile) closeMenu();
                                }}
                                className="navbar13_link w-nav-link"
                                style={{
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    color: activeSection === link.id ? '#068A32' : (isMobile ? '#d1d1d1' : '#333'),
                                    padding: isMobile ? '1.375rem 0' : '0.5rem 1rem',
                                    borderBottom: isMobile ? '1px solid #333333' : 'none',
                                    display: 'block',
                                    width: isMobile ? '100%' : 'auto',
                                    transition: 'color 0.3s ease'
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Only Inquiry Button at the Absolute Bottom */}
                    {isMobile && (
                        <div style={{ width: '100%', marginTop: 'auto' }}>
                            <a
                                href="#inquiry"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById('inquiry');
                                    if (element) {
                                        const offset = 80;
                                        const bodyRect = document.body.getBoundingClientRect().top;
                                        const elementRect = element.getBoundingClientRect().top;
                                        const elementPosition = elementRect - bodyRect;
                                        const offsetPosition = elementPosition - offset;

                                        window.scrollTo({
                                            top: offsetPosition,
                                            behavior: 'smooth'
                                        });
                                    }
                                    closeMenu();
                                }}
                                className="button w-button"
                                style={{
                                    width: '100%',
                                    height: '46px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#0ebb45',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '0.95rem',
                                    fontWeight: '600'
                                }}
                            >
                                구독문의
                            </a>
                        </div>
                    )}
                </nav>

                <div className="navbar13_button-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingRight: isMobile ? '0' : '0' }}>
                    <Link href="#inquiry" className="button is-small w-button" style={{
                        display: isMobile ? 'none' : 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0.75rem 1.5rem',
                        backgroundColor: '#0ebb45',
                        color: 'white',
                        borderRadius: '30px',
                        fontWeight: '600'
                    }}>구독문의</Link>

                    {isMobile && (
                        <div
                            className={`navbar13_menu-button w-nav-button ${isMenuOpen ? 'w--open' : ''}`}
                            onClick={toggleMenu}
                            style={{
                                backgroundColor: isMenuOpen ? '#e5e5e5' : 'transparent',
                                borderRadius: '50%',
                                transition: 'background-color 0.3s ease',
                                display: 'block'
                            }}
                        >
                            <div className="menu-icon2">
                                <div className="menu-icon2_line-top" style={{ transform: isMenuOpen ? 'translateY(8px) rotate(45deg)' : 'none' }}></div>
                                <div className="menu-icon2_line-middle" style={{ opacity: isMenuOpen ? 0 : 1 }}></div>
                                <div className="menu-icon2_line-bottom" style={{ transform: isMenuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none' }}></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {isMenuOpen && isMobile && <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" style={{ height: '100vh', display: 'block', backgroundColor: 'transparent', pointerEvents: 'auto' }} onClick={toggleMenu}></div>}
        </div>
    );
}
