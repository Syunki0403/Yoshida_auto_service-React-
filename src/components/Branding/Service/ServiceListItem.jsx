import React from 'react';

const ServiceListItem = (props) => {
    return (
        <li className="service_list_contents">
            <a className="list_link" href="https://keinomori.com/">
                <h5 className="list_title">
                    <img src={props.name} alt="" />
                </h5>
                <div className="list_picture">
                    <img src={props.shop} alt="" />
                </div>
                <p className="list_text">{props.text}</p>
            </a>
        </li>
    )
}

export default ServiceListItem;
