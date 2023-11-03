import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import axios from 'axios'
import Category from '../components/Category'
import CategoryMenu from '../components/CategoryMenu'

const Shop = () => {

    const [pinPaths, setPinPaths] = useState([]);

    // console.log(pinPaths);
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
                <h1 className='mb-3 fw-bold'>Shop</h1>
                {/* Left side filter box */}
                <div className="d-flex">
                    <Category>
                        <CategoryMenu></CategoryMenu>
                    </Category>
                    {/* <div className='col-3 bg-light m-3 py-3 px-4'>
                        <h3 className='fw-bold'>Categories</h3>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5 className='fw-bold m-0'>Category</h5>
                            <button className='category-btn' onClick={() => setCategoryOpen(!categoryOpen)}>+</button>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5 className='fw-bold'>Price</h5>
                            <button className='category-btn'>+</button>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5 className='fw-bold'>Plating</h5>
                            <button className='category-btn'>+</button>
                        </div>
                    </div> */}
                    {/* Right side listings */}
                    <div className="d-flex gap-5 col-9 m-3 bg-primary">
                    {
                        pinPaths.map((items, key) => {
                            return (
                                <div className='d-flex flex-column gap-1 p-3 bg-success'>
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
