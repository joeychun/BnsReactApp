import React from 'react';
import ArticleBanner from '../component/ArticleBanners/articlebanner';
import Menu from '../component/Header/menu';
import FooterBar from '../component/Footer/footerbar';
import Box from '@mui/material/Box';
import { Flex } from 'rebass/styled-components';


const Articles = () => {
    return (
        <Flex width={1} flexDirection='column'>
            <Menu />
            <ArticleBanner />

            {/* <br></br>
            <div align="left"><InfoList /></div> */}
        </Flex>
    )
}

export default Articles;
