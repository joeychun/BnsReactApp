import { Card } from 'antd';
import React from 'react';

const EmptyContainer = () => {
    return (
        <Card
            flexDirection='row'
        >
            <Card.Meta title="" description="" />
        </Card>

    )
}

export default EmptyContainer;
