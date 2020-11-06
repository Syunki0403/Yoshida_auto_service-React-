import React from 'react';
import { Link } from 'react-router-dom';

const NextBtn = (props) => {
    return (
        <div className={"nextbtn"} type="button">
            <Link to={`/${props.path}`}>
                <span>{props.text}</span>
            </Link>
        </div>
    )
}

export default NextBtn;