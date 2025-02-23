
import React from "react";
import { ContactSection, Page, Seo } from 'gatsby-theme-portfolio-minimal';

export default function ContactPage() {
    return (
        <>
            <Seo title="Contact" />
            <Page useSplashScreenAnimation> 
                <ContactSection sectionId="contact" heading="Contact me" />
            </Page>
        </>
    );
}