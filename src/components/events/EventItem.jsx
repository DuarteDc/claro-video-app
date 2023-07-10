import { memo } from 'react';
import { converTextToDate, getSizeByTime } from '../../helpers/helper'

const EventItem = memo(({ channel_id, event_id, name, duration, dateBegin, dateEnd, programmingStart, endOfProgramming, handleMouseEnter }) => {
    return (
        <span
            data-id={event_id}
            data-channel-id={channel_id}
            style={{ maxWidth: `${getSizeByTime(duration, dateBegin, programmingStart, dateEnd, endOfProgramming)}`, width: `${getSizeByTime(duration, dateBegin, programmingStart, dateEnd, endOfProgramming)}` }}
            className={`h-[150px] border-2  p-5 cursor-pointer hover:bg-[#44454f] truncate [&>span>p]:text-xs`}
            onMouseEnter={handleMouseEnter}
        >
            <h4 className="text-xl truncate">{name}</h4>
            <span className="flex items-center">
                <p>{converTextToDate(dateBegin)}</p>
                <p className="px-1"> - </p>
                <p>{converTextToDate(dateEnd)}</p>
            </span>
        </span>
    )
});


export default EventItem;