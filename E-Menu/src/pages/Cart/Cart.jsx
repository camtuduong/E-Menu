import React from "react";
import "./Cart.css";
import { useState, useEffect } from "react";
import {
  viewCart,
  removeFromCart,
  viewFoodById,
  addOrder,
  searchTableName,
} from "../../Api/api";
import { toast } from "react-toastify";

const Cart = ({ name }) => {
  const [cart, setCart] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [order, setOrder] = useState({ Total: "" });
  const [table, setTable] = useState([]);

  const fetchTable = async () => {
    try {
      const response = await searchTableName(name);
      if (response.status === 200) {
        setTable(response.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("No Table Name.");
    }
  };
  const handleChange = (e) => {
    setOrder({ Total: e.target.value });
  };

  const fetchCartAndFood = async () => {
    try {
      const cartResponse = await viewCart();
      console.log(cartResponse);
      if (cartResponse.status === 200 && cartResponse.data.length >= 0) {
        setCart(cartResponse.data);
        // console.log(cartResponse.data);
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
        // console.log(foodData);
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

  const handleAddOrder = async () => {
    try {
      const totalAmount = getTotalAmount();
      const updatedOrder = { ...order, Total: totalAmount };
      const response = await addOrder(updatedOrder, table[0].id);
      if (response.status === 200) {
        toast.success("Order successful !! Thanks For Your Order");
        fetchCartAndFood();
      } else {
        toast.error(response.data.message);
      }
      // console.log(response);
    } catch (error) {
      console.log(error);
      toast.error("You Should Scanned The QR Code Above The Table To Order.");
    }
  };

  useEffect(() => {
    fetchCartAndFood();
    fetchTable();
  }, []);
  useEffect(() => {
    if (table.length > 0) {
      console.log(table[0].id);
    }
  }, [table]);

  const getSubTotalCartAmount = () => {
    let totalAmount = 0;
    foodList.forEach((food, index) => {
      totalAmount += food.Price * cart[index].quantity;
    });
    return totalAmount;
  };

  const getTaxAmount = () => {
    const totalAmount = getSubTotalCartAmount();
    const taxRate = 0.1; // 10% thuế
    const taxAmount = totalAmount * taxRate;
    return taxAmount.toFixed(2);
  };

  const getTotalAmount = () => {
    const taxAmount = parseFloat(getTaxAmount());
    const subAmount = getSubTotalCartAmount();
    const totalAmount = taxAmount + subAmount;
    return totalAmount.toFixed(2);
  };

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
          <div className="h2">Bill Amount</div>
          <hr />
          <div className="cart-total-details">
            <div className="">Sub Total</div>
            <p>${getSubTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <div className="">Tax</div>
            <p>${getSubTotalCartAmount() === 0 ? 0 : getTaxAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b onChange={handleChange} value={order.Total}>
              ${getSubTotalCartAmount() === 0 ? 0 : getTotalAmount()}
            </b>
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
          {/* Add to order . Can lam dang nhap dua tren table da~*/}
          <button className="order" onClick={() => handleAddOrder()}>
            Order Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
