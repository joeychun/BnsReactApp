import React from 'react';
import Banner from './banner';

const EmptyBanner = () => {
    return (
        <Banner empty={true} bgColor={"#ffffff"} heading={""} textBodies={[]} 
            img={""} bgImg={""} maxWidth={"100%"} />
    )
}

export default EmptyBanner;