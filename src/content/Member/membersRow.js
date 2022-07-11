import React from 'react';
import { Row, Col } from 'antd';
import { Card, Avatar } from 'antd';

import MemberContainer from './memberContainer';

import Box from '@mui/material/Box';

const { Meta } = Card;

const MembersRow = ({ infoList }) => {
    // This is how infoList will be formatted:
    /* Example:
    
    [
        {
            name: "Junseo Lee",
            picture: "junseo.png",
            description: "Stuff"
        },
        {
            name: "Andrew Shin",
            picture: "andrew.png",
            description: "Webmaster"
        },
    ]

    */
    const formattedList = [...infoList]
    for (let i = 0; i < 3 - infoList.length; ++i) {
        formattedList.push({ name: "", picture: "", description: "" })
    }

    const containers = formattedList.map((member, ind) => {
        return (
            <Col key={ind} className="gutter-row" span={8}><MemberContainer name={member.name} picture={member.picture} description={member.description} /></Col>
        );
    })

    return (
        <Row justify="center" gutter={24}>
            {containers}
        </Row>
    );
}

export default MembersRow
