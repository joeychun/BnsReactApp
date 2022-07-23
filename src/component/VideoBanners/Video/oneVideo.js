import React from 'react';
import Searcher from '../../../shared/Searcher/searcher';
import Reader from '../../../shared/Reader/reader';
import AuthorsSection from '../../../shared/AuthorsSection/authorsSection';
import YoutubeEmbed from '../../../shared/YoutubeEmbed/youtubeEmbed';
import Box from '@mui/material/Box';
import { Row } from 'antd';
import './oneVideo.css';


const OneVideo = ({ id }) => {
    /* 
    OneVideo gets information (located in src/content) about an video, then converts 
    and returns that information as appropriate JSX that has all components 
    from one video, such as its title, text, youtube video, author, and date.
    ________________________________________

    'id', derived from the params of videos/:id, refers to the unique id
    of the video dealt in this function/component.
    */

    const { title, authorId, filename, date } = Searcher("video", id);

    const authorStr = AuthorsSection(authorId);

    const parsedFilename = filename.replace('.txt', '').replace('.json', '');
    const { text, videoId } = Reader({ video: null })[parsedFilename];

    // As 'text' is derived from a JSON file, there are no newlines.
    // The process below adds in newlines by inserting <br>
    const textArray = text.split(/\n/).filter(t => t);
    const textParagraphs = textArray.map((paragraph, ind) => {
        return (
            <div key={ind} className="paragraph">
                <p>{paragraph}</p>
            </div>
        );
    })

    return (
        <Box className="Video">
            <Row>
                <h1 className="title">{title}</h1>
            </Row>
            <Row>
                <h5 className="author">By {authorStr}</h5>
            </Row>
            <YoutubeEmbed videoId={videoId} />
            <div className="paragraphs">
                {textParagraphs}
            </div>
            <Row>
                <h5 className="date">Posted on <b>{date}</b></h5>
            </Row>
        </Box>
    )
}

export default OneVideo;
