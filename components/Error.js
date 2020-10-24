import Head from 'next/head';
import Link from 'next/link';

export default function Error() {
	return (
		<div className="font-sans antialiased flex flex-col max-w-2xl mx-auto h-full mt-8">
			<Head>
				<title>Problem</title>
			</Head>
			<h1 className="font-bold text-4xl mb-8">Problem :(</h1>
			<div
				className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 space-y-4"
				role="alert"
			>
				<p>There was an issue while taping your cassette.</p>
				<p className="font-bold">
					Please,{ ' ' }
					<Link href="/">
						{ /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
						<a className="underline">try again.</a>
					</Link>
				</p>
			</div>
		</div>
	);
}
