// import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItem] = useState({});

//   const addToCart = (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//   };

//   const removeFromCart = (itemId) => {
//     setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = food_list.find((product) => product._id === item);
//         totalAmount += itemInfo.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItem,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//   };
//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;

import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);
const url = "http://localhost:9000";

const StoreContextProvider = (props) => {
  const [cartItems, setCartItem] = useState({});
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    // Gọi API để lấy dữ liệu và cập nhật foodList
    axios
      .get(`${url}/api/food`)
      .then((response) => setFoodList(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Gọi API để lấy dữ liệu và cập nhật cartItems
    axios
      .get(`${url}/api/cart`)
      .then((response) => setCartItem(response.data))
      .catch((error) => console.log(error));
  }, []);

  const addToCart = (itemId) => {
    // Gọi API để thêm sản phẩm vào giỏ hàng
    axios
      .post(`${url}/api/cart/${itemId}`)
      .then((response) => setCartItem(response.data))
      .catch((error) => console.log(error));
  };

  const removeFromCart = (itemId) => {
    // Gọi API để xóa sản phẩm khỏi giỏ hàng
    axios
      .delete(`${url}/api/remove-cart/${itemId}`)
      .then((response) => setCartItem(response.data))
      .catch((error) => console.log(error));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = foodList.find((product) => product.id === item);
        totalAmount += itemInfo.Price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    foodList,
    cartItems,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
