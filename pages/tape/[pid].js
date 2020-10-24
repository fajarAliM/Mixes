import { useRouter } from 'next/router';
import useSwr from 'swr';
import Head from 'next/head';

import { fetcher } from '@/lib/util';
import Cassette from '@/components/Cassette';
import Loading from '@/components/Loading';
import Error from '@/components/Error';

export default function Tape() {
	const router = useRouter();
	const { data, error } = useSwr(
		`/api/tracks/${ router.query.pid }?length=${ router.query.length }`,
		fetcher
	);

	if ( error ) {
		return <Error />;
	}

	if ( ! data && ! error ) {
		return <Loading />;
	}

	return (
		<div className="font-sans antialiased flex flex-col max-w-2xl mx-auto h-full mt-8">
			<Head>
				<title>Tapes</title>
			</Head>
			<h1 className="font-bold text-4xl mb-8">Cassette Tapes(s)</h1>
			{ data.cassetes &&
				data.cassetes.map( ( sides, index ) => (
					<Cassette
						key={ index }
						number={ index + 1 }
						sides={ sides }
					/>
				) ) }
		</div>
	);
}
