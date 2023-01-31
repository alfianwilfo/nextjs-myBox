import Image from "next/image";
export default function Card({ product, i }) {
  return (
    <>
      <div>
        <div>
          <Image src={product.imageUrl} width={100} height={100} />
        </div>
        <div>{product.imageUrl}</div>
        <div>{product.name}</div>
      </div>
    </>
  );
}
