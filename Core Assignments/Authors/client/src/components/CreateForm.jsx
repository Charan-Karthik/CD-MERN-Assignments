import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateForm = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");

    const createAuthor = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/authors/new', { name })
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='container mt-4'>
            <Link to={"/"}>Home</Link>

            <form className='mt-5 w-25' onSubmit={createAuthor}>
                <p style={{ 'color': 'rebeccapurple' }}>Add a new author:</p>
                <div className='mb-3'>
                    <label className='form-label'>Name:</label>
                    <input className='form-control' onChange={e => setName(e.target.value)} />
                </div>
                <div className='d-flex justify-content-around'>
                    <Link to={"/"} className="btn btn-danger">Cancel</Link>
                    <button type='submit' className='btn btn-success'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateForm