import Image from "next/image";
// import "@lottiefiles/lottie-player";
export default function Card({ product, i }) {
  let load = (params) => {};
  //    (
  //     <lottie-player
  //       src="https://assets6.lottiefiles.com/packages/lf20_fnKnAJB6bR.json"
  //       background="transparent"
  //       speed="1"
  //       style="width: 300px; height: 300px;"
  //       loop
  //       autoplay
  //     ></lottie-player>
  //   );
  return (
    <div className="gap-[10px] col-span-2">
      <div className="outline outline-1 flex justify-center flex-col p-[10px] rounded h-[200px]">
        <div className="flex justify-center">
          <div>
            <Image src={product.imageUrl} width={100} height={100} />
          </div>
        </div>
        <div className="font-semibold text-center">{product.name}</div>
      </div>
    </div>
  );
}
