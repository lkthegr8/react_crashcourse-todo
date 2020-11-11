import React, { useState } from 'react';


function AddTodo(props) {
    const [disabled, setDisabled] = useState(true);

    let newTodo=(e)=>{
        e.preventDefault()
        const title=e.target.elements.title.value;
        e.target.elements.title.value="";
        props.AddTodo1(title)
    } 

    let checkValidation=(e)=>{
        const title=( /[^\w\*]/g).test(e.target.value);
        setDisabled(title)
    }

    return (
        <form style={{display: 'flex' }} onSubmit={newTodo}>
            <input type="text" placeholder='Add a New Todo ( should not include special char )' style={{flex:'10'}} name="title" onChange={(e)=>checkValidation(e)} required/>
            <input type="submit" value="Submit" className='btn'disabled={disabled} style={disabled?{flex:'1',background:'red',cursor: 'not-allowed'}:{flex:'1'}} />
        </form>
    )
}

export default AddTodo
