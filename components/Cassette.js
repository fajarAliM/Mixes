import Side from '@/components/Side';

export default function Cassette( { number, sides } ) {
	return (
		<div className="mb-6 space-y-4">
			<h2 className="font-bold text-2xl mb-1">Cassette #{ number }</h2>
			{ sides.map( ( side, index ) => (
				<Side
					key={ index }
					number={ index + 1 }
					tracks={ side.tracks }
				/>
			) ) }
		</div>
	);
}
