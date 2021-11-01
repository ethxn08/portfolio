import React from 'react'

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-info">
                <h1>Based in</h1>
                <p>Alicante, Spain</p>
                <p>#03509</p>
                <p>Open To Remotely Work</p>
            </div>
            <div className="footer-contact">
                <h3>Contact Me !</h3>
                <p>And let's get down to work</p>
                <p>+34 633305706</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">

                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/ethan-alfaro/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/ethxn08" target="_blank" rel="noreferrer">
                        <i className="fab fa-github github"></i>
                    </a>     
                    <a href="https://www.instagram.com/gastly08_/" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
