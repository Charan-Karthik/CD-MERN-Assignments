import React, { useState } from 'react'

const BoxForm = (props) => {
    const [color, setColor] = useState("")
    const [allBoxes, setAllBoxes] = useState(['Red', 'Blue', 'Purple'])

    const createBox = (e) => {
        e.preventDefault();
        console.log("new box with", color, "color");
        setAllBoxes([...allBoxes, color]);
        setColor("");
    }

    return (
        <div>
            <form className="form" onSubmit={createBox}>
                <label>Color:</label>
                <input type="text" onChange={(e) => setColor(e.target.value)} value={color} />
                <input type="submit" value="Add Box" />
            </form>
            <br />
            <hr />
            <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
                { allBoxes.map( (bob, i) => <div key={i} style={{width:'250px', height:'250px', backgroundColor:bob, marginTop:'10px'}}></div> )}
            </div>
        </div>
    )
}

export default BoxForm;