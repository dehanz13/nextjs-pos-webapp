import CustomerNavbar from "../Navbars/CustomerNavbar";

const CustomerLayout = ({ children }) => {
  return (
    <div className="antialiased">
      <CustomerNavbar />
      <section className="relative z-50 flex justify-center">
        {children}
      </section>
    </div>
  );
};

export default CustomerLayout;
