import React, { useState, useEffect } from 'react';
import Menu from '../Template/Menu';
import Footer from '../Template/Footer';
import BackBtn from '../Template/BackBtn';
import ServiceList from './Service/ServiceList';
import ShopsList from './ShopsList';
import InfoModal from './Info/InfoModal';
import MapModal from './Map/MapModal';
import SceneModal from './Scene/SceneModal';
import PicuturesModal from './Picutures/PicuturesModal';

import branding from '../../assets/img/branding/branding2.png';
import service from '../../assets/img/branding/service.png';
import title_service from '../../assets/img/branding/branding_service.png';
import title_domain from '../../assets/img/branding/branding_domain.png';
import title_shops from '../../assets/img/branding/domain_shops.png';
import osaka from '../../assets/img/branding/osaka.png';

const Base = () => {
    const [modalId, setModalId] = useState('');
    const [map, setMap] = useState('');
    const [scene, setScene] = useState('');
    const [pictures, setPictures] = useState([]);
    const [initialSlide, setInitialSlide] = useState('');

    // useEffect(() => {
    //     console.log('modalId :>> ', modalId);
    // }, [modalId])

    return (
        <>
            <Menu />
            <section id="branding" className="contents_section section_branding">
                <div className="contentsLogo-branding">
                    <img src={branding} alt="Branding" />
                </div>
                <div className="section_branding-box section_branding_service">
                    <h3 className="title">
                        <img src={title_service} alt="事業紹介" />
                    </h3>
                    <p className="text">
                        軽未使用車を中心とした店舗販売をはじめ、お客様の求める”カーライフにあったらいいな”を<br />
                        「軽の森」「車の森」「軽パーク」「マッハ車検」「新車市場」「ピッカーズ」「洗車の王国」「車流通革命」が全てワンストップで解決します。
                    </p>
                    <ServiceList />
                </div>
                <div className="section_branding-box section_branding_domain">
                    <h3 className="title">
                        <img src={title_domain} alt="事業ドメイン" />
                    </h3>
                    <p className="text">
                        私たちが大切にしていることは “おもてなし”と“商品は心”。<br />
                        ヨシダオートサービスのワンストップサービスとは、お客様との「信頼の輪」です。
                    </p>
                    <div className="domain_contents">
                        <ul className="domain_list">
                            <li className="circul">
                                <span className="circul_text">中古車販売業</span>
                            </li>
                            <li className="circul">
                                <span className="circul_text">
                                    軽未使用車<br />
                                    販売
                                </span>
                            </li>
                            <li className="circul">
                                <span className="circul_text">車両買取事業</span>
                            </li>
                            <li className="circul">
                                <span className="circul_text">
                                    トラブル<br />
                                    サービス事業
                                </span>
                            </li>
                        </ul>
                        <ul className="domain_list">
                            <li className="circul">
                                <span className="circul_text">
                                    スローカフェ<br />
                                    事業
                                </span>
                            </li>
                            <li className="circul">
                                <span className="circul_text">車検事業</span>
                            </li>
                            <li className="circul">
                                <span className="circul_text">保険代理店業</span>
                            </li>
                            <li className="circul">
                                <span className="circul_text">
                                    板金・<br />
                                    塗装事業
                                </span>
                            </li>
                        </ul>
                        <div className="domain_bgcolor"></div>
                    </div>
                </div>
                <div className="section_branding-box section_branding_shops">
                    <h3 className="title">
                        <img src={title_shops} alt="拠点紹介" />
                    </h3>
                    <p className="text">
                        南大阪の「5人に1人」のかかりつけ医。<br />
						ヨシダオートサービスでは創業以来、南大阪に根差し、地域の皆様と共に成長することを心がけてきました。<br />
						おかげさまで南大阪にお住まいの5人に1人の方にご利用いただけるまでになりました。
                    </p>
                    <ShopsList setModalId={setModalId} />
                    <InfoModal modalId={modalId} setMap={setMap} setScene={setScene} setPictures={setPictures} setInitialSlide={setInitialSlide} />
                    <MapModal map={map} />
                    <SceneModal scene={scene} />
                    <PicuturesModal pictures={pictures} initialSlide={initialSlide} />
                    <div className="osaka">
                        <div className="osaka_picture">
                            <img src={osaka} alt="" />
                        </div>
                        <p className="osaka_ripple ripple1">
                            <span className="ring"></span>
                        </p>
                        <p className="osaka_ripple ripple2">
                            <span className="ring"></span>
                        </p>
                        <p className="osaka_ripple ripple3">
                            <span className="ring"></span>
                        </p>
                        <p className="osaka_ripple ripple4">
                            <span className="ring"></span>
                        </p>
                    </div>
                </div>
                <BackBtn />
                <div className="contentsLogo-service">
                    <img src={service} alt="Service" />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Base;
