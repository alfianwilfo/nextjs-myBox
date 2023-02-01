import Image from "next/image";
import logo from "@/public/log.png";
export default function Login() {
  let showPw = (e) => {
    e.preventDefault();
    let temp = document.getElementById("password");
    let but = document.getElementById("a");
    if (temp.type === "password") {
      temp.type = "text";
      but.innerText = "Hide password";
    } else {
      temp.type = "password";
      but.innerText = "Show password";
    }
  };
  return (
    <>
      <div className="w-screen h-screen grid grid-cols-12 grid-rows-6">
        <div className="col-start-3 col-end-11 row-start-2 row-end-6 outline outline-1 rounded-[2px] outline-[#393E46] flex flex-row">
          <div className="w-1/2 grid content-center">
            <div className="flex justify-center">
              <div>
                <Image src={logo} />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-[10px]">
              <div className="text-[17px] font-semibold">Log in</div>
              <div className="grid grid-cols-12">
                <div className="col-start-2 col-end-12">
                  <form className="w-full flex flex-col gap-y-[10px]">
                    <div>
                      <input
                        type="text"
                        className="outline outline-1 outline-[#393E46]/10 focus:outline-[#393E46] p-[10px] w-full rounded-[1px]"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <div>
                        <input
                          type="password"
                          className="outline outline-1 outline-[#393E46]/10 focus:outline-[#393E46] p-[10px] w-full rounded-[1px]"
                          placeholder="Password"
                          id="password"
                        />
                      </div>
                      <div>
                        <button
                          id="a"
                          onClick={showPw}
                          className="text-[13px] italic"
                        >
                          Show password
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
