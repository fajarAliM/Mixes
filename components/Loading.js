import Head from 'next/head';

import Skeleton from '@/components/Skeleton';

export default function Loading() {
	return (
		<div className="font-sans antialiased flex flex-col max-w-2xl mx-auto h-full mt-8">
			<Head>
				<title>Taping...</title>
			</Head>
			<h1 className="font-bold text-4xl mb-8">Taping...</h1>
			<div className="mb-6 space-y-4">
				<h2 className="font-bold text-2xl mb-1">Cassette #1</h2>
				{ [ 1, 2, 3 ].map( ( number ) => (
					<Skeleton key={ number } number={ number } />
				) ) }
			</div>
		</div>
	);
}
