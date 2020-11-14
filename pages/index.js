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

			{load && <LoadingSplash />}


			{!load &&
				<div className="mt-8 sm:mt-16">
					<div className="w-full xl:w-4/5 px-6 md:px-16">
						<img src={'../static/logo.png'} alt="logo-image" className="w-32 sm:w-48 md:w-56" />
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-Agrandir mt-8 sm:mt-16 flex">Create a Tape
						<img className="hidden lg:flex ml-4" src={"../static/illustrations/Group75.svg"} />
							<img className="flex lg:hidden ml-4" src={"../static/illustrations/Group.svg"} />
						</h1>
						<p className="leading-small sm:leading-medium md:leading-large font-Agrandir-Regular font-bold font-hairline text-3xl sm:text-4xl md:text-5xl mb-6">
							Spotify is a great tool for making&nbsp;
							<span className="font-Agrandir text-indigo-500">mixtapes.&nbsp;</span>
							With this tool you can take all your favorite songs from Spotify and we will help you use your tapes most efficiently.</p>
						<form className="flex flex-col justify-between items-center lg:flex-row mt-8 sm:mt-16 w-full lg:w-4/5 pb-32" onSubmit={handleSubmit}>
							<input
								className="text-3xl bg-white w-full lg:flex-1 font-SpaceMono-italic border border-gray-600 px-4 tracking-widest h-formElementSmall md:h-formElementBig"
								type="url"
								name="q"
								value={url || ''}
								onChange={(event) => setUrl(event.target.value)}
								placeholder="ENTER A SPOTIFY URL"
							/>
							<select
								className="text-3xl bg-white w-full lg:w-32 mx-0 lg:mx-4 border border-gray-600 px-2 font-bold mt-6 lg:mt-0 h-formElementSmall md:h-formElementBig font-SpaceMono-italicBold"
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
							<button
								className="w-64 text-3xl mx-0 lg:mx-4 submit-button font-SpaceMono-bold mt-6 lg:mt-0 h-formElementBig">
								SUBMIT
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
				</div>
			}
		</div>
	);
}
