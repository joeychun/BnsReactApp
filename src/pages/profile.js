import React from 'react';
import ProfileBanner from '../component/MemberProfile/profileBanner';
import { useParams } from 'react-router';
import { Flex } from 'rebass/styled-components';

const Profile = (props) => {
    const { id } = useParams();
    return (
        <Flex width={1} flexDirection='column'>
            <ProfileBanner id={id} />
        </Flex>
    )
}

export default Profile;