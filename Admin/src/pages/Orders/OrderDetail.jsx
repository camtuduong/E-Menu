import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchOrderDetail } from "../../Api/api";
import "./OrderDetail.css";
const OrderDetail = () => {
  const { id } = useParams();
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await searchOrderDetail(id);
    console.log(response.data);
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
      {list.map((item, index) => {
        return (
          <div key={index} className="list-table-format-category">
            <p>{item.OrderId}</p>
            <p>{item.FoodId}</p>
            <p>{item.Quantity}</p>
            <p>${item.Price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default OrderDetail;
