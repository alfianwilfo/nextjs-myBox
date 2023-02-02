import logos from "@/public/logos.png";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <div className="h-[110px] outline outline-1 outline-[#00ADB5] grid content-center ">
        <div className="flex justify-between px-[20px]">
          <div>
            <Image src={logos} className="w-[90px]" />
          </div>
          <div className="grid content-center">
            <div>
              <button className="transition-color duration-700 text-[#222831] outline outline-1 outline-[#222831] hover:bg-[#222831] hover:text-[white] rounded px-[10px] py-[5px]">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
