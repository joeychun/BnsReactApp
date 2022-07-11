import React from 'react';
import TopMenu from './menu';
import Menu from './Header/menu';
import SemiMenu from './Header/semiMenu';
import HomeBanner from './HomeBanners/homebanner';
import InfoList from './info';
import { Header, Button, Icon, List } from 'semantic-ui-react'


const Home = (props) => {
    return (
        <div>
            {props.show &&
                <div>
                    <Menu />
                    <HomeBanner />

                    <br></br>
                    <div align="left"><InfoList /></div>
                </div>
            }
        </div>
    )
}

export default Home;
