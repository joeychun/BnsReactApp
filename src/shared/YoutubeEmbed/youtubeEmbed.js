import React from 'react';
import './styles.css';

const YoutubeEmbed = ({ videoId }) => (
    /*
    YoutubeEmbed returns JSX––an appropriately formatted embed YouTube, whose source
    is a YouTube video with a certain video id.
    ________________________________________

    'videoId', a string, is the unique video id each YouTube video possesses. The 
    video with the id 'videoId' is covered here.
    */
    <div className="video-responsive">
        <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);

export default YoutubeEmbed;