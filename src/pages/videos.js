import React from 'react';
import Menu from '../component/Header/menu';
import FooterBar from '../component/Footer/footerbar';
import VideoBanner from '../component/VideoBanners/videobanners';


const Videos = () => {
    return (
        <div>
            <Menu />
            <VideoBanner />

            {/* <br></br>
            <div align="left"><InfoList /></div> */}
        </div>
    )
}

export default Videos;
