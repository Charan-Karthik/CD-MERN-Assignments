import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ProductList = (props) => {

    const { removeFromDom } = props;

    const deleteButtonAction = (personID) => {
        // console.log(personID)
        axios.delete(`http://localhost:8000/api/products/${personID}`)
            .then(res => { removeFromDom(personID) })
            .catch(err => console.log(err));
    }

    return (
        <div>
            {props.products.map((product, index) =>
                <div key={index} className="d-flex justify-content-evenly">
                    <p><Link to={`/product/${product._id}`}> {product.title} </Link></p>
                    <Link to={`/product/${product._id}/edit`}><button className='btn btn-warning mb-2'>Edit</button></Link>
                    <button onClick={(e) => { deleteButtonAction(product._id) }} className='btn btn-danger mb-2'>Delete</button>
                </div>
            )}
        </div>
    )
}

export default ProductList