import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import { updateCategory } from "../../Api/api";
import axios from "axios";
const UpdateCategory = () => {
  const [updatedImage, setUpdatedImage] = useState(null);
  const [image, setImage] = useState(null);
  const url = "http://localhost:9000";
  const { id } = useParams();
  const [data, setData] = useState({
    id: "",
    name: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    axios
      .get(`${url}/api/category/${id}`)
      .then((res) => {
        const { id, name, image } = res.data;
        setData({
          id: id,
          name: name,
        });
        setImage(image);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const onUpdate = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("image", updatedImage || image);

      const response = await updateCategory(formData, id);
      console.log(response);
      toast.success("Cập nhật thành công");
    } catch (error) {
      console.log(error);
      toast.error("Đã xảy ra lỗi khi cập nhật");
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setUpdatedImage(file);
  };

  return (
    <div className="update">
      <form onSubmit={onUpdate} className="flex-col">
        <div className="update-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={
                updatedImage
                  ? URL.createObjectURL(updatedImage)
                  : image
                  ? new URL(image, url).toString()
                  : assets.upload_area
              }
              alt=""
            />
          </label>
          <input type="file" onChange={handleImageChange} hidden id="image" />
        </div>
        <div className="update-product-name flex-col">
          <p>Category ID</p>
          <input
            type="number"
            name="id"
            value={data.id}
            onChange={onChangeHandler}
            readOnly
          />
        </div>
        <div className="update-product-name flex-col">
          <p>Category Name</p>
          <input
            type="text"
            name="name"
            id=""
            value={data.name}
            onChange={onChangeHandler}
          />
        </div>
        <button type="submit" className="update-btn">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateCategory;
