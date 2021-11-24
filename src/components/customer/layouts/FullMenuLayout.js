import { getLayout as getSiteLayout } from "./CustomerSiteLayout";

const FullMenuLayout = ({ children }) => {
  return (
    <>
      {children}
      <div className="bottom-0 left-0 z-50 fixed w-screen px-10 py-4 bg-white">
        <div className="grid grid-cols-4 gap-3 ">
          <div className="col-span-2">
            <span className="rounded-xl px-2 py-2 bg-gray-700 flex items-center justify-center font-bold">
              <p className="text-md text-gray-100">Filter</p>
            </span>
          </div>
          <div className="col-span-2">
            <span className="rounded-xl px-2 py-2 bg-gray-700 flex items-center justify-center font-bold">
              <p className="text-md text-gray-100">Store Info</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export const getLayout = (page) =>
  getSiteLayout(<FullMenuLayout>{page}</FullMenuLayout>);

export default FullMenuLayout;
