import React from 'react';
import './banner.css'

const Banner = ({ bannerId, noDivider, heading, textBodies, elementBody, img, bgImg,
    bgColor, maxWidth, topPadding, bottomPadding, bodyLeftPadding, bodyTopPadding }) => {
    /* Depending on what gets passed through textBodies or elementBody, the 'body' of the container changes. 
    
    textBodies format: List
    [
        "Sentence #1",
        "Sentence #2",
        "Sentence #3",
        "Sentence #4"
    ]

    elementBody format: HTML Element / React Component
    
    */
    let body;
    if (textBodies !== [] && textBodies !== undefined) {
        body = textBodies.map((text, ind) => <div key={ind}><p>{text}</p></div>);
    } else if (elementBody !== null && elementBody !== undefined) {
        body = elementBody;
    } else {
        body = ""
    }

    const topPaddingValue = topPadding === undefined ?
        90 : topPadding
    const bottomPaddingValue = bottomPadding === undefined ?
        60 : bottomPadding
    const bodyLeftPaddingValue = bodyLeftPadding === undefined ?
        20 : bodyLeftPadding
    const bodyTopPaddingValue = bodyTopPadding === undefined ?
        0 : bodyTopPadding

    return (
        <div id={bannerId === "" ? "section" : `section ${bannerId}`}
            style={{ backgroundColor: bgColor, paddingTop: topPaddingValue, paddingBottom: bottomPaddingValue }} className="Section">
            <div className="Container">
                <div style={{ maxWidth: maxWidth }} className="InfoCol">
                    <div className="Heading"><h1 style={{ borderBottom: noDivider ? "" : "1px solid #CDD1D4" }}>{heading}</h1></div>
                    <div className="Body" style={{ paddingTop: bodyTopPaddingValue, paddingLeft: bodyLeftPaddingValue }}>{body}</div>
                </div>
                <div style={{ maxWidth: maxWidth }} className="InfoCol">
                    {img !== "" &&
                        <div className="ImgBox">
                            <img alt={img} src={img}></img>
                        </div>
                    }
                </div>
            </div>
            {/* // If the container is declared noDivider, the gray bar does not show. */}
        </div>
    )
}

export default Banner;
