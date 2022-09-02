import React from 'react'
import { useParams } from 'react-router'
import {Link} from 'react-router-dom'

const StyledText = () => {
    
    const{word, wordColor, setBackgroundColor} = useParams();
    
    const textStyle = {
        color: wordColor
    }

    const backgroundStyle = {
        backgroundColor: setBackgroundColor, 
        height:'20vh',
        width:'100%',
        border:'2px solid black'
    }

    return (
        <div className='container mt-5 text-center'>
            <div style={backgroundStyle} className='d-flex justify-content-center align-items-center'>
                <h3 style={textStyle}>The word is: {word}</h3>
            </div>
            <Link to={"/"}><p className='mt-5'>Back to Main Page</p></Link>
        </div>
    )
}

export default StyledText