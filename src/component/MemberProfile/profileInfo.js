import { Col } from 'antd';
import React from 'react';
import SearchAuthor from '../../shared/Searcher/searchAuthor';
import './styles.css';

const ProfileInfo = ({ id }) => {
    /*
    ProfileInfo returns JSX of a section of a member's profile: his or her 
    profile information––name, description, and picture filename.
    ________________________________________

    'id' is the unique numeric id of the member whose profile contributions will be displayed.
    */
    const author = SearchAuthor(parseInt(id));
    const srcLink = `../img/Members/${author.picture}`;

    return (
        <div className="ProfileTop" gutter={0}>
            <Col style={{ width: "40%", display: "flexbox" }} align="right">
                <img alt={author.picture} src={srcLink} />
            </Col>
            <Col style={{ width: "60%" }} className="Texts" >
                <div className="Title">{author.name}</div>
                <div className="Description">{author.description}</div>
            </Col>
        </div>
    )
}

export default ProfileInfo;
