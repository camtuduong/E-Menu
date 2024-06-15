import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchOrderDetail, searchFoodById } from "../../Api/api";
import "./OrderDetail.css";

const OrderDetail = () => {
  const { id } = useParams();
  const [list, setList] = useState([]);
  const [foodMap, setFoodMap] = useState({});

  const fetchList = async () => {
    const response = await searchOrderDetail(id);
    console.log(response.data);
    if (response.status === 200) {
      setList(response.data);
      fetchFoodNames(response.data);
    } else {
      toast.error(response.data.message);
    }
  };

  const fetchFoodNames = async (orderList) => {
    const foodIds = orderList.map((item) => item.FoodId);
    const foodMap = {};

    for (const foodId of foodIds) {
      if (!foodMap[foodId]) {
        const response = await searchFoodById(foodId);
        console.log(response.data);
        if (response.status === 200) {
          foodMap[foodId] = response.data.Name;
        } else {
          toast.error(response.data.message);
          foodMap[foodId] = "";
        }
      }
    }

    setFoodMap(foodMap);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>Order Detail</p>
      <div className="list-table">
        <div className="list-table-format-category title">
          <b>Order ID</b>
          <b>Food Name</b>
          <b>Quantity</b>
          <b>Price</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format-category">
              <p>{item.OrderId}</p>
              <p>{foodMap[item.FoodId]}</p>
              <p>{item.Quantity}</p>
              <p>${item.Price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderDetail;
