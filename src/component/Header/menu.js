import { React } from "react";
import { Row } from "antd";
import SemiMenu from './semiMenu';
import './styles.css';

const Menu = () => {
  return (
    <header className="Header" style={{ borderBottom: "1px solid #CDD1D4" }}>
      <div className="MenuContainer">
        <Row type="flex" justify="space-between" gutter={20} id="header">
          <SemiMenu />
        </Row>
      </div>
    </header>
  );
}

export default Menu;

