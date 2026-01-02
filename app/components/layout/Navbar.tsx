'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div data-collapse="small" data-animation="default" data-duration="400" role="banner" className="navbar1_component w-nav">
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
                    display: isMenuOpen ? 'block' : undefined // Basic toggle for mobile
                }}>
                    <div className="navbar13_menu-link-wrapper">
                        <Link href="#category" className="navbar13_link w-nav-link">디자인케어</Link>
                        <Link href="#service" className="navbar13_link w-nav-link">서비스</Link>
                        <Link href="#price" className="navbar13_link w-nav-link">요금제</Link>
                        <Link href="#process" className="navbar13_link w-nav-link">이용방법</Link>

                        <div data-delay="200" data-hover="true" className="navbar13_menu-dropdown w-dropdown group">
                            <div className="navbar13_dropdown-toggle w-dropdown-toggle">
                                <div>프로젝트</div>
                                <div className="dropdown-chevron w-embed">
                                    <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                            <nav className="navbar13_dropdown-list w-dropdown-list group-hover:block">
                                <Link href="#" className="navbar13_dropdown-link w-dropdown-link">Link Five</Link>
                                <Link href="#" className="navbar13_dropdown-link w-dropdown-link">Link Six</Link>
                                <Link href="#" className="navbar13_dropdown-link w-dropdown-link">Link Seven</Link>
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
