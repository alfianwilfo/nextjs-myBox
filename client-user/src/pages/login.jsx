import Image from "next/image";
import logo from "@/public/log.png";
import Head from "next/head";
import Link from "next/link";
import { useLoginMutation } from "@/features/apiUser";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function Login() {
  let [login] = useLoginMutation();
  const router = useRouter();
  const [input, setInput] = useState({ email: "", password: "" });
  let log = (e) => {
    e.preventDefault();
    login(input).then((res) => {
      if (res.data) {
        localStorage.access_token = res.data.access_token;
        router.push("/");
      }
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
    });
  };
  let showPw = (e) => {
    e.preventDefault();
    let temp = document.getElementById("password");
    let but = document.getElementById("showhide");
    if (temp.type === "password") {
      temp.type = "text";
      but.innerText = "Hide password";
    } else {
      temp.type = "password";
      but.innerText = "Show password";
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/log.png" />
      </Head>
      <ToastContainer />
      <div className="w-screen h-screen grid grid-cols-12 grid-rows-6">
        <div className="col-start-3 col-end-11 row-start-2 row-end-6 outline outline-1 rounded-[2px] outline-[#393E46] flex flex-row">
          <div className="w-1/2 grid content-center">
            <div className="flex justify-center">
              <div>
                <Image src={logo} />
              </div>
            </div>
          </div>
          <div className="w-1/2 grid grid-cols-12 h-full grid grid-rows-6">
            <div className="col-start-2 col-end-12 h-full row-span-6 grid grid-rows-6 p-[10px]">
              <div className="text-[17px] font-semibold row-span-1">Log in</div>
              <div className="row-start-2">
                <form
                  className="w-full flex flex-col gap-y-[20px]"
                  onSubmit={log}
                >
                  <div>
                    <input
                      onChange={handleChange}
                      value={input.email}
                      name="email"
                      type="email"
                      className="outline outline-1 outline-[#393E46]/10 focus:outline-[#393E46] p-[10px] w-full rounded-[1px]"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <div>
                      <input
                        onChange={handleChange}
                        value={input.password}
                        name="password"
                        type="password"
                        className="outline outline-1 outline-[#393E46]/10 focus:outline-[#393E46] p-[10px] w-full rounded-[1px]"
                        placeholder="Password"
                        id="password"
                      />
                    </div>
                    <div>
                      <button
                        id="showhide"
                        onClick={showPw}
                        className="text-[13px] italic font-semibold"
                      >
                        Show password
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-[5px]">
                    <div>
                      <button className="transition-colors duration-[1000ms] outline outline-1 outline-[#393E46] hover:text-white hover:bg-[#00ADB5]  p-[10px] w-full rounded-[1px]">
                        Login
                      </button>
                    </div>
                    <div className="text-[14px]">
                      Baru di next store?
                      <Link href="/register">
                        <button className="ml-[1px] transition-colors duration-[700ms] hover:text-[#00ADB5]">
                          Daftar disini
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
