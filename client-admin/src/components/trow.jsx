import Image from "next/image";
export default function Trow({ product, i }) {
  return (
    <tr>
      <td>
        <div className="text-center">{product.name}</div>
      </td>
      <td className="flex justify-center">
        <Image src={product.imageUrl} width={100} height={100} />
      </td>
      <td className="text-center">{product.brand}</td>
      <td className="text-center">{product.price}</td>
      <td className="m-auto">
        <div className="flex justify-between ">
          <div>
            <button className="transition duration-700 outline outline-1 py-[5px] w-[100px] rounded hover:bg-[#00ADB5] hover:text-white">
              Edit
            </button>
          </div>
          <div>
            <button className="transition duration-700 outline outline-1 py-[5px] w-[100px] rounded hover:bg-[#393E46] hover:text-white">
              Delete
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}
