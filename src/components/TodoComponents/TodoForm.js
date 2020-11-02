import React from 'react';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newTask: ''
		};
	}

	handleChanges = e => {
		this.setState({ ...this.state, newTask: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();

		if (this.state.newTask !== '') {
            this.props.addNewTask(this.state.newTask);
            
           

			this.setState({ newTask: '' });
		}
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type='text'
					onChange={this.handleChanges}
					value={this.state.newTask}
					name='task'
				/>
				<button type='submit'>Add Todo</button>
				<button onClick={this.props.clearCompleted} type='button'>
					Clear Complete
				</button>
			</form>
		);
	}
}

export default TodoForm;
