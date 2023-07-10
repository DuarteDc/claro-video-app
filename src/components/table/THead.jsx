export const THead = ({ hours, scrollPos, handleScrollLeft, handleScrollRight }) => {
    return (
        <thead className="sticky top-0 z-20 ">
            <tr className={`[&>th]:h-12 [&>th]:sticky [&>th]:bg-black`}>
                <th className="left-0 z-20 top-0 min-w-[150px] md:min-w-[300px]">Hoy</th>
                <th className="top-0 flex items-center" style={{ transform: `translateX(-${scrollPos}px)` }}>
                    {
                        hours.map((hour, i) => (
                            <div className="min-w-[200px] text-left" key={i}>
                                {hour}.hs
                            </div>
                        ))
                    }
                </th>
                <th className="right-0 z-20 top-0">
                    <div className={`flex justify-center items-center [&>button]:px-2`}>
                        <button onClick={handleScrollLeft}>
                            <svg className="w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 1 1 5l4 4" />
                            </svg>

                        </button>
                        <button onClick={handleScrollRight}>
                            <svg className="w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4" />
                            </svg>
                        </button>
                    </div>
                </th>
            </tr>
        </thead>
    )
}
