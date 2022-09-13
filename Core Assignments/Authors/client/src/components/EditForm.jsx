import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const EditForm = () => {

    const { id } = useParams();
    const [thisAuthor, setThisAuthor] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => setThisAuthor(res.data.name))
            .catch(err => console.log(err));
    }, [id])

    const submitEdits = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}/update`, { name: thisAuthor })
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => {
                console.log("error", err)

                const errorResponse = err.response.data.errors;
                const errorArr = [];

                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }

                setErrors(errorArr);
            })
    }

    return (
        <div>
            {thisAuthor.name === 'CastError' ?
                <div style={{'width':'100%', 'height':'100vh', 'display':'flex', 'justifyContent':'center', 'alignItems':'center', 'flexDirection':'column'}}>
                    <h3 className='text-center mb-4'>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h3>
                    <Link to={"/author/create"}><p>Click here to create a new author</p></Link>
                    <Link to={"/"}><p>Home</p></Link>
                </div>
                :
                <div>
                    <Link to={"/"}>Home</Link>

                    <form className='mt-5 w-25' onSubmit={submitEdits}>
                        <p style={{ 'color': 'rebeccapurple' }}>Edit this author:</p>
                        {errors.map((err, index) => <p style={{ 'color': 'red' }} key={index}>{err}</p>)}
                        <div className='mb-3'>
                            <label className='form-label'>Name:</label>
                            <input className='form-control' value={thisAuthor} onChange={(e) => setThisAuthor(e.target.value)} />
                        </div>
                        <div className='d-flex justify-content-around'>
                            <Link to={"/"} className="btn btn-danger">Cancel</Link>
                            <button type='submit' className='btn btn-success'>Submit</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

export default EditForm