import { Col, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';
import SearchAuthor from '../../../shared/Searcher/searchAuthor';

import './styles.css';

const stringExcerpt = (str) => {
    const strArr = str.trim().split(/\s+/);

    let returnStr = "";
    for (let i = 0; i < 50; ++i) {
        returnStr += " ";
        returnStr += strArr[i];
    }
    returnStr += "...."
    return returnStr;
}

const SneakPeak = ({ articleId, title, authorId, txt, date }) => {
    const navigate = useNavigate();

    const author = SearchAuthor(authorId);
    const sneakText = stringExcerpt(txt);
    return (
        <div className="Sneakpeak">
            <Row style={{ height: "100%" }} gutter={18}>
                <Col style={{ width: "15%", borderRight: "1.5px solid #CDD1D4", paddingRight: 0, marginRight: 40 }} span={4}>
                    <p className="Date">{date}</p>
                </Col>
                <Col span={12}>
                    <h2 onClick={() => navigate(`/articles/${articleId}`)}>{title}</h2>
                    <p className="Blob">{sneakText}</p>
                </Col>
            </Row>
        </div>
    )
}

export default SneakPeak
