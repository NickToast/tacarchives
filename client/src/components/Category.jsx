import React from 'react'
import {useState} from 'react';
import CategoryMenu from './CategoryMenu';
import CategoryItems from './CategoryItems';
import PriceMenu from './PriceMenu';
import GradeMenu from './GradeMenu';


const Category = ({getAllPins, disneyPins, animePins, hpPins, sonnyAngelPins, smiskiPins, otherPins}) => {

    return (
        <div className='col-3 bg-light m-3 py-3 px-4'>
            <h3 className='fw-bold'>Categories</h3>
            <hr />
            <CategoryMenu getAllPins={getAllPins} disneyPins={disneyPins} animePins={animePins} hpPins={hpPins} sonnyAngelPins={sonnyAngelPins} smiskiPins={smiskiPins} otherPins={otherPins}></CategoryMenu>
            <PriceMenu></PriceMenu>
            <GradeMenu></GradeMenu>
        </div>
    )
}

export default Category
