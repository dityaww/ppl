import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [detail, setDetail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const loadDetail = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const json = await response.json();
        console.log(json);
        setDetail(json);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };

    loadDetail();
  }, [id]);

  const handleBuy = () => {
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId: 5,
        date: Date.now(),
        products: [{ productId: id, quantity: 1 }],
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <>
      <div>
        {isLoading ? (
          <p>tidak ada data disini!</p>
        ) : (
          <div className="w-full rounded-lg mb-10">
            <div className="overflow-hidden px-7 my-8">
              <img src={detail?.image} className="w-60 h-72" alt="" />
            </div>

            <div className="content px-7 mb-8">
              {/* Kategori produk */}
              <div className="">
                <p className="text-neutral-400 font-semibold text-sm">
                  {detail?.category}
                </p>
              </div>

              {/* Nama Produk */}
              <div className="mb-1">
                <h2 className="text-2xl font-bold text-neutral-700 line-clamp-1">
                  {detail?.title}
                </h2>
              </div>

              {/* Deskripsi */}
              <div className="mb-1">
                <p className="text-lg text-neutral-400">
                  {detail?.description}
                </p>
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

                <p className="text-lg">{detail?.price}</p>
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

                <p className="text-yellow-500 text-lg font-semibold">
                  {detail?.rating.rate}
                </p>
              </div>

              <button onClick={handleBuy}>Buy</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
