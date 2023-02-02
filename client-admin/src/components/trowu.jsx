export default function Trowu({ user, i }) {
  console.log("kepanggil");
  let toEdit = () => {
    console.log("edit");
  };
  let deletes = () => {
    console.log("del");
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
