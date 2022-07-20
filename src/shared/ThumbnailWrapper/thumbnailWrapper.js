import React, { useState } from 'react';
import './thumbnailWrapper.css';

const ThumbnailWrapper = ({ thumbnail, description }) => {
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