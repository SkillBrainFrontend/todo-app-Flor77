import React from "react";
import Card from "./components/card/Card";
import TodoItem from "./components/todo-item/TodoItem";
import Button from "./components/button/Button";
import AddTodoForm from "./components/form/AddTodoForm";
import Modal from "./components/modal/Modal";
import "./App.css";
import { useState } from "react";
import EditTodoForm from "./components/form/EditTodoForm";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(TODOS_MOCK);
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(null);

  const handleAddTodo = (newTaskCard) => {
    setTodos((prevState) => [...prevState, newTaskCard]);
    setIsOpen(false);
  };

  const removeTodo = (matchId) => {
    setTodos((prevState) => prevState.filter((item) => item.id !== matchId));
  };

  const completeTodo = (matchId) => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === matchId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const editTodo = (taskTitle, taskDescription, matchId) => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === matchId) {
          return { ...item, title: taskTitle, description: taskDescription };
        }
        return item;
      })
    );
    setIsOpen(false);
  };

  const onEdit = (matchId) => {
    const todoToEdit = todos.find((item) => item.id === matchId);
    setEditMode(todoToEdit);
    setIsOpen(true);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setEditMode(null);
  };

  return (
    <div className="App">
      <div className="app-container">
        <Card>
          <h1>My todos</h1>
          <Button onClick={openModal}>Add +</Button>
          <div className="list-container">
            {todos.map((item, index) => (
              <TodoItem
                openModal={openModal}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                completed={item.completed}
                editTodo={editTodo}
                onEdit={onEdit}
              />
            ))}
          </div>

          <div className="separator"></div>

          <p>{`You have ${
            todos.filter((item) => item.completed === false).length
          } todos`}</p>
        </Card>
      </div>
      <Modal onClose={closeModal} isOpen={isOpen}>
        {editMode ? (
          <EditTodoForm
            onCreateClick={openModal}
            initialValues={editMode}
            addNewEdit={editTodo}
          />
        ) : (
          <AddTodoForm addNewTask={handleAddTodo} />
        )}
      </Modal>
    </div>
  );
}

export default App;
