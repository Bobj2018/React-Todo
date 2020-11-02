import React from 'react';

import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = props => {
	return (
		<div className='todo-list'>
			{props.todoList.map(task => (
				<Todo
					toggleCompleted={props.toggleCompleted}
					key={task.id}
					item={task}
				/>
			))}
			<TodoForm
				clearCompleted={props.clearCompleted}
				addNewTask={props.addNewTask}
			/>
		</div>
	);
};

export default TodoList;
