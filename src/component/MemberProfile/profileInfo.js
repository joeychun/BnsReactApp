import { Col } from 'antd';
import React from 'react';
import SearchAuthor from '../../shared/Searcher/searchAuthor';
import './styles.css';

const ProfileInfo = ({ id }) => {
    const author = SearchAuthor(parseInt(id));
    const srcLink = `../img/Members/${author.picture}`;

    return (
        <div className="ProfileTop" gutter={0}>
            <Col style={{ width: "40%", display: "flexbox" }} align="right">
                <img alt={author.picture} src={srcLink} />
            </Col>
            <Col style={{ width: "60%" }} className="Texts" >
                <div className="Title">{author.name}</div>
                <div className="Description">{author.description}</div>
            </Col>
        </div>
    )
}

export default ProfileInfo;
