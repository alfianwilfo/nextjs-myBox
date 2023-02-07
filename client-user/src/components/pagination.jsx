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
      <div className="flex flex-row gap-x-[10px] text-white">
        {total
          ? total.map((el) => {
              return (
                <>
                  <button className="bg-[#00ADB5] rounded px-[10px]">
                    {el}
                  </button>
                </>
              );
            })
          : null}
      </div>
    </>
  );
}
