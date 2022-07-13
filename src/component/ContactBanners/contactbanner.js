import React from 'react';
import Banner from '../../shared/Banner/banner';

const content = {
    heading: "Contact",
    textBodies: [],
    img: "",
}

const cssSettings = {
    bgColor: "#364261",
    maxWidth: "80%",
}

const ContactBanner = () => {
    return (
        <div>
            <Banner bannerId="" noDivider={true} bgColor={cssSettings.bgColor} heading={content.heading} textBodies={content.textBodies}
                img={content.img} bgImg={content.bgImg} maxWidth={cssSettings.maxWidth} />
        </div>
    )
}

export default ContactBanner;