import React from "react";
import { setMenuItem, deleteMenuItem } from "../../Utils/FirebaseUtils";

const MenuList = ({ handleUpdate, menuItems, handleDeleteItem }) => {
  return (
    <section className="flex items-center w-full">
      <table className="shadow-lg bg-white flex-grow rounded-lg">
        <thead>
          <tr>
            <th className="bg-blue-100 border text-center px-8 py-4">#</th>
            <th className="bg-blue-100 border text-center px-8 py-4">
              Menu Item
            </th>
            <th className="bg-blue-100 border text-center px-8 py-4">
              Category
            </th>
            <th className="bg-blue-100 border text-center px-8 py-4">
              Description
            </th>
            <th className="bg-blue-100 border text-center px-8 py-4">Image</th>
            <th className="bg-blue-100 border text-center px-8 py-4">Price</th>
            <th className="bg-blue-100 border text-center px-8 py-4">
              Quantity
            </th>
            <th className="bg-blue-100 border text-center px-8 py-4"></th>
          </tr>
        </thead>
        <tbody>
          {menuItems
            .sort((a, b) => a.createdAt - b.createdAt)
            .map((data, idx) => {
              return (
                <tr key={idx}>
                  <td className="border px-8 py-4 text-center capitalize">
                    {idx + 1}
                  </td>
                  <td className="border px-8 py-4 text-center capitalize">
                    {data.Name}
                  </td>
                  <td className="border px-8 py-4 text-center capitalize">
                    {data.Category}
                  </td>
                  <td className="border px-8 py-4 text-center capitalize">
                    {data.Description}
                  </td>
                  <td className="border px-8 py-4 text-center capitalize">
                    <div className="flex justify-center">
                      <img
                        className="object-contain h-48 w-48"
                        src={data.Image || "http://via.placeholder.com/75"}
                        alt={data.Image}
                      />
                    </div>
                  </td>
                  <td className="border px-8 py-4 text-center">
                    $ {data.Price}
                  </td>
                  <td className="border px-8 py-4 text-center capitalize">
                    {data.Quantity}
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
                        {/* <button onClick={() => deleteMenuItem(data.id)}> */}
                        <button onClick={() => handleDeleteItem(data)}>
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
  );
};

export default MenuList;
