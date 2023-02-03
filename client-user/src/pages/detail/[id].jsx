import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { useGetProductByIdQuery } from "@/features/apiSlice";
import Loading from "@/components/loading";
import Head from "next/head";
import { useAddCartMutation } from "@/features/apiSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";

export default function Detail() {
  let router = useRouter();
  let [addCart] = useAddCartMutation();
  const { data, isLoading } = useGetProductByIdQuery(router.query.id);
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  let checkout = () => {
    Router.push({
      pathname: "/buy-out",
      query: data,
    });
  };
  let addToCart = () => {
    addCart({ id: router.query.id }).then((res) => {
      console.log(res);
      if (res.data) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      if (res.error) {
        toast.error(res.error.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    });
  };
  return (
    <>
      <Head>
        <title>Detail Product</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/log.png" />
      </Head>
      {isLoading ? (
        <div className="w-screen h-screen flex justify-center">
          <div className="grid content-center">
            <div>
              <Loading />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen grid grid-cols-12 grid-rows-6">
          <div className="col-span-12 row-span-1">
            <Navbar />
          </div>
          <div className="col-start-2 col-end-12 outline outline-1 row-start-2 row-end-6 grid grid-cols-12">
            <div className="bg-containt col-start-2 col-end-7 bg-auto">
              <Image src={data.imageUrl} width={500} height={500} />
            </div>
            <div className="col-start-7 col-end-12 p-[30px] flex flex-col gap-y-[50px]">
              <div>
                <div className="text-center flex flex-row-reverse">
                  {data.info === "Stok Habis" ? (
                    <div className="transition-colors duration-700 ease-in-out text-[#222831] font-bold w-[100px] rounded-[20px] bg-[#EEEEEE]">
                      <div className="p-[1px]">{data.info}</div>
                    </div>
                  ) : (
                    <div className="transition-colors duration-700 ease-in-out text-white font-bold px-[10px] py-[5px] rounded-[20px] bg-[#00ADB5]">
                      <div className="p-[1px]">{data.info}</div>
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-[25px] font-semibold text-right">
                    {data.name} - {data.brand}
                  </div>
                  <div className="text-[23px] font-semibold flex flex-row gap-x-[4px] justify-end text-right">
                    <div>Price: </div>
                    <div className="text-[#00ADB5]">{rupiah(data.price)}</div>
                  </div>
                </div>
              </div>
              {data.info === "Stok Habis" ? null : (
                <div className="flex justify-between">
                  <div>
                    <button
                      onClick={addToCart}
                      className="transition-colors duration-700 ease-in-out outline outline-1 outline-[#222831] hover:bg-[#222831] hover:text-white rounded w-[190px]"
                    >
                      <div className="py-[5px]">Add to cart</div>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={checkout}
                      className="transition-colors duration-700 ease-in-out text-white rounded bg-[#00ADB5] hover:bg-[#029ca3] w-[190px]"
                    >
                      <div className="py-[5px]">Buy now</div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
