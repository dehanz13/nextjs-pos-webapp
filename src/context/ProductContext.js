import { createContext, useState } from "react";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [updateData, setUpdateData] = useState({});
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [imageTitle, setImageTitle] = useState("");

  return (
    <ProductContext.Provider
      value={{
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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
