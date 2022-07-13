import React from 'react';
import Banner from '../../shared/Banner/banner';

const content = {
    heading: "About Us",
    textBodies: [
        "We are Seoul International School's Behavioral Neuroscience Club.",
        "We aim to widen our knowledge on psychology and spread our knowledge throughout our community.  Come join us!"],
    img: "",
}

const cssSettings = {
    bgColor: "#364261",
    maxWidth: "80%",
    bottomPadding: 330
}

const AboutBanner = () => {
    return (
        <div>
            <Banner bannerId="" noDivider={false} bgColor={cssSettings.bgColor} heading={content.heading} textBodies={content.textBodies}
                img={content.img} bgImg={content.bgImg} maxWidth={cssSettings.maxWidth} bottomPadding={cssSettings.bottomPadding} />
        </div>
    )
}

export default AboutBanner;
