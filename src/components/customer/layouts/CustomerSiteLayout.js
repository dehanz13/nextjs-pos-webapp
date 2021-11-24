import CustomerNavbar from "../../Navbars/CustomerNavbar";

const CustomerLayout = ({ children }) => {
  return (
    <div className="antialiased bg-yellow-400">
      <CustomerNavbar />
      <section className="grid grid-cols-1 h-screen ">
        <div className="flex flex-col items-center px-5 py-10 bg-gray-100 h-full shadow-lg rounded-t-3xl sm:rounded-3xl sm:p-20">
          <div className="grid grid-cols-1 justify-items-stretch w-full">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
};

export const getLayout = (page) => <CustomerLayout>{page}</CustomerLayout>;

export default CustomerLayout;
