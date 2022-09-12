import React from 'react'
import {Link} from 'react-router-dom'

const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product, index) => 
            <Link to={`/product/${product._id}`}> <p key={index}>{product.title}</p> </Link>
            )}
        </div>
    )
}

export default ProductList