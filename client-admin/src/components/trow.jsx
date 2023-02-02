import Image from "next/image";
export default function Trow({ product, i }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>
        <Image src={product.imageUrl} width={100} height={100} />
      </td>
      <td>{product.brand}</td>
      <td>{product.price}</td>
    </tr>
  );
}
