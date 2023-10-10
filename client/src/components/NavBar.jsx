import React, {useState} from 'react';
import SearchBar from './SearchBar';

const NavBar = () => {



    return (
        // NavBar Div
        <div className="d-flex justify-content-between align-items-center">
            {/* // Links on the left of NavBar */}
            <div className='d-flex gap-3 m-5'>
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
            {/* Website Name in the middle of Navbar */}
            <div className='title-font navbar-font-color'>
                {/* Div to stack the words */}
                <div>
                    <h2 className='fs-1'>theaestheticcollector</h2>
                </div>
                <div>
                    <h2 className='fs-1'>archives</h2>
                </div>
            </div>
            {/* Right Side Div  */}
            <div className='d-flex justify-content-between align-items-center m-5'>
                {/* Search Bar  */}
                <div>
                    <SearchBar palceholder="Search" />
                </div>
                {/* Login  */}
                <div>
                    <p>Login Icon</p>
                </div>
                {/* Cart  */}
                <div>
                    <p>Cart Icon</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar;