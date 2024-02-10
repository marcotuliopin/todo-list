import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import Todo from "./components/Todo/Todo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [reminder, setReminder] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // Updates state when user inputs new data on reminder field.
  const handleReminderUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setReminder(e.target.value);
  };

  // Updates state when user inputs new data on date field.
  const handleDateUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const inputValue = e.target.value;
    let formattedValue = formatDate(inputValue);
    setDate(formattedValue);
  };

  // Format the date input field while the user types.
  const formatDate = (input: string): string => {
    let formattedValue = input
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{2})?(\d{4})?/, "$1/$2/$3") // Autocompletes '/' on input field.
      .slice(0, 10); // Ensures input is at most 10 characters long.

    // Automatically removes '/' when user deletes data.
    let lastChar = formattedValue[formattedValue.length - 1];
    if (lastChar != "/") return formattedValue;
    while (formattedValue[formattedValue.length - 1] == "/")
      formattedValue = formattedValue.slice(0, -1);
    return formattedValue;
  };

  // Adds a new todo to the list.
  const handleButtonClick = (e: SyntheticEvent) => {
    // const result = await createTodo(reminder, date);
    // setTodos([...todos, result]);
    e.preventDefault();
    console.log(e);
    console.log(todos);
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uid(), reminder: reminder, date: date },
    ]);
  };

  return (
    <div className="App">
      <TodoForm
        reminder={reminder}
        date={date}
        handleReminderUpdate={handleReminderUpdate}
        handleDateUpdate={handleDateUpdate}
        handleButtonClick={handleButtonClick}
      />
      <div className="todoList">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <Todo id={todo.id} reminder={todo.reminder} date={todo.date} />
            </li>
          ))}
        </ul>
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

function uid() {
  return (
    Date.now().toString(36) +
    Math.floor(
      Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
    ).toString(36)
  );
}

export default App;
