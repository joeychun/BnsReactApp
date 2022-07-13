import React from 'react';
import ContactBanner from '../component/ContactBanners/contactbanner';
import { Flex } from 'rebass/styled-components';


const Contact = () => {
    return (
        <Flex width={1} flexDirection='column'>
            <ContactBanner />
        </Flex>
    )
}

export default Contact;
