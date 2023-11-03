import React, { useState } from 'react'

const GradeMenu = () => {

    const [gradeOpen, setGradeOpen] = useState(false);

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <h5 className='fw-bold'>Grade</h5>
                {
                    gradeOpen ?
                    <button className='category-btn' onClick={() => setGradeOpen(!gradeOpen)}>-</button> :
                    <button className='category-btn' onClick={() => setGradeOpen(!gradeOpen)}>+</button>
                }
            </div>
            <div>
            {
                gradeOpen ?
                <ul>
                    <li><button className="category-filter">A</button></li>
                    <li><button className="category-filter">B</button></li>
                    <li><button className="category-filter">C</button></li>
                </ul> : <></>
            }
            </div>
        </div>
    )
}

export default GradeMenu
