import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
	return (
		<div className="flex flex-col bg-[#1E293B] border border-border-custom rounded-xl shadow-md p-[0.85rem]">
			<div className="flex justify-between items-center mb-1.5">
				<h4 className="text-[17px]">Ticket Title</h4>
				<DeleteBlock />
			</div>
			<PriorityDisplay />
			<p className="nunito-font line-clamp-2 text-[14px] text-text-dimmed-1 mt-2">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in
			</p>
			<div className="flex items-center justify-between mt-2">
				<div className="flex flex-col gap-[0.15rem]">
					<p className="text-[12px] text-text-dimmed-2 comfortaa-font">
						08/31/24 10:21PM
					</p>
					<ProgressDisplay />
				</div>
				<div className="ml-auto">
					<StatusDisplay />
				</div>
			</div>
		</div>
	);
};

export default TicketCard;
