import React from 'react';
import { Link } from 'react-router-dom';
import NextBtn from '../../Template/NextBtn';
import photo from '../../../assets/img/top/pic_philosophy01_c.jpg';
import title from '../../../assets/img/top/title_recruit.png';
import eigyo from '../../../assets/img/top/recruit_1.png';
import seibishi from '../../../assets/img/top/recruit_2.png';
import front from '../../../assets/img/top/recruit_3.png';
import customer from '../../../assets/img/top/recruit_4.png';
import kanri from '../../../assets/img/top/recruit_5.png';
import hoken from '../../../assets/img/top/recruit_6.png';
import recruit from '../../../assets/img/top/recruit.png';
import recruitWrap from '../../../assets/img/top/wrap_recruit.png';

const Recruit = () => {
    return (
        <section id={"top_recruit"} className={"top_contents top_recruit"}>
            <div className={"photo"}>
                <img src={photo} alt="" />
            </div>
            <div className={"top_recruit_box"}>
                <h3 className={"title"}>
                    <img src={title} alt="採用情報" />
                </h3>
                <p>
                    ヨシダオートサービスの裏側を<br />
                    職種ごとにご紹介
                </p>
                {/* 各IDへとリンクを飛ばす
                Linkの拡張あり */}
                <ul className={"workList"}>
                    <li>
                        <Link to={'/recruit'}>
                            <img src={eigyo} alt="営業" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/recruit'}>
                            <img src={seibishi} alt="自動車整備士" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/recruit'}>
                            <img src={front} alt="フロント" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/recruit'}>
                            <img src={customer} alt="カスタマー" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/recruit'}>
                            <img src={kanri} alt="管理部" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/recruit'}>
                            <img src={hoken} alt="保険部" />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={"nextbtnArea"}>
                <NextBtn text={"詳細ページへ"} path={"recruit"} />
            </div>
            <div className={"recruitLogo"}>
                <img src={recruit} alt="recruit" />
            </div>
            <div id={"recruitWrap"} className={"contentsWrap"}>
                <img src={recruitWrap} alt="" />
            </div>
        </section>
    )
}

export default Recruit;