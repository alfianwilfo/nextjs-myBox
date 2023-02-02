import { useState } from "react";
import { useCreateProductMutation } from "@/features/apiProducts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
export default function Create() {
  let router = useRouter();
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
      if (res.data) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        router.push("/home");
      }
      if (res.error) {
        toast.warn(res.error.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    });
  };
  const cancel = () => {
    router.push("/home");
  };
  return (
    <>
      <ToastContainer />
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
                <button
                  type="submit"
                  className="outline outline-1 outline-[#393E46]/10 focus:outline-[#393E46] p-[10px] w-full rounded-[1px] bg-[#00ADB5]"
                >
                  Submit
                </button>
                <button
                  onClick={cancel}
                  className="bg-[#EEEEEE] rounded-[1px] p-[10px]"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
