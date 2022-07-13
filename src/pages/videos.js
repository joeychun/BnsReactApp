import React from 'react';
import VideoBanner from '../component/VideoBanners/videobanners';
import { Flex } from 'rebass/styled-components';


const Videos = () => {
    return (
        <Flex width={1} flexDirection='column'>
            <VideoBanner />
        </Flex>
    )
}

export default Videos;
