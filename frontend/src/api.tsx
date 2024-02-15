import axios from "axios";
import { TodoSearch } from "./todo";

// Send a Get request to the API
export const fetchAllData = async (): Promise<TodoSearch[]> => {
  try {
    const response = await axios.get("http://localhost:5155/api/todo/getall");
    return response.data;
  } catch (err) {
    throw err;
  }
};

// Send a POST request to the API
export const createTodo = async (content: string, date: Date): Promise<TodoSearch> => {
  const data = {
    Content: content,
    Date: date.toISOString(),
  };
  try {
    const response = await axios.post("http://localhost:5155/api/todo/create", data)
    return response.data;
  } catch (err) {
    throw err;
  }
};

// Send a DELETE request to the API
export const deleteTodo = async (todoId: string) => {
  try {
    await axios.delete(`http://localhost:5155/api/todo/delete/${todoId}`)
  } catch (err) {
    throw err;
  } 
};
