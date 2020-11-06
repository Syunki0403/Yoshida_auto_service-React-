import React from 'react';
import ShopsInfoListItem from './ShopsInfoListItem';
import shopsDataset from '../shopsDataset';

const ShopInfoList = (props) => {
    const shopDetailData = shopsDataset['details'];

    return (
        <ul className="shops_modal_list">
            {shopDetailData.map((value, index) => {
                return (
                    <ShopsInfoListItem
                        id={value.id}
                        title={value.title}
                        dataExp={value.dataExp}
                        shop={value.shop}
                        postalCode={value.postalCode}
                        address={value.address}
                        phone={value.phone}
                        fax={value.fax}
                        image={value.image}
                        map={value.map}
                        scene={value.scene}
                        setMap={props.setMap}
                        setScene={props.setScene}
                        setPictures={props.setPictures}
                        setInitialSlide={props.setInitialSlide}
                        key={index}
                    />
                )
            })}
        </ul>
    )
}

export default ShopInfoList;
