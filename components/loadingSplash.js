import Head from 'next/head';

export default function LoadingSplash() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <Head>
				<title>Loading...</title>
			</Head>
            <img src={'../static/logo.png'} alt="logo-image" />
            <p className="text-AgrandirBlack font-Agrandir mt-10">Loading</p>
        </div>
    )
}