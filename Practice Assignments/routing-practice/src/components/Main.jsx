import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

import Home from './Home';

const Main = () => {
    return (
        <div>
            <h1 className='text-center mb-5'>React Routing Practice</h1>
            <div className='d-flex justify-content-around'>
                <div>
                    <Link to={"/home"}><h3>Home</h3></Link>
                    <Routes>
                        <Route path="/home" element={<Home />}></Route>
                    </Routes>
                </div>
                <h3>Number</h3>
                <h3>Text</h3>
                <h3>Styled Text</h3>
            </div>

            <p className='mt-5'>
                <li className='mb-3'>For the number route, navigate to localhost:3000/<b>(NUMBER_OF_YOUR_CHOICE)</b></li>
                <li className='mb-3'>For the text route, navigate to localhost:3000/<b>(TEXT_OF_YOUR_CHOICE)</b></li>
                <li className='mb-3'>For the styled text route, navigate to localhost:3000/<b>(TEXT_OF_YOUR_CHOICE)</b>/<b>(TEXT_COLOR_OF_YOUR_CHOICE)</b>/<b>(BACKGROUND_COLOR_OF_YOUR_CHOICE)</b></li>
            </p>
        </div>
    )
}

export default Main