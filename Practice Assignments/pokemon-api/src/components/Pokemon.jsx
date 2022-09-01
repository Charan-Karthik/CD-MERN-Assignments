import { useState } from 'react'

const Pokemon = () => {

    const [pokemonList, setPokemonList] = useState()

    const getPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => { return response.json() })
            // .then(response => { console.log(response) })
            .then(response => setPokemonList(response))
            .catch(err => console.log(err))
    }

    return (
        <div >
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary' onClick={() => getPokemon()}>Get Pokemon!</button>
            </div>
        
            {/* {pokemonList ? (<div className='mt-5'>{JSON.stringify(pokemonList.results)}</div>) : <></>} */}
            {pokemonList ? (<div className='mt-5 mb-5 text-center'>{pokemonList.results.map(p => <li>{p.name}</li>)}</div>) : <></>}

        </div>
    )
}

export default Pokemon