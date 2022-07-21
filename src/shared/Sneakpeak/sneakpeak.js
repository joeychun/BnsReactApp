import { Col, Row } from 'antd';
import React from 'react';

import './styles.css';

const SneakPeak = ({ sourceId, title, content, date, type, linkFunc }) => {
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
                    <div className="Blob">{content}</div>
                </Col>
            </Row>
        </div>
    )
}

export default SneakPeak
