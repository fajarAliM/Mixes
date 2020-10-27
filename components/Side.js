import { format, addMilliseconds } from 'date-fns';

import Track from '@/components/Track';

export default function Side( { number, tracks } ) {
	const durationMs = tracks.reduce(
		( acc, track ) => acc + track.duration_ms,
		0
	);
	const duration = addMilliseconds( new Date( 0 ), durationMs );

	return (
		<div>
			<h3 className="text-lg text-gray-600">
				Side { number % 2 ? 'A' : 'B' } -{ ' ' }
				<span>{ format( duration, 'mm:ss' ) }</span>
			</h3>
			{ tracks.map( ( track, index ) => (
				<Track key={ index } number={ index + 1 } { ...track } />
			) ) }
		</div>
	);
}
