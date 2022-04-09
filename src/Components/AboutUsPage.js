import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import Image from './Logo/amazon.png'
import Image1 from './Logo/flipkart.png'
import Image2 from './Logo/jio.png'
import Image3 from './Logo/grofers.png'
import Image4 from './Logo/bigBasket.jpg'
import Icon1 from './Icons/fast.png'
import Icon2 from './Icons/shipping.png'
import Icon3 from './Icons/quality.png'
import Icon4 from './Icons/discount.png'
import Icon5 from './Icons/service.jpg'
import Icon6 from './Icons/verified.png'

const AboutUsPage = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="container11">
                    <div className="aboutSection">
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officia repellendus quas molestiae dicta? Enim rem tempora autem sit a, vel ab quod, odit ducimus minima placeat. Modi tempora harum quos! Fuga libero autem placeat nostrum, in animi, ratione hic distinctio nam laudantium eius excepturi assumenda enim! Vel beatae tempora at, totam veniam alias optio enim iure aperiam voluptatum eum, nam neque amet dolores illo earum, temporibus cum quos placeat sapiente? Sunt necessitatibus debitis sequi unde temporibus aut, eius aperiam quidem omnis minima quis veritatis voluptatibus tenetur corporis illum ipsa ipsum aliquam architecto minus? Nobis illo unde asperiores itaque illum.</p>
                    </div>
                    <div className="partners">
                        <h1>Our Partners</h1>
                        <div className="partnerImages">
                            <img src={Image} alt="amazon" />
                            <img src={Image1} alt="flipkart" />
                            <img src={Image2} alt="jio" />
                            <img src={Image3} alt="grofers" />
                            <img src={Image4} alt="bigBasket" />
                        </div>
                    </div>
                    <div className="benefitSection">
                        <h1>Our Benefits</h1>
                        <div className="benefits">
                            <div className="benefit">
                                <img src={Icon1} alt="fast" />
                                <h2>Fast Delivery</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, nulla.</p>
                            </div>
                            <div className="benefit">
                                <img src={Icon2} alt="shipping" />
                                <h2>Free Shipping</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, nulla.</p>
                            </div>
                            <div className="benefit">
                                <img src={Icon3} alt="quality" />
                                <h2>Best Quality Products</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, nulla.</p>
                            </div>
                            <div className="benefit">
                                <img src={Icon4} alt="discount" />
                                <h2>Amazing Discounts</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, nulla.</p>
                            </div>
                            <div className="benefit">
                                <img src={Icon5} alt="service" />
                                <h2>24x7 Support</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, nulla.</p>
                            </div>
                            <div className="benefit">
                                <img src={Icon6} alt="verified" />
                                <h2>Verified Products</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, nulla.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default AboutUsPage