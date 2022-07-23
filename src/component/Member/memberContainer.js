import { Card } from 'antd';
import React from 'react';
import EmptyContainer from './emptyContainer';
import './styles.css';

const MemberContainer = ({ id, name, picture, description }) => {
    /*
    MemberContainer returns JSX of one member card, based on the member's
    information derived from the props.
    If the name, picture, and description are blank strings, the EmptyContainer
    component is returned.
    ________________________________________

    'id' is the unique numeric id of the member that will be used for the link
    to be redirected when clicked.

    'name' is the name of the member.

    'picture' is the filename of the member's picture.

    'description' is the description of the member. For example, "Webmaster".
    */
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
