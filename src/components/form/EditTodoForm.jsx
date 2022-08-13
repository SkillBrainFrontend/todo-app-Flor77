import React, { useState } from "react";
import "./AddTodoForm.css"
import Card from "../card/Card";
import Input from "../input/Input";
import TodoItem from "../todo-item/TodoItem";
import TextArea from "../input/TextArea";
import Button from "../button/Button";

function EditTodoForm(props) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    // const id = props.matchId
    const newEditCard = {
      title: taskTitle,
      description: taskDescription,
    };


    // props.editTodo(newEditCard)
    // setTaskTitle("");
    // setTaskDescription("");

    // props.onCreateClick()
    // props.handleEditId()
    // props.editTodo()
  };
  
  return( <Card>
    <h2>Edit Todo</h2>
    <form onSubmit={handleEdit}>
      <Input value={taskTitle} onChange={handleTitleChange} placeholder="Title" type="text" />
      <TextArea value={taskDescription} onChange={handleDescriptionChange} placeholder="Description" />
      <Button type="submit">Edit</Button>
    </form>
  </Card>);
}

export default EditTodoForm