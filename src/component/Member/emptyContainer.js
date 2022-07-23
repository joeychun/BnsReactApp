import { Card } from 'antd';
import React from 'react';

const EmptyContainer = () => {
    /*
    EmptyContainer returns JSX of a blank card.
    */
    return (
        <Card
            flexDirection='row'
        >
            <Card.Meta title="" description="" />
        </Card>

    )
}

export default EmptyContainer;
