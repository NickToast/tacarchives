import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {




    return (
        <div className='hero-section'>
            <div className="hero-container">
                <div className="text p-5">
                    <div className="content">
                        <h1>This is a heading</h1>
                        <p className='py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <Link to={'/'}>
                            <button className='btn btn-light btn-outline-dark'>Click Me</button>
                        </Link>
                    </div>
                </div>
                <div className='hero-image'></div>
            </div>
        </div>
    )
}

export default HeroSection