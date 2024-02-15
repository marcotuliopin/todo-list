import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { TodoSearch } from "./todo";
import { formatDateField, validateDate } from "./helpers/parseInput";
import { createTodo, fetchAllData } from "./api";
import { parseDataFromApi } from "./helpers/parseData";

function App() {
  const [content, setContent] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [data, setData] = useState<TodoSearch[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Updates state when user inputs new data on content field.
  const handleContentUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  // Updates state when user inputs new data on date field.
  const handleDateUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatDateField(e.target.value);
    setDate(formattedValue);
  };

  // Adds a new todo to the list.
  const handleFormSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const parsedDate = validateDate(date);
    console.log(parsedDate);
    if (parsedDate == null) {
      console.log("Wrong date.");
      return;
    }

    try {
      await createTodo(content, parsedDate);
    } catch (err) {
      console.error("Error while trying to add todo to the list: ", err);
      return;
    }

    setContent("");
    setDate("");

    const updatedData = [...data, { content, date }];
    setData(
      updatedData.sort(function (a, b) {
        return new Date(a.date).valueOf() - new Date(b.date).valueOf();
      })
    );
  };

  // Removes a Todo when it is marked as complete
  const handleTodoDone = async (e: SyntheticEvent) => {

  }

  // Load list of Todos
  const fetchAllDataFromApi = async () => {
    setLoading(true);
    try {
      const response = await fetchAllData();
      setData(
        response.map((todo) => ({
          ...todo,
          date: parseDataFromApi(todo.date),
        }))
      );
    } catch (err) {
      console.error("Error loading list: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <TodoForm
        content={content}
        date={date}
        loading={loading}
        handleContentUpdate={handleContentUpdate}
        handleDateUpdate={handleDateUpdate}
        handleFormSubmit={handleFormSubmit}
      />
      <div className="todoList">
        <TodoList
          fetchAllDataFromApi={fetchAllDataFromApi}
          handleTodoDone={handleTodoDone}
          data={data}
        />
      </div>
    </div>
  );
}

export default App;
