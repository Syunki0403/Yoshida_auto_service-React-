import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/top/footer_logo.png';
import home from '../../assets/img/top/menu_nav1.png';
import news from '../../assets/img/top/menu_nav2.png';
import greeting from '../../assets/img/top/menu_nav3.png';
import outline from '../../assets/img/top/menu_nav4.png';
import branding from '../../assets/img/top/menu_nav5.png';
import recruit from '../../assets/img/top/menu_nav6.png';
import contact from '../../assets/img/top/menu_nav7.png';

const Menu = () => {
    const [toggle, setToggle] = useState(true);

    const toggleMenu = () => {
        if (toggle) {
            document.getElementById("menu").classList.add('active');
            setToggle(false);
        } else {
            document.getElementById("menu").classList.remove('active');
            setToggle(true);
        }
    };

    const watchCurrentPosition = () => {
        let topFooter = document.getElementById("footer").getBoundingClientRect().top;
        let heightWindow = window.outerHeight;

        if (topFooter <= heightWindow) {
            document.getElementById("menu").classList.add('hide');
        } else {
            document.getElementById("menu").classList.remove('hide');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', watchCurrentPosition);
        return () => {
            window.removeEventListener('scroll', watchCurrentPosition);
        }
    }, []);

    return (
        <div id="menu" className="menu">
            <a className="menu_btn" onClick={toggleMenu}>
                <div className="menu_btn_box">
                    <span className="menu_btn_line btnline-top"></span>
                    <span className="menu_btn_line btnline-center"></span>
                    <span className="menu_btn_line btnline-bottom"></span>
                </div>
            </a>
            <nav className="menu_nav">
                <p className="menu_nav_logo">
                    <img src={logo} alt="ヨシダオートサービス" />
                </p>
                <ul className="menu_nav_list">
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
                <div className="menu_nav_sns">
                    <i className="sns_instagram">
                        <a href="https://www.instagram.com/keinomori/"></a>
                    </i>
                    <i className="sns_facebook">
                        <a href="https://www.facebook.com/yosidaauto/"></a>
                    </i>
                </div>
                <div className="menu_nav_policy">
                    <Link to={'/privacy'}>プライバシーポリシー</Link>
                </div>
            </nav>
        </div>
    )
}

export default Menu;
