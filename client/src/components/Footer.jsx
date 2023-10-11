import React from 'react'

const Footer = () => {
    return (
        <div className=''>
            {/* Top div with links */}
            <div className='footer d-flex justify-content-evenly align-items-center text-light py-3'>
                <div>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Pinterest</p>
                </div>
                <div>
                    <p>Contact</p>
                    <p>Tel: 123-456-7890</p>
                    <p>info@mysite.com</p>
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
