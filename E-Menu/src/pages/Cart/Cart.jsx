import React from "react";
import "./Cart.css";
import { useState, useEffect } from "react";
import { viewCart, removeFromCart, viewFoodById } from "../../Api/api";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [foodList, setFoodList] = useState([]);

  const fetchCartAndFood = async () => {
    try {
      const cartResponse = await viewCart();
      console.log(cartResponse);
      if (cartResponse.status === 200 && cartResponse.data.length >= 0) {
        setCart(cartResponse.data);
        console.log(cartResponse.data);
        const foodPromises = cartResponse.data.map((cartItem) =>
          viewFoodById(cartItem.item_id)
        );
        const foodResponses = await Promise.all(foodPromises);
        const foodData = foodResponses.map((response, index) => {
          const foodItem = response.data;
          foodItem.quantity = cartResponse.data[index].quantity;
          return foodItem;
        });
        setFoodList(foodData);
        console.log(foodData);
      } else {
        console.log(cartResponse.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFromCart = async (foodId) => {
    try {
      const response = await removeFromCart(foodId);
      console.log(response);
      if (cart.length === 1) {
        fetchCartAndFood(); // Tải lại dữ liệu giỏ hàng nếu giỏ hàng rỗng sau khi xóa mặt hàng
      } else {
        const updatedCart = cart.filter((item) => item.id !== foodId);
        setCart(updatedCart);
        const updatedFoodList = foodList.filter(
          (food, index) => food.id !== foodId
        );
        setFoodList(updatedFoodList);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCartAndFood();
  }, []);
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {foodList.map((food, index) => (
          <div key={index}>
            <div className="cart-items-title cart-items-item">
              <h3>{food.Name}</h3>
              <p>{food.CategoryId}</p>
              <p>${food.Price}</p>
              <p>{cart[index].quantity}</p>
              <p>${food.Price * cart[index].quantity}</p>
              <p
                onClick={() => handleRemoveFromCart(food.id)}
                className="cross"
              >
                x
              </p>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <div className="h2">Cart Total</div>
          <div>{/* <p>${getTotalCartAmount()}</p> */}</div>
          <hr />
          <div className="cart-total-details">
            <div className="">Delivery Fee</div>
            {/* <p>${getTotalCartAmount() === 0 ? 0 : 2}</p> */}
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            {/* <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b> */}
          </div>
          <hr />
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
      <div className="cart-promocode">
        <div>
          <p>If you ha ve a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" name="" id="" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
