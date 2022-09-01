import React, { useState } from 'react'

const ToDoList = () => {
    const [tasks, setTasks] = useState([{ 'name': 'get python black belt', 'completed': true, 'visible':true }, { 'name': 'get MERN black belt', 'completed': false, 'visible':true }, { 'name': 'get java black belt', 'completed': true, 'visible':true }, { 'name': 'get a job', 'completed': false, 'visible':true }, { 'name': 'have fun and vibe', 'completed': false, 'visible':true }])

    const [newTask, setNewTask] = useState('')

    // save for last
    const addTask = (event) => {
        event.preventDefault();
        // console.log(newTask);

        setTasks([...tasks, {'name':newTask, 'completed':false, 'visible':true}])

        setNewTask('');
    }

    const completeTask = (text) => {
        // console.log(text);
        let indexNum = 0;
        for(let i=0; i<tasks.length; i++){
            if(tasks[i].name === text){
                indexNum = i;
            }
        }
        // console.log(indexNum);
        setTasks([...tasks, tasks[indexNum].completed=true])
    }

    const removeCompletedTask = (taskText) => {
        // console.log(taskText);
        const taskTextArr = taskText.split(" ")
        // console.log(taskTextArr);
        taskTextArr.pop();
        // console.log(taskTextArr);
        const updatedTaskText = taskTextArr.join(" ");
        // console.log(updatedTaskText);

        let indexNum = 0;
        for(let i=0; i<tasks.length; i++){
            if(tasks[i].name === updatedTaskText){
                indexNum = i;
            }
        }
        // console.log(tasks[indexNum])
        setTasks([...tasks, tasks[indexNum].visible=false])
    }

    return (
        <div>
            <h3>Tasks To Do</h3>
            <p><em>(click on a task to mark it as complete)</em></p>
            {tasks.filter(t => t.completed === false).map((task, idx) =>
                <div className='mt-3'>
                    <li key={idx} onClick={(event) => completeTask(event.currentTarget.textContent)}>
                        {task.name}
                    </li>
                </div>
            )}
            <div className="mt-4 mb-5">
                <form onSubmit={addTask} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <label>Add Task:</label>
                    <input name='newTask' onChange={(event) => setNewTask(event.target.value)} type="text" value={newTask} />
                    <input type="submit" value="Add" className='btn btn-primary' />
                </form>
            </div>

            <h3>Tasks Completed</h3>
            {tasks.filter(task => task.completed === true && task.visible === true).map((task, i) =>
                <li onClick={(e) => removeCompletedTask(e.currentTarget.textContent)}>
                    <s>{task.name}</s>
                    <span className="btn btn-sm btn-danger m-1"> Delete</span>
                </li>)}
        </div>
    )
}

export default ToDoList