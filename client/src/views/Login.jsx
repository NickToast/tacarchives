import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoPerson } from 'react-icons/go'
import { BiLockAlt } from 'react-icons/bi'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import Logout from '../components/Logout'


const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigator = useNavigate();


    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => ({...formData, [name]:value}));
    }

    const loginUser = async (e) => {
        e.preventDefault()
        //Destructure data for email and pw
        const {email, password} = formData;
        try {
            const {data} = await axios.post('/login', {
                email,
                password
            })
            if(data.error) {
                toast.error(data.error)
            } else {
                setFormData({
                    email: '',
                    password: ''
                });
                toast.success('Login Successful!')
                navigator('/registered')
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="login-bg d-flex justify-content-center align-items-center">
            <div className='login-container py-3 px-4'>
                <form onSubmit={loginUser}>
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
                <Logout></Logout>
            </div>
        </div>
    )
}

export default Login
