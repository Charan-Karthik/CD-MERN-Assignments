import { useEffect, useState } from 'react'
import axios from 'axios'

const PlayerStatus = () => {

    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setAllPlayers(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className='mt-5'>
            <h1 className='mb-5'> Player Status - Game 1 </h1>
            <div style={{ 'display': 'flex', 'justifyContent': 'center', 'gap': '15px' }}>
                <h2>Game 1</h2>
                <h2> | </h2>
                <h2>Game 2</h2>
                <h2> | </h2>
                <h2>Game 3</h2>
            </div>
            <table className='table table-bordered table-striped mt-5'>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Player Status</th>
                    </tr>
                </thead>
                <tbody>
                    {allPlayers.map(player =>
                        <tr key={player._id} >
                            <td>{player.name}</td>
                            <td className='d-flex justify-content-around'>
                                <button className='btn btn-outline-success'>Playing</button>
                                <button className='btn btn-outline-danger'>Not Playing</button>
                                {/* <button className='btn btn-outline-warning'>Undecided</button> */}
                                <button className='btn btn-warning'>Undecided</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default PlayerStatus