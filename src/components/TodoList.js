import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTodos: []
        };
        this.onHighlight = this.props.onHighlight;
        this.onActive = this.props.onActive;
        this.activeHandler = this.activeHandler.bind(this);
        this.highlightHandler = this.highlightHandler.bind(this);
    }

    activeHandler(event) {
        this.setState({ allTodos: this.onActive(event) });
    }

    highlightHandler(event) {
        this.setState({ allTodos: this.onHighlight(event) });
    }

    componentDidMount() {
        this.setState({ allTodos: this.props.todos });
    }

    render() {
        return (
            <div className="list-container">
                <h1>To-Do List</h1>
                <ul>
                { this.state.allTodos.map((t, idx) => (
                    <li className={ t.isHighlighted ? 'highlighted' : '' } key={ idx }>
                        <button data-index={ idx } onClick={ this.activeHandler }>{ t.isActive ? 'Deactivate' : 'Activate' }</button> 
                        <button data-index={ idx } onClick={ this.highlightHandler }>{ t.isHighlighted ? 'Unhighlight' : 'Highlight' }</button>
                        <span className={ !t.isActive ? 'inactive' : '' }>{ t.task }</span></li>
                ))}
                </ul>
            </div>
        );
    }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onActive: PropTypes.func,
  onHighlight: PropTypes.func
};

export default TodoList;
