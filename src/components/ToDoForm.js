//This keeps track of our todo state thorough a form

import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Button, TextField } from "@material-ui/core";

/* 
See App.js
<ToDoForm addTodo={addTodo} />
*/
function ToDoForm({ addTodo }) {
	const [todo, setTodo] = useState({
		id: "",
		task: "",
		completed: false,
	});

	/*
	Old todo property + updated task property
	value will be "todo.task"
	  */
	function handleTaskInputChange(e) {
		setTodo({ ...todo, task: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (todo.task.trim()) {
			addTodo({ ...todo, id: uuid.v4 });
			setTodo({ ...todo, task: "" });
		}
	}
	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<TextField
				label="Task"
				type="text"
				name="task"
				value={todo.task}
				onChange={handleTaskInputChange}
			/>
			<Button type="submit">Submit</Button>
		</form>
	);
}

export default ToDoForm;
