import Head from 'next/head';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function LoadingSplash() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-fullvertical">
            <Head>
				<title>Loading...</title>
			</Head>
            <img className="w-48 sm:w-56 md:w-64" src={'../static/logo.png'} alt="logo-image" />
            <p className="text-5xl sm:text-6xl md:text-7xl font-Agrandir mt-4 md:mt-10">Loading</p>
            <LinearProgress 
            className="w-3/4 md:w-1/2 mt-4 md:mt-10" />
        </div>
    )
}