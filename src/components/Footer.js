import React from 'react'

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="contact-info">
                <h2 className="contact-phone-number">123-456-7890 | 123-456-7890</h2>
                <h2 className="contact-phone-website">info@mysite.com</h2>
                <h2 className="contact-phone-address">500 Terry Francois St, San Francisco, </h2>
                <h2 className="contact-phone-state">CA 94158</h2>
            </div>
            <div className="contact-socials">
                <div className="socials">
                    <i className="fab fa-facebook-f social-icon"></i>
                    <i className="fab fa-instagram social-icon"></i>
                    <i className="fab fa-twitter social-icon"></i>
                    <i className="fab fa-youtube social-icon"></i>
                </div>
                <h2 className="trademark"><i className="far fa-copyright"></i>2023 git-A-Pup Adoption Site</h2>
            </div>
        </footer>
    )
}

export default Footer