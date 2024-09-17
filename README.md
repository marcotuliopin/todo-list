# Todo List
------------------------

Marco Túlio de Pinho

A reminder list in React and .Net.

## Specifications
-------------------------

Software developed using .Net SDK 8.0.0; Microsoft.AspNetCore.App 8.0.1; NodeJs 18.16.0.

We used SqlServer for the database implementation, using a local server.

## Components
--------------------------

### Todo

Represents a reminder. It has a body with id, content, and date, and a function responsible for removing the reminder when it's completed.

### TodoForm


Represents the form to create a new reminder. It possesses the reminder content and date for creating the reminder, loading to capture whether the form is loading, and functions to handle changes in the content field, the date, or in the case of form submission.

### TodoList


Responsible for rendering the list of contents, according to project requirements.

### App

Holds the logic for executing the functionality of the other components.

We separated auxiliary functions into the helpers directory for better organization of the project.

## API
------------------------------

The API has a controller, which handles GET, POST, PUT, and DELETE requirements of Todos from the database.

The Todo is a model that has an id, content, and date. We defined an interface named ITodoRepository and a class that implements it (TodoRepository) to extract logic from the controller, improving the code organization and function separation.

## How to Use
------------------------
Since a local server was used to run the program, it is necessary to change the keys that link to it. First, modify the connection string in the /api/appsettings.json file. Uncomment the line (remove the two "//") and replace {PCNAME} and {DATABASENAME} according to your configuration. After this, in /frontend/source/api.tsx, edit the "axios.defaults.baseURL = " line and replace the following URL with the URL of the port the API is using.

To start the API, go to the /api directory and use the command dotnet watch run. Through Swagger, you can obtain the port's URL. To start the frontend, go to the /frontend directory and use the command npm start.
