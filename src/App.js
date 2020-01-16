import React, { localStorage } from 'react';

import TodoList from './components/TodoComponents/TodoList';

const todo = [
	{
		task: 'Organize Garage',
		id: 1528817077286,
		completed: false
	},
	{
		task: 'Bake Cookies',
		id: 1528817084358,
		completed: false
	}
];

class App extends React.Component {
	state = {
		todoList: todo
	};

	addNewTask = newTask => {
		const newState = {
			...this.state,
			todoList: [
				...this.state.todoList,
				{ task: newTask, completed: false, id: Date.now() }
			]
		};
		this.setState(newState);
	};

	toggleCompleted = id => {
		const newState = {
			...this.state,
			todoList: this.state.todoList.map(task => {
				if (task.id === id) {
					return {
						...task,
						completed: !task.completed
					};
				}
				return task;
			})
		};
		this.setState(newState);
	};

	clearCompleted = () => {
		const newState = {
			...this.state,
			todoList: this.state.todoList.filter(task => {
				return !task.completed;
			})
		};
		this.setState(newState);
	};

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoList
					toggleCompleted={this.toggleCompleted}
					todoList={this.state.todoList}
					addNewTask={this.addNewTask}
					clearCompleted={this.clearCompleted}
				/>
			</div>
		);
	}
}

export default App;
