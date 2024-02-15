import React from "react";
import { TodoSearch } from "../../todo";

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
      <button type="submit" className="doneCheck" onClick={() => handleTodoDone(body.id)}>
        Feito
      </button>
    </div>
  );
};

export default Todo;
