import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoPerson } from 'react-icons/go'
import { BiLockAlt } from 'react-icons/bi'

const Registration = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newUser = {
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }

        axios.post('http://localhost:8000/api/register', payload, {withCredentials: true})
            .then(res => )

    }

    return (
        <div className="login-bg d-flex justify-content-center align-items-center">
            <div className='login-container py-3 px-4'>
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div className='input-box'>
                        <input type="text" className='text-light ps-3' placeholder='Username' name='username' onChange={(e) => setUsername(e.target.value)}/>
                        <i><GoPerson size={20} className='text-light'/></i>
                    </div>
                    <div className='input-box'>
                        <input type="text" className='text-light ps-3' placeholder='Email' name='email' onChange={(e) => setEmail(e.target.value)}/>
                        <i><GoPerson size={20} className='text-light'/></i>
                    </div>
                    <div className='input-box'>
                        <input className='text-light ps-3' type="password" placeholder='Password' name='password' onChange={(e) => setPassword(e.target.value)}/>
                        <i><BiLockAlt size={20} className='text-light'/></i>
                    </div>
                    <div className='input-box'>
                        <input className='text-light ps-3' type="password" placeholder='Confirm Password' name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)}/>
                        <i><BiLockAlt size={20} className='text-light'/></i>
                    </div>
                    <input type='submit' className='btn-login' value='Register'></input>
                    <div className="register-link d-flex justify-content-center gap-2 mt-3">
                        <p className='text-light'>Already have an account?</p>
                        <Link to='/login' className='forgot-password-register-link fw-bold'>Login Here</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration
