import React from 'react'
import HyperLinks from './HyperLinks'
import Info from './Info'
import Contact from './Contact'

function Footer() {
    return (
        <footer className="footer-container">
            <div className="first-section">
                <Info />
                <Contact />
            </div>
            <div>
                <HyperLinks />
            </div>

            
        </footer>
    )
}

export default Footer
