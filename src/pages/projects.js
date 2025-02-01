
import React from "react";
import { ProjectsSection, Page, Seo } from 'gatsby-theme-portfolio-minimal';

export default function ProjectsPage() {
    return (
        <>
            <Seo title="Projects" />
            <Page useSplashScreenAnimation> 
                <ProjectsSection sectionId="projects" heading="Projects" />
            </Page>
        </>
    );
}