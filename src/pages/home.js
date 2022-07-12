import React from 'react';
import FooterBar from '../component/Footer/footerbar';
import Menu from '../component/Header/menu';
import HomeBanner from '../component/HomeBanners/homebanner';
import InfoList from '../component/info';
import Box from '@mui/material/Box';
import { Flex } from 'rebass/styled-components';


const Home = () => {
    return (
        <Flex width={1} flexDirection='column'>
            <HomeBanner />
        </Flex>
    )
}

export default Home;
