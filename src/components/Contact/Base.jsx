import React from 'react';
import Footer from '../Template/Footer';
import BackBtn from '../Template/BackBtn';
import NextBtn from '../Template/NextBtn';
import contact from '../../assets/img/contact/contact.svg';

const Base = () => {
    return (
        <>
            <section id="contact" className="contents_section section_contact">
                <div className="section_contact-box section_contact_contact">
                    <div className="title">
                        <h3>問い合わせ</h3>
                        <div className="diagonal-line">
                            <span>Contact</span>
                        </div>
                    </div>
                    <div className="contact">
                        <p>ヨシダオートサービスへのお問い合わせ</p>
                        <NextBtn path={"contact/opinion"} text={"フォームへ"} />
                    </div>
                    <div className="contact">
                        <p>社長ホットライン</p>
                        <NextBtn path={"contact/message"} text={"フォームへ"} />
                    </div>
                </div>
                <BackBtn />
                <div className="contentsLogo">
                    <img src={contact} alt="Contact" />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Base;
