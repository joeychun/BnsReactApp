import React from 'react';
import Banner from '../../shared/Banner/banner';
import { Button, Icon } from 'semantic-ui-react'
import './contactbanner.css';

const ElementBody = () => {
    /* 
    ElementBody returns JSX of a blue, animated button that displays "Email Us!"
    when it is not hovered and a mail icon when it is hovered.
    */
    return (
        <Button animated="vertical" color="blue" className="ContactButton"
            onClick={() => window.open("mailto:seongyoon.kim24@stu.siskorea.org")}
        >
            <Button.Content visible><p>Email Us!</p></Button.Content>
            <Button.Content hidden>
                <Icon name='mail' size="large" />
            </Button.Content>
        </Button>
    );
}

const content = {
    heading: "Contact",
    img: "",
}

const cssSettings = {
    bgColor: "#364261",
    maxWidth: "80%",
    bodyTopPadding: 15,
    bodyLeftPadding: 80
}

const ContactBanner = () => {
    /*
    ContactBanner returns JSX of the banner for the contact page.
    */
    return (
        <div>
            <Banner bannerId="" noDivider={true} bgColor={cssSettings.bgColor} heading={content.heading} elementBody={<ElementBody />}
                img={content.img} bgImg={content.bgImg} maxWidth={cssSettings.maxWidth}
                bodyTopPadding={cssSettings.bodyTopPadding} bodyLeftPadding={cssSettings.bodyLeftPadding} />
        </div>
    )
}

export default ContactBanner;