import React from 'react';
import './styles.css';

const YoutubeThumbnail = ({ videoId }) => {
    const srcLink = `https://img.youtube.com/vi/${videoId}/0.jpg`;

    return (
        <div className="Thumbnails">
            <img alt={`thumbnail ${videoId}`} src={srcLink} />
        </div>
    )
};

export default YoutubeThumbnail;