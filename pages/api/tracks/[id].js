import { getTracks } from '@/lib/spotify';
import { chunkArray, packSides } from '@/lib/util';

export default async function handleTracks( req, res ) {
	const tracks = await getTracks( req.query.id );
	const sides = tracks ? packSides( tracks, req.query.length ) : null;
	const cassetes = sides ? chunkArray( sides ) : null;

	res.status( 200 ).json( { cassetes } );
}
