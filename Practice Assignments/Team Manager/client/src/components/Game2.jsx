import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Game2 = () => {
    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setAllPlayers(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className='mt-5'>
            <h1 className='mb-5'> Player Status - Game 2 </h1>
            <div style={{ 'display': 'flex', 'justifyContent': 'center', 'gap': '15px' }}>
                <Link to={'/status/game/1'}><h2>Game 1</h2></Link>
                <h2> | </h2>
                <Link to={'/status/game/2'}><h2>Game 2</h2></Link>
                <h2> | </h2>
                <Link to={'/status/game/3'}><h2>Game 3</h2></Link>
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
                                {player.game2 === 'playing' ? <button className='btn btn-success'>Playing</button> : <button className='btn btn-outline-success'>Playing</button>}

                                {player.game2 === 'not playing' ? <button className='btn btn-danger'>Not Playing</button> : <button className='btn btn-outline-danger'>Not Playing</button>}

                                {player.game2 === 'undecided' ? <button className='btn btn-warning'>Undecided</button> : <button className='btn btn-outline-warning'>Undecided</button>}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Game2