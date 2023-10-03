import React from 'react';

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
        </div>
    )
}

export default NavBar;