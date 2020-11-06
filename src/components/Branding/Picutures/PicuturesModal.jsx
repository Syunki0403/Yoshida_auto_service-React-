import React from 'react';
import Slider from 'react-slick';

const PicuturesModal = (props) => {

    let settings = {
        infinite: false,
        touchMove: false,
        initialSlide: props.initialSlide,
    }

    const closeMapModal = () => {
        document.getElementById("pictures_modal").classList.remove('show');
    };

    return (
        <div id="pictures_modal" className="pictures_modal">
            <div className="pictures_modal_contents">
                <a className="pictures_modal_closebtn" onClick={closeMapModal}></a>
                <Slider {...settings}>
                    {(props.pictures).map((path, index) => {
                        return (
                            <div className="slide_contents_item" key={index}>
                                <img src={path} alt="" />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default PicuturesModal;
