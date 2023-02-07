import { useGetProductsQuery } from "@/features/apiSlice";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Card from "@/components/card";
import { useState } from "react";
import Pagination from "@/components/pagination";

export default function Home() {
  const [offset, setOffset] = useState(0);
  const { data, error, isLoading } = useGetProductsQuery(offset);
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/log.png" />
      </Head>
      <main>
        <Navbar />
        <h1 className="text-3xl my-[40px] text-center font-bold underline underline-offset-8 decoration-[#00ADB5]">
          Our Products
        </h1>
        <div className="grid grid-cols-12">
          <div className="flex flex-col gap-y-[10px] col-start-2 col-end-12">
            <div className="">
              <div className=" grid grid-cols-12 gap-[10px]">
                {data
                  ? data?.products.map((product, i) => {
                      return <Card product={product} key={product.id} i={i} />;
                    })
                  : null}
              </div>
            </div>
            <div className="flex justify-center">
              {data ? <Pagination count={data.totalPages} /> : null}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
