import axios from "axios";

const API_URL = "http://localhost:9000"; // Thay thế bằng URL API của bạn

// function addFood(data) {
//   return axios.post(`${API_URL}/api/add-food`, data).catch((error) => {
//     // console.error(error);
//     throw error;
//   });
// }

function addFood(formData) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  return axios
    .post(`${API_URL}/api/add-food`, formData, config)
    .catch((error) => {
      // console.error(error);
      throw error;
    });
}
export { addFood };

function updateFood(formData, foodId) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const apiUrl = `${API_URL}/api/update-food/${foodId}`;
  const params = new URLSearchParams();
  params.append("_method", "put");

  return axios.post(apiUrl, formData, { ...config, params }).catch((error) => {
    // console.error(error);
    throw error;
  });
}

export { updateFood };

function removeFood(foodId) {
  return axios.delete(`${API_URL}/api/remove-food/${foodId}`).catch((error) => {
    // console.error(error);
    throw error;
  });
}

export { removeFood };

function updateCategory(formData, categoryId) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const apiUrl = `${API_URL}/api/update-category/${categoryId}`;
  const params = new URLSearchParams();
  params.append("_method", "put");

  return axios.post(apiUrl, formData, { ...config, params }).catch((error) => {
    // console.error(error);
    throw error;
  });
}
export { updateCategory };
