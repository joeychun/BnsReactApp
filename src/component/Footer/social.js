import React from 'react';
import './styles.css';

const SocialLink = ({ href, src }) => {
    return (
        <a key={src} href={href} aria-label={src}>
            <div className="Icon">
                <div className="ImageContainer">
                    <img src={`/img/Icons/${src}`} alt={src} width="25px" height="25px" />
                </div>
            </div>
        </a>
    );
}

export default SocialLink;
