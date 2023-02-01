import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import { useGetProductByIdQuery } from "@/features/apiSlice";
export default function Detail() {
  let router = useRouter();
  const { data, isLoading } = useGetProductByIdQuery(router.query.id);
  return (
    <>
      {isLoading ? (
        <div className="h-screen w-screen flex justify-center items-center">
          <div className="text-[100px]">Loading ...</div>
        </div>
      ) : (
        <div className="w-screen h-screen">
          <Navbar />
          <pre>{data.name}</pre>
        </div>
      )}
    </>
  );
}
