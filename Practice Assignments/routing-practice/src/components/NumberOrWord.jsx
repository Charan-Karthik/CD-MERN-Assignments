import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const NumberOrWord = () => {
    
    const { input } = useParams();
    
    return (
        <div className='container mt-5 text-center'>
            {
                isNaN(input) ? <h3>The word is: {input}</h3> : <h3>The number is: {input}</h3>
            }
            <Link to={"/"}><p className='mt-5'>Back to Main Page</p></Link>
        </div>
    )
}

export default NumberOrWord