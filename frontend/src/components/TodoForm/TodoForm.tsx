import React, { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import Todo from "../Todo/Todo";

interface TodoFormProps {
  reminder: string;
  date: string;
  handleReminderUpdate: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDateUpdate: (e: ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: (e: SyntheticEvent) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({
  reminder,
  date,
  handleReminderUpdate,
  handleDateUpdate,
  handleButtonClick,
}: TodoFormProps): JSX.Element => {
  // Renders JSX.
  return (
    <div>
      <form className="TodoForm" id="TodoForm">
        <input
          type="text"
          className="todoInput"
          value={reminder}
          placeholder="Nome do lembrete"
          onChange={(e) => handleReminderUpdate(e)}
        />
        <input
          type="text"
          className="todoInput"
          value={date}
          placeholder="dd/mm/aaaa"
          onChange={(e) => handleDateUpdate(e)}
        />
        <span id="dateError" className="error"></span>
        <br />
        <button
          type="submit"
          className="todoSubmit"
          onClick={(e) => handleButtonClick(e)}
        >
          Criar
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
