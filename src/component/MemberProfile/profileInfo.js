import { Col, Row } from 'antd';
import React from 'react';
import SearchAuthor from '../../shared/Searcher/searchAuthor';
import './styles.css';

const ProfileInfo = ({ id }) => {
    const author = SearchAuthor(parseInt(id));
    const srcLink = `../img/Members/${author.picture}`;

    return (
        <Row className="ProfileTop" gutter={24}>
            <Col style={{ width: "30%" }} className="gutter-row" span={8}>
                <img alt={author.picture} src={srcLink} />
            </Col>
            <Col className="gutter-row Texts" span={16}>
                <div className="Title">{author.name}</div>
                <div className="Description">{author.description}</div>
            </Col>
        </Row>
    )
}

export default ProfileInfo;
