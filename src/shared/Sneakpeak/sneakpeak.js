import { Col, Row } from 'antd';
import React from 'react';

import './styles.css';

const SneakPeak = ({ title, content, date, sourceId, type, linkFunc, hrefcontent }) => {
    /*
    SneakPeak returns a sneakpeak component that mainly composes 
    of a title, content, and date.
    ________________________________________

    'title', a string, is the title of the sneakpeak.

    'content' is JSX that serves as the content or body.

    'date', a string, is the date of the sneakpeak.
    
    'sourceId' is the unique numeric id of the source of the sneakpeak.
    
    'type', a string, is the type of the source. For example, 'type' can be "article".

    'linkFunc' is a function that returns the sneakpeak's link based on its ID.
    Namely, in the case of articles, it returns `/articles/${articleId}`.
    'linkFunc' makes use of 'sourceId' and 'type'.

    'hrefcontent' is a boolean or boolean-returning function about whether the content 
    should, along with the title, be a hyperlink. Default is false.
    */
    const sourceLink = linkFunc(sourceId, type);
    return (
        <div className="Sneakpeak">
            <Row style={{ height: "100%" }} gutter={18}>
                <Col style={{ width: "15%", borderRight: "1.5px solid #CDD1D4", paddingRight: 0, marginRight: 40 }} span={4}>
                    <p className="Date">{date}</p>
                </Col>
                <Col span={12}>
                    <a href={sourceLink}>
                        <h2>{title}</h2>
                    </a>
                    {hrefcontent ?
                        <a href={sourceLink}>
                            <div className="Blob">{content}</div>
                        </a>
                        :
                        <div className="Blob">{content}</div>
                    }
                </Col>
            </Row>
        </div>
    )
}

export default SneakPeak
