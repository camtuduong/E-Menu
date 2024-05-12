import React, { useEffect, useState } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/api/category")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="explore-menu" id="explore-menu">
      <div className="h1">Explore our menu</div>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        consequatur ullam voluptates expedita odio deleniti? Minus ratione fuga
        quasi accusamus magnam corrupti
      </p>
      <div className="explore-menu-list">
        {/* {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })} */}
        {data.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) => (prev === item.name ? "All" : item.name))
            }
            key={index}
            className="explore-menu-list-item"
          >
            <img
              className={category === item.name ? "active" : ""}
              src={item.image}
              alt=""
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
