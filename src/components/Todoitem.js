import proptypes from 'prop-types'


// use rfce

import React from 'react';



function Todoitem(props) {

    // destructuring the todo in the props 
    const {id,completed,title}=props.todo

    const btnStyle={
        background:'red',
        color:'black',
        padding:'5px 8px',
        border:'none',
        borderRadius:'50%',
        float:'right',
        cursot:'pointer'
    }

    const getStyle= () =>completed?'line-through':'none'
    // the below line is comented because we are calling function in the previous file(hierirachy) using props(properties passed to it)
    // const markComplete=(e)=>{console.log(props.todo)}
    return (
        <div style={{padding:'3px',background:'gray',textDecoration:getStyle()}}>
            <p>
                <input type="checkbox" onChange={(e) => props.markComplete(id)}/>{' '}
                {title}
                <button style={btnStyle} onClick={(e) => props.delTodo(id)}>x</button>
            </p>
        </div>
    )
}

Todoitem.propTypes={
    todo : proptypes.object.isRequired
}



export default Todoitem;

