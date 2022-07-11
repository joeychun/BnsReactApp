import React from 'react';
import Banner from './banner';

const EmptyBanner = ({ bgColor }) => {
    return (
        <Banner bannerId="" noDivider={true} bgColor={bgColor} heading={""} textBodies={[]}
            img={""} bgImg={""} maxWidth={"100%"} />
    )
}

export default EmptyBanner;