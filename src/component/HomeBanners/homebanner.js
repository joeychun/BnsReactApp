import React from 'react';
import AboutBanner from './aboutbanner';
import MemberBanner from './memberbanner';
import Box from '@mui/material/Box';


const HomeBanner = () => {
    /*
    HomeBanner returns JSX of the banners, About and Member, for the home page.
    */
    return (
        <Box alignItems='flex-start' justifyContent='flex-start'>
            <AboutBanner />
            <MemberBanner />
        </Box>
    )
}

export default HomeBanner;
