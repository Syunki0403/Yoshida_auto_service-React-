import React from 'react';
import Menu from '../Template/Menu';
import Footer from '../Template/Footer';
import BackBtn from '../Template/BackBtn';
import { Link } from 'react-scroll';
import EntryBtn from './EntryBtn';
import recruit01 from '../../assets/img/recruit/recruit2.png';
import recruit02 from '../../assets/img/recruit/recruit3.png';
import title_recruit from '../../assets/img/recruit/recruit_recruit.png';
import title_working from '../../assets/img/recruit/recruit_working.png';
import title_careers from '../../assets/img/recruit/recruit_careers.png';
import title_entry from '../../assets/img/recruit/recruit_entry.png';
import nav_eigyo from '../../assets/img/recruit/recruit_1.png';
import nav_seibisi from '../../assets/img/recruit/recruit_2.png';
import nav_front from '../../assets/img/recruit/recruit_3.png';
import nav_customer from '../../assets/img/recruit/recruit_4.png';
import nav_kanri from '../../assets/img/recruit/recruit_5.png';
import nav_hoken from '../../assets/img/recruit/recruit_6.png';
import eigyo from '../../assets/img/recruit/recruit_eigyo.png';
import seibisi from '../../assets/img/recruit/recruit_seibishi.png';
import front from '../../assets/img/recruit/recruit_front.png';
import customer from '../../assets/img/recruit/recruit_customer.png';
import kanri from '../../assets/img/recruit/recruit_kanri.png';
import hoken from '../../assets/img/recruit/recruit_hoken.png';
import eigyo_01 from '../../assets/img/recruit/member/eigyo/pic_work01_body_bg01_c.jpg';
import eigyo_02 from '../../assets/img/recruit/member/eigyo/pic_work01_body_bg02_c.jpg';
import eigyo_03 from '../../assets/img/recruit/member/eigyo/pic_work01_body_bg03_c.jpg';
import seibisi_01 from '../../assets/img/recruit/member/seibisi/pic_work02_body_bg01_c.jpg';
import seibisi_02 from '../../assets/img/recruit/member/seibisi/pic_work02_body_bg02_c.jpg';
import seibisi_03 from '../../assets/img/recruit/member/seibisi/pic_work02_body_bg03_c.jpg';
import front_01 from '../../assets/img/recruit/member/front/pic_work03_body_bg01_c.jpg';
import front_02 from '../../assets/img/recruit/member/front/pic_work03_body_bg02_c.jpg';
import front_03 from '../../assets/img/recruit/member/front/pic_work03_body_bg03_c.jpg';
import customer_01 from '../../assets/img/recruit/member/customer/pic_work04_body_bg01_c.jpg';
import customer_02 from '../../assets/img/recruit/member/customer/pic_work04_body_bg02_c.jpg';
import customer_03 from '../../assets/img/recruit/member/customer/pic_work04_body_bg03_c.jpg';
import kanri_01 from '../../assets/img/recruit/member/kanri/pic_work05_body_bg01_c.jpg';
import kanri_02 from '../../assets/img/recruit/member/kanri/pic_work05_body_bg02_c.jpg';
import kanri_03 from '../../assets/img/recruit/member/kanri/pic_work05_body_bg03_c.jpg';
import hoken_01 from '../../assets/img/recruit/member/hoken/pic_work06_body_bg01_c.jpg';
import hoken_02 from '../../assets/img/recruit/member/hoken/pic_work06_body_bg03_c.jpg';
import mynavi from '../../assets/img/recruit/pic_entry_link05.gif';

