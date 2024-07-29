# Todo App and User Registration

This repository contains a React application that includes a dynamic todo list, a custom data fetching hook, a responsive navigation menu, and a user registration form with validation.

## Features

1. **Dynamic Todo List**
   - Add new todo items with a title and description.
   - Display all todos with options to mark them as completed or delete them.
   - Filter todos to view all, only completed, or only incomplete todos.
   - Persist todos in local storage to retain them after a page refresh.
   - Basic validation to ensure both title and description are provided before adding a todo.

2. **Custom Hook (`useFetch`)**
   - A custom hook for data fetching that accepts a URL as a parameter and returns the data, loading state, and error state.
   - Fetch and display data from a public API.

3. **Responsive Navigation Menu**
   - Includes a logo or title.
   - Navigation links (e.g., Home, About, Contact).
   - A hamburger menu icon that toggles the visibility of the navigation links on smaller screens.
   - Styled using CSS-in-JS for responsiveness on both mobile and desktop views.

4. **User Registration Form**
   - Fields for Full Name, Email, Password, Password Confirmation, and Agree to Terms checkbox.
   - Client-side validation to ensure:
     - Full Name is not empty.
     - Email is in a valid format.
     - Password and Password Confirmation match.
     - Terms checkbox is checked before submission.
   - Controlled components to manage form inputs.
   - Display error messages if validation fails.
  
5. **Optimize React Component Rendering**
   - Optimize a React component with performance issues. The component includes expensive renders and async calls. Use React.memo, useMemo, and useCallback to improve performance.
   - reduce component renders and prevent the useEffect from fetching data every time the component rerenders.
   - Add the ability to toggle between the optimized and non-optimized versions.
   - On this test, the rendering reduced by 2ms.
   - Before, ![Screenshot 2024-07-29 at 3 01 11 AM](https://github.com/user-attachments/assets/dc3d4828-8ffc-4f6f-94ff-5fc9d44d9979).
   - After, ![Screenshot 2024-07-29 at 3 00 56 AM](https://github.com/user-attachments/assets/1ee79265-0a38-4e51-a547-f50b06fefc44)


         

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-app-and-registration.git
   cd todo-app-and-registration
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

### Dynamic Todo List

1. **Add a Todo**: Fill in the title and description in the provided form and click "Add Todo".
2. **Mark as Completed**: Check the box next to a todo item to mark it as completed.
3. **Delete a Todo**: Click the delete button next to a todo item to remove it.
4. **Filter Todos**: Use the dropdown filter to view all todos, only completed todos, or only incomplete todos.

### Custom Hook (`useFetch`)

1. The `useFetch` hook can be used to fetch data from a given URL and returns the data, loading state, and error state.
2. The hook is integrated with the todo application to fetch todos from a public API.

### Responsive Navigation Menu

1. The navigation menu includes links to different sections (e.g., Home, About, Contact) and a hamburger menu icon for mobile views.
2. The menu is styled to be responsive and adjusts appropriately for different screen sizes.

### User Registration Form

1. Fill in the Full Name, Email, Password, and Password Confirmation fields.
2. Check the "Agree to Terms" checkbox.
3. Click "Submit" to register. Error messages will be displayed if validation fails.
