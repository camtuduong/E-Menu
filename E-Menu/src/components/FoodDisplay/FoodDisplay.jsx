import React, { useState, useEffect } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import axios from "axios";

const FoodDisplay = ({ categoryId }) => {
  const [data, setData] = useState([]);
  const url = "http://localhost:9000";

  const fetchList = async () => {
    let response;
    if (categoryId === "All") {
      response = await axios.get(`${url}/api/food`);
    } else {
      response = await axios.get(
        `${url}/api/search-food-categoryId/${categoryId}`
      );
    }
    console.log(response);
    if (response.status === 200) {
      setData(response.data);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, [categoryId]);

  return (
    <div className="food-display" id="food-display">
      <div className="h2">Top dishes near you</div>
      <div className="food-display-list">
        {data.map((item, index) => (
          <FoodItem
            key={index}
            id={item.id}
            name={item.Name}
            description={item.Description}
            price={item.Price}
            image={item.Image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
