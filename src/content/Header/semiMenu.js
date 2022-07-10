import { React, useState, Fragment } from "react";
import { useNavigate, useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./styles.css";


const SemiMenu = () => {
    const [visiblity, setVisibility] = useState(false);
    const navigate = useNavigate();

    const location = useLocation();
    
    const redirectTo = (path) => {
        navigate(path);
    };

    const scrollToElement = (id) => {
        if (location.pathname === "/") {
            document.getElementById(id).scrollIntoView({ behavior: "smooth" });
            setVisibility(false);
        } else {
            navigate("/")
        }
    };

    

    return (
        <Fragment>
            <div className="MenuItem" onClick={() => redirectTo("/")}>
                <div className="Span">
                    <div style={{display: "flex", paddingTop: 20, paddingRight: 50, paddingLeft: 10}} >
                    <Link to="/" aria-label="homepage">
                        <img alt="BNS logo" src="/img/bnslogo.jpeg" width="20%" height="60%"/>
                    </Link></div>
                </div>
            </div>
            <div className="MenuItem" onClick={() => redirectTo("/about")}>
                <div className="Span"><h5>About</h5></div>
            </div>
            <div className="MenuItem" onClick={() => redirectTo("/articles")}>
                <div className="Span"><h5>Articles</h5></div>
            </div>
            <div className="MenuItem" onClick={() => redirectTo("/videos")}>
            <div className="Span"><h5>Videos</h5></div>
            </div>
            <div className="MenuItem" onClick={() => redirectTo("/contact")}>
                <div className="Span"><h5>Contact</h5></div>
            </div>
        </Fragment>
    )
}

export default SemiMenu;