
export default function CreateTape() {
    return (
        <div className="flex flex-col justify-center w-full">
            <div className="w-full xl:w-4/5 px-6 md:px-16 mt-8 sm:mt-16">
                <img src={'../static/logo.png'} alt="logo-image" className="w-32 sm:w-48 md:w-56" />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-Agrandir mt-8 sm:mt-16">Create a Tape</h1>
                <button className="flex flex-row items-center">
                    <p className="text-xl">NEXT SIDE</p>
                    <img src={"../../static/left-arrow.svg"} className="ml-4" />
                </button>
                <div className="w-full mt-6 border border-gray-600">

                </div>
            </div>
        </div>
    )
}