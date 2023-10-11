import React from 'react'

const Footer = () => {
    return (
        <div className=''>
            {/* Top div with links */}
            <div className='footer d-flex justify-content-evenly align-items-center text-light py-3'>
                <div>
                    <p className='footer-link'>Facebook</p>
                    <p className='footer-link'>Instagram</p>
                    <p className='footer-link'>Pinterest</p>
                </div>
                <div>
                    <p className='footer-link'>Contact</p>
                    <p className='footer-link'>Tel: 123-456-7890</p>
                    <p className='footer-link'>info@mysite.com</p>
                </div>
            </div>
            {/* Bot div with copyright */}
            <div className='copyright py-2 d-flex justify-content-center align-items-center'>
                <h5>C 2023 by theaestheticcollector</h5>
            </div>
        </div>
    )
}

export default Footer
