import React from 'react';
import ArticleSneakpeaks from '../component/ArticleBanners/ArticleSneaks/articleSneakpeaks';
import { Flex } from 'rebass/styled-components';


const Articles = () => {
    return (
        <Flex width={1} flexDirection='column'>
            <ArticleSneakpeaks />
        </Flex>
    )
}

export default Articles;
