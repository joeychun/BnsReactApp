import React from 'react';
import OneVideo from '../component/VideoBanners/Video/oneVideo';
import { useParams } from 'react-router-dom';
import { Flex } from 'rebass/styled-components';

const Video = (props) => {
    const { id } = useParams();
    return (
        <Flex width={1} flexDirection='column'>
            <OneVideo id={id} />
        </Flex>
    )
}

export default Video;
