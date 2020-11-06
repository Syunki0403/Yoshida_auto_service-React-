import React from 'react';
import { Link } from 'react-router-dom';
import back from '../../assets/img/back_btn.png';

const BackBtn = () => {
    return (
        <div className={"backbtn"} type="button">
            <Link to={'/'}>
                <img src={back} alt="BACK"/>
            </Link>
        </div>
    )
}

export default BackBtn;
