import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import { BsPersonCircle } from 'react-icons/bs'
import { BiDownArrowAlt } from 'react-icons/bi'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { Link, NavLink, useParams } from 'react-router-dom';
// import DropdownToggle from 'react-bootstrap/DropdownToggle';
// import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropDown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Logout from './Logout';
import { useContext } from "react"
import { UserContext } from "../context/userContext"


const NavBar = (props) => {

    const currentRoute = useParams();

    const {user} = useContext(UserContext);
    //Then use jsx syntax to show the name or other information on
    // {!!user && (<h2> Hi {user.username}! </h2>)}
    //Maybe we can use ternary operator as well?

    return (
        // NavBar Div
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                {/* // Links on the left of NavBar */}
                <ul className='d-flex gap-3 m-5 nav-bar'>
                    <li>
                        <NavLink to='/' className={({isActive}) => (isActive ? 'active' : 'nav-link')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({isActive}) => (isActive ? 'active' : 'nav-link')}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/faq' className={({isActive}) => (isActive ? 'active' : 'nav-link')}
                        >
                            FAQ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({isActive}) => (isActive ? 'active' : 'nav-link')}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
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
                <div className='d-flex justify-content-between align-items-center m-5 gap-3'>
                    {/* Search Bar  */}
                    <div>
                        <SearchBar />
                    </div>
                    {/* Login  */}
                    <div className='d-flex gap-2'>
                            <Link to='/login'>
                                <i><BsPersonCircle size={25}/></i>
                            </Link>
                            {/* <Logout/> */}
                        {/* <DropDown>
                            <Link to='/login'>
                                <i><BsPersonCircle size={25}/></i>
                            </Link>
                            <DropdownButton>
                                <i><BiDownArrowAlt size={25}/></i>
                            </DropdownButton>
                            <DropDown.Toggle>
                                <i><BiDownArrowAlt size={25}/></i>
                            </DropDown.Toggle>
                            <DropDown.Menu>
                                <DropDown.ItemText>Welcome, User!</DropDown.ItemText>
                            </DropDown.Menu>
                            <ul className='dropdown-menu' aria-labelledby='user-dropdown'>
                                <li>Welcome, user!</li>
                            </ul>
                        </DropDown> */}
                        {
                            (user) ? <Link to='/newpin'>Add New Pin</Link> : <></>
                        }

                    </div>
                    {/* Cart  */}
                    {/* <div>
                        <i><LiaShoppingBagSolid size={30}/></i>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default NavBar;