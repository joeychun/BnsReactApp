import React from 'react';
import Banner from './banner';

const EmptyBanner = () => {
    return (
        <Banner noDivider={true} bgColor={"#ffffff"} heading={""} textBodies={[]} 
            img={""} bgImg={""} maxWidth={"100%"} />
    )
}

export default EmptyBanner;