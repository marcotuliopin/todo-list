import { TodoSearch } from "../todo";

// Get date in DateTime format and format it as "dd/MM/yyyy"
export const parseDateFromApi = (date: string): string => {
  const [datePart] = date.split("T");
  const [year, month, day] = datePart.split("-");

  return `${day}/${month}/${year}`;
};

// Compare the dates
export const sortByDate = (a: TodoSearch, b: TodoSearch) => {
  const [dayA, monthA, yearA] = a.date.split("/").map(Number);
  const [dayB, monthB, yearB] = b.date.split("/").map(Number);

  const dateA = new Date(yearA, monthA - 1, dayA);
  const dateB = new Date(yearB, monthB - 1, dayB);

  return dateA.valueOf() - dateB.valueOf();
};
