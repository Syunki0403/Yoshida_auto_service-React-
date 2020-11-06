import React, { useState } from 'react';
import logo from '../../assets/img/outline/outline_logo.png';
import modal_logo from '../../assets/img/outline/outline_modal_logo.png';
import modal_title from '../../assets/img/outline/outline_modal_title.png';
import closeBtn from '../../assets/img/outline/outline_modal_closebtn.png';

const Modal = () => {
    const [show, setShow] = useState(true);

    const openModal = () => {
        if (show) {
            document.getElementById("outline_modal").classList.add('show');
            setShow(false);
        }
    }

    const closeModal = () => {
        if (!show) {
            document.getElementById("outline_modal").classList.remove('show');
            setShow(true);
        }
    }

    return (
        <div className="modal">
            <div className="modal_parent">
                <p className="logo">
                    <img src={logo} alt="ヨシダオートサービス" />
                </p>
                <div className="openBtn">
                    <a className="" onClick={openModal}>
                        <span>ロゴに込めた想い</span>
                    </a>
                </div>
            </div>
            <div id="outline_modal" className="modal_child">
                <h3 className="title">
                    <img src={modal_title} alt="ロゴに込めた想い" />
                </h3>
                <div className="closeBtn" onClick={closeModal}>
                    <img src={closeBtn} alt="closeBtn" />
                </div>
                <p className="logo">
                    <img src={modal_logo} alt="ヨシダオートサービス" />
                </p>
                <p className="text">まず一番に、地域の皆さまと共に大阪No.1の企業としてあり続けたいという想いを込め、大阪への愛をマークに込めました。</p>
                <p className="text">その形は、お客様とのふれあいの積み重ねをイメージしています。</p>
                <p className="text">さらに「ヨシダオートサービス」という文字部分には、安心、安全、快適に感じてもらうため、そして、長くお付き合いできるような、優しく、しっかりとした安定感のあるオリジナルの書体を作りました。</p>
                <p className="text">ロゴを含めて、テーマカラーをオレンジで統一することで、活気あふれる職場、より良いサービスへの情熱も自分たちらしさとして表現しました。</p>
            </div>
        </div>
    )
}

export default Modal;
