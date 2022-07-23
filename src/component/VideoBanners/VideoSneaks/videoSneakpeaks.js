import React from 'react';
import Banner from '../../../shared/Banner/banner';
import SneakpeaksBanner from '../../../shared/Sneakpeak/sneakpeaksBanner';
import Videos from '../../../content/Videos.json';
import Reader from '../../../shared/Reader/reader';
import YoutubeThumbnail from '../../../shared/YoutubeEmbed/thumbnail';
import ThumbnailWrapper from '../../../shared/ThumbnailWrapper/thumbnailWrapper';


const content = {
    heading: "Videos",
    textBodies: [],
    img: "",
}

const cssSettings = {
    bgColor: "#364261",
    maxWidth: "80%",
}

const linkFunc = (videoId) => {
    return `/videos/${videoId}`;
}

const VideoSneakpeaks = () => {
    /* 
    VideoSneakpeaks gets all video information (located in src/content), then
    converts and returns that information as JSX that appropriately displays all videos' titles,
    thumbnail, and date.
    */
    const allVidFiles = Reader({ video: null });
    const contentFunc = (unprocessedContent) => {
        const thumbnail = <YoutubeThumbnail videoId={unprocessedContent.videoId} />
        return <ThumbnailWrapper thumbnail={thumbnail} description={unprocessedContent.text} />
    }

    return (
        <div>
            <Banner bannerId="" noDivider={true} bgColor={cssSettings.bgColor} heading={content.heading} textBodies={content.textBodies}
                img={content.img} bgImg={content.bgImg} maxWidth={cssSettings.maxWidth} />
            <SneakpeaksBanner contentJsons={Videos} allFiles={allVidFiles}
                contentFunc={(c) => contentFunc(c)} linkFunc={(videoId) => linkFunc(videoId)}
                includeMargin={true} hrefcontent={true} />
        </div>
    )
}

export default VideoSneakpeaks;