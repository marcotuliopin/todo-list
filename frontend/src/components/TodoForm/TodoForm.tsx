import React, { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import Todo from "../Todo/Todo";

interface TodoFormProps {
  content: string;
  date: string;
  loading: boolean;
  handleContentUpdate: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDateUpdate: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: SyntheticEvent) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({
  content,
  date,
  loading,
  handleContentUpdate,
  handleDateUpdate,
  handleFormSubmit,
}: TodoFormProps): JSX.Element => {
  // Renders JSX.
  return (
    <div>
      <form className="TodoForm" id="TodoForm" onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="contentInput"
          className="todoInput"
          value={content}
          placeholder="Nome do lembrete"
          onChange={(e) => handleContentUpdate(e)}
        />
        <input
          type="text"
          id="dateInput"
          className="todoInput"
          value={date}
          placeholder="dd/mm/aaaa"
          onChange={(e) => handleDateUpdate(e)}
        />
        <span id="dateError" className="error"></span>
        <br />
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <button type="submit" className="todoSubmit">
            Criar
          </button>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
