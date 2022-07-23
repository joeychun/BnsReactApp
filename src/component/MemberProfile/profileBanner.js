import React from 'react';
import ProfileContributions from './profileContributions';
import ProfileInfo from './profileInfo';

const ProfileBanner = ({ id }) => {
    /*
    ProfileBanner returns JSX of a member's profile, which contains his or her information
    and his or her works (articles and videos, for example).
    ________________________________________

    'id' is the unique numeric id of the member whose profile will be displayed.
    */
    return (
        <div>
            <ProfileInfo id={id} />
            <ProfileContributions id={id} />
        </div>
    )
}

export default ProfileBanner;
