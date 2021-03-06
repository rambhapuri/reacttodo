import React from 'react'
import styles from './TodoItem.module.css'

class TodoItem extends React.Component {  

    handleEditing = () => {
        this.setState({
          editing: true,
        })
      }

    state = {
        editing: false,
    };

    handleUpdatedDone = event => {
        if(event.key === 'Enter') {
            this.setState({editing: false})
        }
      }

      componentWillUnmount(){
          console.log("cleaning up...")
      }

    render(){
        const completedStyle = {
            fontStyle: 'italic',
            color: '#595959',
            opacity: 0.4,
            textDecoration: 'line-through',
        }
        const { completed, id, title } = this.props.todo;

        let viewMode = {}
        let editMode = {}

        if(this.state.editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }

        return(
            <li className={styles.item}>
                <input type = 'checkbox' 
                className = {styles.checkbox}
                checked = {completed} 
                onChange = {() => this.props.handleChangeProps(id)} />
                <button onClick={() => this.props.deleteTodoProps(id)}>
                    Delete
                </button>
                <span style={this.props.todo.completed ? completedStyle : null}>
                {title}
                </span>
                <div onDoubleClick={this.handleEditing} style={viewMode}>...</div>
                <input type="text" 
                style={editMode} 
                className={styles.textInput} 
                value={title}  
                onChange={e => {
                this.props.setUpdate(e.target.value, id)
                }}
                onKeyDown={this.handleUpdatedDone}
                />
            </li>
        )

    }
}
export default TodoItem