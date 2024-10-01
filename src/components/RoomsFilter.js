import React, { useContext } from "react";
import { MyContext } from "../Context";

export const getUniqueValues = (rooms, type) => {
  return [...new Set(rooms.map((room) => room[type]))];
};

export default function RoomsFilter() {
  const contextData = useContext(MyContext);
  const {
    rooms,
    category_name,
    handleChange,
    capacity,
    price_per_night,
    maxPrice,
    minPrice,
    reserved,
  } = contextData;

  let roomTypes = ["all", ...getUniqueValues(rooms, "category_name")];
  const selectTypes = roomTypes.map((cat, index) => (
    <option key={index} value={cat}>
      {cat.charAt(0).toUpperCase() + cat.slice(1)}
    </option>
  ));

  let capacityValues = [...getUniqueValues(rooms, "capacity")];
  const selectCapacity = capacityValues.sort().map((cap, index) => (
    <option key={index} value={cap}>
      {cap}
    </option>
  ));

  return (
    <div className="filter-container container-fluid py-4">
      <h4 className="filter-title text-center mb-4 text-white">Filter Rooms</h4>
      <form className="rooms-filter p-4 rounded shadow bg-dark text-light">
        {/* Category Filter */}
        <div className="form-group">
          <label htmlFor="inputCategory" className="font-weight-bold">
            Category
          </label>
          <select
            id="inputCategory"
            className="form-control bg-dark text-light border-light"
            name="category_name"
            value={category_name}
            onChange={handleChange}
          >
            {selectTypes}
          </select>
        </div>

        {/* Capacity Filter */}
        <div className="form-group">
          <label htmlFor="inputCapacity" className="font-weight-bold">
            Capacity
          </label>
          <select
            id="inputCapacity"
            className="form-control bg-dark text-light border-light"
            name="capacity"
            value={capacity}
            onChange={handleChange}
          >
            {selectCapacity}
          </select>
        </div>

        {/* Price Filter */}
        <div className="form-group">
          <label htmlFor="customRange3" className="font-weight-bold">
            Room Cost Max: ₹{price_per_night}
          </label>
          <input
            name="price_per_night"
            value={price_per_night}
            type="range"
            className="custom-range"
            min={minPrice}
            max={maxPrice}
            step="1.0"
            id="customRange3"
            onChange={handleChange}
          />
        </div>

        {/* Availability Filter */}
        <div className="form-check">
          <input
            name="reserved"
            checked={reserved}
            type="checkbox"
            className="form-check-input"
            id="reserved"
            onChange={handleChange}
          />
          <label className="form-check-label font-weight-bold text-light" htmlFor="reserved">
            Only show available rooms
          </label>
        </div>
      </form>
    </div>
  );
}
