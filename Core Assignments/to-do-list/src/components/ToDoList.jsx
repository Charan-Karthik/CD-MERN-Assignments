import React, { useState } from 'react'

const ToDoList = () => {
    const [tasks, setTasks] = useState([{ 'name': 'get python black belt', 'completed': true, 'visible':true }, { 'name': 'get MERN black belt', 'completed': false, 'visible':true }, { 'name': 'get java black belt', 'completed': true, 'visible':true }, { 'name': 'get a job', 'completed': false, 'visible':true }, { 'name': 'have fun and vibe', 'completed': false, 'visible':true }])

    // save for last
    const addTask = () => {}

    const completeTask = (text) => {
        console.log(text);
        let indexNum = 0;
        for(let i=0; i<tasks.length; i++){
            if(tasks[i].name === text){
                indexNum = i;
            }
        }
        console.log(indexNum);
    }

    const removeCompletedTask = () => {}

    return (
        <div>
            <h3>Tasks To Do</h3>
            {tasks.filter(t => t.completed === false).map((task, idx) =>
                <div className='mt-3'>
                    <li key={idx} onClick={(event) => completeTask(event.currentTarget.textContent)}>
                        {task.name}
                    </li>
                </div>
            )}
            <div className="mt-4 mb-5">
                <form style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <label>Add Task:</label>
                    <input type="text" placeholder='SAVE FOR LAST' />
                    <input type="submit" value="Add" className='btn btn-primary' />
                </form>
            </div>

            <h3>Tasks Completed</h3>
            {tasks.filter(task => task.completed === true && task.visible === true).map((task, i) =>
                <li>
                    <s>{task.name}</s>
                    <span key={i} className="btn btn-sm btn-danger m-1">Delete</span>
                </li>)}
        </div>
    )
}

export default ToDoList