import React, {useState} from 'react';
import { BiSearch } from 'react-icons/bi'


const SearchBar = () => {

    

    return (
        <div className='search'>
            <div className=''>
                {/* Input Field for Search Bar  */}
                <i><BiSearch /></i>
                <input type="text" placeholder='Search' className='m-3 px-2 py-1 w-75 search-bar' />
            </div>
            <div className='dataResult'>

            </div>
        </div>
    )
}

export default SearchBar;