import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoPerson } from 'react-icons/go'
import { BiLockAlt } from 'react-icons/bi'
import axios from 'axios'


const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigator = useNavigate();


    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => ({...formData, [name]:value}));
        // console.log(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get('/')
    }


    return (
        <div className="login-bg d-flex justify-content-center align-items-center">
            <div className='login-container py-3 px-4'>
                <form action={handleSubmit}>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="text" className='text-light ps-3' placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
                        <i><GoPerson size={20} className='text-light'/></i>
                    </div>
                    <div className='input-box'>
                        <input className='text-light ps-3' type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} />
                        <i><BiLockAlt size={20} className='text-light'/></i>
                    </div>
                    <div className="remember-forgot d-flex gap-5 justify-content-between mb-4">
                        <label className='text-light'><input type="checkbox" className='me-1'/> Remember Me</label>
                        <Link className='forgot-password-register-link fw-semibold'>Forgot password?</Link>
                    </div>
                    <button type='submit' className='btn-login'>Login</button>
                    <div className="register-link d-flex justify-content-center gap-2 mt-3">
                        <p className='text-light'>Don't have an account?</p>
                        <Link to='/register' className='forgot-password-register-link fw-bold'>Register Here</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
