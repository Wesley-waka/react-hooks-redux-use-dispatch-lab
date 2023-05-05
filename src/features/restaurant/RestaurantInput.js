import React, { useState } from "react";
import { addRestaurant } from "./restaurantsSlice";
import { useDispatch, useSelector } from "react-redux";

function RestaurantInput() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  // const useSelector = (state) => {
  //   state.restaurant
  // }
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(addRestaurant(name));
    dispatch(addRestaurant({ name, location }));

    // add missing code
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          onChange={handleNameChange}
          id="name"
          placeholder="restaurant name"
        />
      </p>
      <p>
        <input
          type="text"
          onChange={handleLocationChange}
          id="location"
          placeholder="location"
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RestaurantInput;
