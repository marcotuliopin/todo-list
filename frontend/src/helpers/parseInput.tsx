// Check if date is valid before calling the API.
export const validateDate = (dateString: string): Date | null => {
  // Split the input string into day, month, and year components
  const parts = dateString.split("/");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Subtract 1 from the month because months in JavaScript are zero-based (0-11)
  const year = parseInt(parts[2], 10);

  // Create a new Date object with the extracted day, month, and year values
  const date = new Date(year, month, day);
  const currentDate = new Date();

  console.log(currentDate);
  console.log(date);
  if (!isNaN(date.getTime()) && date > currentDate) return date;
  return null;
};

// Format the date input field while the user types.
export const formatDateField = (input: string): string => {
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
