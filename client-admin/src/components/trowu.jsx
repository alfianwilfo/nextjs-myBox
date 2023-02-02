import { useDeleteUserMutation } from "@/features/apiUser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import { useState } from "react";
import { useUpdatePasswordMutation } from "@/features/apiUser";
import { useRouter } from "next/router";
export default function Trowu({ user, i }) {
  let router = useRouter();
  let [deleteUser] = useDeleteUserMutation();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updatePassword] = useUpdatePasswordMutation();
  const [input, setInput] = useState({ password: "" });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInput({
      ...input,
      [name]: value,
    });
  };

  let submitEdit = (e) => {
    e.preventDefault();
    updatePassword({ input, id: user.id }).then((res) => {
      console.log(res);
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
      if (res.data) {
        toast.success(res.data.message, {
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
  let deletes = () => {
    deleteUser(user.id).then((res) => {
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
      if (res.data) {
        toast.success(res.data.message, {
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
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "40%",
    },
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <tr>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col gap-y-[40px]">
          <div className="">
            <div>
              <button
                onClick={closeModal}
                className="transition-colors duration-700 outline outline-1 px-[10px] py-[5px] hover:bg-[#222831] outline-[#222831] hover:text-white"
              >
                Cancel
              </button>
            </div>
            <div className="text-center text-[20px] font-semibold underline decoration-[#00ADB5] underline-offset-8">
              Edit user password
            </div>
          </div>
          <div>
            <form onSubmit={submitEdit} className="flex flex-col gap-y-[10px]">
              <input
                value={input.password}
                onChange={handleChange}
                name="password"
                className="outline outline-1 outline-[#393E46]/10 focus:outline-[#393E46] p-[10px] w-full rounded-[1px]"
              />

              <button className="bg-[#00ADB5] text-white p-[10px] w-full rounded-[1px]">
                Change password
              </button>
            </form>
          </div>
        </div>
      </Modal>
      <td>
        <div className="text-center">{user.name}</div>
      </td>

      <td className="text-center">{user.email}</td>
      <td className="text-center">{user.address}</td>

      <td className="m-auto">
        <div className="flex justify-between ">
          <div>
            <button
              onClick={openModal}
              className="transition duration-700 outline outline-1 py-[5px] w-[100px] rounded hover:bg-[#00ADB5] hover:text-white"
            >
              Edit
            </button>
          </div>
          <div>
            <button
              onClick={deletes}
              className="transition duration-700 outline outline-1 py-[5px] w-[100px] rounded hover:bg-[#393E46] hover:text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}
