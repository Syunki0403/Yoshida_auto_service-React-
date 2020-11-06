import React from 'react';

const MapModal = (props) => {
    const closeMapModal = () => {
        document.getElementById("map_modal").classList.remove('show');
    };

    return (
        <div id="map_modal" className="map_modal">
            <div className="map_modal_contents">
                <a className="map_modal_closebtn" onClick={closeMapModal}></a>
                <ul className="map_modal_item">
                    <li className="map_modal_item_inner">
                        <iframe
                            src={props.map}
                            width="100%" height="450vh" frameBorder="0" style={{ border: 0 }} allowFullScreen=""
                            aria-hidden="false" tabIndex="0"></iframe>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MapModal;
