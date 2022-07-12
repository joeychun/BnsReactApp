import React from 'react';
import Banner from '../../../shared/Banner/banner';
import EmptyBanner from '../../../shared/Banner/emptybanner';
import SneakPeak from './sneakpeak';
import { Flex } from 'rebass/styled-components';
import { Footer } from 'antd/lib/layout/layout';
import Articles from '../../../content/Articles.json'
import TxtReader from '../../../shared/TxtReader/txtreader';
import DateSorter from '../../../shared/Sorter/dateSorter';
import { Col, Row } from 'antd';

const content = {
    heading: "Articles",
    textBodies: [],
    img: "",
}

const cssSettings = {
    bgColor: "#364261",
    maxWidth: "80%",
}

const SneakpeaksBanner = () => {
    const allTextFiles = TxtReader();

    const allSneaks = Articles.map(({ id, title, authorId, filename, date }) => {
        const parsedFilename = filename.replace('.txt', '').replace('.json', ''); // In case file format is added
        return <SneakPeak key={id} articleId={id} title={title} authorId={authorId}
            txt={allTextFiles[parsedFilename].text} date={date} />;
    })

    const sortedAllSneaks = allSneaks.sort((a, b) => {
        return (
            DateSorter(a.props.date, b.props.date) === 1 ? 1 : -1
        );
    })

    return (
        <div>
            <Banner bannerId="" noDivider={true} bgColor={cssSettings.bgColor} heading={content.heading} textBodies={content.textBodies}
                img={content.img} bgImg={content.bgImg} maxWidth={cssSettings.maxWidth} />
            <div className="SneakpeaksBox">
                {sortedAllSneaks}
            </div>
            <Footer />
        </div>
    )
}

export default SneakpeaksBanner;