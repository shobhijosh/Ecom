import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import HelpAccordion from './HelpAccordion';

const HelpPage = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="container12">
                    <h2>Frequently Asked Questions</h2>
                    <div className="accordion">
                        <HelpAccordion />
                        <HelpAccordion />
                        <HelpAccordion />
                        <HelpAccordion />
                        <HelpAccordion />
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default HelpPage