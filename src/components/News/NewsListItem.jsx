import React from 'react';
import { Link } from 'react-router-dom';

const NewsListItem = (props) => {
    return (
        <>
            <li>
                <Link>
                    <div>
                        <img src={props.thumbnail} alt="" />
                    </div>
                    <time>{props.day}</time>
                    <p className="list_title">{props.title}</p>
                    <p className="list_text">{props.text}</p>
                    <p className="more">
                        <span>READ MORE</span>
                    </p>
                </Link>
            </li>
        </>
    )
}

export default NewsListItem;
