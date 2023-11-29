import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import axios from 'axios'
import Category from '../components/Category'
import CategoryMenu from '../components/CategoryMenu'
import PriceMenu from '../components/PriceMenu'
import GradeMenu from '../components/GradeMenu'

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

    const getAllPins = () => {
        axios.get('/allPins')
            .then(res => {
                setPinPaths(res.data);
            })
            .catch(err => console.log(err));
    }

    const disneyPins = () => {
        axios.get('/disneyPins')
        .then( res => {
            setPinPaths(res.data);
        })
        .catch(err => console.log(err))
    }
    const animePins = () => {
        axios.get('/animePins')
        .then( res => {
            setPinPaths(res.data);
        })
        .catch(err => console.log(err))
    }
    const hpPins = () => {
        axios.get('/hpPins')
        .then( res => {
            setPinPaths(res.data);
        })
        .catch(err => console.log(err))
    }
    const sonnyAngelPins = () => {
        axios.get('/sonnyAngelPins')
        .then( res => {
            setPinPaths(res.data);
        })
        .catch(err => console.log(err))
    }
    const smiskiPins = () => {
        axios.get('/smiskiPins')
        .then( res => {
            setPinPaths(res.data);
        })
        .catch(err => console.log(err))
    }
    const otherPins = () => {
        axios.get('/otherPins')
        .then( res => {
            setPinPaths(res.data);
        })
        .catch(err => console.log(err))
    }



    return (
        <div>
            <NavBar/>
            <div>
                <h1 className='mb-3 fw-bold'>Shop</h1>
                {/* Left side filter box */}
                <div className="d-flex">
                    <Category getAllPins={getAllPins} disneyPins={disneyPins} animePins={animePins} hpPins={hpPins} sonnyAngelPins={sonnyAngelPins} smiskiPins={smiskiPins} otherPins={otherPins}>
                        <CategoryMenu>
                        </CategoryMenu>
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
                    pinPaths.length > 0 ?
                        pinPaths.map((items, key) => {
                            return (
                                <div className='d-flex flex-column p-3 bg-success'>
                                    <img src={`http://localhost:8000/` + items.image} alt='pin photo' className='pin-img mb-4'/>
                                    <div className="d-flex flex-column pin-cards">
                                        <h3>{items.name}</h3>
                                        <p>{items.grade} grade</p>
                                        <p>${items.price}</p>
                                    </div>
                                </div>
                            )
                        }) :
                        <h3>Sorry! Currently, there are no listings for this category!</h3>
                    }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Shop
