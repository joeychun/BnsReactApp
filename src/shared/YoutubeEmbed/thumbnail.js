import React from 'react';
import './styles.css';

const YoutubeThumbnail = ({ videoId }) => {
    /*
    YoutubeThumbnail returns JSX––an appropriately formatted <img> whose source
    is a YouTube video with a certain video id.
    ________________________________________

    'videoId', a string, is the unique video id each YouTube video possesses. The 
    video with the id 'videoId' is covered here.
    */
    const srcLink = `https://img.youtube.com/vi/${videoId}/0.jpg`;

    return (
        <div className="Thumbnails">
            <img alt={`thumbnail ${videoId}`} src={srcLink} />
        </div>
    )
};

export default YoutubeThumbnail;