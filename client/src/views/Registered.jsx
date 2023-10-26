import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { UserContext } from "../context/userContext"
import Logout from '../components/Logout'

const Registered = () => {

    const {user} = useContext(UserContext);

    

    return (
        <div>
            <h1>You have been registered!</h1>
            <h2>Start browsing now!</h2>
            <Link to='/'>To Home Page</Link>
            {!!user && (<h2> Hi {user.username}! </h2>)}
            <Logout></Logout>
        </div>
    )
}

export default Registered
