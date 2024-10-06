# Scrimba-React-UseState-Map

This project demonstrates how to use the `useState` hook in React to manage and update state in a functional component. The application allows users to dynamically add new items to a list by clicking a button.

## Features

- Implements the `useState` hook to handle the list of items.
- Displays a list of items that can be extended by the user.
- Renders the UI dynamically based on the component's state.

## Code Overview

- **useState Hook**: Manages an array of items in the component's state.
- **Add Item Functionality**: Each time the button is clicked, a new item is added to the list.
- **Rendering Items**: The list of items is rendered dynamically using the `map()` method.

## How It Works

1. Initially, two items, "Thing 1" and "Thing 2," are stored in the component's state.
2. When the "Add Item" button is clicked, a new item is added to the list.
3. The list updates dynamically, and the new items are displayed below the button.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/BhoomiGohil/Scrimba-React-UseState-Map.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and go to http://localhost:3000 to view the app.

## Technologies Used

React
JavaScript (ES6+)
HTML/CSS
