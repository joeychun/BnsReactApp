import React from 'react';
import Banner from '../../shared/Banner/banner';
import EmptyBanner from '../../shared/Banner/emptybanner';
import AboutBanner from './aboutbanner';
import MemberBanner from './memberbanner';
import Box from '@mui/material/Box';


const HomeBanner = () => {
    return (
        <Box alignItems='flex-start' justifyContent='flex-start'>
            <AboutBanner />
            <MemberBanner />
        </Box>
    )
}

export default HomeBanner;
