import React from 'react'

const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product, index) => 
            <p key={index}>{product.title}</p>
            )}
        </div>
    )
}

export default ProductList