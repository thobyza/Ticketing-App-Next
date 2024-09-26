// import { FiTrash2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const DeleteBlock = () => {
	return (
      <div className="bg-[#34435b] hover:bg-red-500 default-effect p-1 rounded-full cursor-pointer">
         <RxCross2 className=" text-[15px] text-white" />
      </div>
      // <div className="bg-red-400 hover:bg-red-500 default-effect p-1 rounded-full cursor-pointer">
      //    <RxCross2 className=" text-[15px] text-white" />
      // </div>
	);
};

export default DeleteBlock;
