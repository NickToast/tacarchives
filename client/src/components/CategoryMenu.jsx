import {useState} from 'react'

const CategoryMenu = (props) => {

    const [categoryOpen, setCategoryOpen] = useState(false);

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <h5 className='fw-bold m-0'>Category</h5>
                {
                    categoryOpen ? 
                    <button className='category-btn' onClick={() => setCategoryOpen(!categoryOpen)}>-</button> : 
                    <button className='category-btn' onClick={() => setCategoryOpen(!categoryOpen)}>+</button>
                }
                {/* {categoryOpen && props.children} */}
            </div>
            <div>
                {
                    categoryOpen ? 
                    <ul>
                        <li><button className="category-filter">All</button></li>
                        <li><button className="category-filter">Disney</button></li>
                        <li><button className="category-filter">Anime</button></li>
                        <li><button className="category-filter">Harry Potter</button></li>
                        <li><button className="category-filter">Sonny Angel</button></li>
                        <li><button className="category-filter">Smiski</button></li>
                        <li><button className="category-filter">Other</button></li>
                    </ul> : <></>
                }
            </div>
            <hr />
            {/*
            <div className='d-flex justify-content-between align-items-center'>
                <h5 className='fw-bold'>Plating</h5>
                <button className='category-btn'>+</button>
            </div> */}
        </div>
    )
}

export default CategoryMenu
