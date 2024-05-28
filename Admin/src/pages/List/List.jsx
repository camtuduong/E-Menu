import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
import { removeFood } from "../../Api/api";
import { Link } from "react-router-dom";
const List = () => {
  const url = "http://localhost:9000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food`);
    console.log(response);
    if (response.status == 200) {
      setList(response.data);
    } else {
      toast.error(response.data.message);
    }
  };

  const removeHandler = async (foodId) => {
    try {
      const response = await removeFood(foodId);
      console.log(response);
      toast.success("Xóa thành công");
      fetchList(); // Lấy danh sách mới sau khi xóa thành công
    } catch (error) {
      console.log(error);
      toast.error("Đã xảy ra lỗi khi xóa");
    }
  };
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Description</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={new URL(item.Image, url).toString()} alt="" />
              <p>{item.Name}</p>
              <p>{item.CategoryId}</p>
              <p>${item.Price}</p>
              <p>{item.Description}</p>
              <div>
                <button
                  onClick={() => removeHandler(item.id)}
                  className="cursor"
                >
                  X
                </button>
                <Link to={"/update/" + item.id}>
                  <button className="btn-update">Update</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
