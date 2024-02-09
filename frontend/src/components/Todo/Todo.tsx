import React from "react";

interface Todo {
  id: string;
  reminder: string | undefined;
  date: string;
}

const Todo: React.FC<Todo> = ({id, reminder, date}: Todo): JSX.Element => {
  return (
    <div className="todo">
      <p className="reminder">{reminder}</p>
      <button type="submit" className="doneCheck">
        Feito
      </button>
    </div>
  );
};

export default Todo;
