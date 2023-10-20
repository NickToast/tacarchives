import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoPerson } from 'react-icons/go'
import { BiLockAlt } from 'react-icons/bi'
import axios from 'axios'

const Registration = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigator = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => ({...formData, [name]:value}));
        // console.log(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // const newUser = {
        //     username: username,
        //     email: email,
        //     password: password,
        //     confirmPassword: confirmPassword
        // }
        // axios.post('http://localhost:8000/api/register', formData, {withCredentials: true})
        // axios.post('http://localhost:8000/api/register', formData)
        //     .then(res => {
        //         // To reset formData back to empty
        //         setFormData({
        //             username: '',
        //             email: '',
        //             password: ''
        //         })
        //         navigator('/registered');
        //         console.log(res.message);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    return (
        <div className="login-bg d-flex justify-content-center align-items-center">
            <div className='login-container py-3 px-4'>
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div className='input-box'>
                        <input type="text" className='text-light ps-3' placeholder='Username' name='username' value={formData.username} onChange={handleChange}/>
                        <i><GoPerson size={20} className='text-light'/></i>
                    </div>
                    <div className='input-box'>
                        <input type="text" className='text-light ps-3' placeholder='Email' name='email' value={formData.email} onChange={handleChange}/>
                        <i><GoPerson size={20} className='text-light'/></i>
                    </div>
                    <div className='input-box'>
                        <input className='text-light ps-3' type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange}/>
                        <i><BiLockAlt size={20} className='text-light'/></i>
                    </div>
                    <div className='input-box'>
                        <input className='text-light ps-3' type="password" placeholder='Confirm Password' name='confirmPassword' onChange={handleChange}/>
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
