import axios from "axios";
import { TodoSearch } from "./todo";

export const fetchAllData = async (): Promise<TodoSearch[]> => {
  try {
    const response = await axios.get("http://localhost:5155/api/todo/getall");
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const createTodo = async (content: string, date: Date) => {
  // Send a POST request to the API
  const data = {
    Content: content,
    Date: date.toISOString(),
  };
  try {
    axios
      .post("http://localhost:5155/api/todo/create", data)
      .then((response) => {
        console.log("Todo created:", response.data);
        // Handle successful response here (e.g., update state)
      })
      .catch((error) => {
        console.error("Error creating todo:", error);
        // Handle error here (e.g., display an error message)
      });
  } catch (err) {
    throw err;
  }
};
