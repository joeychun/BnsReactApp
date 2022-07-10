import React from 'react';
import './banner.css'

const Banner = ({ noDivider, heading, textBodies, img, bgImg, bgColor, maxWidth}) => {
    const body = textBodies.map((text) => <div className="Body"><p>{text}</p></div>);
    return (
        <div id="section" style={{ backgroundColor: bgColor }} className="Section">
            {noDivider ?
            <div className="Container">
                <div style={{ maxWidth: maxWidth }} className="InfoCol">
                    <div className="Heading"><h1>{heading}</h1></div>
                    <div>{body}</div>

                </div>
                <div style={{ maxWidth: maxWidth }} className="InfoCol">
                    <div className="ImgBox">
                        <img src={img}></img>
                    </div>
                </div>
            </div> 
            : // If the container is declared noDivider, the gray bar does not show.
            <div style={{ borderTop: "1px solid #CDD1D4" }} className="Container">
                <div style={{ maxWidth: maxWidth }} className="InfoCol">
                    <div className="Heading"><h1>{heading}</h1></div>
                    <div>{body}</div>

                </div>
                <div style={{ maxWidth: maxWidth }} className="InfoCol">
                    <div className="ImgBox">
                        <img src={img}></img>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Banner;
