export default function Skeleton( { number } ) {
	return (
		<div className="animate-pulse flex items-baseline border-b border-gray-200 p-2">
			<p className="font-bold text-gray-500 text-sm">{ number }</p>
			<div className="flex flex-col ml-3 space-y-2 w-full">
				<div className="h-4 bg-gray-400 rounded w-3/4"></div>
				<div className="h-4 bg-gray-400 rounded w-4/5"></div>
			</div>
		</div>
	);
}
