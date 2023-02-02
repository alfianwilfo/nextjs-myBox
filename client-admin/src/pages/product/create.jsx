import { useState } from "react";
import { useCreateProductMutation } from "@/features/apiProducts";
export default function Create() {
  const [createProduct] = useCreateProductMutation();
  const [input, setInput] = useState({
    name: "",
    brand: "",
    price: "",
    imageUrl: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInput({
      ...input,
      [name]: value,
    });
  };
  const submitProduct = (e) => {
    e.preventDefault();
    createProduct(input).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <div className="h-screen grid grid-cols-12 grid-rows-6">
        <div className="col-start-5 col-end-9 row-start-2 row-span-4 outline outline-1 grid grid-cols-12">
          <div className="col-start-2 col-end-12 flex flex-col gap-y-[50px]">
            <div className="text-center text-[30px] font-semibold">
              New product
            </div>
            <div>
              <form
                onSubmit={submitProduct}
                className="flex flex-col gap-y-[25px]"
              >
                <input
                  className="outline outline-1 outline-[#393E46]/10 focus:outline-[#393E46] p-[10px] w-full rounded-[1px]"
                  type="text"
                  name="name"
                  placeholder="Product name"
                  onChange={handleChange}
                  value={input.name}
                />
                <input
                  className="outline outline-1 outline-[#393E46]/10 focus:outline-[#393E46] p-[10px] w-full rounded-[1px]"
                  type="number"
                  name="price"
                  placeholder="Product price"
                  onChange={handleChange}
                  value={input.price}
                />
                <input
                  className="outline outline-1 outline-[#393E46]/10 focus:outline-[#393E46] p-[10px] w-full rounded-[1px]"
                  type="text"
                  name="brand"
                  placeholder="Name brand"
                  onChange={handleChange}
                  value={input.brand}
                />
                <input
                  className="outline outline-1 outline-[#393E46]/10 focus:outline-[#393E46] p-[10px] w-full rounded-[1px]"
                  type="text"
                  name="imageUrl"
                  id=""
                  placeholder="Url image"
                  onChange={handleChange}
                  value={input.imageUrl}
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
