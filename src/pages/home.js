import React from 'react';

import HomeBanner from '../component/HomeBanners/homebanner';

import { Flex } from 'rebass/styled-components';


const Home = () => {
    return (
        <Flex width={1} flexDirection='column'>
            <HomeBanner />
        </Flex>
    )
}

export default Home;
