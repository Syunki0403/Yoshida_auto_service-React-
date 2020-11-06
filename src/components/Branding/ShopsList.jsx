import React from 'react';
import ShopsListItem from './ShopsListItem';
import shopsDataset from './shopsDataset';

const ShopsList = (props) => {
    const shopsData = shopsDataset['shops'];

    return (
        <ul className="shops_list">
            {shopsData.map((shop, index) => {
                return (
                    <ShopsListItem 
                        id={shop.id}
                        name={shop.name}
                        setModalId={props.setModalId}
                        key={index}
                    />
                )
            })}
        </ul>
    )
}

export default ShopsList;
