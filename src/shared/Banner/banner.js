import React from 'react';
import './banner.css'

const Banner = ({ bannerId, noDivider, heading, textBodies, img, bgImg, bgColor, maxWidth, topPadding, bottomPadding }) => {
    const body = textBodies.map((text, ind) => <div key={ind} className="Body"><p>{text}</p></div>);

    const topPaddingValue = topPadding === undefined ?
        90 : topPadding
    const bottomPaddingValue = bottomPadding === undefined ?
        60 : bottomPadding

    return (
        <div id={bannerId === "" ? "section" : `section ${bannerId}`}
            style={{ backgroundColor: bgColor, paddingTop: topPaddingValue, paddingBottom: bottomPaddingValue }} className="Section">
            {noDivider ?
                <div className="Container">
                    <div style={{ maxWidth: maxWidth }} className="InfoCol">
                        <div className="Heading"><h1>{heading}</h1></div>
                        <div>{body}</div>

                    </div>
                    <div style={{ maxWidth: maxWidth }} className="InfoCol">
                        {img !== "" &&
                            <div className="ImgBox">
                                <img alt={img} src={img}></img>
                            </div>
                        }
                    </div>
                </div>
                : // If the container is declared noDivider, the gray bar does not show.
                <div className="Container">
                    <div style={{ maxWidth: maxWidth }} className="InfoCol">
                        <div className="Heading"><h1 style={{ borderBottom: "1px solid #CDD1D4" }}>{heading}</h1></div>
                        <div>{body}</div>

                    </div>
                    <div style={{ maxWidth: maxWidth }} className="InfoCol">
                        {img !== "" &&
                            <div className="ImgBox">
                                <img alt={img} src={img}></img>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Banner;
