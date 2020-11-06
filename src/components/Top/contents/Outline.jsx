import React from 'react';
import NextBtn from '../../Template/NextBtn';
import title from '../../../assets/img/top/title_outline.png';
import photo from '../../../assets/img/top/pic_outline01_c.jpg';
import outline from '../../../assets/img/top/outline.png'
import outlineWrap from '../../../assets/img/top/wrap_outline.png';

const Outline = () => {
    return (
        <section id={"top_outline"} className={"top_contents top_outline"}>
            <h3 className={"title"}>
                <img src={title} alt="企業情報" />
            </h3>
            <table>
                <tbody>
                    <tr>
                        <th>会社名</th>
                        <td>株式会社 ヨシダオートサービス</td>
                    </tr>
                    <tr>
                        <th>商号</th>
                        <td>
                            軽の森<br />
                            (大阪府公安委員会 第 622312006339号)
                        </td>
                    </tr>
                    <tr>
                        <th>設立</th>
                        <td>2008年 7月</td>
                    </tr>
                    <tr>
                        <th>資本金</th>
                        <td>3000万円</td>
                    </tr>
                    <tr>
                        <th>代表者</th>
                        <td>吉田 宜史</td>
                    </tr>
                    <tr>
                        <th>従業員数</th>
                        <td>200名 (2020年6月現在)</td>
                    </tr>
                    <tr>
                        <th>売上高</th>
                        <td>73億円 (10期)</td>
                    </tr>
                    <tr>
                        <th>事業内容</th>
                        <td>
                            全メーカーの新車販売､ 中古車販売<br />
                            自動車買取<br />
                            オートリース取扱､ 車検整備､ 板金塗装<br />
                            レッカー事業
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={"nextbtnArea"}>
                <NextBtn text={"詳細ページへ"} path={"outline"} />
            </div>
            <div className={"photo"}>
                <img src={photo} alt="" />
            </div>
            <div className={"outlineLogo"}>
                <img src={outline} alt="outline" />
            </div>
            <div id={"outlineWrap"} className={"contentsWrap"}>
                <img src={outlineWrap} alt="" />
            </div>
        </section>
    )
}

export default Outline;