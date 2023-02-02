import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import logoutv from "@/public/logoutv.svg";
import Image from "next/image";
import logoutw from "@/public/logoutw.svg";
import profv from "@/public/profv.svg";
import profw from "@/public/profw.svg";
import { useRouter } from "next/router";

export default function Account() {
  let router = useRouter();
  let toLog = () => {
    localStorage.clear();
    router.reload();
  };
  let toUser = () => {
    router.push("/user");
  };

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded bg-[#00ADB5] px-4 py-2 text-sm font-medium text-white hover:bg-[#059aa1] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Account
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={toUser}
                    className={`${
                      active ? "bg-[#00ADB5] text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <Image src={profw} width={16} className="mr-[10px]" />
                    ) : (
                      <Image src={profv} width={16} className="mr-[10px]" />
                    )}
                    Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={toLog}
                    className={`${
                      active ? "bg-[#00ADB5] text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <Image src={logoutw} width={16} className="mr-[10px]" />
                    ) : (
                      <Image src={logoutv} width={16} className="mr-[10px]" />
                    )}
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
