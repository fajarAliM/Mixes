
const tapeData = [
    {
        title: 'Anyware in Spacetime',
        description: 'Bruno Pernadas',
        date: '04:34'
    }, {
        title: 'The Melody of a Fallen Tree',
        description: 'Windsor For The Derby',
        date: '02:39'
    }, {
        title: 'Boredom (Audio)',
        description: 'Tyler, The Creator',
        date: '07:56'
    }, {
        title: 'Ivy',
        description: 'Frank Ocean',
        date: '01:27'
    }, {
        title: 'Space Song',
        description: 'Beach House',
        date: '01:24'
    }, {
        title: 'Anyware in Spacetime',
        description: 'Bruno Pernadas',
        date: '05:59'
    }, {
        title: 'Anyware in Spacetime',
        description: 'Bruno Pernadas',
        date: '04:34'
    }, {
        title: 'Anyware in Spacetime',
        description: 'Bruno Pernadas',
        date: '04:34'
    }, {
        title: 'Anyware in Spacetime',
        description: 'Bruno Pernadas',
        date: '04:34'
    }
]

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
                <div
                    className="mt-6 border border-gray-600 shadow-shadowBox bg-white w-full xl:w-TapeBox h-tapeBox overflow-y-scroll left-scroll">
                    <div className="flex flex-col items-start mx-0 md:mx-4 flex-1">
                        {tapeData.map((items, i) =>
                            <div className="flex flex-row justify-between items-center md:items-start w-full border-b border-black">
                                <div className="border-l border-black md:border-l-0 py-4 flex-1 flex flex-col-reverse md:flex-row justify-between items-end md:items-start ml-5 pl-4">
                                    <p className="text-xl font-Agrandir-Regular font-bold">{items.date}</p>
                                    <div className="flex flex-col py-0 md:py-3">
                                        <p className="font-Agrandir text-xl text-left leading-5">{items.title}</p>
                                        <p className="font-Agrandir-Regular tracking-wider text-xl text-left">{items.description}</p>
                                    </div>
                                </div>
                                <p className="font-Agrandir text-3xl w-16 py-4">{i + 1}</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}