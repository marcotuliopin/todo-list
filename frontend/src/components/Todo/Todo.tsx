import React from "react";
import { TodoSearch } from "../../todo";
import "./Todo.css";

interface TodoProps {
  body: TodoSearch;
  handleTodoDone: (todoId: string) => void;
}

const Todo: React.FC<TodoProps> = ({
  body,
  handleTodoDone,
}: TodoProps): JSX.Element => {
  return (
    <div className="todo">
      <p className="content">{body.content}</p>
      <input className="deleteTodoButton" type="image" src="remove-todo.png" onClick={() => handleTodoDone(body.id)}/>
    </div>
  );
};

export default Todo;
