import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dataProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      return json;
    };

    dataProduct()
      .then((data) => {
        console.log(data);
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-pattern bg-repeat">
        {isLoading ? (
          <div className="grid grid-cols-4 gap-10 mx-20 py-20">
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ].map((n) => {
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
        ) : products.length === 0 ? (
          <div className="pb-10 flex gap-2 animate-pulse">
            <p className="px-3 py-0.5 bg-red-500 text-neutral-100">
              Tidak ada data!
            </p>
            <p className="px-3 py-0.5 bg-red-500 text-neutral-100">
              Server Error!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-4 gap-10 mx-20 py-20">
            {products.map((items, index) => {
              return (
                <div
                  key={index}
                  className="bg-white w-full rounded-lg mb-10 shadow-lg"
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

                    <div className="pt-5">
                      <Link to={`${items.id}`}>
                        <button className="bg-blue-200 px-3 py-1.5 italic">
                          Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Product;
