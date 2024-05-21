import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";
import { addFood } from "../../Api/api";
const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "1",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("Name", data.name);
    formData.append("Description", data.description);
    formData.append("Price", Number(data.price));
    formData.append("CategoryId", data.categoryId);
    formData.append("Image", image);

    try {
      const response = await addFood(formData);
      if (response.status === 200) {
        setData({
          name: "",
          description: "",
          price: "",
          categoryId: "1",
        });
        setImage(null);
        toast.success("Add success");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while adding food.");
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            value={data.image}
            id="image"
            hidden
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Food name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            id=""
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Food description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            id=""
            placeholder="Write context here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Food category</p>
            <select onChange={onChangeHandler} name="categoryId" id="">
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
          <div className="add-price flex-col">
            <p>Food Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$20"
              id=""
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
