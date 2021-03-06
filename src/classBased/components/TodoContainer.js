import React from 'react'
import TodosList from './TodosList'
import Header from './Header'
import InputTodo from './InputTodo'
import { v4 as uuidv4} from 'uuid'

class TodoContainer extends React.Component {
    state = {
        todos: [],
    }

    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        }))
        console.log('clicked', id);
    };

    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        })
        console.log("deleted" , id);
    };

    addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
        console.log('title');
    };

    setUpdate=(updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.title = updatedTitle
                }
                return todo
            })
        })
        //console.log(updatedTitle, id)
    }

    componentDidMount(){
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if(loadedTodos){
            this.setState({
                todos: loadedTodos
            })
        }
    }

    componentDidUpdate(prevState, prevProps){
        if(prevState.todos !== this.state.todos){
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos",temp)
        }
    }

    render(){
        return(
            <div className="container">
                <div className="inner">
                <Header />
                <InputTodo  
                    addTodoItemProps = {this.addTodoItem}
                />
                <TodosList 
                    todos ={this.state.todos} 
                    handleChangeProps = {this.handleChange} 
                    deleteTodoProps = {this.delTodo} 
                    setUpdate = {this.setUpdate}
                />
                </div>      
            </div>    
        );
    }
}
export default TodoContainer