import React from 'react';
import SearchArticle from '../../../shared/Searcher/searchArticle';
import SearchAuthor from '../../../shared/Searcher/searchAuthor';
import TxtReader from '../../../shared/TxtReader/txtreader';
import Box from '@mui/material/Box';
import { Row } from 'antd';
import './oneArticle.css';

const AuthorsElement = (authorId) => {
    /* authorId format:

    If the article is single-author: 
    authorId is a Number, the author's id 
    (ex: 10)

    If the article is multi-author:
    authorId is a list of Numbers, the authors' ids
    (ex: [3, 15, 9])
    */
    let authors;
    if (typeof (authorId) === "number") {
        authors = [
            <a href={`/profile/${authorId}`}>
                <b>{SearchAuthor(authorId).name}</b>
            </a>
        ];
    } else if (authorId.length === 2) {
        authors = authorId.map((id, ind) => {
            return (
                <div style={{ display: "inline" }}>
                    <a href={`/profile/${id}`}>
                        <b>{SearchAuthor(id).name}</b>
                    </a>
                    {ind === 0 &&
                        " and "
                    }

                </div>
            );
        })
    }
    else {
        authors = authorId.map((id, ind) => {
            return (
                <div style={{ display: "inline" }}>
                    <a href={`/profile/${id}`}>
                        <b>{SearchAuthor(id).name}</b>
                    </a>
                    {ind !== authorId.length - 1 &&
                        ", "
                    }
                    {ind === authorId.length - 2 &&
                        "and "
                    }
                </div>
            );
        })
    }

    return authors;
}

const OneArticle = ({ id }) => {
    const { title, authorId, filename, date } = SearchArticle(id);

    const authorStr = AuthorsElement(authorId);

    const parsedFilename = filename.replace('.txt', '').replace('.json', '');
    const text = TxtReader()[parsedFilename].text;

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
        <Box className="Article">
            <Row>
                <h1 className="title">{title}</h1>
            </Row>
            <Row>
                <h5 className="author">By {authorStr}</h5>
            </Row>
            <div className="paragraphs">
                {textParagraphs}
            </div>
            <Row>
                <h5 className="date">Posted on <b>{date}</b></h5>
            </Row>
        </Box>
    )
}

export default OneArticle;
