import React from 'react'
import { useParams } from 'react-router-dom';

const Article = (props) => {
    const { id } = useParams();
    return (
        <div>
            <h2>Article #{id}</h2>
        </div>
    )
}

export default Article;
