import React from 'react'
import { Link } from 'react-router-dom'
import { GoPerson } from 'react-icons/go'
import { BiLockAlt } from 'react-icons/bi'

const Registration = () => {



    return (
        <div className="login-bg d-flex justify-content-center align-items-center">
            <div className='login-container py-3 px-4'>
                <form action="POST">
                    <h1>Sign Up</h1>
                    <div className='input-box'>
                        <input type="text" className='text-light ps-3' placeholder='Username'/>
                        <i><GoPerson size={20} className='text-light'/></i>
                    </div>
                    <div className='input-box'>
                        <input className='text-light ps-3' type="password" placeholder='Password'/>
                        <i><BiLockAlt size={20} className='text-light'/></i>
                    </div>
                    <button type='submit' className='btn-login'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Registration
