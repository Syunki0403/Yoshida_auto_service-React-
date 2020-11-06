import React from 'react';

const SceneModal = (props) => {
    const closeSceneModal = () => {
        document.getElementById("scene_modal").classList.remove('show');
    };

    return (
        <div id="scene_modal" className="scene_modal">
            <div className="scene_modal_contents">
                <a className="scene_modal_closebtn" onClick={closeSceneModal}></a>
                <ul className="scene_modal_item">
                    <li className="scene_modal_item_inner">
                        <iframe
                            src={props.scene}
                            width="100%" height="450vh" frameBorder="0" style={{ border: 0 }} allowFullScreen=""
                            aria-hidden="false" tabIndex="0"></iframe>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SceneModal;
