import React, {Component} from 'react'

class InputTodo extends Component {
    state = {
        title: ''
    };

    onChange= e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.title.trim()){
            this.props.addTodoItemProps(this.state.title);
            this.setState({
                title: ''
        })
        } else {
            alert('Please Write Item')
        }        
        console.log(this.state.title);
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit} className='form-container'>
                <input type = 'text' 
                placeholder = 'Add Todo Item...' 
                value = {this.state.title} 
                name ='title' 
                onChange = {this.onChange}/>
                <button className='input-submit'>Submit</button>                
            </form>
        )
    }
}
export default InputTodo