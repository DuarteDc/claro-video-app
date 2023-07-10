import { memo } from 'react';
import ChannelItem from '../channels/ChannelItem';
import ListOfEvents from '../events/ListOfEvents';

const RowRenderer = memo(({ name, number, image, channel_id, events, scrollPos, programmingStart, endOfProgramming, handleMouseEnter, inView }) => {

    return (
        <>
            <tr className="text-white">
                {inView && (
                    <>
                        <ChannelItem
                            name={name}
                            number={number}
                            image={image}
                        />
                        <ListOfEvents
                            channel_id={channel_id}
                            events={events}
                            scrollPos={scrollPos}
                            programmingStart={programmingStart}
                            endOfProgramming={endOfProgramming}
                            handleMouseEnter={handleMouseEnter}
                        />
                    </>
                )}
            </tr>
        </>
    );
});
export default RowRenderer;