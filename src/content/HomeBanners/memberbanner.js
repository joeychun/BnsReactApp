import React from 'react';
import Banner from '../../shared/Banner/banner';

const content = {
    heading: "Members",
    textBodies: ["asdf"],
    img: "",
    bgImg: "../../../public/img/logo192.png", // This path is from banner.css's POV.
}

const cssSettings = {
    bgColor: "#43537b",
    maxWidth: "80%",
}

const MemberBanner = () => {
    return (
        <Banner empty={false} bgColor={cssSettings.bgColor} heading={content.heading} textBodies={[]} 
            img={content.img} bgImg={content.bgImg} maxWidth={cssSettings.maxWidth} />
    )
}

export default MemberBanner;
