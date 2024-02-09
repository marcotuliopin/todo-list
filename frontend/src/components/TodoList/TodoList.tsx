import React from "react";
import Todo from "../Todo/Todo";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }: TodoListProps): JSX.Element => {
  return (
    <div className="todoList">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.reminder}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
