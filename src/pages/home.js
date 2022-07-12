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
            <Menu />
            <HomeBanner />

            {/* <br></br>
            <div align="left"><InfoList /></div> */}
            <FooterBar />
        </Flex>
    )
}

export default Home;
