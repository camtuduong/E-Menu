import React from "react";
import "./ListCategory.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
const ListCategory = () => {
  const url = "http://localhost:9000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/category`);
    console.log(response);
    if (response.status == 200) {
      setList(response.data);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add flex-col">
      <p>All Category List</p>
      <div className="list-table">
        <div className="list-table-format-category title">
          <b>Id</b>
          <b>Image</b>
          <b>Name</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format-category">
              <p>{item.id}</p>
              <img src={new URL(item.image, url).toString()} alt="" />
              <p>{item.name}</p>
              <div>
                {/* <button
                  //   onClick={() => removeHandler(item.id)}
                  className="cursor"
                >
                  X
                </button> */}
                <Link to={"/update-category/" + item.id}>
                  <button className="cursor">Update</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListCategory;
