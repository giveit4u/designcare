'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -70% 0px', // Detect when section enters the upper part of the viewport
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
        <div data-collapse="small" data-animation="default" data-duration="400" role="banner" className="navbar1_component w-nav fixed top-0 w-full z-[1000] bg-white">
            <div className="navbar13_container">
                <Link href="#Top" className="navbar13_logo-link w-nav-brand">
                    <Image
                        src="/images/icon-dc-256-1.png"
                        alt="Designcare Logo"
                        width={210}
                        height={56}
                        className="navbar13_logo"
                        style={{ height: '56px', width: 'auto' }}
                        priority
                    />
                </Link>
                <nav role="navigation" className={`navbar13_menu w-nav-menu ${isMenuOpen ? 'w--nav-menu-open' : ''}`} style={{
                    display: isMenuOpen ? 'block' : undefined
                }}>
                    <div className="navbar13_menu-link-wrapper">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`navbar13_link w-nav-link transition-colors duration-300`}
                                style={{
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    color: activeSection === link.id ? '#068A32' : undefined
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div data-delay="200" data-hover="true" className="navbar13_menu-dropdown w-dropdown group">
                            <div className="navbar13_dropdown-toggle w-dropdown-toggle">
                                <div style={{ fontSize: '1rem', fontWeight: '600' }}>프로젝트</div>
                                <div className="dropdown-chevron w-embed">
                                    <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                            <nav className="navbar13_dropdown-list w-dropdown-list group-hover:block">
                                <Link href="#" className="navbar13_dropdown-link w-dropdown-link" style={{ fontSize: '0.9rem' }}>Logo & Branding</Link>
                                <Link href="#" className="navbar13_dropdown-link w-dropdown-link" style={{ fontSize: '0.9rem' }}>Web Design</Link>
                                <Link href="#" className="navbar13_dropdown-link w-dropdown-link" style={{ fontSize: '0.9rem' }}>App Development</Link>
                            </nav>
                        </div>
                    </div>
                </nav>
                <div className="navbar13_button-wrapper">
                    <Link href="#inquiry" className="button is-small w-button">구독문의</Link>
                    <div className={`navbar13_menu-button w-nav-button ${isMenuOpen ? 'w--open' : ''}`} onClick={toggleMenu}>
                        <div className="menu-icon2">
                            <div className="menu-icon2_line-top"></div>
                            <div className="menu-icon2_line-middle">
                                <div className="menu-icon1_line-middle-inner"></div>
                            </div>
                            <div className="menu-icon2_line-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" style={{ height: '100vh', display: 'block' }} onClick={toggleMenu}></div>}
        </div>
    );
}
