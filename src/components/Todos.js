import Todoitem from './Todoitem'
import proptypes from 'prop-types'

function Todos(props) {
    // accessing the props passed to this file
    // console.log(props.todos) 

    // the method mark complete
    return props.todos.map((todo) => <Todoitem key={todo.id} todo={todo} delTodo={props.delTodo} markComplete={props.markComplete}/>
    );
}

Todos.propTypes={
    todos : proptypes.array.isRequired
}

export default Todos;



