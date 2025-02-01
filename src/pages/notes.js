import React from "react";
import { Page, Seo } from 'gatsby-theme-portfolio-minimal';

export default function NotePage() {
    return (
        <>
            <Seo title="Notes" />
            <Page useSplashScreenAnimation>
                <section
                    style={{
                        textAlign: 'center',
                        padding: '2rem',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <h2 style={{ color: '#333', fontSize: '2rem', marginBottom: '1rem' }}>Notes</h2>
                    <p style={{ color: '#666', fontSize: '1.2rem' }}>No notes available.</p>
                </section>
            </Page>
        </>
    );
}
