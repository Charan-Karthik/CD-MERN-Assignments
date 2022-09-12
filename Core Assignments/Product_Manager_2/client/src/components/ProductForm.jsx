import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

    const formSubmitHandler = e => {
        e.preventDefault();

        console.log("title", title);
        console.log("price", price);
        console.log("desc", desc);

        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description: desc
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))


        setTitle("");
        setPrice("");
        setDesc("");
    }

    return (
        <div className='container mt-4'>
            <h1 className='text-center'>Product Manager Form</h1>
            <div className='d-flex justify-content-center'>
                <form onSubmit={formSubmitHandler}>
                    <div className='mb-3'>
                        <label className='form-label'>Title</label>
                        <input className='form-control' onChange={e => setTitle(e.target.value)} value={title} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Price</label>
                        <input className='form-control' type='number' step='.01' onChange={e => setPrice(e.target.value)} value={price} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Description</label>
                        <input className='form-control' onChange={e => setDesc(e.target.value)} value={desc} />
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ProductForm