import { React, Fragment } from "react";
import { useNavigate, useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./styles.css";


const SemiMenu = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const redirectTo = (path) => {
        navigate(path);
    };

    const scrollToElement = (id) => {
        if (location.pathname === "/") {
            document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/")
        }
    };



    return (
        <Fragment>
            <div className="MenuItem" style={{ paddingTop: 10 }} onClick={() => redirectTo("/")}>
                <div className="Span">
                    <Link style={{ display: "flex", paddingRight: 50, paddingLeft: 10 }} to="/" aria-label="homepage">
                        <img alt="BNS logo" src="/img/bnslogo.jpeg" width="20%" height="40%" />
                    </Link>
                </div>
            </div>
            <div className="MenuItem" onClick={() => scrollToElement("section memberBanner")}>
                <div className="Span"><h5>Members</h5></div>
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
