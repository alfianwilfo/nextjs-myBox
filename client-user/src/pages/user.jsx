import Image from "next/image";
import logo from "@/public/log.png";
export default function User() {
  return (
    <>
      <div className="h-screen w-screen grid grid-cols-12 grid-rows-6">
        <div className="outline outline-1 col-start-3 col-end-11 row-start-2 row-end-6 grid grid-cols-12 gap-[10px]">
          <div className="col-start-2 col-end-12 flex flex-row py-[10px]">
            <div className="grid content-center w-1/2">
              <div>
                <Image src={logo} className="w-[300px]" />
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-y-[10px] divide-y-[2px] divide-[#222831]">
              <div className="flex flex-col gap-y-[10px] ">
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
                        <button className="w-full transition-colors duration-700 ease-in-out text-white rounded bg-[#00ADB5] hover:bg-[#029ca3] py-[4px]">
                          Save
                        </button>
                      </div>
                      <div className="col-start-10 col-span-5">
                        <button className="py-[4px] w-full transition-colors duration-700 ease-in-out outline outline-1 outline-[#222831] hover:bg-[#222831] hover:text-white rounded">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div>
                <div className="font-bold">Change password</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
