import React from 'react';
import SneakpeaksBanner from '../component/ArticleBanners/Sneakpeak/sneakpeaksBanner';
import { Flex } from 'rebass/styled-components';


const Articles = () => {
    return (
        <Flex width={1} flexDirection='column'>
            <SneakpeaksBanner />
        </Flex>
    )
}

export default Articles;
