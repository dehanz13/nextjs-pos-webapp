import CustomerNavbar from "../Navbars/CustomerNavbar";

const CustomerLayout = ({ children }) => {
  return (
    <div className="antialiased bg-warmGray-400">
      <CustomerNavbar />
      <section className="relative z-50 flex justify-center">
        {children}
      </section>
    </div>
  );
};

export default CustomerLayout;
