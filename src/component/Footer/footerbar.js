import React from 'react';
import { Row } from 'antd';
import { NavLink } from 'react-router-dom';
import SocialLink from './social';
import './styles.css';

const FooterBar = () => {
    return (
        <Row
            type="flex"
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem", borderTop: "1px solid #CDD1D4" }}
        >
            <NavLink className="Links" to="/">
                <div className="Icon">
                    <div className="ImageContainer">
                        <img src={`/img/bnslogo.jpeg`} alt="bnslogo.jpeg" width="40%" height="100%" />
                    </div>
                </div>
            </NavLink>
            <div className="LinkContainer">
                <SocialLink
                    href="https://youtube.com"
                    src="youtube.jpeg"
                />
                {/* <SocialLink
                    href="https://twitter.com/friendliai"
                    src="twitter.svg"
                />
                <SocialLink
                    href="https://medium.com/@friendliai/"
                    src="medium.svg"
                /> */}
            </div>
        </Row>
    )
}

export default FooterBar
