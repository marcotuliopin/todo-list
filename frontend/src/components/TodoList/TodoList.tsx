import React, { SyntheticEvent, useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import { v4 as uuidv4 } from "uuid";
import { TodoSearch } from "../../todo";
import { parseDataFromApi } from "../../helpers/parseData";

interface TodoListProps {
  fetchAllDataFromApi: () => void;
  handleTodoDone: (e: SyntheticEvent) => void;
  data: TodoSearch[];
}

const TodoList: React.FC<TodoListProps> = ({
  fetchAllDataFromApi,
  handleTodoDone,
  data,
}: TodoListProps): JSX.Element => {
  useEffect(() => {
    fetchAllDataFromApi();
  }, []);

  return (
    <div className="todoList">
      <ul>
        {data.map((t, index) => (
          <li key={uuidv4()}>
            {index === 0 || t.date != data[index - 1].date ? (
              <h2>
                <strong>{t.date}</strong>
              </h2>
            ) : null}
            <Todo id={t.content} handleTodoDone={handleTodoDone} result={t} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
