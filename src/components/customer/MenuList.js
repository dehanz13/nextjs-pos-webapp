import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ChevronRight = ({ size = 10, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-${size} w-${size} stroke-current text-gray-700 p-1`}
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const MenuItem = ({ item, selectedItem }) => {
  const itemCategory = item.Category;
  const router = useRouter();
  // const testItem = JSON.parse(JSON.stringify(item));
  // console.log(item);
  return (
    <div className="container w-80 mx-auto">
      <Link
        // href={`/customer/menu-item-details`}
        // href={`/customer/menuItemDetails/${item.id}`}
        // as={`/${itemCategory}/${item.Name}`}
        // passHref
        // href={{
        //   pathname: "/customer/menuItemDetails/[menuItemId]",
        //   query: { menuItemId: item.id },
        // }}
        // as={"/foo"}
        // href={`/customer/menuItemDetails/menuItemPage/${encodeURIComponent(
        //   item.id
        // )}`}
        // as={`/menuItemDetails/${selectedItem.id}`}
        href={`/customer/menuItems/${item.Name}?id=${item.id}`}
        // passHref
        // href={`/customer/menuItemDetails/${item.id}`}
        // as={`/customer/menuItemDetails/${item.id}`}
        scroll={false}
      >
        <a>
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 duration-500">
            <Image
              src={item.Image}
              alt={item.Name}
              width={2000}
              height={1390}
              layout="responsive"
              quality={100}
              placeholder="empty"
              objectFit="cover"
              priority
            />
            <div className="text-center relative">
              <span className="absolute w-full transform translate-x-28 -translate-y-14 bg-yellow-400 rounded-xl hover:bg-yellow-300 transition-all duration-200 cursor-pointer">
                <ChevronRight />
              </span>
            </div>
          </div>
          <div className=" py-4">
            <div className="flex justify-between px-2">
              <div className="flex flex-col items-start">
                <h1 className="mb-1 text-2xl font-bold text-gray-700 hover:text-gray-900 cursor-pointer">
                  {item.Name}
                </h1>
                <span className="text-sm text-gray-700 hover:text-gray-900">
                  {item.id}
                </span>
              </div>
              <div className="flex flex-col justify-start">
                <p className="text-xl font-medium">${item.Price}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

const MenuList = ({ menuItems }) => {
  return (
    <>
      <div className="">
        <div className="grid justify-items-center mb-10">
          <p className="uppercase font-semibold leading-0 border-b-4 border-yellow-400 pb-2">
            Entrees
          </p>
        </div>
        <ul className="">
          {menuItems
            .sort((a, b) => a.createdAt - b.createdAt)
            .map((data, idx) => {
              const testItem = JSON.parse(JSON.stringify(data));
              return (
                <li key={idx}>
                  <MenuItem item={data} selectedItem={testItem} />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default MenuList;
