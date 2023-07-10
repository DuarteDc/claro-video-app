import { useState, useContext, useCallback, useEffect, memo } from 'react';



import { THead } from '../table/THead';
import Header from './Header';
import LoadingScreen from '../ui/LoadingScreen';

import RowRenderer from '../table/RowRender';
import { TvProgrammingContext } from '../../context/tvPrograming';

import { useInView } from 'react-intersection-observer';

import { generateHours } from '../../helpers/helper';

const Modal = memo(({ toggleModal }) => {

    const { channels, start_date, end_date, memoSetCurrentChannel, current_event } = useContext(TvProgrammingContext);
    const hours = generateHours(start_date, end_date);

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px',
        threshold: 0.1
    });

    const [scrollPos, setScrollPos] = useState(0);
    const [countNextPage, setCountNextPage] = useState(2);
    const [isLoading, setIsLoading] = useState(true);

    const handleScrollLeft = useCallback(() => {
        if (countNextPage === 0) return;
        const newScrollPos = scrollPos - 200;
        setScrollPos(newScrollPos);
        setCountNextPage(prev => prev - 1)
    });

    const handleScrollRight = useCallback(() => {
        if (countNextPage === hours.length) return;
        const newScrollPos = scrollPos + 200;
        setScrollPos(newScrollPos);
        setCountNextPage(prev => prev + 1)
    });

    const memoHandleMouseEnter = useCallback(({ currentTarget }) => {

        const channel_id = currentTarget.getAttribute("data-channel-id");
        const event_id = currentTarget.getAttribute("data-id");
        memoSetCurrentChannel(channel_id, event_id)

    }, []);

    const memoSetLoading = useCallback(() => setIsLoading(!isLoading));

    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                memoSetLoading();
            }, 1000);
        }
    }, [inView]);

    return (
        <div className="bg-black text-white min-h-screen flex-col max-h-screen min-w-full fixed inset-0 flex z-50">
            <Header
                current_event={current_event}
                toggleModal={toggleModal}
            />
            <div className="bg-black overflow-y-auto overflow-x-hidden">
                <table>
                    <THead
                        hours={hours}
                        scrollPos={scrollPos}
                        handleScrollLeft={handleScrollLeft}
                        handleScrollRight={handleScrollRight}
                    />
                    <tbody className="bg-[#1a1a1a]" ref={ref}>
                        {
                            isLoading ? (
                                <LoadingScreen />
                            ) : (
                                <>
                                    {
                                        channels.map(({ uuid, number, name, events, image }) => (
                                            <RowRenderer
                                                key={uuid}
                                                name={name}
                                                number={number}
                                                image={image}
                                                channel_id={uuid}
                                                events={events}
                                                scrollPos={scrollPos}
                                                programmingStart={start_date}
                                                endOfProgramming={end_date}
                                                handleMouseEnter={memoHandleMouseEnter}
                                                inView={inView}
                                            />
                                        ))
                                    }
                                </>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
});

export default Modal