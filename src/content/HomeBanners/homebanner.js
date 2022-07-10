import React from 'react';
import Banner from '../../shared/Banner/banner';
import EmptyBanner from '../../shared/Banner/emptybanner';
import AboutBanner from './aboutbanner';
import MemberBanner from './memberbanner';

const content = {
    heading: "About Us",
    textBodies: [
        "We are Seoul International School's Behavioral Neuroscience Club.",
        "We aim to widen our knowledge on psychology and spread our knowledge throughout our community.  Come join us!"],
    img: "",
    bgImg: "../../../public/img/logo192.png", // This path is from banner.css's POV.
}

const cssSettings = {
    bgColor: "#364261",
    maxWidth: "80%",
}

const HomeBanner = () => {
    return (
        <div>
            <AboutBanner />
            <EmptyBanner />
            <MemberBanner />
        </div>
    )
}

export default HomeBanner;
