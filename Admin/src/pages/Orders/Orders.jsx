import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Orders.css";
const Orders = () => {
  const url = "http://localhost:9000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/order`);
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
      <p>All Orders List</p>
      <div className="list-table">
        <div className="list-table-format-category title">
          <b>Table ID</b>
          <b>Total Price</b>
          <b>Date</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format-category">
              <p>{item.Table_id}</p>
              <p>${item.Total}</p>
              <p>{item.OrderDate}</p>
              <div>
                <Link to={"/order-detail/" + item.id}>
                  <button className="detail">Detail</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