const Base = () => {

    const openAccordion = (e) => {
        e.target.nextElementSibling.classList.toggle('show');
    };

    return (
        <>
            <Menu />
            <EntryBtn />
            <section id="recruit" className="contents_section section_recruit">
                <div className="contentsLogo-recruit01">
                    <img src={recruit01} alt="Recruit" />
                </div>
                <div className="section_recruit-box section_recruit_recruit">
                    <h3 className="title">
                        <img src={title_recruit} alt="仕事内容" />
                    </h3>
                    <ul className="navList">
                        <li>
                            <Link to="department_eigyo" smooth={true} duration={500}>
                                <img src={nav_eigyo} alt="営業" />
                            </Link>
                        </li>
                        <li>
                            <Link to="department_seibisi" smooth={true} duration={500}>
                                <img src={nav_seibisi} alt="自動車整備士" />
                            </Link>
                        </li>
                        <li>
                            <Link to="department_front" smooth={true} duration={500}>
                                <img src={nav_front} alt="フロント" />
                            </Link>
                        </li>
                        <li>
                            <Link to="department_customer" smooth={true} duration={500}>
                                <img src={nav_customer} alt="カスタマー" />
                            </Link>
                        </li>
                        <li>
                            <Link to="department_kanri" smooth={true} duration={500}>
                                <img src={nav_kanri} alt="管理部" />
                            </Link>
                        </li>
                        <li>
                            <Link to="department_hoken" smooth={true} duration={500}>
                                <img src={nav_hoken} alt="保険部" />
                            </Link>
                        </li>
                    </ul>
                    <div id="department_eigyo" className="section_recruit_recruit-department section_recruit_recruit_eigyo">
                        <h3 className="nav-title">
                            <img src={eigyo} alt="営業" />
                        </h3>
                        <div className="department_members">
                            <img className="member menber-1" src={eigyo_01} alt="" />
                            <img className="member menber-2" src={eigyo_02} alt="" />
                            <img className="member menber-3" src={eigyo_03} alt="" />
                        </div>
                        <dl className="member_comments">
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>ヨシダオートサービスで働くことの楽しさは何？</dt>
                            <dd className="comments_content">
                                地域のお客様に頼っていただけることが一番の楽しさであり、やりがいです。<br />
                                ヨシダオートサービスの営業は、「自動車を販売して終わり」ではなく、地域のお客様にとっての自動車のかかりつけ医であることを目標としていて、カーライフに合わせた自動車の提案から車検等の点検、万が一のトラブル時のサポートまで一貫して行なっています。<br />
                                日々お客様の為に一生懸命営業している中で「あなたに相談してよかった」と言っていただけた時は、やっぱり嬉しいですね。
                            </dd>
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>ヨシダオートサービスで働くことの厳しさは何？</dt>
                            <dd className="comments_content">
                                ヨシダオートサービスのスタッフは、どこまでもプロフェッショナルです。<br />
                                故に、新卒で入社すると、先輩の営業が壁になることもあるかもしれません。<br />
                                ですが、その先輩たちも同じ苦労を乗り越えて今があります。<br />
                                厳しさを乗り越えた先には、明るい未来が待っています！
                            </dd>
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>ヨシダオートサービスの営業の売りは何？</dt>
                            <dd className="comments_content">
                                地域1番の元気な挨拶と明るい笑顔！これに尽きます！
                            </dd>
                        </dl>
                    </div>
                    <div id="department_seibisi" className="section_recruit_recruit-department section_recruit_recruit_seibisi">
                        <h3 className="nav-title">
                            <img src={seibisi} alt="自動車整備士" />
                        </h3>
                        <div className="department_members">
                            <img className="member menber-1" src={seibisi_01} alt="" />
                            <img className="member menber-2" src={seibisi_02} alt="" />
                            <img className="member menber-3" src={seibisi_03} alt="" />
                        </div>
                        <dl className="member_comments">
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>ヨシダオートサービスで働くことの楽しさは何？</dt>
                            <dd className="comments_content">
                                整備だけでなく、直接お客様とのコミュニケーションを図れる機会がある点です。<br />
                                一般的な自動車販売店では、フロントに立つのは営業、技術まわりは整備士というのがよくある形ですが、ヨシダオートサービスでは整備士が直接お客様のお話を伺う機会があります。<br />
                                どんな想いでそのお車に乗られているか、どれだけクルマを愛されているかというお話を聞くと、整備する側も気合いが入りますよね。
                            </dd>
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>ヨシダオートサービスで働くことの厳しさは何？</dt>
                            <dd className="comments_content">
                                ただ言われたことをやっているだけでは、ヨシダオートサービスの整備士は務まりません。<br />
                                いかに安全かつスピーディーに整備ができるかを自ら考え、コミュニケーションを取る能力が求められます。
                            </dd>
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>ヨシダオートサービスの自動車整備士の売りは何？</dt>
                            <dd className="comments_content">
                                スピードとスタッフの人間性ですね！<br />
                                キビキビと動くことにかけては、大阪でも指折りだと思います。<br />
                                それから、スタッフみんな気を配れるいい人ばかりで、非常に雰囲気がいいです。<br />
                                これは整備士に限らず、ヨシダオートサービス全体の社風がそうだからかもしれません。
                            </dd>
                        </dl>
                    </div>
                    <div id="department_front" className="section_recruit_recruit-department section_recruit_recruit_front">
                        <h3 className="nav-title">
                            <img src={front} alt="フロント" />
                        </h3>
                        <div className="department_members">
                            <img className="member menber-1" src={front_01} alt="" />
                            <img className="member menber-2" src={front_02} alt="" />
                            <img className="member menber-3" src={front_03} alt="" />
                        </div>
                        <dl className="member_comments">
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>ヨシダオートサービスで働くことの楽しさは何？</dt>
                            <dd className="comments_content">
                                ありきたりですが、お客様が笑顔になってくれる瞬間にこの仕事の喜びを感じます。<br />
                            カフェやおしゃれな店舗内装など、同業他社にはないような充実した設備なので、自信を持って「また来てください！」と言うことができます。<br />
                            そうしてお客様に顔を覚えていただいて、いつの間にか仲良くなってることが多かったりするんです。<br />
                            自分の仕事が少しでもお客様や会社のためになっているんだなと実感できる瞬間ですね。
                        </dd>
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>ヨシダオートサービスで働くことの厳しさは何？</dt>
                            <dd className="comments_content">
                                ありがたいことに、毎日非常にたくさんのお客様にご来店いただけていますが、逆に言うと、それだけこなす仕事も多くなります。<br />
                            時間をうまく使わないと、お客様を待たせてしまうことになるので、常に頭を回さないといけません。
                        </dd>
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>ヨシダオートサービスのフロントの売りは何？</dt>
                            <dd className="comments_content">
                                「おもてなし」の精神ですね。どんなに忙しくても笑顔を忘れず、お客様にとって居心地の良い環境を提供する心を大事にしています。
                        </dd>
                        </dl>
                    </div>
                    <div id="department_customer" className="section_recruit_recruit-department section_recruit_recruit_customer">
                        <h3 className="nav-title">
                            <img src={customer} alt="カスタマー" />
                        </h3>
                        <div className="department_members">
                            <img className="member menber-1" src={customer_01} alt="" />
                            <img className="member menber-2" src={customer_02} alt="" />
                            <img className="member menber-3" src={customer_03} alt="" />
                        </div>
                        <dl className="member_comments">
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>ヨシダオートサービスで働くことの楽しさは何？</dt>
                            <dd className="comments_content">
                                営業全体がチーム一眼となって目標を達成したときに楽しさを感じます。<br />
                            営業事務は営業とコミュニケーションをとり業務を共有し、サポートしていくのが主な仕事です。営業事務がいることで力が増し、チームワークを発揮して目標を達成できたときはとてもやりがいを感じます。
                        </dd>
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>ヨシダオートサービスで働くことの厳しさは何？</dt>
                            <dd className="comments_content">
                                様々な業務が様々なタイミングでふってくることだと思います。<br />
                            きちんと業務の整理をしていないと何から手をつけていいかわからない状況になりかねません。それぞれの業務も優先順位を常に意識していくことが大切です。
                        </dd>
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>ヨシダオートサービスのカスタマーの売りは何？</dt>
                            <dd className="comments_content">
                                正直さ、ですね。<br />
                            営業から言われたことだけをやるような仕事の仕方ではなく、正直に自分の感じたことを相手に伝え、より良い仕事となるように心がけています。
                        </dd>
                        </dl>
                    </div>
                    <div id="department_kanri" className="section_recruit_recruit-department section_recruit_recruit_kanri">
                        <h3 className="nav-title">
                            <img src={kanri} alt="管理部" />
                        </h3>
                        <div className="department_members">
                            <img className="member menber-1" src={kanri_01} alt="" />
                            <img className="member menber-2" src={kanri_02} alt="" />
                            <img className="member menber-3" src={kanri_03} alt="" />
                        </div>
                        <dl className="member_comments">
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>もともとの職種は？</dt>
                            <dd className="comments_content">
                                元々は自動車の整備業務をしていて、リーダー、工場長などを経験し、統括本部へ入りました。<br />
                            会社のために、社員のために、改善できることは何かを現場にいた経験を生かして提案するようにしています。
                        </dd>
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>ヨシダオートサービスのここが好き</dt>
                            <dd className="comments_content">
                                入社1年目からでも責任ある仕事を任せてもらえるところです。<br />
                            ただの接客ではなく店舗全体の仕事に関わることで若い社員が早い成長を遂げることができます。<br />
                            先輩社員も若い社員をしっかり支えていくような社内の空気もとてもいいです。
                        </dd>
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>どんな社員が活躍できる？</dt>
                            <dd className="comments_content">
                                積極的に人とコミュニケーションがとれる人、そして素直な人です。<br />
                            お客様から同僚まで様々な人と接する職場ですので、人と接する力は欠かせません。<br />
                            そしてこれは私の持論ですが、上司や同僚の話を素直に受けとめて吸収できる人は成長していけると考えています。<br />
                            人と積極的に関わって、成長していける人がこの会社では活躍できると思います。
                        </dd>
                        </dl>
                    </div>
                    <div id="department_hoken" className="section_recruit_recruit-department section_recruit_recruit_hoken">
                        <h3 className="nav-title">
                            <img src={hoken} alt="保険部" />
                        </h3>
                        <div className="department_members">
                            <img className="member menber-1" src={hoken_01} alt="" />
                            <img className="member menber-2" src={hoken_02} alt="" />
                        </div>
                        <dl className="member_comments">
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>ヨシダオートサービスで働くことの楽しさは何？</dt>
                            <dd className="comments_content">
                                お客様から保険のことに関して自分宛てに電話などがあったりすると、お客様からの信頼を感じる事ができて、自分の説明に自信が持てたりします！また、店舗に来られたお客様で「保険のことについて聞きたい！」という方に対して営業のサポートとして説明することもあるので、直接お客様と接する機会も多く、チャレンジングな環境であるという点もヨシダオートサービスの良いところです。
                        </dd>
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>ヨシダオートサービスで働くことの厳しさは何？</dt>
                            <dd className="comments_content">
                                自動車保険は、万が一に備えておくためには必要不可欠なものだと思うのですが、その効用をうまくお客様に説明できないと必要だと感じていただけないので、説明の仕方は毎回工夫が必要です。
                        </dd>
                            <dt className="comments_title" onClick={(e) => openAccordion(e)}>ヨシダオートサービスの保険部の売りは何？</dt>
                            <dd className="comments_content">
                                ヨシダオートサービスの保険部はとにかく団結力が強く、仲も良いです！他の部署もみんな仲が良いのがヨシダオートサービスの特徴ですが、どの部署にも負けてないのが保険部です。フォローし合うことでお客様への説明もより質の高いものになりますし、働く上での活力にもなります。
                        </dd>
                        </dl>
                    </div>
                </div>
                <div className="section_recruit-box section_recruit_working">
                    <h3 className="title">
                        <img src={title_working} alt="働き方" />
                    </h3>
                    <div className="working_movie">
                        <iframe src="https://www.youtube.com/embed/gcApftPeRf0" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                        <span className="frame-TL"></span>
                        <span className="frame-TR"></span>
                        <span className="frame-BL"></span>
                        <span className="frame-BR"></span>
                    </div>
                </div>
                <div className="section_recruit-box section_recruit_careers">
                    <h3 className="title">
                        <img src={title_careers} alt="採用情報" />
                    </h3>
                    <dl className="careers_list">
                        <dt>募集職種</dt>
                        <dd>
                            営業、自動車整備士、フロント、営業アシスタント
                        </dd>
                        <dt>募集対象</dt>
                        <dd>
                            理系大学院生、理系学部生、文系大学院生、文系学部生、短大生、高専生、専門学校生、既卒者<br />
                            ※募集対象は2019年3月卒業見込みの方、あるいは卒業後3年以内の方
                        </dd>
                        <dt>募集人数</dt>
                        <dd>
                            21 〜 25名
                        </dd>
                        <dt>基本給</dt>
                        <dd>
                            ＜大卒＞<br />
                            ・営業：月給230,000円<br />
                            ・営業アシスタント：月給190,000円<br />
                            ・整備士：月給230,000円(2級整備士資格保有者)<br />
                            ・フロント：月給190,000円<br />
                            <br />
                            ＜専門卒・短大卒＞<br />
                            ・営業：月給220,000円<br />
                            ・営業アシスタント：月給190,000円<br />
                            ・整備士：月給230,000円(2級整備士資格保有者)<br />
                            ・フロント：月給190,000円<br />
                            <br />
                            ＜高卒＞<br />
                            ・営業：月給210,000円<br />
                            ・営業アシスタント：月給190,000円<br />
                            ・整備士：月給180,000円<br />
                            ・フロント：月給180,000円<br />
                            <br />
                            (その他手当・インセンティブあり)
                        </dd>
                        <dt>諸手当</dt>
                        <dd>
                            交通費支給(当社規定有)<br />
                            勤続手当、資格手当、役職手当、家族手当、住宅手当(最高17,000円)、インセンティブ制度有、結婚出産祝金
                        </dd>
                        <dt>昇給</dt>
                        <dd>
                            年1回＋随時
                        </dd>
                        <dt>賞与</dt>
                        <dd>
                            年2回(7月・12月)(業績によります)
                        </dd>
                        <dt>休日休暇</dt>
                        <dd>
                            週休2日制(シフト制) ※年間休日105日
                        </dd>
                        <dt>待遇・福利厚生・社内制度</dt>
                        <dd>
                            ・社会保険完備<br />
                            ・制服貸与、社員割引あり<br />
                            ・実力主義の給与体系・評価制度の導入<br />
                            ・福利厚生が充実<br />
                            ・教育・研修制度が充実<br />
                            ・資格取得支援制度あり<br />
                            ・産休・育児休暇取得実績あり<br />
                            ・家賃補助制度あり
                        </dd>
                        <dt>勤務地</dt>
                        <dd>
                            *軽の森*<br />
                            (なかもず店)大阪府堺市北区長曾根町3083-10<br />
                            (泉北店)大阪府堺市南区原山台5-10-2<br />
                            (富田林店)大阪府富田林市若松町西1-1880<br />
                            (泉大津店)大阪府泉大津市千原町 2-21-16<br />
                            <br />
                            *マッハ車検*<br />
                            (なかもず店)大阪府堺市北区長曾根町3083-1<br />
                            (堺鉄砲町店)大阪府堺市堺区三宝町4-249<br />
                            <br />
                            *軽パーク*<br />
                            (富田林店)大阪府富田林市若松町西1-1878-1<br />
                            <br />
                            *車の森*<br />
                            (もず店)大阪府堺市北区百舌鳥西之町3-541<br />
                            (なかもず店)大阪府堺市北区金岡町1377-6<br />
                            <br />
                            *新車市場*<br />
                            (堺店)大阪府堺市堺区三宝町4-250<br />
                            <br />
                            *ピッカーズ*<br />
                            (富田林店)大阪府富田林市若松町東2-6-31
                        </dd>
                        <dt>勤務時間</dt>
                        <dd>
                            営業　9：00～19：00(実働8時間・休憩時間120分)<br />
                            営業アシスタント・フロント・自動車整備士　9：00～18：00(実働8時間・休憩時間60分)
                        </dd>
                        <dt>教育・研修制度</dt>
                        <dd>
                            ・新入社員研修(マナー研修)<br />
                            ・営業ロープレ研修<br />
                            ・保険研修<br />
                            ・OJT<br />
                            ・システム研修<br />
                            ・勉強会
                        </dd>
                    </dl>
                </div>
                <div id="section_recruit_entry" className="section_recruit-box section_recruit_entry">
                    <h3 className="title">
                        <img src={title_entry} alt="応募" />
                    </h3>
                    <p className="entry_text">下記リンクよりエントリーしてください。</p>
                    <p className="entry_phone">※中途採用でご応募の方は、直接店舗までお電話下さい (<a href="#">各店舗の電話番号はこちら</a>)</p>
                    <div className="entry_mynabi">
                        <a href="https://job.mynavi.jp/21/pc/search/corp106732/outline.html">
                            <img src={mynavi} alt="マイナビ" />
                        </a>
                    </div>
                </div>
                <BackBtn />
                <div className="contentsLogo-recruit02">
                    <img src={recruit02} alt="Recruit" />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Base;
