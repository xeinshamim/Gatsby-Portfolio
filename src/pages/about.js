
import React from "react";
import { AboutSection, Page, Seo } from 'gatsby-theme-portfolio-minimal';

export default function AboutPage() {
    return (
        <>
            <Seo title="About me" />
            <Page useSplashScreenAnimation> 
                <AboutSection sectionId="about" heading="About me" />
            </Page>
        </>
    );
}