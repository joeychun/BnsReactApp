import React from 'react';
import Banner from './banner';

const EmptyBanner = ({ bgColor, topPadding, bottomPadding }) => {
    /*
    EmptyBanner is a Banner component with no text and content.
    */
    return (
        <Banner bannerId="" noDivider={true} bgColor={bgColor} heading={""} textBodies={[]}
            img={""} bgImg={""} maxWidth={"100%"} topPadding={topPadding} bottomPadding={bottomPadding} />
    )
}

export default EmptyBanner;