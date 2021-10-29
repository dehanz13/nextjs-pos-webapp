import React, { useState } from "react";
import { withRouter } from "next/router";
import AdminLayout from "../Layouts/AdminLayout";
import ListUI from "../ListUI";
import TabsUI from "../TabsUI";
import { useFirestore } from "../../hooks/useFirestore";
import { setMenuItem, deleteMenuItem } from "../../Utils/FirebaseUtils";

const Products = () => {
  const { docs } = useFirestore("menuItems");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [updateData, setUpdateData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const menuDetails = {
      Entree: name,
      Description: description,
      Price: price,
      createdAt:
        Object.keys(updateData).length === 0
          ? new Date().getTime()
          : updateData.createdAt,
    };

    setMenuItem(
      menuDetails,
      Object.keys(updateData).length === 0 ? "newID" : updateData.id
    );

    clearField();
    setUpdateData({});
  };

  const handleUpdate = (data) => {
    setUpdateData(data);
    setName(data.Entree);
    setDescription(data.Description);
    setPrice(data.Price);
  };

  const clearField = () => {
    setName("");
    setDescription("");
    setPrice(0);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl text-gray-700 mb-4">Menu</h1>
      <div className="flex">
        <form className="w-full max-w-lg">
          <p>Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
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

          <button type="submit" onClick={handleSubmit}>
            {Object.keys(updateData).length === 0 ? "Submit" : "Update"}
          </button>
        </form>
      </div>
      {/* <TabsUI /> */}

      <section className="flex items-center w-full">
        <table className="shadow-lg bg-white flex-grow rounded-lg">
          <thead>
            <tr>
              <th className="bg-blue-100 border text-center px-8 py-4">#</th>
              <th className="bg-blue-100 border text-center px-8 py-4">
                Menu Item
              </th>
              <th className="bg-blue-100 border text-center px-8 py-4">
                Description
              </th>
              <th className="bg-blue-100 border text-center px-8 py-4">
                Price
              </th>
              <th className="bg-blue-100 border text-center px-8 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {docs
              .sort((a, b) => a.createdAt - b.createdAt)
              .map((data, idx) => {
                return (
                  <tr key={idx}>
                    <td className="border px-8 py-4 text-center capitalize">
                      {idx + 1}
                    </td>
                    <td className="border px-8 py-4 text-center capitalize">
                      {data.Entree}
                    </td>
                    <td className="border px-8 py-4 text-center capitalize">
                      {data.Description}
                    </td>
                    <td className="border px-8 py-4 text-center">
                      $ {data.Price}
                    </td>
                    <td className="border px-2 py-4 text-center">
                      {/* <editButtons /> */}
                      <ul className="grid grid-cols-4 gap-2 place-items-center mx-4">
                        <li className="col-span-2">
                          <button onClick={() => handleUpdate(data)}>
                            <span className="h-8 w-8">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current text-gray-600"
                              >
                                <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                                <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                              </svg>
                            </span>
                          </button>
                        </li>
                        <li className="col-span-2">
                          <button onClick={() => deleteMenuItem(data.id)}>
                            <span className="h-8 w-8">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current text-red-500"
                              >
                                <path d="M3 3h18v18H3zM15 9l-6 6m0-6l6 6" />
                              </svg>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Products;
// export default withRouter(Products);
