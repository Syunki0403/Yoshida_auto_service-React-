import React from 'react';
import Menu from '../../Template/Menu';
import Footer from '../../Template/Footer';
import BackBtn from '../../Template/BackBtn';
import { Link } from 'react-router-dom';
import contact from '../../../assets/img/contact/contact.svg';

const Base = () => {
    const complementAddress = () => {
        const { AjaxZip3 } = window;
        AjaxZip3.zip2addr(
            'post',
            '',
            'pref',
            'addr1',
            'addr2'
        );
    };

    const showMandatory = (e) => {
        const id = e.currentTarget.id;
        switch (id) {
            case 'chkbox1':
                document.getElementById('contact-phone-mandatory').classList.toggle('show');
                break;
            case 'chkbox3':
                document.getElementById('contact-mobile-mandatory').classList.toggle('show');
                break;
            case 'chkbox4':
                document.getElementById('contact-fax-mandatory').classList.toggle('show');
                break;
        }
    };

    return (
        <>
            <Menu />
            <section id="opinion" className="contents_section section_opinion">
                <div className="section_contact_form section_opinion-box">
                    <div className="title">
                        <h3 className="">問い合わせ</h3>
                        <div className="diagonal-line">
                            <span>Contact</span>
                        </div>
                    </div>
                    <p className="main_text">ヨシダオートサービスへのお問い合わせ</p>
                    <form action="#">
                        <div className="main_contact">
                            <label htmlFor="name">ご氏名<span>&nbsp;&nbsp;(必須)</span></label>
                            <input id="name" type="text" placeholder="例：吉田太郎" required />
                        </div>
                        <div className="main_contact">
                            <label htmlFor="hurigana">ふりがな<span>&nbsp;&nbsp;(必須)</span></label>
                            <input id="hurigana" type="text" placeholder="例：よしだたろう" required />
                        </div>
                        <div className="main_contact contact_post">
                            <label htmlFor="post">郵便番号</label>
                            <div className="post_research">
                                <input id="post" type="text" placeholder="例：1234567" maxLength="7" name="post" />
                                <p>
                                    <a onClick={() => complementAddress()}>&#12306;住所自動入力</a>
                                </p>
                            </div>
                        </div>
                        <div className="main_contact">
                            <label htmlFor="pref">都道府県</label>
                            <input id="pref" type="text" name="pref" placeholder="例：東京都" />
                        </div>
                        <div className="main_contact">
                            <label htmlFor="addr1">市町村区</label>
                            <input id="addr1" type="text" name="addr1" placeholder="例：品川区芝浦" />
                        </div>
                        <div className="main_contact">
                            <label htmlFor="addr2">番地以下の住所</label>
                            <input id="addr2" type="text" name="addr2" placeholder="例：2-2-2 ○×マンション501号室" />
                        </div>
                        <div className="main_contact contact_reply">
                            <label>返信方法<span>&nbsp;&nbsp;(必須)</span></label>
                            <div className="checkboxes">
                                <div className="chkbox">
                                    <input type="checkbox" id="chkbox1" name="reply" value="1" onChange={(e) => showMandatory(e)} />
                                    <label htmlFor="chkbox1">電話</label>
                                </div>
                                <div className="chkbox">
                                    <input type="checkbox" id="chkbox2" name="reply" value="2" />
                                    <label htmlFor="chkbox2">メール</label>
                                </div>
                                <div className="chkbox">
                                    <input type="checkbox" id="chkbox3" name="reply" value="3" onChange={(e) => showMandatory(e)} />
                                    <label htmlFor="chkbox3">携帯電話</label>
                                </div>
                                <div className="chkbox">
                                    <input type="checkbox" id="chkbox4" name="reply" value="4" onChange={(e) => showMandatory(e)} />
                                    <label htmlFor="chkbox4">FAX</label>
                                </div>
                            </div>
                            <div className="select-hour">
                                <p className="select-hour_text">連絡時間帯</p>
                                <select name="before-hour">
                                    <option></option>
                                    <option value="ten">10:00</option>
                                    <option value="twelve">12:00</option>
                                    <option value="fourteen">14:00</option>
                                    <option value="sixteen">16:00</option>
                                    <option value="eighteen">18:00</option>
                                    <option value="tyenty">20:00</option>
                                </select>
                                <p className="select-hour_tilde">～</p>
                                <select name="after-hour">
                                    <option></option>
                                    <option value="twelve">12:00</option>
                                    <option value="fourteen">14:00</option>
                                    <option value="sixteen">16:00</option>
                                    <option value="eighteen">18:00</option>
                                    <option value="tyenty">20:00</option>
                                    <option value="tyenty-one">21:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="main_contact">
                            <label htmlFor="mail-addr">メールアドレス<span>&nbsp;&nbsp;(必須)</span></label>
                            <input id="mail-addr" type="text" placeholder="例：sample@sample.com" required />
                        </div>
                        <div className="main_contact contact-phone">
                            <label htmlFor="phone">電話番号<span id="contact-phone-mandatory">&nbsp;&nbsp;(必須)</span></label>
                            <input id="phone" type="text" placeholder="例：03-0000-0000" />
                        </div>
                        <div className="main_contact contact-mobile">
                            <label htmlFor="mobile">携帯電話<span id="contact-mobile-mandatory">&nbsp;&nbsp;(必須)</span></label>
                            <input id="mobile" type="text" placeholder="例：090-0000-0000" />
                        </div>
                        <div className="main_contact contact-fax">
                            <label htmlFor="fax">FAX<span id="contact-fax-mandatory">&nbsp;&nbsp;(必須)</span></label>
                            <input id="fax" type="text" placeholder="例：03-0000-0000" />
                        </div>
                        <div className="main_contact">
                            <label htmlFor="work">ご職業</label>
                            <input id="work" type="text" placeholder="例：自動車販売員" />
                        </div>
                        <div className="main_contact">
                            <label htmlFor="car">現在お乗りのお車</label>
                            <input id="car" type="text" placeholder="例：フォルクスワーゲン（クロスボロ）" />
                        </div>
                        <div className="main_contact contact-content">
                            <label htmlFor="content">お問い合わせ内容</label>
                            <textarea id="content" cols="30" rows="10"></textarea>
                        </div>
                    </form>
                    <div className="privacy">
                        <input type="checkbox" id="privacy" name="privacy" />
                        <label htmlFor="privacy"></label>
                        <div className="privacy_text">
                            <Link to={'/privacy'}>プライバシーポリシー</Link>を確認し、個人情報の取扱に同意します。
                        </div>
                    </div>
                    <div className="confirmation_btn">
                        <a href="#">
                            <span>確認</span>
                        </a>
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
