import Head from 'next/head';

export default function LoadingSplash() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <Head>
				<title>Loading...</title>
			</Head>
            <img className="px-6 sm:px-24" src={'../static/logo.png'} alt="logo-image" />
            <p className="text-5xl sm:text-6xl md:text-7xl font-Agrandir mt-10">Loading</p>
        </div>
    )
}