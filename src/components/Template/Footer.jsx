import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/img/top/footer_logo.png';
import home from '../../assets/img/top/footer_home.png';
import news from '../../assets/img/top/footer_news.png';
import greeting from '../../assets/img/top/footer_greeting.png';
import outline from '../../assets/img/top/footer_outline.png';
import branding from '../../assets/img/top/footer_branding.png';
import recruit from '../../assets/img/top/footer_recruit.png';
import contact from '../../assets/img/top/footer_contact.png';

const Footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <footer id="footer">
            <p className="footer_logo">
                <img src={logo} alt="ヨシダオートサービス" />
            </p>
            <nav>
                <ul className="footer_nav">
                    <li>
                        <Link to={'/'}>
                            <img src={home} alt="ホーム" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/news'}>
                            <img src={news} alt="ニュース" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/philosophy'}>
                            <img src={greeting} alt="代表挨拶" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/outline'}>
                            <img src={outline} alt="企業情報" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/shops'}>
                            <img src={branding} alt="事業紹介" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/recruit'}>
                            <img src={recruit} alt="採用情報" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>
                            <img src={contact} alt="お問い合わせ" />
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="footer_sns">
                <i className="sns_instagram">
                    <a href="https://www.instagram.com/keinomori/"></a>
                </i>
                <i className="sns_facebook">
                    <a href="https://www.facebook.com/yosidaauto/"></a>
                </i>
            </div>
            <div className="footer_policy">
                <Link to={'/privacy'}>プライバシーポリシー</Link>
            </div>
            <p className="footer_copyright">&copy;YOSHIDA AUTO SERVICE All Rights Reserved.</p>
            <div className="footer_movetop">
                <a onClick={scrollToTop}>
                    <div></div>
                </a>
            </div>
        </footer>
    )
}

export default Footer;
