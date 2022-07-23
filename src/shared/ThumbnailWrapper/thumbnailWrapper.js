import React, { useState } from 'react';
import './thumbnailWrapper.css';

const ThumbnailWrapper = ({ thumbnail, description }) => {
    /*
    ThumbnailWrapper returns JSX of a thumbnail that reveals its
    description when hovered upon.
    ________________________________________

    'thumbnail' is JSX––namely, a YoutubeThumbnail component exported from 
    YoutubeEmbed/thumbnail, which is an appropriately formatted thumbnail <img>. 

    'description', a string, is the description of the thumbnail/video, which 
    is revealed when the thumbnail is hovered upon.
    */
    const [isShown, setIsShown] = useState(false);
    return (
        <div className="ThumbnailWrapper"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <div>
                {thumbnail}
            </div>
            <div className="DescriptionBox" style={{
                transform: isShown ? "translate3d(0px, 0%, 0px)" : "translate3d(0px, 37%, 0px)"
            }}>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ThumbnailWrapper;