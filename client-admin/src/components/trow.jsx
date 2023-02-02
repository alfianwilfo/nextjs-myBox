import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDeleteProductMutation } from "@/features/apiProducts";
import { useGetProductsQuery } from "@/features/apiProducts";
export default function Trow({ product, i }) {
  let [deleteProduct] = useDeleteProductMutation();
  let deletes = () => {
    deleteProduct(product.id).then((res) => {
      if (res.error) {
        toast.error(res.error.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      if (res.data) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    });
  };
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  return (
    <tr>
      <td>
        <div className="text-center">{product.name}</div>
      </td>
      <td className="flex justify-center">
        <Image src={product.imageUrl} width={100} height={100} />
      </td>
      <td className="text-center">{product.brand}</td>
      <td className="text-center">{rupiah(product.price)}</td>
      <td className="m-auto">
        <div className="flex justify-between ">
          <div>
            <button className="transition duration-700 outline outline-1 py-[5px] w-[100px] rounded hover:bg-[#00ADB5] hover:text-white">
              Edit
            </button>
          </div>
          <div>
            <button
              onClick={deletes}
              className="transition duration-700 outline outline-1 py-[5px] w-[100px] rounded hover:bg-[#393E46] hover:text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}
