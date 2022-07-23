import React from 'react';
import { Row, Col } from 'antd';

import MemberContainer from './memberContainer';


const MembersRow = ({ infoList }) => {
    /*
    MembersRow receieves a list of members' information and converts/returns that to
    appropriately styled JSX of a row of member cards.
    ________________________________________

    'infoList' is a list of objects that contain information for each member.
    For example,
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
        formattedList.push({ id: "", name: "", picture: "", description: "" })
    }

    const containers = formattedList.map((member, ind) => {
        return (
            <Col key={ind} className="gutter-row" span={8}>
                <MemberContainer id={member.id} name={member.name} picture={member.picture} description={member.description} />
            </Col>
        );
    })

    return (
        <Row align='middle' justify='start' gutter={24}>
            {containers}
        </Row>
    );
}

export default MembersRow
