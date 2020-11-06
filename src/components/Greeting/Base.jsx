import React from 'react';
import Menu from '../Template/Menu';
import Footer from '../Template/Footer';
import BackBtn from '../Template/BackBtn';
import greeting from '../../assets/img/greeting/greeting_logo.png';
import title_greeting from '../../assets/img/greeting/greeting_title.png';
import president from '../../assets/img/greeting/pic_philosophy02_c.jpg';
import menber01 from '../../assets/img/greeting/greeting_membar1.png';
import menber02 from '../../assets/img/greeting/greeting_membar2.png';
import menber03 from '../../assets/img/greeting/greeting_membar3.png';
import title_philosophy from '../../assets/img/greeting/greeting_philosophy.png';
import title_policy from '../../assets/img/greeting/greeting_policy.png';
import title_vision from '../../assets/img/greeting/greeting_vision.png';
import philosophy from '../../assets/img/greeting/philosophy.png';

const Base = () => {
    return (
        <>
            <Menu />
            <section id="greeting" className="contents_section section_greeting">
                <div className="contentsLogo-greeting">
                    <img src={greeting} alt="Greeting" />
                </div>
                <div className="section_greeting-box section_greeting_greeting">
                    <h3 className="title">
                        <img src={title_greeting} alt="代表挨拶" />
                    </h3>
                    <div className="president">
                        <img src={president} alt="社長" />
                    </div>
                    <h5>代表挨拶</h5>
                    <p className="text">
                        私の幼少時代、やっと言葉が話せるようになったぐらいの頃、みんなが豊かで幸せだった時代です。
                        社員は自分の仕事と会社に誇りを持ち、会社は社員を家族のように大切にしていました。
                        お客様一人一人と心の通うお付き合いをし、お客様に起こったことはまるで自分のことのように親身になっていました。
                        効率を追求する成果主義に日本的経営が席巻されている今、懐古的な理想論の様に聞こえると思いますが、
                        経営の最終ゴールは人を幸せにすることに尽きると思います。人間の温もりや人間臭さを大切にし、
                        組織の連帯感を大きくし続けることができるのであれば、理想を実現させることも可能でしょう。
                        喜びややりがい、時には苦労を共に分かち合える家族のような会社、昔の商店のような人と人とのつながりを大切にする会社、
                        地域の車の『かかりつけ医』となる会社、こんな会社を創りたいと目標を持ったのが私の創業の原点です。
                    </p>
                    <p className="name">
                        <span>代表取締役</span><br />
                        <span>吉田　宜史</span><span className="roman">Yoshida Takashi</span>
                    </p>
                </div>
                <div className="menber-box">
                    <div className="menber01">
                        <img src={menber01} alt="堂前" />
                    </div>
                    <div className="menber02">
                        <img src={menber02} alt="森口" />
                    </div>
                    <div className="menber03">
                        <img src={menber03} alt="南埜" />
                    </div>
                </div>
                <div className="section_greeting-box section_greeting_philosophy">
                    <h3 className="title">
                        <img src={title_philosophy} alt="経営理念" />
                    </h3>
                    <p>地域・社員と共に生き、共に育つ</p>
                </div>
                <div className="section_greeting-box section_greeting_policy">
                    <h3 className="title">
                        <img src={title_policy} alt="経営方針" />
                    </h3>
                    <p>南大阪の自動車ユーザーにワンストップサービス、バリューチェーンを構築し、安心・快適・感動を提供する</p>
                </div>
                <div className="section_greeting-box section_greeting_vision">
                    <h3 className="title">
                        <img src={title_vision} alt="ビジョン" />
                    </h3>
                    <p>自動車業界に先見的で卓越した大きなインパクトを起こし、自動車という地域のインフラに消える事のない軌跡を刻み、繁栄し続ける</p>
                </div>
                <BackBtn />
                <div className="contentsLogo-philosophy">
                    <img src={philosophy} alt="Philosophy" />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Base;
