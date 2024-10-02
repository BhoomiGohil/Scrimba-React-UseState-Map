import React from "react";

export default function MainContent() {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);

  function addItem() {
    setThings((prevState) => [...prevState, `Thing ${things.length + 1}`]);
  }

  const thingsElements = things.map((thing) => {
    return <p key={thing}>{thing}</p>;
  });

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}
