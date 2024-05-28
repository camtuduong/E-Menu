import axios from "axios";

const url = "http://localhost:9000";

function viewFoodById(foodId) {
  return axios.get(`${url}/api/food/${foodId}`).catch((error) => {
    // console.error(error);
    throw error;
  });
}
export { viewFoodById };

function viewCart() {
  return axios.get(`${url}/api/cart`).catch((error) => {
    // console.error(error);
    throw error;
  });
}
export { viewCart };

function addToCart(itemId) {
  // Gọi API để thêm sản phẩm vào giỏ hàng
  return axios.post(`${url}/api/add-cart/${itemId}`).catch((error) => {
    // console.error(error);
    throw error;
  });
}
export { addToCart };

function removeFromCart(itemId) {
  // Gọi API để xóa sản phẩm khỏi giỏ hàng
  return axios.delete(`${url}/api/remove-cart/${itemId}`).catch((error) => {
    // console.error(error);
    throw error;
  });
}
export { removeFromCart };

function searchCart(itemId) {
  // Gọi API để xóa sản phẩm khỏi giỏ hàng
  return axios.get(`${url}/api/search-cart/${itemId}`).catch((error) => {
    // console.error(error);
    throw error;
  });
}
export { searchCart };

function addOrder() {
  return axios.post(`${url}/api/add-order`).catch((error) => {
    throw error;
  });
}
export { addOrder };
