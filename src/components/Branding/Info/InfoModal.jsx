import React from 'react';
import ShopInfoList from './ShopInfoList';

const InfoModal = (props) => {
    const closeShopInfo = () => {
        document.getElementById("shops_modal").classList.remove('show');
        document.getElementById(props.modalId).classList.remove('show');
    };

    return (
        <div id="shops_modal" className="shops_modal">
            <div className="shops_modal_contents">
                <a className="shops_modal_closebtn js-shops_modal_close" onClick={closeShopInfo}></a>
                <div className="shops_modal_headline"></div>
                <ShopInfoList setMap={props.setMap} setScene={props.setScene} setPictures={props.setPictures} setInitialSlide={props.setInitialSlide} />
                <div className="shops_modal_footline"></div>
            </div>
        </div>
    )
}

export default InfoModal;
