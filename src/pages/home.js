import React from 'react';
import TopMenu from './menu';
import Menu from '../component/Header/menu';
import SemiMenu from '../component/Header/semiMenu';
import HomeBanner from '../component/HomeBanners/homebanner';
import InfoList from '../component/info';
import { Header, Button, Icon, List } from 'semantic-ui-react'


const Home = () => {
    return (
        <div>

            <div>
                <Menu />
                <HomeBanner />

                <br></br>
                <div align="left"><InfoList /></div>
            </div>

        </div>
    )
}

export default Home;
