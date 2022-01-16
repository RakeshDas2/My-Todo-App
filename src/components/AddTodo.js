import React from 'react'


function AddTodo(props) {
    const handelChange = (event) => {
        //console.log(event.target.value);
        const initalTodoCopy = { ...props.initialTodo }
        initalTodoCopy.task = event.target.value;
        initalTodoCopy.completed = false;
        props.setInitialTodo(initalTodoCopy)
       
    }

    const add=()=>{
        const todoCopy=[...props.todo]
        const index = todoCopy.findIndex(todo=>{
            return todo.task===props.initialTodo.task
        })
        if(index===-1){
            todoCopy.push(props.initialTodo)
            props.setTodo(todoCopy)
            }else{
            console.error('task is already Listed');
        }
    }
    return (
        <div>
            <div className='container mt-5 ' >
                <div className='col-md-6 offset-3'>
                    <div className='card border-success bg-light border-2'>
                        <div className='card-header bg-success '>
                            <h1 style={{color:'white'}}>My-ToDos</h1>
                        </div>
                        <div className='card-body'>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Add New..." name='task' value={props.initialTodo.task} onChange={(event)=>{handelChange(event)}} />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary bg-primary " onClick={()=>{add()}}><span style={{color:'whitesmoke'}}>Add</span></button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTodo
