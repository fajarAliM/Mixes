import Side from './side';

const REGEX = /^(https:\/\/open.spotify.com\/playlist\/)([a-zA-Z0-9]+)/i;

export const MINUTE_IN_MS = 60000;
export const DEFAULT_LENGTH = 1800000;
export const fetcher = ( url ) => fetch( url ).then( ( res ) => res.json() );

export function getPlaylistId( url ) {
	const [ , , id ] = url.match( REGEX ) || [];

	return id;
}

export function packSides( tracks, type ) {
	// Side is half of the full lenght and we want that in ms.
	const length = type ? ( type / 2 ) * MINUTE_IN_MS : DEFAULT_LENGTH;
	const sides = [];
	const handled = new Set();

	while ( handled.size < tracks.length ) {
		const side = new Side();

		tracks.forEach( ( track ) => {
			if ( handled.has( track.id ) ) {
				return;
			}

			if ( side.duration + track.duration_ms < length ) {
				side.add( track );
				handled.add( track.id );
			}
		} );

		sides.push( side );
	}

	return sides;
}

export function chunkArray( array, size = 2 ) {
	const chunks = [];

	for ( let i = 0; i < array.length; i += size ) {
		const chunk = array.slice( i, i + size );
		chunks.push( chunk );
	}

	return chunks;
}
