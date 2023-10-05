import React, {useState} from 'react';

const SearchBar = ({placeholder, data}) => {

    

    return (
        <div className='search'>
            <div className='searchInputs'>
                {/* Search Icon  */}
                <div className='searchIcon'>

                </div>
                {/* Input Field for Search Bar  */}
                <input type="text" placeholder={placeholder} />
            </div>
            <div className='dataResult'>

            </div>
        </div>
    )
}

export default SearchBar;