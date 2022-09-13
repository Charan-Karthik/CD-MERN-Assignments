import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PlayerList = (props) => {

    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setAllPlayers(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className='container mt-5'>
            <div className='w-25'>
                <div className='d-flex justify-content-around'>
                    <Link to={'/players/list'}><h2>List</h2></Link>
                    <h2> | </h2>
                    <Link to={'/players/add'}><h2>Add Player</h2></Link>
                </div>
            </div>

            <table className='table table-striped table-bordered mt-4'>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allPlayers.map(player =>
                        <tr key={player._id} >
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td><button className='btn btn-danger'>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default PlayerList