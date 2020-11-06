import React from 'react';

const ShopsInfoListItem = (props) => {

    const openMapModal = () => {
        props.setMap(props.map);
        document.getElementById("map_modal").classList.add('show');
    };

    const openSceneModal = () => {
        props.setScene(props.scene);
        document.getElementById("scene_modal").classList.add('show');
    };

    const openPicututersModal = (e) => {
        const index = (e.currentTarget.id).slice(-1);
        props.setInitialSlide(index);

        const picutureList = [];
        (props.image).map((path) => {
            picutureList.push(path);
        });
        props.setPictures(picutureList);
        document.getElementById("pictures_modal").classList.add('show');
    }

    return (
        <li id={props.id} className="list_inner">
            <div className="modal_header">
                <h3 className="modal_title" data-exp={props.dataExp}>
                    <img src={props.title} alt="" />
                </h3>
                <div className="modal_diagonal-line"></div>
            </div>
            <h4>{props.shop}</h4>
            <p>&#12306;{props.postalCode}</p>
            <p>{props.address}</p>
            <p>TEL:<a className="modal_tel" href={`tel:${props.phone}`}>{props.phone}</a></p>
            <p>FAX:{props.fax}</p>
            <div className="modal_item-btn">
                <div className="modal_item-btn_map">
                    <a onClick={() => openMapModal()}>
                        <i></i>
                        <span>店舗地図</span>
                    </a>
                </div>
                <div className="modal_item-btn_scene">
                    <a onClick={() => openSceneModal()}>
                        <i></i>
                        <span>店内風景</span>
                    </a>
                </div>
            </div>
            <ul className="modal_pictures">
                {props.image.length > 0 && ((props.image).map((path, index) => {
                    return (
                        <li id={`${props.id}_${index}`} key={index} onClick={(e) => openPicututersModal(e)}>
                            <img src={path} alt="" />
                        </li>
                    )
                }))}
            </ul>
        </li>
    )
}

export default ShopsInfoListItem;
