import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = (props) => {

    const [product, setProduct] = useState({});
    const { pdtID } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${pdtID}`)
            // .then(res => console.log("Success!", res))
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])

    const deleteButton = () => {
        axios.delete(`http://localhost:8000/api/products/${pdtID}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        
        navigate('/')
    }

    return (
        <div style={{ 'width': '100%', 'height': '100vh', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'flexDirection': 'column' }}>
            <h3>{product.title}</h3>
            <h5>Price: ${product.price}</h5>
            <h5 className='mb-5'>Description: {product.description}</h5>
            <hr />
            <button className='mt-5 btn btn-danger' onClick={deleteButton}>Delete</button>
        </div>
    )
}

export default ProductDetails