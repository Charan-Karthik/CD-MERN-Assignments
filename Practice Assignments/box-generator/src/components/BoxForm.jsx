import React, {useState} from 'react'

const BoxForm = (props) => {
    const [color, setColor] = useState("")
    const [allBoxes, setAllBoxes] = useState([])

    const createBox = (e) => {
        e.preventDefault();
        // const newBox = {color}
        console.log("new box with", color, "color");
        setColor("");
    }

    return (
        <div>
            {/* <form className="form" onSubmit={createBox}>
                <label>Color:</label>
                <input type="text" onChange={(e) => setColor(e.target.value)} value={color} />
                <input type="submit" value="Add Box"/>
            </form> */}
            <br />
            <hr />
            <div>All boxes: {allBoxes}</div>
        </div>
    )
}

export default BoxForm;