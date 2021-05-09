//Renders a todo object and handles i  ts actions

import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";

function ToDo({ todo, toggleComplete, removeTodo }) {
	function handleCheckboxClick() {
		toggleComplete(todo.id);
	}

	function handleRemoveClick() {
		removeTodo(todo.id);
	}

	return (
		<ListItem style={{ display: "flex" }}>
			<Checkbox
				checked={todo.completed}
				type="checkbox"
				onClick={handleCheckboxClick}
			/>
			<Typography
				variant="body1"
				style={{
					//color: "purple",
					textDecoration: todo.completed ? "line-through" : null,
				}}
			>
				{todo.task}
			</Typography>
			<IconButton onClick={handleRemoveClick}>
				<CloseIcon />
			</IconButton>
		</ListItem>
	);
}

export default ToDo;
