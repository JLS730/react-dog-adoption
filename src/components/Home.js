import React from 'react'

import bannerImage from '../images/homeBannerImage.png'

const Home = () => {
    return (
        <React.Fragment>
            <figure className="home-banner">
                <img className='banner-image' src={bannerImage} alt="Banner dog" />
                <div className="banner-shadow"></div>
                <h2 className="banner-text">Come {'&'} Meet A Fluffy Friend</h2>
            </figure>
            <main className="info-section">
                <section className="info-summary">
                    <h2 className="summary-title">Plenty Of Friends To Choose From</h2>
                    <p className="summary-text">Thanks for visiting our site and being a huge help in finding our precious pups a forever home!</p>
                </section>
                <section className="features-section">
                    <div className="feature-1">
                        <i className="fas fa-hand-holding-heart fa-4x feature-1-icon"></i>
                        <h2 className="feature-1-title">Show Love</h2>
                        <p className="feature-1-text">Browse through hundreds of puupies who are just perfect for adoption!</p>
                        <button className="feature-1-button feature-button">Show Love</button>
                    </div>
                    <div className="feature-2">
                        <i className="fas fa-search-location fa-4x feature-2-icon"></i>
                        <h2 className="feature-2-title">Find A Friend</h2>
                        <p className="feature-2-text">Looking for a friend? Enter your location for adoptions closest to you.</p>
                        <button className="feature-2-button feature-button">Find A Friend</button>
                    </div>
                    <div className="feature-3">
                        <i className="fas fa-book-open fa-4x feature-3-icon"></i>
                        <h2 className="feature-3-title">Learn More</h2>
                        <p className="feature-3-text">See a dog you like? Take a moment to learn more about your new friend.</p>
                        <button className="feature-3-button feature-button">Learn More</button>
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default Home
