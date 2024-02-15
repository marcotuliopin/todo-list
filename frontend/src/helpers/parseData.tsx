// Get date in DateTime format and format it as "dd/MM/yyyy"
export const parseDataFromApi = (date: string): string => {
    const [datePart] = date.split('T');
    const [year, month, day] = datePart.split('-');

    return `${day}/${month}/${year}`;
};
