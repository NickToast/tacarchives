import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Logout = () => {

    const navigate = useNavigate();

    const signOut = (e) => {
        e.preventDefault();

        axios.post('/logout', {}, {withCredentials: true})
            .then(res => {
                // console.log(res)
                navigate('/login')
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <button onClick={signOut}>Log Out</button>
        </div>
    )
}

export default Logout
