import React from "react";
import { useSelector } from "react-redux";

function Restaurants() {
  const restaurants = useSelector((state) => state.restaurants);

  return (
    <div>{restaurants.length}
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.name}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurants;
