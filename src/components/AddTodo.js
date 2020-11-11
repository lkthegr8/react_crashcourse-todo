import React from 'react'

function AddTodo(props) {


    let newTodo=(e)=>{
        e.preventDefault()
        const title=e.target.elements.title.value;
        e.target.elements.title.value="";
        props.AddTodo1(title)
    } 

    return (
        <form style={{display: 'flex' }} onSubmit={newTodo}>
            <input type="text" style={{flex:'10'}} name="title" placeholder='Add a New Todo' required/>
            <input type="submit" value="Submit" className='btn' style={{flex:'1'}} />
        </form>
    )
}

export default AddTodo
