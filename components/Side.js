import Track from '@/components/Track';

export default function Side( { number, tracks } ) {
	return (
		<div>
			<h3 className="text-lg text-gray-600">
				Side { number % 2 ? 'A' : 'B' }
			</h3>
			{ tracks.map( ( track, index ) => (
				<Track key={ index } number={ index + 1 } { ...track } />
			) ) }
		</div>
	);
}
