import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Card({ product, i }) {
  let router = useRouter();
  const [isShown, setIsShown] = useState(false);

  let toMore = () => {
    router.push("/login");
  };

  return (
    <div
      className="col-span-3 backdrop-blur-sm "
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isShown ? (
        <div className="outline outline-1 flex justify-center flex-col p-[10px] rounded h-[200px]">
          <div className="flex flex-col">
            <div className="font-semibold text-center">{product.name}</div>
            <div className="flex justify-center">
              <div>
                <button
                  onClick={toMore}
                  className="rounded outline outline-1 w-[50px] text-[20px]"
                >
                  ...
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="outline outline-1 flex justify-center flex-col p-[10px] rounded h-[200px]">
          <div className="flex justify-center">
            <div>
              <Image src={product.imageUrl} width={100} height={100} />
            </div>
          </div>
          <div className="font-semibold text-center text-[13px]">
            {product.name}
          </div>
        </div>
      )}
    </div>
  );
}
