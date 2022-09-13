import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const AddPlayer = () => {

    const navigate = useNavigate();

    const [playerName, setPlayerName] = useState("");
    const [playerPos, setPlayerPos] = useState("");
    const [errors, setErrors] = useState([]);

    const addPlayer = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/players',
            {
                name: playerName,
                position: playerPos,
            }
        )
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
        <div className='container mt-5'>
            <div className='w-25'>
                <div className='d-flex justify-content-around'>
                    <Link to={'/players/list'}><h2>List</h2></Link>
                    <h2> | </h2>
                    <Link to={'/players/add'}><h2>Add Player</h2></Link>
                </div>
            </div>

            <form className='mt-5 w-25' onSubmit={addPlayer}>
                {errors.map((err, index) => <p style={{ 'color': 'red' }} key={index}>{err}</p>)}
                <div className='mb-3'>
                    <label className='form-label'>Player Name:</label>
                    <input className='form-control' onChange={e => setPlayerName(e.target.value)} required />
                    {playerName ? playerName.length < 2 ? <p className='mt-2' style={{'color':'red'}}>Player name is required and must be at least 2 characters long</p> : "" : ""}
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Preferred Position:</label>
                    <input className='form-control' onChange={e => setPlayerPos(e.target.value)} />
                </div>
                <div className='d-flex justify-content-center'>
                    
                    { playerName.length >= 2 ? <button type='submit' className='btn btn-success'>Submit</button> : <button type='submit' className='btn btn-success' disabled>Submit</button>}
                </div>
            </form>
        </div>
    )
}

export default AddPlayer