// import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Batikbg from "../assets/batik-img.png";
import Line from "../assets/line.svg";

import Homeimg from "../assets/home-img2.png";

import clothStyle from "../assets/cloth-style.png";
import clothSize from "../assets/fitting.png";
import payment from "../assets/payment.png";
import paperBag from "../assets/paper-bag.png";
import Contact from "../assets/contact.png";

import { useState, useEffect } from "react";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=4"
        // {
        //   method: "GET",
        //   mode: "no-cors",
        // }
      );
      const json = await response.json();
      console.log(json);
      return json;
    };

    setTimeout(() => {
      dataProducts()
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, 3000);
  }, []);

  return (
    <>
      <Navbar />

      <div className="h-52 md:h-72">
        <div className="bg-pattern bg-repeat md:h-72 h-52">
          <div className="md:mx-20 mx-6 md:pt-16 pt-12 text-xl md:text-2xl text-neutral-600">
            <p className="font-semibold">
              Batik is a culture <br /> that must <br /> be preserved.
            </p>
            <img
              src={Line}
              alt="no-image"
              className="w-28 md:w-36 -rotate-3 pl-6"
            />
          </div>
        </div>
      </div>

      <img src={Batikbg} width="100%" alt="no-img" />

      <section className="bg-neutral-100">
        <div className="bg-pattern bg-repeat h-20 md:h-40 w-[100%] rounded-lg"></div>

        <div className="md:px-20 md:py-36 px-6 py-12">
          <div className="grid md:grid-cols-2 gap-20 md:gap-0">
            <div className="">
              <div className="flex flex-col md:gap-3 gap-1.5">
                <h1 className="text-3xl md:text-5xl text-neutral-700 font-semibold">
                  One for all
                </h1>
                <h1 className="text-3xl md:text-5xl text-neutral-700 font-semibold">
                  solution, for
                </h1>
                <h1 className="text-3xl md:text-5xl text-neutral-700 font-semibold">
                  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#C6965F] relative inline-block">
                    <span className="relative text-white px-2">fashion</span>
                  </span>{" "}
                  batik
                </h1>
              </div>

              <div className="w-3/4 mt-8 text-neutral-500">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  voluptate quisquam ipsa fugiat ad ex laborum obcaecati animi
                  excepturi, provident sequi? Aliquam provident ipsa rerum!
                  Voluptatibus illum quas tempore repellat.
                </p>
              </div>

              <div className="mt-8">
                <button className="py-2 px-6 border-none bg-yellow-700 text-white text-sm font-semibold rounded-md hover:bg-yellow-800 hover:duration-700">
                  GET STARTED
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <img className="" src={Homeimg} alt="" />
            </div>
          </div>
        </div>

        <div className="bg-pattern bg-repeat h-20 md:h-40 w-[100%] rounded-lg"></div>
      </section>

      <section className="md:mx-20 md:my-28 mx-6 my-10">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl text-neutral-700">
            How <span className="font-bold">it works.</span>
          </h1>
        </div>
        <div className="grid md:grid-cols-4 gap-10">
          <div className="bg-neutral-100 w-full flex flex-col justify-center items-center rounded-lg shadow-md">
            <div className="mx-5 mt-14 mb-10 w-60 h-60">
              <img src={clothStyle} className="" alt="" />
            </div>

            <div className="bg-neutral-600 w-10 h-10 flex items-center justify-center rounded-full">
              <p className="text-white font-semibold">1</p>
            </div>

            <div className="mt-6 mb-14">
              <p className="font-semibold text-neutral-500 text-lg">
                Pick your style
              </p>
            </div>
          </div>

          <div className="bg-neutral-100 w-full flex flex-col justify-center items-center rounded-lg shadow-md">
            <div className="mx-5 mt-14 mb-10 w-60 h-60">
              <img src={clothSize} alt="" />
            </div>

            <div className="bg-neutral-600 w-10 h-10 flex items-center justify-center rounded-full">
              <p className="text-white font-semibold">2</p>
            </div>

            <div className="mt-6 mb-14">
              <p className="font-semibold text-neutral-500 text-lg">
                Choose your size for perfect fit
              </p>
            </div>
          </div>

          <div className="bg-neutral-100 w-full flex flex-col justify-center items-center rounded-lg shadow-md">
            <div className="mx-5 mt-14 mb-10 w-60 h-60 overflow-hidden">
              <img src={payment} alt="" />
            </div>

            <div className="bg-neutral-600 w-10 h-10 flex items-center justify-center rounded-full">
              <p className="text-white font-semibold">3</p>
            </div>

            <div className="mt-6 mb-14">
              <p className="font-semibold text-neutral-500 text-lg">
                Checkout and choose payment
              </p>
            </div>
          </div>

          <div className="bg-neutral-100 w-full flex flex-col justify-center items-center rounded-lg shadow-md">
            <div className="mx-5 mt-14 mb-10 w-60 h-60 overflow-hidden">
              <img src={paperBag} alt="" />
            </div>

            <div className="bg-neutral-600 w-10 h-10 flex items-center justify-center rounded-full">
              <p className="text-white font-semibold">4</p>
            </div>

            <div className="mt-6 mb-14">
              <p className="font-semibold text-neutral-500 text-lg">
                Product will be shipped!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 md:px-20 px-6">
        <div className="md:pt-28 pt-14 pb-10">
          <h1 className="text-3xl md:text-4xl text-neutral-700">
            Recommendation <span className="font-bold">products.</span>
          </h1>
        </div>
        {loading ? (
          <div className="grid md:grid-cols-4 md:gap-10 gap-2 md:pb-28 pb-14">
            {[1, 2, 3, 4].map((n) => {
              return (
                <div
                  key={n}
                  className="bg-neutral-200 w-full rounded-lg mb-10 shadow-sm animate-pulse"
                >
                  <div className="overflow-hidden flex justify-center my-8">
                    <svg
                      className="w-60 h-72 text-neutral-400 bg-neutral-300 p-10 rounded-lg"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>

                  <div className="content px-7 mb-8">
                    <div className="">
                      <div className="h-2 w-20 bg-neutral-300 rounded-full mb-2.5"></div>
                      <div className="h-4 bg-neutral-300 rounded-full mb-2.5"></div>
                      <div className="h-4 bg-neutral-300 rounded-full mb-2.5"></div>
                      <div className="h-2 w-24 bg-neutral-300 rounded-full mb-2.5"></div>
                      <div className="h-2 w-20 bg-neutral-300 rounded-full mb-2.5"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : data.length === 0 ? (
          <div className="pb-10 flex gap-2 animate-pulse">
            <p className="px-3 py-0.5 bg-red-500 text-neutral-100">
              Tidak ada data!
            </p>
            <p className="px-3 py-0.5 bg-red-500 text-neutral-100">
              Server Error!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-4 md:gap-10 gap-2 md:pb-28 pb-14">
            {data.map((items, index) => {
              return (
                <div
                  key={index}
                  className="bg-white w-full rounded-lg mb-10 shadow-sm"
                >
                  <div className="overflow-hidden flex justify-center my-8">
                    <img src={items.image} className="w-60 h-72" alt="" />
                  </div>

                  <div className="content px-7 mb-8">
                    <div className="">
                      <p className="text-neutral-400 font-semibold text-sm">
                        {items.category}
                      </p>
                    </div>

                    <div className="mb-1">
                      <h2 className="text-lg font-bold text-neutral-700 line-clamp-1">
                        {items.title}
                      </h2>
                    </div>

                    <div className="flex gap-2 mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-teal-500"
                      >
                        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <p>{items.price}</p>
                    </div>

                    <div className="flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <p className="text-yellow-500 font-semibold">
                        {items.rating.rate}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {/* <div className="grid grid-cols-4 gap-10 pb-28"> */}

        {/* {data.map((items, index) => {
                        return(
                            <div key={index} className="bg-white w-full rounded-lg mb-10 shadow-sm">
                                <div className="overflow-hidden flex justify-center my-8">
                                    <img src={items.image} className='w-60 h-72' alt="" />
                                </div>

                                <div className="content px-7 mb-8">
                                    <div className=''>
                                        <p className='text-neutral-400 font-semibold text-sm'>{items.category}</p>
                                    </div>

                                    <div className="mb-1">
                                        <h2 className='text-lg font-bold text-neutral-700'>{items.title}</h2>
                                    </div>

                                    <div className="flex gap-2 mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-teal-500">
                                            <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
                                        </svg>

                                        <p>{items.price}</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                        </svg>

                                        <p className='text-yellow-500 font-semibold'>{items.rating.rate}</p>
                                    </div>
                                
                                </div>

                            </div>
                        )
                    })} */}

        {/* </div> */}
      </section>

      <section className="bg-pattern min-h-screen bg-repeat relative overflow-hidden">
        <div className="absolute right-0 bottom-0 bg-white h-3/4 w-3/4">
          <div className="mx-20 my-20 border grid grid-cols-2">
            <div className="border flex items-center justify-center">
              <img src={Contact} alt="" />
            </div>
            <div className="p-20">
              <div className="top-content flex flex-col justify-center items-center gap-3 mb-8">
                <h1 className="text-4xl font-bold text-neutral-600">
                  Welcome Back
                </h1>
                <p className="text-center text-sm text-neutral-400 font-semibold">
                  Welcome back to Batik Kencana! Start by entering your details.
                </p>
              </div>

              <form action="">
                <div className="flex flex-col mb-2 gap-1">
                  <label
                    htmlFor="username"
                    className="text-neutral-700 font-medium"
                  >
                    Username
                  </label>
                  <input
                    className="border border-neutral-300 rounded-md py-0.5 outline-neutral-400 px-2 text-neutral-800"
                    type="text"
                    name="username"
                    id="username"
                    // value={datas.username}
                    // onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col mb-2 gap-1">
                  <label
                    htmlFor="password"
                    className="text-neutral-700 font-medium"
                  >
                    Password
                  </label>
                  <input
                    className="border border-neutral-300 rounded-md py-0.5 outline-neutral-400 px-2 text-neutral-800"
                    type="password"
                    name="password"
                    id="password"
                    // value={datas.password}
                    // onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex gap-2 mb-8">
                  <input type="checkbox" name="" id="" />
                  <p className="text-sm">Remember me</p>
                </div>

                <input
                  type="submit"
                  className="bg-yellow-700 text-white border-none cursor-pointer w-full py-1.5 rounded-md hover:bg-yellow-800 hover:ring-2 hover:ring-yellow-700 hover:duration-700"
                  value="Sign In"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="absolute right-3/4 bottom-3/4 bg-yellow-400 w-32 h-48 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
