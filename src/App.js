import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todoList: []
		};
	}

	componentDidMount() {
		console.log('CDM');
		const localData = localStorage.getItem('todo');
		console.log(JSON.parse(localData));

		this.setState({
			...this.state,
			todoList: localData ? JSON.parse(localData).todoList : []
		});
	}

	addNewTask = newTask => {
		const newState = {
			...this.state,
			todoList: [
				...this.state.todoList,
				{ task: newTask, completed: false, id: Date.now() }
			]
		};
		this.addToLocalStorage(newState);
		this.setState(newState);
		//
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
		this.addToLocalStorage(newState);
		this.setState(newState);
	};

	clearCompleted = () => {
		const newState = {
			...this.state,
			todoList: this.state.todoList.filter(task => {
				return !task.completed;
			})
		};
		this.addToLocalStorage(newState);
		this.setState(newState);
	};

	addToLocalStorage = data => {
		localStorage.setItem('todo', JSON.stringify(data));
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
