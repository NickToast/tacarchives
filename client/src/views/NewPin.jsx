import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const NewPin = () => {

    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        grade: '',
        plating: '',
        category: ''
    })

    const [file, setFileData] = useState();

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => ({...formData, [name]:value}));
    }

    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        // Send the object with JSON.stringify and then use JSON.parse once you receive data, to make the string object an object again
        // Without JSON.stringify, formData will be sent as an object of [object Object], this way we can send with json stringify and parse the
        //data with json parse
        data.append('formData', JSON.stringify(formData));
        data.append('file', file);

        axios.post('/upload', data)
            .then((res) => {
                console.log(res)
                toast.success('Successful file upload!')
            })
            .catch((err) => {
                console.log(err);
                console.log(data);
                toast.error('Something went wrong :(')
            })
    }

    return (
        <div>
            <NavBar/>
            <h1 className='mb-5'>New Pin Page</h1>
            <div className='container min-vh-100 d-flex justify-content-center'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='me-2 pin-label'>Name: </label>
                        <input type="text" placeholder='Name and LE' className='px-2 py-2 pin-input' name='name' value={formData.name} onChange={handleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label className='me-2 pin-label'>Price: </label>
                        <input type="number" placeholder='$0.00' className='px-2 py-2 pin-input' name='price' value={formData.price} onChange={handleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label className='me-2 pin-label'>Plating: </label>
                        <input type="text" placeholder='Plating' className='px-2 py-2 pin-input' name='plating' value={formData.plating} onChange={handleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="grade" className='me-2 pin-label'>Grade: </label>
                        <select name='grade' id='grade' className='px-2 py-2 pin-input' value={formData.grade} onChange={handleChange}>
                            <option value="" disabled>~ Choose Grade ~</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="category" className='me-2 pin-label'>Category: </label>
                        <select name='category' id='category' className='px-2 py-2 pin-input' value={formData.category} onChange={handleChange}>
                            <option value="" disabled>~ Choose a Category ~</option>
                            <option value="disney">Disney</option>
                            <option value="anime">Anime</option>
                            <option value="hp">Harry Potter</option>
                            <option value="sonny">Sonny Angel</option>
                            <option value="smiski">Smiski</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label className='me-2 pin-label'>Image File: </label>
                        <input type="file"  className='px-2 py-2 pin-input' onChange={fileChangeHandler}/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default NewPin
