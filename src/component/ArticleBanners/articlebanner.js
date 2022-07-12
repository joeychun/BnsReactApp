import React from 'react';
import Banner from '../../shared/Banner/banner';
import EmptyBanner from '../../shared/Banner/emptybanner';
import SneakPeak from '../Article/sneakpeak';
import { Flex } from 'rebass/styled-components';
import { Footer } from 'antd/lib/layout/layout';

const content = {
    heading: "Articles",
    textBodies: [],
    img: "",
}

const cssSettings = {
    bgColor: "#364261",
    maxWidth: "80%",
}

const ArticleBanner = () => {
    return (
        <div>
            <Banner bannerId="" noDivider={false} bgColor={cssSettings.bgColor} heading={content.heading} textBodies={content.textBodies}
                img={content.img} bgImg={content.bgImg} maxWidth={cssSettings.maxWidth} />
            {/* <SneakPeak title="asdf" authorId={10} txt="test.txt" date="asdf" /> */}
            <Footer />
        </div>
    )
}

export default ArticleBanner;