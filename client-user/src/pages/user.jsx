import Image from "next/image";
import logo from "@/public/log.png";
export default function User() {
  return (
    <>
      <div className="h-screen w-screen grid grid-cols-12 grid-rows-6">
        <div className="outline outline-1 col-start-3 col-end-11 row-start-2 row-end-6 grid grid-cols-12 gap-[10px]">
          <div className="col-start-2 col-end-7 grid content-center">
            <div>
              <Image src={logo} className="w-[900px]" />
            </div>
          </div>
          <div className="col-start-7 col-end-12">
            <div className="font-bold">Edit detail user</div>
            <div>
              <form className=" flex flex-col gap-y-[10px]">
                <div>
                  <input
                    className="outline outline-1 outline-[#393E46]/10 focus:outline-[#393E46] p-[10px] w-full rounded-[1px]"
                    type="text"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <textarea
                    className="outline outline-1 outline-[#393E46]/10 focus:outline-[#393E46] p-[10px] w-full rounded-[1px]"
                    name=""
                    id=""
                    cols="10"
                    rows="3"
                    placeholder="Your address"
                  ></textarea>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-start-1 col-end-9">
                    <button className="w-full outline outline-1 py-[4px] rounded">
                      Save
                    </button>
                  </div>
                  <div className="col-start-10 col-span-5">
                    <button className="w-full outline outline-1 py-[4px] rounded">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
