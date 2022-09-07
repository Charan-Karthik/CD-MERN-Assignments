// import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useParams } from "react-router";

const Display = (props) => {

    // console.log(props.apiResponse)

    const { searchField, searchID } = useParams();
    // const [apiResponse, SetApiResponse] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${searchField}/${searchID}`)
            .then(response => props.setApiResponse(response.data))
            // .then(response => console.log(response.data))
            .catch(err => props.setApiResponse("error"))
    }, [searchField, searchID]);

    return (
        <div className='container mt-5'>
            {
                // ugh one more ternary... there's gotta be a better way to do this
                // but basically this ternary checks if the apiResponse is an error, if it is, it'll say "these aren't the droids you're looking for"
                // if it isn't it'll display the other items in the subsequent nested ternary
                props.apiResponse === 'error' ? <div className='d-flex justify-content-center align-items-center flex-column'>
                    {/* <h1 className='text-center'>These are not the droids you're searching for</h1> */}
                    <img src="https://media2.giphy.com/media/3o84sF21zQYacFcl68/200.gif" alt='Obi-Wan Kenobi'/>
                    </div> : 
                
                // is the searchField people? if it is, is the response truthy? (if it is display all the relevant info, if not display 'loading...'); if it isn't it'll be a planet
                searchField === 'people' ? (props.apiResponse ? (
                    <div>
                        <h1>{props.apiResponse.name}</h1>
                        <p><b>Height:</b> {props.apiResponse.height}cm</p>
                        <p><b>Mass:</b> {props.apiResponse.mass}kg</p>
                        <p><b>Hair Color:</b> {props.apiResponse.hair_color}</p>
                        <p><b>Skin Color:</b> {props.apiResponse.skin_color}</p>
                    </div>
                ) : <h1 className='text-center'>loading...</h1>) // end of inner ternary (if the searchField is 'people'; 'loading...' appears when waiting for the api response)
                    :
                    // the rest of this happens if the outer ternary evaluates to false (if the searchField isn't 'people')
                    (props.apiResponse ? (
                        <div>
                            <h1>{props.apiResponse.name}</h1>
                            <p><b>Climate:</b> {props.apiResponse.climate}</p>
                            <p><b>Terrain:</b> {props.apiResponse.terrain}</p>
                            <p><b>Surface Water:</b> {props.apiResponse.surface_water}</p>
                            <p><b>Population:</b> {props.apiResponse.population}</p>
                        </div>
                    ) : <h1 className='text-center'>loading...</h1>) // end of inner ternary
            }
        </div>
    )
}

export default Display