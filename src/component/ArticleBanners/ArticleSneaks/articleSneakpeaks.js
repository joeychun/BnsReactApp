import React from 'react';
import Banner from '../../../shared/Banner/banner';
import SneakpeaksBanner from '../../../shared/Sneakpeak/sneakpeaksBanner';
import Articles from '../../../content/Articles.json'
import Reader from '../../../shared/Reader/reader';


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
    /* 
    ArticleSneakpeaks gets all article information (located in src/content), then
    converts and returns that information as JSX that appropriately displays all articles' titles,
    blob (text excerpt), and date.
    */
    const allTextFiles = Reader({ article: null });
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