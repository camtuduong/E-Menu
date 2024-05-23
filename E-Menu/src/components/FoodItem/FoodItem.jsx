import React, { useState, useEffect } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { addToCart, removeFromCart, searchCart } from "../../Api/api";
const FoodItem = ({ id, name, price, description, image }) => {
  const [data, setData] = useState([]);
  const url = "http://localhost:9000";

  //cai de mai lam
  // api cart tu id_item sau do xem coi quantity co chua neu co thi hien remove khong thi chi hien cai add thoi
  // them so luong quantity cap nhat cho uI coi nua
  // lam phan hien thi ben cart nua

  const handleAddToCart = async () => {
    try {
      const response = await addToCart(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFromCart = async () => {
    try {
      const response = await removeFromCart(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchList = async () => {
    const response = await searchCart(id);
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
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={new URL(image, url).toString()}
          alt=""
        />
        {data ? (
          <div className="food-item-counter">
            <img
              onClick={handleRemoveFromCart}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{data.quantity}</p>
            <img
              onClick={handleAddToCart}
              src={assets.add_icon_green}
              alt="Add"
            />
          </div>
        ) : (
          <div className="food-item-counter">
            <img
              onClick={handleAddToCart}
              src={assets.add_icon_white}
              alt="Add"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
