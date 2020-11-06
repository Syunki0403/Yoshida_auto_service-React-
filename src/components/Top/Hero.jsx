import React from 'react';
import YAS from '../../assets/img/YAS.png';
import logo from '../../assets/img/logo.png';

const Hero = () => {
    return (
        <div className={"heroBox"}>
            <div className={"heroBox_imageArea"}>
                <div className={"heroImgBox"}>
                    <div className={"heroImg src1"}></div>
                    <div className={"heroImg src2"}></div>
                    <div className={"heroImg src3"}></div>
                    <div className={"heroImg src4"}></div>
                </div>
                <h1 className={"heroBox_YAS"}>
                    <img src={YAS} alt="yoshida_auto_service" />
                </h1>
                <div className={"heroBox_logo"}>
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className={"heroBox_arrowArea"}>
                <span className={"arrow-bottom"}></span>
            </div>
        </div>
    )
}

export default Hero;