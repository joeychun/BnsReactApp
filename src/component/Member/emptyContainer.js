import { Row, Col, Card } from 'antd';
import React from 'react';

const EmptyContainer = () => {
    return (
        <Card
            flexDirection='row'
            style={{
                width: 400, height: 550
            }}
        >
            <Card.Meta title="" description="" />
        </Card>

    )
}

export default EmptyContainer;
