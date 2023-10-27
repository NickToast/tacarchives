import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const NewPin = () => {

    

    return (
        <div>
            <NavBar/>
            <h1 className='mb-5'>New Pin Page</h1>
            <div className='container min-vh-100 d-flex justify-content-center'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='me-2'>Name: </label>
                        <input type="text" placeholder='Name' className='px-2 py-2 pin-input'/>
                    </div>
                    <div className='mb-3'>
                        <label className='me-2'>Price: </label>
                        <input type="number" placeholder='$0.00' className='px-2 py-2 pin-input'/>
                    </div>
                    <div className='mb-3'>
                        <label className='me-2'>Image File: </label>
                        <input type="file"/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default NewPin
