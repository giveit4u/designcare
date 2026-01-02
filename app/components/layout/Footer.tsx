import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer8_component">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-vertical padding-large">
                        <div className="padding-bottom padding-medium">
                            <div className="w-layout-grid footer8_top-wrapper">
                                <div className="footer8_left-wrapper">
                                    <div className="margin-bottom margin-small">
                                        <Link href="#" className="footer8_logo-link w-nav-brand">
                                            <Image
                                                src="/images/icon-dc-256-1.png"
                                                loading="lazy"
                                                alt="Designcare Logo"
                                                width={256}
                                                height={256}
                                                className="footer8_logo"
                                                style={{ width: 'auto', height: 'auto' }}
                                            />
                                        </Link>
                                    </div>
                                    <div className="margin-bottom margin-small">
                                        <p>디자인케어 | 대표: 김진욱 | 사업자등록번호: 246-13-02604 | 주소: 서울특별시 마포구 백범로 31길 21</p>
                                    </div>
                                    <div className="w-layout-grid footer3_social-list">
                                        <a href="#" className="footer3_social-link w-inline-block">
                                            <div className="icon-embed-xsmall icon-color-g400 w-embed">
                                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65683 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9305 5.90625 14.2146 5.90625C15.3088 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1922C13.95 8.5625 13.5625 9.33281 13.5625 10.125V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3432 21.1283 22 16.9913 22 12Z" fill="CurrentColor"></path>
                                                </svg>
                                            </div>
                                        </a>
                                        {/* Add other social links as needed */}
                                    </div>
                                </div>
                                <div className="footer8_right-wrapper">
                                    <div className="margin-bottom margin-xsmall">
                                        <div className="text-weight-semibold text-color-g300">디자인케어 구독 신청</div>
                                    </div>
                                    <div className="footer8_form-block w-form">
                                        <form id="email-form" name="email-form" data-name="Email Form" method="get" className="footer8_form">
                                            <input className="form_input footer-form w-input" maxLength={256} name="email-2" data-name="Email 2" placeholder="이메일을 입력하세요" type="email" id="email-2" required />
                                            <input type="submit" data-wait="Please wait..." className="button is-secondary is-small text-color-g300 w-button" value="신청" />
                                        </form>
                                        <div className="text-size-tiny text-color-g400">신청함으로써 개인정보 보호정책에 동의합니다.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divider-horizontal line-color-g600"></div>
                        <div className="padding-top padding-medium">
                            <div className="footer8_bottom-wrapper">
                                <div className="w-layout-grid footer8_legal-list">
                                    <Link href="#" className="footer8_legal-link text-color-g400">개인정보 보호정책</Link>
                                    <Link href="#" className="footer8_legal-link text-color-g400">서비스 이용 약관</Link>
                                    <Link href="#" className="footer8_legal-link text-color-g400">쿠키 설정</Link>
                                </div>
                                <div className="footer8_credit-text text-color-g400">All rights reserved © 2025 Designcare.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
