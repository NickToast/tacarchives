import React from 'react'
import {useState} from 'react';


const Category = () => {

    const [categoryOpen, setCategoryOpen] = useState(false);

    return (
        <div className='col-3 bg-light m-3 py-3 px-4'>
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
        </div>
    )
}

export default Category
