import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import axios from 'axios'
const SERVER_HOST = process.env.SERVER_HOST

const Shop = () => {

    const [pinPaths, setPinPaths] = useState([]);

    console.log(pinPaths);
    // gets file name
    // console.log(pinPaths[0].image); 
    useEffect(() => {
        axios.get('/allPins')
            //Set all pin file names into allPins
            .then(res => {
                // for (let i = 0 ; i < res.data.length; i++) {
                //     setPinPaths(...allPins, image)
                // }
                setPinPaths(res.data);
                // console.log(res.data);
                // console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <NavBar/>
            <div className="container">
                <h2 className='mb-5'>Shop</h2>
                {/* Left side filter box */}
                <div className="d-flex">
                    <div className='col-3 bg-light p-3'>
                        <h3>Categories</h3>
                    </div>
                    {/* Right side listings */}
                    <div className="d-flex justify-content-evenly col-9 mb-5">
                    {
                        pinPaths.map((items, key) => {
                            return (
                                <div className='d-flex flex-column gap-1'>
                                    <img src={`http://localhost:8000/` + items.image} alt='pin photo' className='pin-img mb-4'/>
                                    <h3>{items.name}</h3>
                                    <h5>${items.price}</h5>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Shop
