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
            <h2>Shop</h2>
            {
                pinPaths.map((items, key) => {
                    return (
                        <>
                            <h3>{items.image}</h3>
                            <img src={`http://localhost:3000/` + items.image} alt='pin photo' />
                        </>
                    )
                })
            }
            <Footer/>
        </div>
    )
}

export default Shop
