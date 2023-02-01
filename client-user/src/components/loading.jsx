import Lottie from "lottie-react";
import loading from "@/public/loading.json";
export default function Loading() {
  return (
    <>
      <Lottie animationData={loading} loop={true} />;
    </>
  );
}
