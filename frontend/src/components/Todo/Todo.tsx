import React, { SyntheticEvent } from "react";
import { TodoSearch } from "../../todo";

interface TodoProps {
  id: string;
  result: TodoSearch;
  handleTodoDone: (e: SyntheticEvent) => void;
}

const Todo: React.FC<TodoProps> = ({
  id,
  result,
  handleTodoDone,
}: TodoProps): JSX.Element => {
  return (
    <div className="todo">
      <p className="content">{result.content}</p>
      <button type="submit" className="doneCheck" onClick={handleTodoDone}>
        Feito
      </button>
    </div>
  );
};

export default Todo;
