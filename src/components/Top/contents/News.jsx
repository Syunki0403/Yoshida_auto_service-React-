import React from 'react';
import NextBtn from '../../Template/NextBtn';
import title from '../../../assets/img/top/title_news.png';
import photo from '../../../assets/img/top/keinomori_pic.png';
import news from '../../../assets/img/top/news.png';
import newsWrap from '../../../assets/img/top/wrap_news.png';

const News = () => {
    return (
        <section id={"top_news"} className={"top_contents top_news"}>
            <h3 className={"title"}>
                <img src={title} alt="新着情報" />
            </h3>
            <div className={"articleBox"}>
                <article>
                    <a href="#">
                        <time>2020-04-18 10:25:32</time>
                        <dl>
                            <dt>コロナウイルス感染拡大防止に関する取り組み</dt>
                            <dd className={"line-clamp"}>平素よりヨシダオートサービスをご愛顧いただき、誠にありがとうございます。 新型コロナウイルスの感染拡大にともない、</dd>
                        </dl>
                        <p className={"more"}>
                            <span>READ MORE</span>
                        </p>
                    </a>
                </article>
                <article>
                    <a href="#">
                        <time>2020-03-16 16:52:26</time>
                        <dl>
                            <dt>新型コロナウイルスに対する当社の対応について</dt>
                            <dd className={"line-clamp"}>はじめに、このたびの新型コロナウィルスに罹患された皆様と、 感染拡大により生活に影響を受けられている皆様に、心より</dd>
                        </dl>
                        <p className={"more"}>
                            <span>READ MORE</span>
                        </p>
                    </a>
                </article>
                <article>
                    <a href="#">
                        <time>2019-12-23 10:11:40</time>
                        <dl>
                            <dt>年末年始 営業時間変更のお知らせ</dt>
                            <dd className={"line-clamp"}>日頃よりヨシダオートサービスをご愛顧いただき、誠にありがとうございます。 誠に勝手ながら、年末年始につきまして、下記の通り</dd>
                        </dl>
                        <p className={"more"}>
                            <span>READ MORE</span>
                        </p>
                    </a>
                </article>
            </div>
            <div className={"nextbtnArea"}>
                <NextBtn text={"ニュースリストへ"} path={"news"}/>
            </div>
            <div className={"photo"}>
                <img src={photo} alt="" />
            </div>
            <div className={"newsLogo"}>
                <img src={news} alt="news" />
            </div>
            <div id={"newsWrap"} className={"contentsWrap"}>
                <img src={newsWrap} alt="" />
            </div>
        </section>
    )
}

export default News;