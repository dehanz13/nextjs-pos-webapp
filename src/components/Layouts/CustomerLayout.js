import CustomerNavbar from "../Navbars/CustomerNavbar";

const CustomerLayout = ({ children }) => {
  return (
    <div className="antialiased min-h-screen bg-yellow-400 flex flex-col justify-center py-6 sm:py-12">
      <CustomerNavbar />
      <section className="relative z-10 flex flex-col justify-center h-5/6">
        {children}
      </section>
    </div>
  );
};

export default CustomerLayout;
