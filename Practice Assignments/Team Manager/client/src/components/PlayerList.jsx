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

    const removeFromDom = (playerID) => {
        setAllPlayers(allPlayers.filter(player => player._id !== playerID))
    }

    const deletePlayer = (playerID) => {
        axios.delete(`http://localhost:8000/api/players/${playerID}`)
            .then(res => removeFromDom(playerID))
            .catch(err => console.log(err));
    }

    const popup = (playerID, playerName) => {
        if(window.confirm(`Are you sure you want to delete ${playerName.toUpperCase()} from the list of players?`) === true){
            deletePlayer(playerID);
        }
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
                            <td><button className='btn btn-danger' onClick={() => popup(player._id, player.name)}>Delete</button></td>
                            {/* Previous Implementation without Popup:  onClick={e => deletePlayer(player._id)} */}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default PlayerList