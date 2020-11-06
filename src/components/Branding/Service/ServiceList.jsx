import React from 'react'
import ServiceListItem from './ServiceListItem';
import serviceDataset from '../serviceDataset';

const ServiceList = () => {
    return (
        <ul className="service_list">
            {serviceDataset.map((value, index) => {
                return (
                    <ServiceListItem
                        name={value.name}
                        shop={value.shop}
                        text={value.text}
                        key={index}
                    />
                )
            })}
        </ul>
    )
}

export default ServiceList
