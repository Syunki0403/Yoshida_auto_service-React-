import React from 'react';
import Menu from '../Template/Menu';
import Footer from '../Template/Footer';
import BackBtn from '../Template/BackBtn';
import NewsList from './NewsList';
import title from '../../assets/img/news/news_title.png';
import news from '../../assets/img/news/news.png';

const Base = () => {
    return (
        <>
            <Menu />
            <section id="news" className="contents_section section_news">
                <div className="contents_section_box">
                    <h3 className="title">
                        <img src={title} alt="新着情報" />
                    </h3>
                    <NewsList />
                    <BackBtn />
                </div>
                <div className="contentsLogo">
                    <img src={news} alt="News" />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Base;
