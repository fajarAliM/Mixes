import querystring from 'querystring';

const {
	SPOTIFY_CLIENT_ID: clientId,
	SPOTIFY_CLIENT_SECRET: clientSecret,
	SPOTIFY_REFRESH_TOKEN: refreshToken,
} = process.env;

const basic = Buffer.from( `${ clientId }:${ clientSecret }` ).toString(
	'base64'
);

async function getAccessToken() {
	const response = await fetch( 'https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			Authorization: `Basic ${ basic }`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: querystring.stringify( {
			grant_type: 'refresh_token',
			refresh_token: refreshToken,
		} ),
	} );

	return response.json();
}

export async function getTracks( playlistId ) {
	// Sanity check.
	if ( ! playlistId ) {
		return null;
	}

	const { access_token: accessToken } = await getAccessToken();
	const endpoint = `https://api.spotify.com/v1/playlists/${ playlistId }/tracks`;
	const query = `fields=items(track(id,name,duration_ms,artists.name))&limit=20`;

	const playlist = await fetch( endpoint + '?' + query, {
		headers: {
			Authorization: `Bearer ${ accessToken }`,
		},
	} )
		.then( ( response ) => {
			if ( ! response.ok ) {
				return null;
			}

			return response.json();
		} )
		.catch( ( error ) => console.warn( error ) ); // eslint-disable-line no-console

	if ( ! playlist ) {
		return null;
	}

	return playlist.items.map( ( item ) => ( {
		id: item.track.id,
		artist: item.track.artists
			.map( ( _artist ) => _artist.name )
			.join( ', ' ),
		title: item.track.name,
		duration_ms: item.track.duration_ms,
	} ) );
}
