import React from 'react';
import SneakpeaksBanner from '../../shared/Sneakpeak/sneakpeaksBanner';
import FilterArticle from '../../shared/Filter/filterArticle';
import FilterVideos from '../../shared/Filter/filterVideo';
import TxtReader from '../../shared/Reader/txtreader';
import VidReader from '../../shared/Reader/vidreader';
import YoutubeThumbnail from '../../shared/YoutubeEmbed/thumbnail';
import ThumbnailWrapper from '../../shared/ThumbnailWrapper/thumbnailWrapper';

const stringExcerpt = (str) => {
    return str.split(" ").slice(0, 50).join(" ") + "....";
}

const linkFunc = (articleId) => {
    return `/articles/${articleId}`;
}

const ProfileContributions = ({ id }) => {
    const articles = FilterArticle(parseInt(id));
    const videos = FilterVideos(parseInt(id));
    const sources = articles.concat(videos);

    const articlePaths = articles.map((element) => `./${element.filename}`);
    const videoPaths = videos.map((element) => `./${element.filename}`);

    const allTextFiles = TxtReader(articlePaths);
    const allVidFiles = VidReader(videoPaths);
    const allFiles = { ...allTextFiles, ...allVidFiles };
    const contentFunc = (unprocessedContent) => {
        // if (unprocessedContent.type === "article") { <-- TODO : fix
        if (unprocessedContent.videoId === undefined) {
            return <p>{stringExcerpt(unprocessedContent.text)}</p>;
            // } else if (unprocessedContent.type === "video") {
        } else {
            const thumbnail = <YoutubeThumbnail videoId={unprocessedContent.videoId} />
            return <ThumbnailWrapper thumbnail={thumbnail} description={unprocessedContent.text} />
        }
    }

    return (
        <div>
            {sources.length !== 0 &&
                <div className="ProfileSneaks">
                    <SneakpeaksBanner contentJsons={sources} allFiles={allFiles}
                        contentFunc={(c) => contentFunc(c)} linkFunc={(sourceId) => linkFunc(sourceId)} includeMargin={false} />
                </div>

            }
        </div>
    )
}

export default ProfileContributions;
