import axios from "axios";

const API_URL = "http://localhost:9000"; // Thay thế bằng URL API của bạn

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

function searchFoodById(id) {
  return axios.get(`${API_URL}/api/food/${id}`).catch((error) => {
    throw error;
  });
}
export { searchFoodById };

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

function searchOrderDetail(orderId) {
  return axios
    .get(`${API_URL}/api/search-order-detail/${orderId}`)
    .catch((error) => {
      // console.error(error);
      throw error;
    });
}

export { searchOrderDetail };

function addTable(data) {
  return axios.post(`${API_URL}/api/add-table`, data).catch((error) => {
    throw error;
  });
}

export { addTable };

function viewTable() {
  return axios.get(`${API_URL}/api/table`).catch((error) => {
    // console.error(error);
    throw error;
  });
}
export { viewTable };

function removeTable(id) {
  return axios.delete(`${API_URL}/api/remove-table/${id}`).catch((error) => {
    // console.error(error);
    throw error;
  });
}

export { removeTable };

function updateTable(data, id) {
  return axios.put(`${API_URL}/api/update-table/${id}`, data).catch((error) => {
    // console.error(error);
    throw error;
  });
}

export { updateTable };

//login
function login(email, password) {
  const data = {
    email: email,
    password: password,
  };

  return axios.post(`${API_URL}/api/login`, data).catch((error) => {
    throw error;
  });
}

export { login };

function register(name, email, password) {
  const data = {
    name: name,
    email: email,
    password: password,
  };

  return axios.post(`${API_URL}/api/register`, data).catch((error) => {
    throw error;
  });
}

export { register };

// function checkEmailExists(email) {
//   return axios.get(`${API_URL}/api/search-email/${email}`).catch((error) => {
//     throw error;
//   });
// }
// export { checkEmailExists };
function checkEmailExists(email) {
  return axios.get(`/api/search-email/${email}`).catch((error) => {
    throw error;
  });
}

export { checkEmailExists };
