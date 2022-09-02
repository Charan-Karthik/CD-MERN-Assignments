import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className='container mt-5 text-center'>
            <h3>Welcome</h3>
            <Link to={"/"}><p className='mt-5'>Back to Main Page</p></Link>
        </div>
    )
}

export default Home