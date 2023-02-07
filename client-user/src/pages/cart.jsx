import Head from "next/head";
import { useMyCartQuery } from "@/features/apiSlice";
export default function Cart() {
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/log.png" />
      </Head>
      <div className="grid grid-cols-12">
        <div className="col-start-3 col-end-11 outline outline-1 my-[50px]">
          <div className="text-center text-[40px] underline decoration-[#00ADB5]">
            My Cart
          </div>
        </div>
      </div>
    </>
  );
}