import React from 'react';
import Menu from '../component/Header/menu';
import OneArticle from '../component/ArticleBanners/Article/oneArticle';
import { useParams } from 'react-router-dom';

const Article = (props) => {
    const { id } = useParams();
    return (
        <div>
            <Menu />
            <OneArticle id={id} />
        </div>
    )
}

export default Article;
