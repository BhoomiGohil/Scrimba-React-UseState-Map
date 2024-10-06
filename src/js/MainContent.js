import React from "react";

export default function MainContent() {
  // State to hold an array of items
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);

  // Function to add a new item to the array
  function addItem() {
    setThings((prevState) => [
      ...prevState,
      `Thing ${things.length + 1}`, // Adding a new item based on the current length
    ]);
  }

  // Mapping over the 'things' array to create <p> elements for each item
  const thingsElements = things.map((thing) => {
    return <p key={thing}>{thing}</p>; // Key is the item itself for unique identification
  });

  // JSX that renders a button and the list of items
  return (
    <div>
      <button onClick={addItem}>Add Item</button>{" "}
      {/* Button triggers the addItem function */}
      {thingsElements} {/* Display the list of <p> elements */}
    </div>
  );
}
