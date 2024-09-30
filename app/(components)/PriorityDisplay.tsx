import { PiFireSimpleFill } from "react-icons/pi";

const PriorityDisplay = () => {
	return (
		//  <div className="flex items-center gap-[0.2rem] text-[12px] leading-none">
		//      <GoDash className="mb-1"/>
		//      <span className="text-[11px]">Medium</span>
		//  </div>
		<div className="flex items-center gap-[0.25rem]">
			<div className="flex items-center gap-[0.2rem] text-[13px] leading-none text-[#38BDF8]">
				<PiFireSimpleFill />
				<PiFireSimpleFill />
				<PiFireSimpleFill />
				<PiFireSimpleFill />
			</div>
			<div>
				<span className="text-text-dimmed-2 text-[12px] font-bold whitespace-pre">
					• Critical
				</span>
			</div>
		</div>
	);
};

export default PriorityDisplay;
