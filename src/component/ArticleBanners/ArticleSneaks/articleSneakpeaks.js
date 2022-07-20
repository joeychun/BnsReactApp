import React from 'react';
import Banner from '../../../shared/Banner/banner';
import SneakpeaksBanner from '../../../shared/Sneakpeak/sneakpeaksBanner';
import Articles from '../../../content/Articles.json'
import TxtReader from '../../../shared/Reader/txtreader';


const content = {
    heading: "Articles",
    textBodies: [],
    img: "",
}

const cssSettings = {
    bgColor: "#364261",
    maxWidth: "80%",
}

const stringExcerpt = (str) => {
    return str.split(" ").slice(0, 50).join(" ") + "....";
}

const linkFunc = (articleId) => {
    return `/articles/${articleId}`;
}

const ArticleSneakpeaks = () => {
    const allTextFiles = TxtReader();
    const contentFunc = (unprocessedContent) => {
        return <p>{stringExcerpt(unprocessedContent.text)}</p>;
    }

    return (
        <div>
            <Banner bannerId="" noDivider={true} bgColor={cssSettings.bgColor} heading={content.heading} textBodies={content.textBodies}
                img={content.img} bgImg={content.bgImg} maxWidth={cssSettings.maxWidth} />
            <SneakpeaksBanner contentJsons={Articles} allFiles={allTextFiles}
                contentFunc={(c) => contentFunc(c)} linkFunc={(articleId) => linkFunc(articleId)} includeMargin={true} />
        </div>
    )
}

export default ArticleSneakpeaks;