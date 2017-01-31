import React from 'react';
import List from './List';
import Errors from './Errors';
import Delete from './Delete';

class ToDoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            toDo: []
        };
        this.handleChange = this.handleChange.bind(this);
        // The reason I have to do this is because I am creating
        // a react function and the constructor handles it this way.
        // figure it out when you're not high.
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleChange(e) {
        this.setState({value: e.target.value})
    }
    handleSubmit(e) {
        this.state.toDo.push(this.state.value)
        console.log(this.state.toDo);
        this.setState({
            toDo: this.state.toDo
        });
        this.state.value = '';
        e.preventDefault();
    }
    handleDelete(e) {
        console.log(e.target.value);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>To Do Item</label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
                <List toDo={this.state.toDo} />
                <Errors value={this.state.value} />
            </div>
        )
    }
}



export default ToDoInput;
