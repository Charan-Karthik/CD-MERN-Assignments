import React, { useState } from 'react'

const ToDoList = () => {
    const [tasks, setTasks] = useState([{ 'name': 'get python black belt', 'completed': true }, { 'name': 'get MERN black belt', 'completed': false }, { 'name': 'get java black belt', 'completed': true }, {'name':'get a job', 'completed':false}, {'name':'have fun and vibe', 'completed':false}])

    return (
        <div>
            <h3>Tasks To Do</h3>
            {tasks.filter(t => t.completed === false).map((task, idx) =>
                <div className='mt-3'>
                    <ul><li>{task.name}</li></ul>
                </div>
            )}
            <div className="mt-4 mb-5">
                <form style={{display:'flex', gap:'20px', alignItems:'center'}}>
                    <label>Add Task:</label>
                    <input type="text" value='SAVE FOR LAST'/>
                    <input type="submit" value="Add" className='btn btn-primary'/>
                </form>
            </div>

            <h3>Tasks Completed</h3>
            {tasks.filter(task => task.completed === true).map((task, idx) => <div><ul><li><s>{task.name}</s><span className="btn btn-sm btn-danger m-1">Delete</span></li></ul></div>)}
        </div>
    )
}

export default ToDoList