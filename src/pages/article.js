import React from 'react';
import Menu from '../component/Header/menu';
import { useParams } from 'react-router-dom';

const Article = (props) => {
    const { id } = useParams();
    return (
        <div>
            <Menu />
            <h2>Article #{id}</h2>
        </div>
    )
}

export default Article;
