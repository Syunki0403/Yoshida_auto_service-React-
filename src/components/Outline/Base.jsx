import React from 'react';
import Modal from './Modal';
import Menu from '../Template/Menu';
import Footer from '../Template/Footer';
import BackBtn from '../Template/BackBtn';
import outline from '../../assets/img/outline/outline2.png';
import title_corporate from '../../assets/img/outline/outline_corporate.png';
import title_history from '../../assets/img/outline/outline_history.png';
import title_organization from '../../assets/img/outline/outline_organization.png';
import organization from '../../assets/img/outline/organazation.png';
import history from '../../assets/img/outline/history.png';

const Base = () => {
    return (
        <>
            <Menu />
            <section id="outline" className="contents_section section_outline">
                <div className="contentsLogo-outline">
                    <img src={outline} alt="Outline" />
                </div>
                <Modal />
                <div className="section_outline_corporate">
                    <h3 className="title">
                        <img src={title_corporate} alt="企業情報" />
                    </h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>会社名</th>
                                <td>株式会社 ヨシダオートサービス</td>
                            </tr>
                            <tr>
                                <th>商号</th>
                                <td>軽の森 (大阪府公安委員会 第 622312006339号)</td>
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
                                <th>URL</th>
                                <td>https://yoshidaauto.co.jp/</td>
                            </tr>
                            <tr>
                                <th>事業内容</th>
                                <td>
                                    全メーカーの新車販売、<br />
                                    中古車販売、<br />
                                    自動車買取、 <br />
                                    オートリース取扱、<br />
                                    車検整備、<br />
                                    板金塗装、<br />
                                    レッカー事業、<br />
                                    自動車損害保険、<br />
                                    各種生命保険、<br />
                                    カーデイティリング、<br />
                                    プロテクションフィルム施工、<br />
                                    個人宅・店舗・オフィス向けチタセラン抗菌・除菌サービス
                                </td>
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
                            <tr className="table-blank">
                                <th>資格</th>
                                <td>
                                    ダイハツスーパービット店、<br />
                                    スズキ副代理店、<br />
                                    近畿陸運支局指定整備工場<br />
                                    (近運整認大 第 11056号)、<br />
                                    自動車有償貸渡業許可番号大運輸第 3719号、<br />
                                    あいおいニッセイ同和損害保険、<br />
                                    HGA代理店<br />
                                    東京海上日動火災保険、富士火災海上保険、洗車の王国 正規代理店
                                </td>
                            </tr>
                            <tr className="table-blank">
                                <th>取引銀行</th>
                                <td>みずほ銀行、関西みらい銀行、池田泉州銀行銀行、商工中金、紀陽銀行</td>
                            </tr>
                            <tr className="table-blank">
                                <th>主要取引先</th>
                                <td>
                                    オリエントコーポレーション、セディナ、MMC<br />
                                    大阪ダイハツ、南海スズキ、西日本三菱<br />
                                    関西マツダ、大阪トヨペット、オークネット<br />
                                    USS、JAA、HAA
                                </td>
                            </tr>
                            <tr className="table-blank">
                                <th>加盟団体</th>
                                <td>
                                    全日本ロータス同友会、TAXチェーン加盟店<br />
                                    カーベルネットワーク加盟店<br />
                                    大阪府中古自動車販売商工組合<br />
                                    大阪府自動車整備振興会、堺市商工会議所会員
                                </td>
                            </tr>
                            <tr className="table-blank">
                                <th>事業拠点</th>
                                <td>
                                    <div>
                                        <p>【軽の森 なかもず店】</p>
                                        <p>&#12306;591-8025</p>
                                        <p>大阪府堺市北区長曾根町 3083-10</p>
                                        <p>
                                            <a href="tel:0800-830-3329">TEL:0800-830-3329</a>
                                        </p>
                                        <p>FAX:072-240-0804</p>
                                    </div>
                                    <div>
                                        <p>【軽の森 泉北店】</p>
                                        <p>&#12306;590-0132</p>
                                        <p>大阪府堺市南区原山台 5-10-2</p>
                                        <p>
                                            <a href="tel:0800-830-3332">TEL:0800-830-3332</a>
                                        </p>
                                        <p>FAX:072-295-1778</p>
                                    </div>
                                    <div>
                                        <p>【軽の森 富田林店】</p>
                                        <p>&#12306;584-0025</p>
                                        <p>大阪府富田林市若松町西 1-1880</p>
                                        <p>
                                            <a href="tel:0800-830-3335">TEL:0800-830-3335</a>
                                        </p>
                                        <p>FAX:0721-23-8581</p>
                                    </div>
                                    <div>
                                        <p>【軽の森 泉大津店】</p>
                                        <p>&#12306;595-0004</p>
                                        <p>大阪府泉大津市千原町 2-21-16</p>
                                        <p>
                                            <a href="tel:0800-830-3359 ">TEL:0800-830-3359</a>
                                        </p>
                                        <p>FAX:0725-21-3901</p>
                                    </div>
                                    <div>
                                        <p>【車の森 なかもず店】</p>
                                        <p>&#12306;591-8022</p>
                                        <p>大阪府堺市北区金岡町 1377-6</p>
                                        <p>
                                            <a href="tel:0800-830-3347">TEL:0800-830-3347</a>
                                        </p>
                                        <p>FAX:(072)240-3201</p>
                                    </div>
                                    <div>
                                        <p>【ピッカーズ】</p>
                                        <p>&#12306;584-0023</p>
                                        <p>大阪府富田林市若松町東 2-6-31</p>
                                        <p>
                                            <a href="tel:0721-23-7761">TEL:0721-23-7761</a>
                                        </p>
                                        <p>FAX:0721-23-7762</p>
                                    </div>
                                    <div>
                                        <p>【洗車の王国 泉大津店】</p>
                                        <p>&#12306;595-0004</p>
                                        <p>大阪府泉大津市千原町 2-21-16</p>
                                        <p>
                                            <a href="tel:TEL:050-1705-3216">TEL:050-1705-3216 </a>
                                        </p>
                                    </div>
                                    <div>
                                        <p>【車流通革命 なかもず店】</p>
                                        <p>&#12306;591-8025</p>
                                        <p>大阪府堺市北区長曽根町 3083-1</p>
                                        <p>
                                            <a href="tel:0800-830-3506">TEL:0800-830-3506</a>
                                        </p>
                                        <p>FAX:072-240-3837</p>
                                    </div>
                                    <div>
                                        <p>【軽パーク】</p>
                                        <p>&#12306;584-0025</p>
                                        <p>大阪府富田林市若松町西 1-1878-1</p>
                                        <p>
                                            <a href="tel:0800-830-3338">TEL:0800-830-3338</a>
                                        </p>
                                        <p>FAX:0721-23-0021</p>
                                    </div>
                                    <div>
                                        <p>【マッハ車検 なかもず店】</p>
                                        <p>&#12306;591-8025</p>
                                        <p>大阪府堺市北区長曾根町 3083-1</p>
                                        <p>
                                            <a href="tel:072-240-3838">TEL:072-240-3838</a>
                                        </p>
                                        <p>FAX:072-240-3837</p>
                                    </div>
                                    <div>
                                        <p>【マッハ車検 大阪狭山店】</p>
                                        <p>&#12306;589-0013</p>
                                        <p>大阪府大阪狭山市茱萸木 6-1934-1</p>
                                        <p>
                                            <a href="tel:072-368-1300">TEL:072-368-1300</a>
                                        </p>
                                        <p>FAX:072-368-1301</p>
                                    </div>
                                    <div>
                                        <p>【新車市場 堺鉄砲町店】</p>
                                        <p>&#12306;590-0906</p>
                                        <p>大阪府堺市堺区三宝町 4-250</p>
                                        <p>
                                            <a href="tel:0800-830-3342">TEL:0800-830-3342</a>
                                        </p>
                                        <p>FAX:072-225-0604</p>
                                    </div>
                                    <div>
                                        <p>【新車市場 大阪狭山店】</p>
                                        <p>&#12306;589-0013</p>
                                        <p>大阪府大阪狭山市茱萸木 6-1934-1</p>
                                        <p>
                                            <a href="tel:0800-830-3432">TEL:0800-830-3432</a>
                                        </p>
                                        <p>FAX:072-368-1301</p>
                                    </div>
                                    <div>
                                        <p>【洗車の王国 なかもず店】</p>
                                        <p>&#12306;591-8022</p>
                                        <p>大阪府堺市北区金岡町 1377-6</p>
                                        <p>
                                            <a href="tel:050-1705-8413">TEL:050-1705-8413</a>
                                        </p>
                                        <p>FAX:(072)240-3201</p>
                                    </div>
                                    <div>
                                        <p>【車流通革命 堺鉄砲町店】</p>
                                        <p>&#12306;590-0906</p>
                                        <p>大阪府堺市堺区三宝町 4-249</p>
                                        <p>
                                            <a href="tel:0800-830-3444">TEL:0800-830-3444</a>
                                        </p>
                                        <p>FAX:072-221-3301</p>
                                    </div>
                                    <div>
                                        <p>【KOUKIN】</p>
                                        <p>&#12306;591-8025</p>
                                        <p>大阪府堺市北区長曽根町 3083-10</p>
                                        <p>
                                            <a href="tel:0800-830-3563">TEL:0800-830-3563</a>
                                        </p>
                                        <p>FAX:072-247-9900</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="movie">
                        <iframe width="100%" height="180px" src="https://www.youtube.com/embed/KGs9Mkd_5YQ" frameBorder="0"
                            allowFullScreen></iframe>
                    </div>
                </div>
                <div className="section_outline_history">
                    <h3 className="title">
                        <img src={title_history} alt="沿革" />
                    </h3>
                    <p className="text">
                        2008年創業の「ヨシダオートサービス」は設立から10年目を迎えました。<br />
                        南大阪と言う地域と共に育ってきた「ヨシダオートサービス」の歴史とこれからの未来図です。
                    </p>
                    <table className="table1">
                        <tbody>
                            <tr>
                                <th rowSpan="3" className="table-year">'09</th>
                                <td className="table-month">1月</td>
                                <td className="table-sub">堺市北区に軽未使用車専門店「軽の森」オープン</td>
                            </tr>
                            <tr>
                                <td className="table-month">9月</td>
                                <td className="table-sub">認証整備工場取得</td>
                            </tr>
                            <tr>
                                <td className="table-month">12月</td>
                                <td className="table-sub">レンタカー事業許可取得</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table2">
                        <tbody>
                            <tr>
                                <th rowSpan="1" className="table-year">'11</th>
                                <td className="table-month">12月</td>
                                <td className="table-sub">指定整備工場取得</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table3">
                        <tbody>
                            <tr>
                                <th rowSpan="1" className="table-year">'12</th>
                                <td className="table-month">4月</td>
                                <td className="table-sub">堺市南区に軽未使用車専門店「軽の森 泉北店」オープン</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table4">
                        <tbody>
                            <tr>
                                <th rowSpan="2" className="table-year">'13</th>
                                <td className="table-month">8月</td>
                                <td className="table-sub">カーベルネットワーク加盟　100円レンタカーフランチャイズ加盟</td>
                            </tr>
                            <tr>
                                <td className="table-month">12月</td>
                                <td className="table-sub">年間販売台数3500台突破</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table5">
                        <tbody>
                            <tr>
                                <th rowSpan="2" className="table-year">'14</th>
                                <td className="table-month">3月</td>
                                <td className="table-sub">富田林市に軽未使用車専門店「軽の森 富田林駅前店」オープン</td>
                            </tr>
                            <tr>
                                <td className="table-month">9月</td>
                                <td className="table-sub">堺市北区なかもずに本社を移転</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table6">
                        <tbody>
                            <tr>
                                <th rowSpan="1" className="table-year">'15</th>
                                <td className="table-month">8月</td>
                                <td className="table-sub">富田林市に格安中古車専門店「軽39.8万円専門店 軽パーク」オープン</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table7">
                        <tbody>
                            <tr>
                                <th rowSpan="1" className="table-year">'16</th>
                                <td className="table-month">8月</td>
                                <td className="table-sub">堺市北区に45分車検専門店「マッハ車検 なかもず店」オープン</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table8">
                        <tbody>
                            <tr>
                                <th rowSpan="1" className="table-year">'17</th>
                                <td className="table-month">12月</td>
                                <td className="table-sub">堺市堺区に45分車検専門店「マッハ車検 堺鉄炮町店」オープン</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table9">
                        <tbody>
                            <tr>
                                <th rowSpan="3" className="table-year">'18</th>
                                <td className="table-month">4月</td>
                                <td className="table-sub">株式会社マエダより板金部門を事業譲渡</td>
                            </tr>
                            <tr>
                                <td className="table-month">6月</td>
                                <td className="table-sub">堺市堺区に新車リース専門店「新車市場 堺鉄炮町店」オープン</td>
                            </tr>
                            <tr>
                                <td className="table-month">8月</td>
                                <td className="table-sub">堺市北区に普通車未使用車専門店「車の森 もず店」オープン</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table10">
                        <tbody>
                            <tr>
                                <th rowSpan="3" className="table-year">'19</th>
                                <td className="table-month">9月</td>
                                <td className="table-sub">堺市北区に普通車未使用車専門店「車の森 なかもず店」オープン</td>
                            </tr>
                            <tr>
                                <td className="table-month">6月</td>
                                <td className="table-sub">株式会社洗車の王国と国内第一号の正規代理店契約。洗車・コーティング・ペイントプロテクションフィルム事業を開始</td>
                            </tr>
                            <tr>
                                <td className="table-month">12月</td>
                                <td className="table-sub">泉大津市に軽未使用車専門店「軽の森 泉大津店・洗車の王国泉大津店」オープン</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table11">
                        <tbody>
                            <tr>
                                <th rowSpan="3" className="table-year">'20</th>
                                <td className="table-month">1月</td>
                                <td className="table-sub">大阪狭山市に45分車検専門店「マッハ車検 大阪狭山店」・新車リース専門店「新車市場 大阪狭山店」オープン</td>
                            </tr>
                            <tr>
                                <td className="table-month">3月</td>
                                <td className="table-sub">堺市堺区に新車低金利ミニバン・SUV専門店「車流通革命 堺鉄砲町店」オープン<br />
                                    堺市北区に新車低金利ミニバン・SUV専門店「車流通革命 なかもず店」オープン</td>
                            </tr>
                            <tr>
                                <td className="table-month">5月</td>
                                <td className="table-sub">光触媒チタセランコーティングを使用した 住宅・店舗向け除菌・抗菌サービス事業『KOUKIN』を開始。</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="section_outline_organization">
                    <h3 className="title">
                        <img src={title_organization} alt="組織図" />
                    </h3>
                    <div className="chart">
                        <img src={organization} alt="組織図"/>
                    </div>
                </div>
                <BackBtn />
                <div className="contentsLogo-history">
                    <img src={history} alt="History" />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Base;
