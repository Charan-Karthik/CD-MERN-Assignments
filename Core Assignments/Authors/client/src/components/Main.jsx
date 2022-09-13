import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Main = (props) => {

    const removeFromDom = (authorID) => {
        setAllAuthors(allAuthors.filter(author => author._id !== authorID))
    }
    const [allAuthors, setAllAuthors] = useState([]);
    // const [sorted, setSorted] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAllAuthors(res.data))
            .catch(err => console.log(err));
    }, [])

    const deleteButtonAction = (authorID) => {
        axios.delete(`http://localhost:8000/api/authors/${authorID}/delete`)
            .then(res => removeFromDom(authorID))
            .catch(err => console.log(err))
    }

    return (
        <div className="container mt-4">
            <Link to={'/author/create'}>Add an author</Link>

            <p className='mt-5' style={{ 'color': 'rebeccapurple' }}>We have quotes by:</p>

            <table className='table table-striped table-bordered w-50'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {allAuthors.map(author =>
                        <tr key={author._id}>
                            <td style={{ 'color': 'rebeccapurple' }}>{author.name}</td>
                            <td className='d-flex justify-content-around align-items-center'>
                                <Link to={`/author/${author._id}/update`}><button className='btn btn-warning'>Edit</button></Link>
                                |
                                <button className='btn btn-danger' onClick={(e) => { deleteButtonAction(author._id) }}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Main