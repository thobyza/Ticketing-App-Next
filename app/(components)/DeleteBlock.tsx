// import { FiTrash2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const DeleteBlock = () => {
	return (
      // <div className="bg-[#FEE2E2] group hover:bg-red-500 default-effect p-1 rounded-full cursor-pointer">
      //    <RxCross2 className=" text-[15px] text-[#DC2626] group-hover:text-white default-effect"/>
		// </div>
      <div className="bg-red-400 hover:bg-red-500 default-effect p-1 rounded-full cursor-pointer">
         <RxCross2 className=" text-[15px] text-white" />
      </div>
	);
};

export default DeleteBlock;
