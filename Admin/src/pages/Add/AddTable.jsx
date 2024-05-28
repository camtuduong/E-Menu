import React, { useState, useEffect } from "react";
import "./AddTable.css";
import QRCode from "react-qr-code";
import { addTable, viewTable, removeTable } from "../../Api/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AddTable = () => {
  const [data, setData] = useState({ name: "" });
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setData({ name: e.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await addTable(data);
      if (response.status === 200) {
        setData({
          name: "",
        });
        toast.success("Add success");
        fetchData(); // Lấy danh sách mới sau khi thêm thành công
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while adding table.");
    }
  };

  const fetchData = async () => {
    try {
      const response = await viewTable();
      console.log(response);
      if (response.status === 200) {
        setList(response.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while fetching data.");
    }
  };

  const removeHandler = async (id) => {
    try {
      const response = await removeTable(id);
      console.log(response);
      toast.success("Delete success");
      fetchData(); // Lấy danh sách mới sau khi xóa thành công
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while deleting.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="table-admin">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>QR Code Image</p>
          <label htmlFor="image">
            <QRCode value={"http://localhost:5174/home/" + data.id} />
          </label>
        </div>
        <div className="add-product-name flex-col">
          <p>Table name</p>
          <input
            onChange={handleChange}
            value={data.name}
            type="text"
            name="name"
            id=""
            placeholder="Type here"
          />
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>

      <div className="list add flex-col">
        <p>All Table List</p>
        <div className="list-table">
          <div className="list-table-format-table title">
            <b>ID</b>
            <b>Name</b>
            <b>Action</b>
          </div>
          {list.map((item, index) => {
            return (
              <div key={index} className="list-table-format-table">
                <p>{item.id}</p>
                <p>{item.name}</p>
                <div>
                  <button
                    onClick={() => removeHandler(item.id)}
                    className="cursor"
                  >
                    X
                  </button>
                  <Link to={"/update-table/" + item.id}>
                    <button className="btn-update">Update</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AddTable;
