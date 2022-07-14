import React from 'react';
import ProfileInfo from './profileInfo';

const ProfileBanner = ({ id }) => {
    return (
        <div>
            <ProfileInfo id={id} />
        </div>
    )
}

export default ProfileBanner;
