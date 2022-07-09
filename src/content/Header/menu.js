import { React, useState, Fragment } from "react";
import { useNavigate, useLocation } from "react-router";
import { Row, Col, Drawer } from "antd";
import SemiMenu from './semiMenu';
import './styles.css';

const Menu = () => {
  return (
    <div className="Header">
        <div className="MenuContainer">
            <Row type="flex" justify="space-between" gutter={20} id="header">
                <SemiMenu />
            </Row>
        </div>
    </div>
  );
}

export default Menu;

