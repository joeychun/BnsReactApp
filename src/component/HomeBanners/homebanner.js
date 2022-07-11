import React from 'react';
import Banner from '../../shared/Banner/banner';
import EmptyBanner from '../../shared/Banner/emptybanner';
import AboutBanner from './aboutbanner';
import MemberBanner from './memberbanner';

const HomeBanner = () => {
    return (
        <div>
            <AboutBanner />
            <MemberBanner />
        </div>
    )
}

export default HomeBanner;
