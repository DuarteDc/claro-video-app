import { Channel } from '../models/Channel';
import { EventChannel } from '../models/EventChannel';

/**
 * 
 * @param {Like<Channel>} channel
 * @returns {Channel}
 */

export const serverToChannelModel = (channel) => {

    const { id, name, number, image, events } = channel;

    const eventsMapped = events.map(channelModelToEventModel)

    return new Channel({ id, name, number, image, events: eventsMapped })

}

/**
 * 
 * @param {Like<EventChannel>} event 
 * @returns {EventChannel}
 */

const channelModelToEventModel = (event) => {

    const { id, name, description, date_begin, date_end, duration } = event;

    return new EventChannel({ id, name, description, date_begin, date_end, duration })
}