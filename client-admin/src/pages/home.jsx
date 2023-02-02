import Head from "next/head";
import Navbar from "@/components/navbar";
import { useGetProductsQuery } from "@/features/apiProducts";
import Trow from "@/components/trow";
import { useRouter } from "next/router";
export default function Home() {
  const { data, error, isLoading } = useGetProductsQuery();
  let router = useRouter();

  let toCreate = () => {
    router.push("/product/create");
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/log.png" />
      </Head>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12 flex flex-col gap-y-[40px]">
          <div className="text-[50px] font-semibold text-center underline underline-offset-8 decoration-[#00ADB5]">
            Dashboard
          </div>
          <div className="flex flex-row-reverse">
            <button
              onClick={toCreate}
              className="transition duration-700 outline outline-1 py-[5px] px-[10px] rounded hover:bg-[#00ADB5] hover:text-white"
            >
              Create product
            </button>
          </div>
          <div>
            <table className="w-full table-fixed">
              <thead className="h-[30px]">
                <tr className="rounded-t border-b-2 border-[#393E46] text-[18px]">
                  <th>Name</th>
                  <th>Image</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data
                  ? data.map((product, i) => {
                      return <Trow product={product} key={product.id} i={i} />;
                    })
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}