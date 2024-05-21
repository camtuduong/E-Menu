import React, { useEffect, useState } from "react";
import "./Update.css";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import axios from "axios";
import { updateFood } from "../../Api/api";
import { assets } from "../../assets/assets";

const Update = () => {
  const [updatedImage, setUpdatedImage] = useState(null);
  const [image, setImage] = useState(null);
  const url = "http://localhost:9000";
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "1",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    axios
      .get(`${url}/api/food/${id}`)
      .then((res) => {
        const { Name, Price, Description, CategoryId, Image } = res.data;
        setData({
          name: Name,
          description: Description,
          price: Price,
          categoryId: CategoryId.toString(),
        });
        setImage(Image);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const onUpdate = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("Name", data.name);
      formData.append("Description", data.description);
      formData.append("Price", data.price);
      formData.append("CategoryId", data.categoryId);
      formData.append("Image", updatedImage || image);

      const response = await updateFood(formData, id);
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
          <p>Food Name</p>
          <input
            type="text"
            name="name"
            id=""
            value={data.name}
            onChange={onChangeHandler}
          />
        </div>
        <div className="update-food-description flex-col">
          <p>Description</p>
          <textarea
            name="description"
            id=""
            value={data.description}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <div className="update-category-price">
          <div className="update-category flex-col">
            <p>Food Category</p>
            <select name="categoryId" id="" onChange={onChangeHandler}>
              <option value="1">Salad</option>
              <option value="2">Rolls</option>
              <option value="3">Desert</option>
              <option value="4">Sandwich</option>
              <option value="5">Cake</option>
              <option value="6">Pure Veg</option>
              <option value="7">Pasta</option>
              <option value="8">Noodles</option>
            </select>
          </div>
          <div className="update-price flex-col">
            <p>Food Price</p>
            <input
              type="number"
              name="price"
              id=""
              value={data.price}
              onChange={onChangeHandler}
              placeholder="$20"
            />
          </div>
        </div>
        <button type="submit" className="update-btn">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
