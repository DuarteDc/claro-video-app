import { memo } from 'react';
import EventItem from './EventItem';

const ListOfEvents = memo(({ channel_id, events, programmingStart, endOfProgramming, handleMouseEnter, scrollPos }) => {
    return (
        <td
            style={{ transform: `translateX(-${scrollPos}px)` }}
            className={`w-full h-full inline-flex overflow-hidden [&>div]:overflow-hidden [&>div]:font-bold`}
        >
            {
                events.map(({ uuid, name, duration, date_begin, date_end }) => (
                    <EventItem
                        key={uuid}
                        channel_id={channel_id}
                        event_id={uuid}
                        name={name}
                        duration={duration}
                        dateBegin={date_begin}
                        dateEnd={date_end}
                        programmingStart={programmingStart}
                        endOfProgramming={endOfProgramming}
                        handleMouseEnter={handleMouseEnter}
                    />
                ))
            }

        </td>
    )
});

export default ListOfEvents;