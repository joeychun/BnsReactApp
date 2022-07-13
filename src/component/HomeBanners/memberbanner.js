import React from 'react';
import Banner from '../../shared/Banner/banner';
import Box from '@mui/material/Box';
import MembersContent from '../Member/membersContent';
import EmptyBanner from '../../shared/Banner/emptybanner';

const content = {
    heading: "Members",
    textBodies: ["asdf"],
    img: "",
}

const cssSettings = {
    bgColor: "#43537b",
    maxWidth: "80%",
}

const MemberBanner = () => {
    return (
        <Box>
            <Banner bannerId="memberBanner" noDivider={true} bgColor={cssSettings.bgColor} heading={content.heading} textBodies={[]}
                img={content.img} bgImg={content.bgImg} maxWidth={cssSettings.maxWidth} />
            <EmptyBanner bgColor="#ffffff" topPadding={0} bottomPadding={0} />
            <MembersContent />
        </Box>
    )
}

export default MemberBanner;
