//Thid renders a list of todos

import { List } from "@material-ui/core";
import React from "react";
import Todo from "./ToDo";

function ToDoList({ todos, toggleComplete, removeTodo }) {
	return (
		<div>
			<List>
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						toggleComplete={toggleComplete}
						removeTodo={removeTodo}
					/>
				))}
			</List>
		</div>
	);
}

export default ToDoList;
