export const tvProgrammingReducer = (state, { type, payload }) => {

    switch (type) {
        case 'get_tv_programming': {
            const { channels, startDate, endDate } = payload;

            return {
                ...state,
                channels: channels,
                start_date: startDate,
                end_date: endDate
            }
        }
        case 'set_current_tv_programming': {

            const { channel_id, event_id } = payload;
            const currentChannel = state.channels.find(channel => channel.uuid === channel_id);

            const event = currentChannel.events.find(event => event.uuid === event_id);

            return {
                ...state,
                current_event: event
            }

        }

        default:
            return state
    }

}