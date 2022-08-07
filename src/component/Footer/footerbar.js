import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './styles.css';


const FooterBar = () => {
    return (
        <Col className="FooterStyle">
            <Row className="Footer"
                type="flex"
                justify="space-between"
                align="middle"
                style={{ paddingTop: "3rem", paddingBottom: "3rem", rowGap: "15px", borderTop: "1px solid #CDD1D4" }}
            >
                <div className="ImageContainer">
                    <Link className="Links" to="/">
                        <img className="Image" src={`/img/bnslogo.jpeg`} alt="bnslogo.jpeg" width="60%" height="100%" />
                    </Link>
                </div>

                <div className="LinkContainer">
                    <a href="https://www.youtube.com/channel/UCFQ8WlLN-ye9VLUEsDJOzjA" rel="noreferrer" target="_blank">
                        <Icon link color="red" name="youtube" size="big" />
                    </a>
                    <a href="mailto:seongyoon.kim24@stu.siskorea.org" rel="noreferrer" target="_blank">
                        <Icon link color="blue" name="mail" size="big" />
                    </a>
                    <a href="https://www.instagram.com/behavioral_neuroscience/" rel="noreferrer" target="_blank">
                        <Icon link color="pink" name="instagram" size="big" />
                    </a>
                </div>
            </Row>
            <Row>
                <p className="MadeBy">Website made by Joey C and Andrew S</p>
            </Row>
        </Col >
    )
}

export default FooterBar
