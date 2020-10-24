export default function Track( track ) {
	return (
		<div className="flex items-baseline border-b border-gray-200 p-2">
			<p className="font-bold text-gray-500 text-sm">{ track.number }</p>
			<div className="flex flex-col ml-3">
				<p className="font-semibold">{ track.title }</p>
				<p className="text-gray-600">{ track.artist }</p>
			</div>
		</div>
	);
}
