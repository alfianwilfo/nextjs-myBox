import Head from "next/head";
import Navbar from "@/components/navbar";
export default function About() {
  return (
    <>
      <Head>
        <title>Create Next Apps</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="underline text-[120px]">from about</div>
      </main>
    </>
  );
}
