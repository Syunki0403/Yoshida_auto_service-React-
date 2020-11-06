import React from 'react';

const ShopsListItem = (props) => {
    const modalId = `modal_${props.id}`;

    const openShopInfo = () => {
        document.getElementById("shops_modal").classList.add('show');
        document.getElementById(modalId).classList.add('show');
        props.setModalId(modalId);
    };

    return (
        <li className="shops_contents">
            <a className="shops_contents_text" onClick={openShopInfo}>{props.name}</a>
        </li>
    )
}

export default ShopsListItem;
