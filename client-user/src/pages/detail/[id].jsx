import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { useGetProductByIdQuery } from "@/features/apiSlice";
export default function Detail() {
  let router = useRouter();
  const { data, isLoading } = useGetProductByIdQuery(router.query.id);
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  return (
    <>
      {isLoading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="text-[100px]">Loading ...</div>
        </div>
      ) : (
        <div className="w-screen h-screen">
          <div className="grid grid-cols-12 grid-rows-6">
            <div className="col-span-12 row-span-1">
              <Navbar />
            </div>
            <div className="col-start-2 col-end-12 outline outline-1 row-start-2 row-end-6 grid grid-cols-12">
              <div className="bg-containt col-start-2 col-end-7">
                <Image src={data.imageUrl} width={500} height={500} />
              </div>
              <div className="col-start-7 col-end-12 p-[30px] flex flex-col gap-y-[10px]">
                <div className="px-[100px] text-center flex justify-center">
                  <div className="text-black w-[100px] rounded-[2px] hover:text-white hover:bg-[#00ADB5] outline outline-1 outline-[#00ADB5]">
                    {data.brand}
                  </div>
                </div>
                <div className="text-[25px] font-semibold text-center">
                  {data.name}
                </div>
                <div className="text-[23px] font-semibold flex flex-row justify-end text-right">
                  <div>Harga:</div>
                  <div className="text-[#00ADB5]">{rupiah(data.price)}</div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <button className="outline outline-1 rounded ">
                      <div className="px-[20px] py-[5px]">
                        Masukkan keranjang
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="text-white rounded bg-[#00ADB5] hover:brightness-[0.90]">
                      <div className="px-[20px] py-[5px]">Beli sekarang</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
