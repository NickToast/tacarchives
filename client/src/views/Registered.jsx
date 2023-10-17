import React from 'react'
import { Link } from 'react-router-dom'

const Registered = () => {
    return (
        <div>
            <h1>You have been registered!</h1>
            <h2>Start browsing now!</h2>
            <Link to='/'>To Home Page</Link>
        </div>
    )
}

export default Registered
