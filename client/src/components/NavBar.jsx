import React, {useState} from 'react';
import SearchBar from './SearchBar';




const NavBar = () => {



    return (
        // NavBar Div
        <div>
            {/* // Links on the left of NavBar */}
            <div>
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>FAQ</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
            {/* Website Name in the middle of Navbar */}
            <div>
                {/* Div to stack the words */}
                <div>
                    <h2>theaestheticcollector</h2>
                </div>
                <div>
                    <h2>archives</h2>
                </div>
            </div>
            {/* Right Side Div  */}
            <div>
                {/* Search Bar  */}
                <div>
                    <SearchBar palceholder="Search" />
                </div>
                {/* Login  */}
                <div>

                </div>
                {/* Cart  */}
                <div>

                </div>
            </div>
        </div>
    )
}

export default NavBar;