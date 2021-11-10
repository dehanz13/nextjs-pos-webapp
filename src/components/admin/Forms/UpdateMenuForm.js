import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { ProductContext } from "../../../context/ProductContext";

const UpdateMenuForm = ({
  onHandleUpdate,
  onHandleSubmit,
  onHandleFileChange,
  progress,
}) => {
  const {
    name,
    setName,
    description,
    setDescription,
    category,
    setCategory,
    price,
    setPrice,
    quantity,
    setQuantity,
    updateData,
    setUpdateData,
    image,
    setImage,
    imageUrl,
    setImageUrl,
    imageTitle,
    setImageTitle,
  } = useContext(ProductContext);

  const [preview, setPreview] = useState();

  const handleChange = (e) => {
    if (e.target.files[0]) {
      const i = e.target.files[0];
      setImage(i);
      setPreview(URL.createObjectURL(i));
    }
  };
  const str = JSON.stringify(image);
  return (
    <>
      <div className="flex">
        <progress value={progress} max="100" />
        <form className="w-full max-w-lg">
          <p>Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded border-black"
            type="text"
            required
          />
          <p>Category</p>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded border-black"
            type="text"
            required
          />
          <p>Desc</p>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded border-black"
            type="text"
            required
          />

          <p>Price</p>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded border-black"
            type="number"
            required
          />
          <p>Quantity</p>
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border rounded border-black"
            type="text"
            required
          />
          <p>Image</p>
          <input type="file" onChange={handleChange} />
          <div className="flex justify-center">
            <img
              className="object-contain h-48 w-48"
              src={preview || image || "http://via.placeholder.com/75"}
              alt={imageUrl}
            />
          </div>
          <button type="submit" onClick={onHandleSubmit}>
            {Object.keys(updateData).length === 0 ? "Submit" : "Update"}
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateMenuForm;
