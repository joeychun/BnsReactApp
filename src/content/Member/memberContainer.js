import { Row, Col, Card } from 'antd';
import React from 'react';
import EmptyContainer from './emptyContainer';
import './styles.css'

const MemberContainer = ({ name, picture, description }) => {
    const srcLink = `img/${picture}`;
    console.log(srcLink);
    return (
        <div>
            { (name || picture || description) ?
                <Card
                    flexDirection='row'
                    hoverable
                    style={{
                        width: 240, height: 330
                    }}
                    cover={<img alt={name} src={srcLink} />}
                >
                    <Card.Meta title={name} description={description} />
                </Card>
                :
                <EmptyContainer />
            }
        </div>
    )
}

export default MemberContainer;
