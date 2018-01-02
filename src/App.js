import React, { Component } from 'react';
import './App.css';

/* Components */
import TodoStats from './components/TodoStats';
import InputForm from './components/InputForm';
import Todo from './components/Todo';
import SelectBox from './components/SelectBox';
import ClearButton from './components/ClearButton';


class App extends Component {
    constructor() {
        super();

        this.state = {
            todos: [],
            selection: "All",
            totalTodos: 0,
            activeTodos: 0,
            completedTodos: 0
        };
    }

    addTodo = (event) => {
        event.preventDefault();

        let todoTitle = event.target.todoTitle.value;

        event.target.todoTitle.value = "";

        let newTodos = this.state.todos;
        newTodos.push({
            title: todoTitle,
            completed: false,
            arrayIndex: newTodos.length
        });

        this.calculateTodos(newTodos);
    }

    completedTodo = (event) => {
        let itemIndex = Number(event.target.name);

        let newTodos = this.state.todos.map((todo, index) => {

            if (itemIndex === todo.arrayIndex) {
                return {
                    title: todo.title,
                    completed: !todo.completed,
                    arrayIndex: todo.arrayIndex
                }
            }
            return todo;
        });

        this.calculateTodos(newTodos);
    }

    filterTodos = (event) => {
        let selection = event.target.value;

        if (selection === "All") {
            this.setState({
                selection: "All"
            });
        } else if (selection === "Active") {
            this.setState({
                selection: "Active"
            });
        } else if (selection === "Completed") {
            this.setState({
                selection: "Completed"
            });
        }
    }

    clearTodos = () => {
        let newTodos = this.state.todos.filter((todo) => {
            if (todo.completed === false) {
                return true;
            }
            return false;
        });

        this.calculateTodos(newTodos);
    }

    calculateTodos = (todos) => {
        let newTotalTodos       = 0;
        let newActiveTodos      = 0;
        let newCompletedTodos    = 0;

        for (let i = 0; i < todos.length; i++) {
            newTotalTodos += 1;

            if (todos[i].completed === false) {
                newActiveTodos += 1;
            } else if (todos[i].completed === true) {
                newCompletedTodos += 1;
            }
        }

        this.setState({
            todos: todos,
            totalTodos: newTotalTodos,
            activeTodos: newActiveTodos,
            completedTodos: newCompletedTodos
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Todos</h1>

                <TodoStats totalTodos={this.state.totalTodos} 
                    activeTodos={this.state.activeTodos} 
                    completedTodos={this.state.completedTodos}/>

                <InputForm onSubmit={this.addTodo}/>

                <ul className="list-group">
                    {
                        this.state.todos.filter((todo) => {
                            if (this.state.selection === "All") 
                            {
                                return true;
                            } else if (this.state.selection === "Active" && todo.completed === false) 
                            {
                                return true;
                            } else if (this.state.selection === "Completed" && todo.completed === true) 
                            {
                                return true;
                            }
                            return false;
                        }).map((todo, index) => {
                            return <Todo key={index} item={todo.title} completed={todo.completed} arrayIndex={todo.arrayIndex} onChange={this.completedTodo}/>
                        })
                    }
                </ul>

                <SelectBox onChange={this.filterTodos}/>

                <ClearButton todos={this.state.todos} onClick={this.clearTodos}/>
            </div>
        );
    }
}

export default App;
