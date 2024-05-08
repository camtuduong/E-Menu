import React, { useState } from "react";

function MenuListItem({ onSelectChange }) {
  const [menu, setMenu] = useState("promotion");

  function handleClick(index) {
    setMenu(index);
    onSelectChange(index);
  }

  return (
    <>
      <div className="menu-list__item">
        <div className={`menu ${menu === "promotion" ? "_selected" : ""}`}>
          {/* Id của MenuList Thay cho (Giá trị nhập vào của handleClick) */}
          <button
            className="menu__button focus"
            onClick={() => handleClick("promotion")}
          >
            <span>PROMOTION</span>
          </button>
        </div>
      </div>
      {/* Khi thêm một sản phẩm sẽ tự hiện lên tab Menu-list__item có sẵn dựa trên json */}
      <div className="menu-list__item">
        <div className={`menu ${menu === "food" ? "_selected" : ""}`}>
          <button
            className="menu__button focus"
            onClick={() => handleClick("food")}
          >
            <span>FOOD</span>
          </button>
        </div>
      </div>
      <div className="menu-list__item">
        <div className={`menu ${menu === "drinks" ? "_selected" : ""}`}>
          <button
            className="menu__button focus"
            onClick={() => handleClick("drinks")}
          >
            <span>DRINKS</span>
          </button>
        </div>
      </div>
    </>
  );
}
export default MenuListItem;
