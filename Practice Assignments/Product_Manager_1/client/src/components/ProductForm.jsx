import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

    const formSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            desc
        })
    }

    return (
        <div className='container mt-4'>
            <h1 className='text-center'>Product Manager Form</h1>
            <div className='d-flex justify-content-center'>
                <form onSubmit={formSubmitHandler}>
                    <div className='mb-3'>
                        <label className='form-label'>Title</label>
                        <input className='form-control' onChange={ e => setTitle(e.target.value) } />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Price</label>
                        <input className='form-control' type='number' step='.01' onChange={ e => setPrice(e.target.value) } />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Description</label>
                        <input className='form-control' onChange={ e => setDesc(e.target.value) } />
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ProductForm