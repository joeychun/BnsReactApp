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
                {/* <Header as="h1">For Semantic Test!</Header>
                <br></br>
                <Button basic color="brown">Click!</Button>

                <form>
                    <Button as='div' labelPosition='right'>
                        <Button color='red' formaction="https://www.youtube.com/channel/UCFQ8WlLN-ye9VLUEsDJOzjA">
                            <Icon name='youtube' />
                            YouTube
                        </Button>
                    </Button>
                </form> */}

                <br></br>
                <div align="left"><InfoList /></div>
            </div>
            }
        </div>
    )
}

export default Home;
