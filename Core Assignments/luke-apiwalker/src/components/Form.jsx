import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {

    const [selectInput, setSelectInput] = useState();
    const [idInput, setIDInput] = useState();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        props.setApiResponse("");

        const selectedSearch = e.target[0].value
        const selectedID = e.target[1].value
        
        navigate(`/${selectedSearch.toLowerCase()}/${selectedID}`)
    }
    
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} className='d-flex justify-content-around align-items-center mt-5'>
                    <div className='w-25'>
                        <label className='form-label'><h3>Search for:</h3></label>
                        <select className='form-select' onChange={(e) => setSelectInput(e.target.value) }>
                            <option>People</option>
                            <option>Planets</option>
                        </select>
                    </div>
                    <div className='w-25'>
                        <label className='form-label'><h3>ID:</h3></label>
                        <input type="number" className='form-control' onChange={(e) => setIDInput(e.target.value)} value={idInput}/>
                    </div>
                    <div>
                        <input onClick={() => props.setApiResponse("")} type="submit" className='btn btn-primary' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form