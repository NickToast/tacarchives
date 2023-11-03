import React from 'react'
import {useState} from 'react';
import CategoryMenu from './CategoryMenu';
import CategoryItems from './CategoryItems';
import PriceMenu from './PriceMenu';


const Category = (props) => {

    return (
        <div className='col-3 bg-light m-3 py-3 px-4'>
            <h3 className='fw-bold'>Categories</h3>
            <hr />
            <CategoryMenu ></CategoryMenu>
            <PriceMenu></PriceMenu>
        </div>
    )
}

export default Category
