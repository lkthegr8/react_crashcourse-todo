import './App.css';
import React, { useState, useEffect,Component } from 'react';
 //only use when not using the class
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Todos from './components/Todos';
import HeaderTodo from './components/HeaderTodo';
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import Axios from 'axios'

// export class App extends Component {
//   state = { todos: [] };

//   markComplete = (id) => {
//     const curreState = [...this.state.todos];
//     this.state.todos.map((todo, index) => {
//       if (todo.id === id) {
//         curreState[index].completed = !todo.completed;
//       }
//     });
//     this.setState({ todos: curreState });
//   };

//   // delete the todo
//   delTodo = (id) => {
//     // let curreState = [...this.state.todos];
//     let curreState = this.state.todos.filter((todo) => {
//       if (todo.id === id) {
//         return false;
//       }
//       return true;
//     });
//     this.setState({ todos: curreState });
//   };

//   AddTodo1 = (title) => {
//     let newTodo = {
//       id: this.state.todos.length + 1,
//       title: title,
//       completed: false,
//     };
//     let curreState = [...this.state.todos];
//     curreState.push(newTodo);
//     this.setState({ todos: curreState });
//   };

//   // componentDidMount is a life cycle method in react
//   componentDidMount() {
//     Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((res) => {
//       this.setState({ todos: res.data });
//     });
//   }

//   // render is a life cycle method in react
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <div className="container">
//             <HeaderTodo />
//             <Route
//               exact
//               path="/"
//               render={(props) => (
//                 <React.Fragment>
//                   <AddTodo AddTodo1={this.AddTodo1} />
//                   <Todos
//                     todos={this.state.todos}
//                     markComplete={this.markComplete}
//                     delTodo={this.delTodo}
//                   />
//                 </React.Fragment>
//               )}
//             />
//             <Route path="/about" component={About} />
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App












// using the function type


function App() {
  const [todos, setTodos] = useState([]);
  const a=[];
  // React.componentDidMount() using insted useEffect
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(
      (res) => {
        setTodos(res.data );
      }
    );
  },a);

  // use the javascript outside the return statment
  // console.log("hi there");

  const markComplete = (id) => {
    const curreState = [...todos];
    todos.map((todo, index) => {
      if (todo.id === id) {
        curreState[index].completed = !todo.completed;
      }
    });
    setTodos(curreState);
  };

  // delete the todo
  const delTodo = (id) => {
    let curreState = [...todos];
    curreState = todos.filter((todo) => {
      if (todo.id === id) {
        return false;
      }
      return true;
    });
    setTodos(curreState);
  };

  // add todo function
  const AddTodo1 = (title) => {
    let newTodo = {
      id: todos.length + 1,
      title: title,
      completed: false,
    };
    let curreState = [...todos];
    curreState.push(newTodo);
    setTodos(curreState);
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <HeaderTodo />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo AddTodo1={AddTodo1} />
                <Todos
                  todos={todos}
                  markComplete={markComplete}
                  delTodo={delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path='/about' component={About}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
