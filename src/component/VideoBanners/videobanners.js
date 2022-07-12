import React from 'react';
import Banner from '../../shared/Banner/banner';
import EmptyBanner from '../../shared/Banner/emptybanner';

const content = {
    heading: "Videos",
    textBodies: [],
    img: "",
}

const cssSettings = {
    bgColor: "#364261",
    maxWidth: "80%",
}

const VideoBanner = () => {
    return (
        <div>
            <Banner bannerId="" noDivider={false} bgColor={cssSettings.bgColor} heading={content.heading} textBodies={content.textBodies}
                img={content.img} bgImg={content.bgImg} maxWidth={cssSettings.maxWidth} />
        </div>
    )
}

export default VideoBanner;