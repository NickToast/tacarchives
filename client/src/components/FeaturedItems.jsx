import React from 'react'
import Card from 'react-bootstrap/Card'

const FeaturedItems = () => {
    return (
        <div className='container'>
            <h2 className='fw-semibold'>Featured Items</h2>
            <div>
                <Card style={{width: '20rem', outline: 'solid 1px'}} className='m-5 d-flex card'>
                    <Card.Img className='card-img' alt='pin of img name'/>
                    <Card.Body className='text-center'>
                        <p>Name of Pin</p>
                        {/* {<Button id={item._id}/>} */}
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default FeaturedItems
