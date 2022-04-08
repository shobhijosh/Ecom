import React from 'react'
import { FaStar, FaAngleRight, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const AboutProduct = () => {
    return (
        <div className="container10">
            <div className="image3"></div>
            <div className="flex1">
                <div className="aboutProduct1">
                    <h3>Product Title</h3>
                    <p>Space for a small description</p>
                    <FaStar /><FaStar /><FaStar /><FaStar />
                    <div className="about1">
                        <ul>
                            <li>Freshness</li>
                            <li>Farm</li>
                            <li>Delivery</li>
                            <li>Stock</li>
                        </ul>
                        <ul>
                            <li><span className='activeLink'>New</span><span>(Extra Fresh)</span></li>
                            <li>Grocery Tarm fields</li>
                            <li>Europe</li>
                            <li><span className='activeLink'>320pcs</span></li>
                        </ul>
                    </div>
                </div>
                <div className="details1">
                    <div className="price1">
                        <h3>36.9 USD</h3>
                        <span>48.56</span>
                    </div>
                    <div className="ship1">
                        <span>Free Shipping</span>
                        <span>Delivery in 1 day</span>
                    </div>
                    <div className="buttons2">
                        <button className="flexButton">
                            <Link to="/productDetail">Buy Now</Link><FaAngleRight />
                        </button>
                        <button className="flexButton1">
                            <FaHeart />
                            <span>Add to wish list</span>
                        </button>
                    </div>
                </div>
                <div className="moreAbout">
                    <h2>More About Product</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae ipsum consectetur neque! Incidunt molestias sint magnam quisquam soluta, fuga voluptate, ea aliquid quibusdam magni quas minima, veritatis natus. Dicta maiores assumenda mollitia quidem! Ea distinctio perferendis quibusdam placeat veritatis omnis quia laudantium est quas veniam. Voluptates ea modi vel!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutProduct