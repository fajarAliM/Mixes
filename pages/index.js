import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getPlaylistId } from '@/lib/util';
import LoadingSplash from '@/components/loadingSplash';

export default function IndexPage() {
	const [url, setUrl] = useState('');
	const [length, setLength] = useState(60);
	const [isError, setError] = useState(false);
	const router = useRouter();
	const [load, setLoad] = useState(true);

	const handleSubmit = (event) => {
		event.preventDefault();

		const id = getPlaylistId(url);

		// if (id) {
		// 	router.push({
		// 		pathname: `/tape/${id}`,
		// 		query: { length },
		// 	});
		// } else {
		// 	setError(true);
		// }
		
		router.push({
			pathname: `/createTape`
		});
	};

	useEffect(() => {
		setTimeout(() => {
			setLoad(false);
		}, 3000
		)
	}, [])

	return (
		<div className="flex flex-col justify-center w-full">
			<Head>
				<title>Create a Tape by bsides</title>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Head>

			{load && <div className="flex flex-col items-center">
				<LoadingSplash />
			</div>}


			{!load &&
				<React.Fragment>
					<img src={'../static/logo.png'} alt="logo-image" className=" ml-16 mt-16 w-56" />
					<div className="w-4/5 px-16 mt-16">
						<h1 className="text-AgrandirBlack font-Agrandir">
							Create a Tape
				</h1>
						<p className="font-Agrandir-Regular font-bold font-hairline text-AgrandirRegular mb-4">
							Spotify is a great tool for making <span className="font-Agrandir text-indigo-500">mixtapes.</span> With this tool you can take all your favorite songs from Spotify and we will help you use your tapes most efficiently.
				</p>
						<form className="flex flex-row mt-16 justify-between w-4/5" onSubmit={handleSubmit}>
							<input
								className="h-16 flex-1 border border-gray-600 px-4 tracking-widest"
								type="url"
								name="q"
								value={url || ''}
								onChange={(event) => setUrl(event.target.value)}
								placeholder="ENTER A SPOTIFY URL"
							/>
							<select
								className="w-32 mx-4 border border-gray-600 px-2 font-bold"
								id="length"
								value={length}
								onChange={(event) =>
									setLength(event.target.value)
								}
							>
								<option value="60">C60</option>
								<option value="90">C90</option>
								<option value="120">C120</option>
							</select>
							<button className="w-64 text-2xl mx-4 submit-button font-Agrandir-Tight">
								Submit
					</button>
						</form>
						{isError && (
							<div
								className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-2 mt-2"
								role="alert"
							>
								<p>Incorrect Spotify playlist URL.</p>
							</div>
						)}
					</div>
				</React.Fragment>
			}
		</div>
	);
}
