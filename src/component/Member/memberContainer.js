import { Row, Col, Card } from 'antd';
import React from 'react';
import EmptyContainer from './emptyContainer';
import './styles.css'

const MemberContainer = ({ name, picture, description }) => {
    const srcLink = `img/Members/${picture}`;
    return (
        <div>
            { (name || picture || description) ?
                <Card
                    flexDirection='row'
                    hoverable
                    style={{
                        width: 400, height: 550
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
