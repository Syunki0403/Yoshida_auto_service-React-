import React from 'react';
import NextBtn from '../../Template/NextBtn';
import photo from '../../../assets/img/top/pic_branding02_c.jpg';
import title from '../../../assets/img/top/title_branding.png';
import kei_no_mori from '../../../assets/img/top/keinomori.png';
import kuruma_no_mori from '../../../assets/img/top/kurumanomori.png';
import keipark from '../../../assets/img/top/keipark.png';
import shinsha_ichiba from '../../../assets/img/top/shinsyaitiba.png';
import mach_shaken from '../../../assets/img/top/maltuhasyaken.png';
import picars from '../../../assets/img/top/picars.png';
import sensha_no_oukoku from '../../../assets/img/top/logo_sensha01.svg';
import kuruma_ryutu from '../../../assets/img/top/logo_ryutsu.svg';
import koukin from '../../../assets/img/top/logo_koukin01.svg';
import branding from '../../../assets/img/top/branding.png';
import brandingWrap from '../../../assets/img/top/wrap_branding.png';


const Brading = () => {
    return (
        <section id={"top_branding"} className={"top_contents top_branding"}>
            <div className={"photo"}>
                <img src={photo} alt="" />
            </div>
            <div className={"top_branding_box"}>
                <h3 className={"title"}>
                    <img src={title} alt="事業紹介" />
                </h3>
                <ul className={"branding_list"}>
                    <li>
                        <p>軽未使用車販売</p>
                        <a href="https://keinomori.com/">
                            <img src={kei_no_mori} alt="軽の森" />
                        </a>
                    </li>
                    <li>
                        <p>普通未使用車販売</p>
                        <a href="https://kurumanomori.com/">
                            <img src={kuruma_no_mori} alt="車の森" />
                        </a>
                    </li>
                    <li>
                        <p>中古車販売</p>
                        <a href="https://ke-park.com/">
                            <img src={keipark} alt="軽パーク" />
                        </a>
                    </li>
                    <li>
                        <p>新車販売・カーリース</p>
                        <a href="https://shinsha-ichiba.com/">
                            <img src={shinsha_ichiba} alt="新車市場" />
                        </a>
                    </li>
                    <li>
                        <p>最短45分車検</p>
                        <a href="https://machshaken.com/">
                            <img src={mach_shaken} alt="マッハ車検" />
                        </a>
                    </li>
                    <li>
                        <p>板金修理・整備</p>
                        <a href="https://www.picars.jp/detail/1905/">
                            <img src={picars} alt="picars" />
                        </a>
                    </li>
                    <li>
                        <p>本格カーケア専門店</p>
                        <a href="https://sensha-kingdom.com/">
                            <img src={sensha_no_oukoku} alt="洗車の王国" />
                        </a>
                    </li>
                    <li>
                        <p>新車低金利専門店</p>
                        <a href="https://teikinri-shinsha.com/">
                            <img src={kuruma_ryutu} alt="車流通革命" />
                        </a>
                    </li>
                    <li>
                        <p>
                            チタセラン抗菌・<br />
                            除菌施工サービス
                        </p>
                        <a href="https://sensha-kingdom.com/titaceran/">
                            <img src={koukin} alt="KOUKIN" />
                        </a>
                    </li>
                </ul>
                <div className={"nextbtnArea"}>
                    <NextBtn text={"詳細ページへ"} path={"shops"} />
                </div>
                <div className={"brandingLogo"}>
                    <img src={branding} alt="branding" />
                </div>
                <div id={"brandingWrap"} className={"contentsWrap"}>
                    <img src={brandingWrap} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Brading;