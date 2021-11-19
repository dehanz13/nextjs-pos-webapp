import React from "react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-5xl text-blueGray-600">
                Point of sale solutions to match your business needs.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Smart POS understands that every business is different and
                therefore it provides a variety of POS options that match your
                business needs. From running a restaurant, selling goods or any
                business that just needs a flexible, easy-to-use and adaptable
                POS system, we provide the point-of-sale software that will help
                you and your business reach all the goals.
              </p>
              <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started free
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  About us
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        /> */}
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1115&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Smart Point of Sale
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Flexible and easy to use for your business, this POS system
                    can be set up to do exactly what you business needs.
                  </p>
                  <p className="text-md font-bold mt-8 text-white">
                    <a href="/" className="">
                      Learn about our POS software{" "}
                      <i className="fas fa-chevron-circle-right" />
                    </a>
                  </p>
                  <p className="text-md font-bold mt-2 text-white">
                    <a href="/" className="">
                      Get it now <i className="fas fa-chevron-circle-right" />
                    </a>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1600147131759-880e94a6185f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Smart for Restaurants
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Smart POS was built to help keeping the cost low and to
                    speed up the process of your restaurant operation, smoothly
                    and efficiently.
                  </p>
                  <p className="text-md font-bold mt-8 text-white">
                    <a href="/" className="">
                      Learn about our restaurant POS system{" "}
                      <i className="fas fa-chevron-circle-right" />
                    </a>
                  </p>
                  <p className="text-md font-bold mt-2 text-white">
                    <a href="/" className="">
                      Get it now <i className="fas fa-chevron-circle-right" />
                    </a>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1499083097717-a156f85f0516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Smart Appointments
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Smart POS system allows your customers to schedule
                    appointments with a beautifully sleek design that will
                    enhance the customer booking experience.
                  </p>
                  <p className="text-md font-bold mt-8 text-white">
                    <a href="/" className="">
                      Learn about our appointment scheduling software{" "}
                      <i className="fas fa-chevron-circle-right" />
                    </a>
                  </p>
                  <p className="text-md font-bold mt-2 text-white">
                    <a href="/" className="">
                      Get it now <i className="fas fa-chevron-circle-right" />
                    </a>
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="justify-center text-center flex flex-wrap mt-24 mb-12">
            <div className="w-full md:w-6/12 px-12 md:px-4">
              <h2 className="font-semibold text-4xl">
                In every point of sale.
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                Our POS systems provide the fundamental features necessary for
                any business type.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="md:pt-12 pt-6 w-full md:w-3/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-24 h-24 mb-5 shadow-lg rounded-full bg-blueGray-400">
                    <i className="fas fa-mobile-alt text-5xl"></i>
                  </div>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Take orders online or over the phone, and manage pickup and
                    delivery directly in the POS system.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-24 h-24 mb-5 shadow-lg rounded-full bg-blueGray-400">
                    <i className="fas fa-laptop text-5xl"></i>
                  </div>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Connect with Square hardware for easy, built-in payment
                    processing.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:pt-12 w-full md:w-3/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-24 h-24 mb-5 shadow-lg rounded-full bg-blueGray-400">
                    <i className="fas fa-desktop text-5xl"></i>
                  </div>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Integrate with an entire suite of Square tools designed to
                    help small businesses and big companies alike.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-24 h-24 mb-5 shadow-lg rounded-full bg-blueGray-400">
                    <i className="fas fa-qrcode text-5xl"></i>
                  </div>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Easily accept all kinds of payments, including contactless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 relative block bg-blueGray-800">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-800 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                Handle customer payments easy.
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                Our POS systems provide the fundamental features necessary for
                any business type.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-24 h-24 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-receipt text-5xl"></i>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
                Smart POS Invoices
              </h6>
              <p className="mt-2 mb-4 text-blueGray-400">
                Send unlimited estimates and invoices with no monthly fees, and
                let clients pay online.
              </p>
              <p className="text-md font-bold mt-8 text-white">
                <a href="/" className="">
                  Learn about our POS invoices{" "}
                  <i className="fas fa-chevron-circle-right" />
                </a>
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-24 h-24 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-terminal text-5xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Virtual Terminal
              </h5>
              <p className="mt-2 mb-4 text-blueGray-400">
                Key in card numbers manually to ring up customers whether
                they’re present or not.
              </p>
              <p className="text-md font-bold mt-8 text-white">
                <a href="/" className="">
                  Learn about our POS Virtual Terminal{" "}
                  <i className="fas fa-chevron-circle-right" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              \
              <h3 className="font-semibold text-3xl">
                Start selling with Smart today.
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Create your free account in minutes today and start selling like
                other smart businessnes using Smart POS.
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-700 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started free
                </a>
              </div>
              <p className="text-md font-bold mt-8 text-blueGray-700">
                <a href="/" className="">
                  For help getting started, connect with us{" "}
                  <i className="fas fa-chevron-circle-right"></i>
                </a>
              </p>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
