'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);
        try {
            const response = await fetch("https://formspree.io/f/xrebbybd", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="inquiry" className="section_contact5">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="contact5_component">
                            <div className="w-layout-grid contact5_content">
                                <motion.div
                                    className="contact5_content-left"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <div className="margin-bottom margin-medium">
                                        <div className="contact5_heading-wrapper">
                                            <div className="margin-bottom margin-xsmall">
                                                <div className="text-style-tagline">연락처</div>
                                            </div>
                                            <div className="margin-bottom margin-small">
                                                <h2 className="heading-style-h2">구독문의</h2>
                                            </div>
                                            <p className="text-size-medium">디자인에 대한 궁금증을 해결해 드립니다.</p>
                                        </div>
                                    </div>
                                    <div className="contact5_contact-list">
                                        <motion.div
                                            className="contact5_item flex items-center gap-3"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="contact5_icon-wrapper text-black">
                                                <div className="icon-embed-xsmall w-embed">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="text-weight-bold">info@designcare.io</div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="contact5_form-block w-form"
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    {status === 'success' ? (
                                        <motion.div
                                            className="form_message-success-wrapper"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                        >
                                            <div className="form_message-success">
                                                <div className="success-text">감사합니다! 제출이 완료되었습니다!</div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <form
                                            id="wf-form-Contact-5-Form"
                                            name="wf-form-Contact-5-Form"
                                            data-name="Contact 5 Form"
                                            onSubmit={handleSubmit}
                                            className="contact5_form"
                                        >
                                            <div className="form_field-wrapper">
                                                <label htmlFor="Contact-5-Name" className="form_field-label">이름</label>
                                                <input
                                                    className="form_input w-input focus:border-black transition-colors"
                                                    maxLength={256}
                                                    name="Contact-5-Name"
                                                    placeholder="이름을 입력하세요"
                                                    type="text"
                                                    id="Contact-5-Name"
                                                    required
                                                />
                                            </div>
                                            <div className="form_field-wrapper">
                                                <label htmlFor="Contact-5-Email" className="form_field-label">이메일</label>
                                                <input
                                                    className="form_input w-input focus:border-black transition-colors"
                                                    maxLength={256}
                                                    name="Contact-5-Email"
                                                    placeholder="example@email.com"
                                                    type="email"
                                                    id="Contact-5-Email"
                                                    required
                                                />
                                            </div>
                                            <div className="form_field-wrapper">
                                                <label htmlFor="Contact-5-Message" className="form_field-label">메시지</label>
                                                <textarea
                                                    id="Contact-5-Message"
                                                    name="Contact-5-Message"
                                                    maxLength={5000}
                                                    placeholder="메시지를 입력하세요..."
                                                    required
                                                    className="form_input is-text-area w-input focus:border-black transition-colors"
                                                ></textarea>
                                            </div>
                                            <div className="margin-bottom margin-xsmall">
                                                <label id="Contact-5-Checkbox" className="w-checkbox form_checkbox flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        name="Contact-5-Checkbox"
                                                        id="Contact 5 Checkbox"
                                                        required
                                                        className="w-4 h-4"
                                                    />
                                                    <span className="form_checkbox-label text-size-small w-form-label">약관에 동의합니다</span>
                                                </label>
                                            </div>
                                            <motion.input
                                                type="submit"
                                                disabled={status === 'submitting'}
                                                className={`button w-button w-full ${status === 'submitting' ? 'opacity-50 cursor-wait' : ''}`}
                                                value={status === 'submitting' ? "제출 중..." : "제출"}
                                                whileHover={status === 'submitting' ? {} : { scale: 1.02 }}
                                                whileTap={status === 'submitting' ? {} : { scale: 0.98 }}
                                            />
                                            {status === 'error' && (
                                                <div className="margin-top margin-small text-color-red">
                                                    오류가 발생했습니다. 다시 시도해주세요.
                                                </div>
                                            )}
                                        </form>
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
