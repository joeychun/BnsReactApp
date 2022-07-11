import React from 'react';
import './banner.css'

const Banner = ({ bannerId, noDivider, heading, textBodies, img, bgImg, bgColor, maxWidth }) => {
    const body = textBodies.map((text, ind) => <div key={ind} className="Body"><p>{text}</p></div>);
    console.log('ID is ' + bannerId);
    return (
        <div id={bannerId === "" ? "section" : `section ${bannerId}`} style={{ backgroundColor: bgColor }} className="Section">
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
                <div className="Container">
                    <div style={{ maxWidth: maxWidth }} className="InfoCol">
                        <div className="Heading"><h1 style={{ borderBottom: "1px solid #CDD1D4" }}>{heading}</h1></div>
                        <div>{body}</div>

                    </div>
                    <div style={{ maxWidth: maxWidth }} className="InfoCol">
                        <div className="ImgBox">
                            <img src={img}></img>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Banner;
