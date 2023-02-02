export default function Create() {
  return (
    <>
      <div className="h-screen grid grid-cols-12 grid-rows-6">
        <div className="col-start-5 col-end-9 row-start-2 row-span-4 outline outline-1 grid grid-cols-12">
          <div className="col-start-2 col-end-12 flex flex-col gap-y-[50px]">
            <div className="text-center text-[30px] font-semibold">
              New product
            </div>
            <div>
              <form className="flex flex-col gap-y-[10px]">
                <input
                  className="outline outline-1 outline-[#393E46]/10 focus:outline-[#393E46] p-[10px] w-full rounded-[1px]"
                  type="text"
                  name=""
                  id=""
                  placeholder="Product name"
                />
                <input
                  className="outline outline-1 outline-[#393E46]/10 focus:outline-[#393E46] p-[10px] w-full rounded-[1px]"
                  type="text"
                  name=""
                  id=""
                  placeholder="Product price"
                />{" "}
                <input
                  className="outline outline-1 outline-[#393E46]/10 focus:outline-[#393E46] p-[10px] w-full rounded-[1px]"
                  type="text"
                  name=""
                  id=""
                  placeholder="Name brand"
                />{" "}
                <input
                  className="outline outline-1 outline-[#393E46]/10 focus:outline-[#393E46] p-[10px] w-full rounded-[1px]"
                  type="text"
                  name=""
                  id=""
                  placeholder="Url image"
                />
                <button className="outline outline-1 outline-[#393E46]/10 focus:outline-[#393E46] p-[10px] w-full rounded-[1px] bg-[#00ADB5]">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
