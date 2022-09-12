import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const EditForm = (props) => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDesc(res.data.description)
            })
            .catch()
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();

        const updatedInfo = {
            title,
            price,
            description: desc
        }
        
        axios.put(`http://localhost:8000/api/products/${id}`, updatedInfo)
            .then(res => console.log(res))
            .then(navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1 className='text-center mt-4'>Edit Product Details</h1>
            <div className='d-flex justify-content-center'>
                <form className='w-50' onSubmit={updateProduct}>
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

export default EditForm