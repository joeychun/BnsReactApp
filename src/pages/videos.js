import React from 'react';
import VideoSneakpeaks from '../component/VideoBanners/VideoSneaks/videoSneakpeaks';
import { Flex } from 'rebass/styled-components';


const Videos = () => {
    return (
        <Flex width={1} flexDirection='column'>
            <VideoSneakpeaks />
        </Flex>
    )
}

export default Videos;
