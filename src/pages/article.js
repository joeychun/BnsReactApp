import React from 'react';
import Menu from '../component/Header/menu';
import OneArticle from '../component/ArticleBanners/Article/oneArticle';
import { useParams } from 'react-router-dom';
import { Flex } from 'rebass/styled-components';

const Article = (props) => {
    const { id } = useParams();
    return (
        <Flex width={1} flexDirection='column'>
            <OneArticle id={id} />
        </Flex>
    )
}

export default Article;
