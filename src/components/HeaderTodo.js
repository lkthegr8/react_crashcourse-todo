import React from 'react'
import { Link } from 'react-router-dom'

function HeaderTodo() {
    const header={
        background:'#333',
        color:'#fff',
        textAlign:'center',
        padding:'10px'
    }
    const linkstyle={
        color:'#fff',
        textDecoration:"none"
    }
    return (
        // add the style
        <header style={header}>
            <h1>Welcome To Todo App</h1>
            <Link to="/" style={linkstyle}>HOME</Link>|<Link to="/about" style={linkstyle}>ABOUT US</Link>
        </header>

    )
}

export default HeaderTodo;

