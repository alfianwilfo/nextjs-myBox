import logos from "@/public/logos.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
  let router = useRouter();
  let toLogout = () => {
    localStorage.clear();
    router.push("/");
    toast.success("Success logout", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <div className="h-[110px] outline outline-1 outline-[#00ADB5] grid content-center ">
        <div className="flex justify-between px-[20px]">
          <div>
            <Image src={logos} className="w-[90px]" />
          </div>
          <div className="grid content-center">
            <div className="flex flex-row gap-x-[10px]">
              <Link
                className="transition-color duration-700 text-[#222831] text-center py-[5px] outline outline-1 outline-[#222831] hover:bg-[#222831] hover:text-[white] rounded w-[100px]"
                href="/home"
              >
                Dashboard
              </Link>
              <Link
                className="transition-color duration-700 text-[#222831] text-center py-[5px] outline outline-1 outline-[#222831] hover:bg-[#222831] hover:text-[white] rounded w-[100px]"
                href="/user"
              >
                Users
              </Link>
            </div>
          </div>
          <div className="grid content-center">
            <div>
              <button
                onClick={toLogout}
                className="transition-color duration-700 text-[#222831] outline outline-1 outline-[#222831] hover:bg-[#222831] hover:text-[white] rounded px-[10px] py-[5px]"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
