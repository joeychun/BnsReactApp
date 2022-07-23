import React from 'react';
import './banner.css'

const Banner = ({ bannerId, noDivider, heading, textBodies, elementBody, img,
    bgColor, maxWidth, topPadding, bottomPadding, bodyLeftPadding, bodyTopPadding }) => {
    /* 
    Banner returns a highly customizable banner component that mainly composes 
    of a heading (title) and body.
    ________________________________________

    'bannerId', a string, if not blank, is assigned to the banner's html id.

    'noDivider', a boolean, has to do with if the banner will have a divider between
    the heading and body.

    'heading', a string, is the text that will be serving as the banner's heading.

    'textBodies', a list of strings, is a list of distanced text paragraphs positioned 
    in the banner's body.

    'elementBody' is JSX that is positioned in the banner's body.

        Depending on what gets passed through textBodies or elementBody, the 'body' of the container changes. 
    
        If textBodies is used (and elementBody is null or undefined), the format is list.
        [
            "Sentence #1",
            "Sentence #2",
            "Sentence #3",
            "Sentence #4"
        ]
        But if elementBody is used (and textBodies is [] or undefined), the format is JSX.




    'img' <-- This prop is unused. It may be developed in the future though.

    'bgColor', a css-interpretable string, is the color code of the banner.

    'maxWidth', a number, is the maxiumum width (in px) of the banner.

    'topPadding', a number, is the top padding (in px) of the banner.

    'bottomPadding', a number, is the bottom padding (in px) of the banner.

    'bodyLeftPadding', a number, is the left padding (in px) of the banner's body.

    'bodyRightPadding', a number, is the right padding (in px) of the banner's body.
    
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
        </div>
    )
}

export default Banner;
