import React from 'react'

const ProductForm = () => {
    return (
        <div className='container mt-4'>
            <h1 className='text-center'>Product Manager Form</h1>
            <div className='d-flex justify-content-center'>
                <form>
                    <div className='mb-3'>
                        <label className='form-label'>Title</label>
                        <input className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Price</label>
                        <input className='form-control' type='number' step='.01' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Description</label>
                        <input className='form-control' />
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ProductForm