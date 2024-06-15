import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import React, { useState } from "react";
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
