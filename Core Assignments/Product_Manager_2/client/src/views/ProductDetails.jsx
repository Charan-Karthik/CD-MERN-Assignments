import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
    
    const [product, setProduct] = useState({})
    const {pdtID} = useParams
    console.log(pdtID)

    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${pdtID}`)
            .then(res => console.log("Success!", res))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Testing</h1>
        </div>
    )
}

export default ProductDetails