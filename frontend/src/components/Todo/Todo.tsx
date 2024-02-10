import React from "react";

interface TodoProps {
  id: string;
  reminder: string | undefined;
  date: string;
}

const Todo: React.FC<TodoProps> = ({id, reminder, date}: TodoProps): JSX.Element => {
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
