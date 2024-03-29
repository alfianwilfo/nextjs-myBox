import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logonav.png";
import logom from "@/public/log.png";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Account from "./account";
export default function Navbar() {
  const router = useRouter();
  const [isHov, setIsHov] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [input, setInput] = useState("");
  let goHome = () => {
    router.push("/");
  };
  useEffect(() => {
    localStorage.access_token ? setIsLogin(true) : null;
  }, []);

  let handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  let search = () => {
    filter(input).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div className=" flex flex-row text-[#EEEEEE] bg-[#222831] h-[100px]">
        <div className="px-[60px] grid content-center w-full">
          <div className="flex justify-between w-full">
            <div
              onMouseEnter={() => setIsHov(true)}
              onMouseLeave={() => setIsHov(false)}
            >
              {isHov ? (
                <div onClick={goHome}>
                  <button>
                    <Image src={logom} className=" w-[80px] h-[80px]" />
                  </button>
                </div>
              ) : (
                <Image src={logo} className=" w-[80px] h-[80px]" />
              )}
            </div>
            <div className="grid content-center">
              {!isLogin ? (
                <div className="flex flex-row gap-[10px]">
                  <div>
                    <Link href="/login">
                      <button className="outline outline-1 outline-[#00ADB5] rounded-[1px] w-[90px] h-[40px] hover:bg-[#00ADB5] text-[#EEEEEE] transition-colors duration-[1200ms]">
                        Login
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/register">
                      <button className="outline outline-1 outline-[#00ADB5] rounded-[1px] w-[90px] h-[40px] hover:bg-[#00ADB5] hover:text-[#222831] text-[#EEEEEE] transition-colors duration-[1200ms]">
                        Register
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                <Account />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
