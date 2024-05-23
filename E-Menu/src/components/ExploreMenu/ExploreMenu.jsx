import React, { useEffect, useState } from "react";
import "./ExploreMenu.css";
import axios from "axios";
const ExploreMenu = ({ categoryId, setCategoryId }) => {
  const [data, setData] = useState([]);
  const url = "http://localhost:9000";

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/category`);
    console.log(response);
    if (response.status == 200) {
      setData(response.data);
    } else {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchList();
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
        {data.map((item, index) => (
          <div
            onClick={() => {
              setCategoryId((prev) => (prev === item.id ? "All" : item.id));
              console.log(item.id);
            }}
            key={index}
            className="explore-menu-list-item"
          >
            <img
              className={categoryId === item.id ? "active" : ""}
              src={new URL(item.image, url).toString()}
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
