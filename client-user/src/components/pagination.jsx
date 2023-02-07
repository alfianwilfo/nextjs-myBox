import { useEffect, useState } from "react";
export default function Pagination({ count }) {
  let [total, setTotal] = useState([]);
  useEffect(() => {
    for (let i = 0; i < count; i++) {
      setTotal((total) => [...total, `${i + 1}`]);
    }
  }, []);
  return (
    <>
      {total
        ? total.map((el) => {
            return <>{el} as</>;
          })
        : null}
    </>
  );
}
