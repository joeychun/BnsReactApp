import React from 'react';
import SearchArticle from '../../../shared/Searcher/searchArticle';
import SearchAuthor from '../../../shared/Searcher/searchAuthor';
import TxtReader from '../../../shared/TxtReader/txtreader';
import Box from '@mui/material/Box';
import './oneArticle.css';
import { Col, Row } from 'antd';

const OneArticle = ({ id }) => {
    const { title, authorId, filename, date } = SearchArticle(id);
    const author = SearchAuthor(authorId);

    const parsedFilename = filename.replace('.txt', '').replace('.json', '');
    const text = TxtReader()[parsedFilename].text;

    // As 'text' is derived from a JSON file, there are no newlines.
    // The process below adds in newlines by inserting <br>
    const textArray = text.split(/\n/);
    console.log(textArray);
    const textParagraphs = textArray.map((paragraph) => {
        return (
            <div className="paragraph">
                <p>{paragraph}</p>
            </div>
        );
    })

    return (
        <Box className="Article">
            <Row>
                <h1 className="title">{title}</h1>
            </Row>
            <Row>
                <h5 className="author">{`By ${author.name}`}</h5>
            </Row>
            <div className="paragraphs">
                {textParagraphs}
            </div>
        </Box>
    )
}

export default OneArticle;
