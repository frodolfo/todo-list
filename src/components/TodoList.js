import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlightedItems: props.todos.map(t => t.isHighlighted),
            highLightStatus: false,
            activeTodos: [],
        };
        this.onHighlight = this.props.onHighlight;
    }

    componentDidMount() {
        const todos = this.props.todos;
        this.setState({ activeTodos: todos.filter(t => t.isActive) }, () => {
            console.log('activeTodos: ', this.state.activeTodos);
        });
    }

    render() {
        return (
            <div className="list-container">
                <h1>To-Do List</h1>
                <ul>
                { this.state.activeTodos.map((t, idx) => (
                    <li className={ t.isHighlighted ? 'highlighted' : '' } key={ idx }>{ t.task }</li>
                ))}
                </ul>
                <button onClick={() => {
                    const highlight = !this.state.highLightStatus;
                    this.setState({
                        highLightStatus: highlight
                    });
                    this.onHighlight(highlight);
                }}>{ this.state.highLightStatus ? 'Unhighlight' : 'Highlight' }</button>                  
            </div>
        );
    }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onHighlight: PropTypes.func
};

export default TodoList;
