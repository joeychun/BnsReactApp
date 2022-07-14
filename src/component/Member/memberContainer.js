import { Card } from 'antd';
import React from 'react';
import EmptyContainer from './emptyContainer';
import './styles.css';

const MemberContainer = ({ id, name, picture, description }) => {
    const srcLink = `img/Members/${picture}`;
    return (
        <div>
            { (name || picture || description) ?
                <a href={`/profile/${id}`}>
                    <Card
                        flexDirection='row'
                        hoverable
                        cover={<img alt={name} src={srcLink} />}
                    >
                        <Card.Meta title={name} description={description} />
                    </Card>
                </a>
                :
                <EmptyContainer />
            }
        </div>
    )
}

export default MemberContainer;
