import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

const TopMenu = () => {
    const [activeItem, setActiveItem] = useState('about');

    const handleItemClick = (e, { name }) => setActiveItem(name)

    // const { activeItem } = this.state

    return (
        <Menu size='huge'>
            <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={handleItemClick}
                color="teal"
            >
                About
            </Menu.Item>

            <Menu.Item
                name='articles'
                active={activeItem === 'articles'}
                onClick={handleItemClick}
                color="teal"
            >
                Articles
            </Menu.Item>

            <Menu.Item
                name='videos'
                active={activeItem === 'videos'}
                onClick={handleItemClick}
                color="teal"
            >
                Videos
            </Menu.Item>
        </Menu>
    );
}

export default TopMenu;