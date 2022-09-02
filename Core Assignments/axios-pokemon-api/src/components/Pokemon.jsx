import { useState } from 'react'
import axios from 'axios'

const Pokemon = () => {
    
    const [allPokemon, setAllPokemon] = useState();

    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {setAllPokemon(response.data.results)})
        console.log(allPokemon);
    }

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary' onClick={() => getPokemon()}>Fetch Pokemon!</button>
            </div>

            {allPokemon ? (<div className='mt-5 mb-5 text-center'>{allPokemon.map(p => <li>{p.name}</li>)}</div>) : <></>}
        </div>
    )
}

export default Pokemon