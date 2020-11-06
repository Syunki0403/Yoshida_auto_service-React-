import React from 'react';
import NewsListItem from './NewsListItem';
import articleDataset from './articleDataset';

const NewsList = () => {
    return (
        <ul className="section_news_list">
            {articleDataset.map((value, index) => {
                return (
                    <NewsListItem
                        thumbnail={value.thumbnail}
                        title={value.title}
                        day={value.day}
                        text={value.text}
                        key={index}
                    />
                )
            })}
        </ul>
    )
}

export default NewsList;
