import React from 'react';
import ProfileContributions from './profileContributions';
import ProfileInfo from './profileInfo';

const ProfileBanner = ({ id }) => {
    return (
        <div>
            <ProfileInfo id={id} />
            <ProfileContributions id={id} />
        </div>
    )
}

export default ProfileBanner;
