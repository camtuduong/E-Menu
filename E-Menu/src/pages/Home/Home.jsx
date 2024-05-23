import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
const Home = () => {
  const [categoryId, setCategoryId] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu categoryId={categoryId} setCategoryId={setCategoryId} />
      <FoodDisplay categoryId={categoryId} />
    </div>
  );
};

export default Home;
