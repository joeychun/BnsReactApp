import React from 'react';
import Banner from '../../shared/Banner/banner';
import MemberContainer from '../Member/memberContainer';
import MembersRow from '../Member/membersRow';
import Box from '@mui/material/Box';

const content = {
    heading: "Members",
    textBodies: ["asdf"],
    img: "",
    bgImg: "../../../public/img/logo192.png", // This path is from banner.css's POV.
}

const cssSettings = {
    bgColor: "#43537b",
    maxWidth: "80%",
}

// To test out membersRow.js
const infoList = [
    {
        name: "Junseo Lee",
        picture: "junseo.png",
        description: "asdf!",
    },
    {
        name: "Junseo Lee",
        picture: "junseo.png",
        description: "fdass!",
    },

]

const MemberBanner = () => {
    return (
        <Box>
            <Banner noDivider={false} bgColor={cssSettings.bgColor} heading={content.heading} textBodies={[]}
                img={content.img} bgImg={content.bgImg} maxWidth={cssSettings.maxWidth} />
            <MembersRow infoList={infoList} />
        </Box>
    )
}

export default MemberBanner;
