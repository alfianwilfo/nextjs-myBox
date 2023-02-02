import { useDeleteUserMutation } from "@/features/apiUser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Trowu({ user, i }) {
  let [deleteUser] = useDeleteUserMutation();
  console.log("kepanggil");
  let toEdit = () => {
    console.log("edit");
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
  return (
    <tr>
      <td>
        <div className="text-center">{user.name}</div>
      </td>

      <td className="text-center">{user.email}</td>
      <td className="text-center">{user.address}</td>

      <td className="m-auto">
        <div className="flex justify-between ">
          <div>
            <button
              onClick={toEdit}
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
