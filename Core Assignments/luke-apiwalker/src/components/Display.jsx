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
    }, [searchField, searchID]);

    return (
        <div className='container mt-5'>
            {
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