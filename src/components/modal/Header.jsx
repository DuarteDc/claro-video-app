import { memo } from 'react';

import { parseDateAndExtractHour } from '../../helpers/helper';

const Header = memo(({ current_event, toggleModal }) => {

    return (
        <header className={`pt-10 px-5 max-h-[350px] min-h-[350px] overflow-y-auto [&>div>p]:text-justify`}>
            <h2 className="text-4xl font-bold">{current_event?.name}</h2>
            <div className="w-full md:w-2/3 lg:w-2/4 my-5 font-bold">
                {
                    current_event?.date_begin && current_event?.date_end && (
                        <h3 className="py-2 text-lg md:text-xl lg:text-2xl">
                            {parseDateAndExtractHour(current_event?.date_begin)} a {parseDateAndExtractHour(current_event?.date_end)}
                        </h3>
                    )
                }
                <p className="text-sm md:text-base lg:text-lg">{current_event?.description}</p>
            </div>
            <button className="absolute right-2 top-4" onClick={toggleModal}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </header>
    )

});

export default Header;