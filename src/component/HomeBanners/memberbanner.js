import React from 'react';
import Banner from '../../shared/Banner/banner';
import MemberContainer from '../Member/memberContainer';
import MembersRow from '../Member/membersRow';
import Box from '@mui/material/Box';
import MembersContent from '../Member/membersContent';
import EmptyBanner from '../../shared/Banner/emptybanner';

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
const infoList1 = [
    {
        name: "Junseo Lee",
        picture: "junseo.png",
        description: "Writer",
    },
    {
        name: "Junseo Lee",
        picture: "junseo.png",
        description: "Writer",
    },

]

const infoList2 = [
    {
        name: "Junseo Lee",
        picture: "Junseo.png",
        description: "Writer",
    },
    {
        name: "Junseo Lee",
        picture: "Junseo.png",
        description: "Writer",
    },
    {
        name: "Junseo Lee",
        picture: "Junseo.png",
        description: "Writer",
    },
]

const MemberBanner = () => {
    return (
        <Box>
            <Banner bannerId="memberBanner" noDivider={false} bgColor={cssSettings.bgColor} heading={content.heading} textBodies={[]}
                img={content.img} bgImg={content.bgImg} maxWidth={cssSettings.maxWidth} />
            {/* <MembersRow infoList={infoList2} /> */}
            {/* <MembersRow infoList={infoList1} /> */}
            <EmptyBanner bgColor="#43537b" topPadding={10} />
            <EmptyBanner bgColor="#ffffff" topPadding={0} bottomPadding={0} />
            <MembersContent />
        </Box>
    )
}

export default MemberBanner;
