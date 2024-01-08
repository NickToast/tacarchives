import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const About = () => {



    return (
        <div>
            <NavBar />
            {/* container */}
            {/* react timeline component? left and right columns to describe about section, values, and background if needed */}
            <div>
                <h2 className='fw-bold mb-3'>About</h2>
                {/* hero section */}
                <div>
                    {/* hero image */}
                    <img src="" alt="" />
                    <div>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, id. Aut, eveniet! Dolores, sequi officiis! Numquam quisquam itaque ducimus corrupti quod? Nesciunt porro ducimus recusandae est, maxime fugit aspernatur ipsa.</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem minima inventore quod reiciendis unde voluptates, voluptate consectetur officia a, earum ex asperiores sunt tempore temporibus soluta corporis ipsam recusandae maxime. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id porro accusantium, temporibus quasi aperiam veritatis, aspernatur debitis molestias nam exercitationem, praesentium quia magnam sit sunt maiores? Aliquam quibusdam illum blanditiis!</p>
                    </div>
                </div>
                {/* maybe parallax? on desktop view */}
                <div className='parallax'>
                    <img src="" alt="" />
                </div>
                <div></div>
            </div>
            <Footer/>
        </div>
    )
}

export default About
