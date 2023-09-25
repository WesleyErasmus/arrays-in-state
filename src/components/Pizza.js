import React, { useState } from "react";
import "../styles/pizza.css";

// Static array of pizza toppings
const toppings = [
  {
    name: "Avocado",
    image:
      "https://images.unsplash.com/photo-1560155016-bd4879ae8f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  },
  {
    name: "Pineapple",
    image:
      "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    name: "Pepperoni",
    image:
      "https://images.unsplash.com/photo-1563299416-3244785dbf1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1798&q=80",
  },
  {
    name: "Feta",
    image:
      "https://images.unsplash.com/photo-1626957341926-98752fc2ba90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const Pizza = () => {
  // State to store selected toppings
  const [selected, setSelected] = useState([]);

  // Event handler for adding/removing toppings
  const toggleTopping = ({ target }) => {
    const selectedTopping = target.value;

    // prev contains the previous state of the "selected" array
    setSelected((prev) => {
      // If the topping is already selected, remove it; otherwise, add it
      if (prev.includes(selectedTopping)) {
       
        // filtering topping by testing if "selectedTopping" exists. If it exists, then it removes it from the "prev"(previous state) array
        return prev.filter((t) => t !== selectedTopping);
      } else {
        
        // Add selected topping to prev sate which contains the previous state of the "selected array"
        return [selectedTopping, ...prev];
      }
    });
  };

  /* USED TO DISPLAY THE TOPPINGS IMAGES: 
    Checks if the "selected" array includes the  topping name from the "selected" array, and then the filter method creates a new array in the selectedToppings variable keeping the values that are in the "selected array". This is used to display the images for the toppings that are stored in the "selected" array. */
  const selectedToppings = toppings.filter((topping) =>
    selected.includes(topping.name)
  );

  return (
    <div className="wrapper">
      <h1>
        🍕 Create Your Own Pizza <span className="flip-pizza-slice">🍕</span>
      </h1>
      {/* Map() function iterates through the "toppings" array creating a new array and displays the topping names from the toppings array */}
      {toppings.map((topping) => (
        <button
          className="add-btn"
          value={topping.name}
          onClick={toggleTopping}
          key={topping.name}
        >
            {/* Ternary operator to either display "Remove" or "Add" before the topping name. Checks if the topping.name is present in the "selected" array. If the condition is true then it returns "Remove" before the topping name and if it is false then it returns "Add" before the topping name. */}
          {selected.includes(topping.name) ? "Remove" : "Add"}: {topping.name}
        </button>
      ))}
      <div className="toppings-container">

        {/* Iterates through the selectedToppings array and displays the images for the topping names that are present in the array. */}
        {selectedToppings.map((topping) => (
          <div key={topping.name}>
            <img
              className="topping-img"
              src={topping.image}
              alt={`${topping.name} "topping"`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizza;
