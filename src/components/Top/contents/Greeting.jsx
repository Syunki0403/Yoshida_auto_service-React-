import React from 'react';
import NextBtn from '../../Template/NextBtn';
import president from '../../../assets/img/top/greeting_president.png';
import title from '../../../assets/img/top/title_greeting.png';
import greeting from '../../../assets/img/top/greeting_logo.png';
import greetingWrap from '../../../assets/img/top/wrap_greeting.png';

const Greeting = () => {
    return (
        <section id={"top_greeting"} className={"top_contents top_greeting"}>
            <div className={"president"}>
                <img src={president} alt="社長" />
            </div>
            <div className={"top_greeting_box"}>
                <h3 className={"title"}>
                    <img src={title} alt="代表挨拶" />
                </h3>
                <p className={"text"}>
                    私の幼少時代、やっと言葉が話せるようになったぐらいの頃、<br />
                    みんなが豊かで幸せだった時代です。<br />
				    社員は自分の仕事と会社に誇りを持ち、<br />
				    会社は社員を家族のように大切にしていました。<br />
				    お客様一人一人と心の通うお付き合いをし、<br />
				    お客様に起こったことはまるで自分のことのように親身になっていました。
                </p>
            </div>
            <div className={"nextbtnArea"}>
                <NextBtn text={"続きを読む"} path={"philosophy"} />
            </div>
            <div className={"greetingLogo"}>
                <img src={greeting} alt="greeting" />
            </div>
            <div id={"greetingWrap"} className={"contentsWrap"}>
                <img src={greetingWrap} alt="" />
            </div>
        </section>
    )
}

export default Greeting;