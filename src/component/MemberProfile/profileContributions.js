import React from 'react';
import SneakpeaksBanner from '../../shared/Sneakpeak/sneakpeaksBanner';
import YoutubeThumbnail from '../../shared/YoutubeEmbed/thumbnail';
import ThumbnailWrapper from '../../shared/ThumbnailWrapper/thumbnailWrapper';
import Reader from '../../shared/Reader/reader';
import Filter from '../../shared/Filter/filter';
import Combiner from '../../shared/Filter/filterCombine';

const stringExcerpt = (str) => {
    return str.split(" ").slice(0, 50).join(" ") + "....";
}

const linkFunc = (articleId, type) => {
    return `/${type}s/${articleId}`;
}

const ProfileContributions = ({ id }) => {
    /*
    ProfileContributions returns JSX of a section of a member's profile: his or her 
    contributions, or works (articles and videos, for example).
    ________________________________________

    'id' is the unique numeric id of the member whose profile contributions will be displayed.
    */
    const filtered = Filter(["article", "video"], parseInt(id));
    const sources = Combiner(filtered);

    const allFiles = Reader(filtered);

    const contentFunc = (unprocessedContent) => {
        if (unprocessedContent.type === "article") {
            return <p>{stringExcerpt(unprocessedContent.text)}</p>;
        } else if (unprocessedContent.type === "video") {
            const thumbnail = <YoutubeThumbnail videoId={unprocessedContent.videoId} />
            return <ThumbnailWrapper thumbnail={thumbnail} description={unprocessedContent.text} />
        }
    }

    const hrefcontent = (unprocessedContent) => {
        return unprocessedContent.type === "video";
    }

    return (
        <div>
            {sources.length !== 0 &&
                <div className="ProfileSneaks">
                    <SneakpeaksBanner contentJsons={sources} allFiles={allFiles}
                        contentFunc={(c) => contentFunc(c)} linkFunc={(sourceId, type) => linkFunc(sourceId, type)}
                        includeMargin={false} hrefcontent={(c) => hrefcontent(c)} />
                </div>

            }
        </div>
    )
}

export default ProfileContributions;
