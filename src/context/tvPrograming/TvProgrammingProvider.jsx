import { useEffect, useReducer, useRef, useMemo, useCallback } from 'react';

import { tvProgrammingReducer, TvProgrammingContext } from './'

import { startLoadChannels } from '../../actions/tvProgrammingActions';
import { serverToChannelModel } from '../../helpers/mapper';
import { parseDate } from '../../helpers/helper';

const initialState = {
    channels: [],
    start_date: '',
    end_date: '',
    current_event: {},
}

export const TvProgrammingProvider = ({ children }) => {

    const effectRan = useRef(false);

    const [state, dispatch] = useReducer(tvProgrammingReducer, initialState);

    const getChannles = async () => {
        const { response, entry } = await startLoadChannels();

        const startDate = parseDate(entry?.date_from);
        const endDate = parseDate(entry?.date_to);

        const channels = response.channels.map(serverToChannelModel);


        dispatch({ type: 'get_tv_programming', payload: { channels, startDate, endDate } });
    }

    const memoSetCurrentChannel = useCallback((channel_id, event_id) => {
        dispatch({ type: 'set_current_tv_programming', payload: { channel_id, event_id } });
    });

    useEffect(() => {
        if (effectRan.current) return;
        getChannles();
        return () => effectRan.current = true;
    }, []);

    const providerValue = useMemo(() => {
        return {
            ...state,
            dispatch,
            memoSetCurrentChannel
        }
    }, [state, dispatch, memoSetCurrentChannel]);

    return (
        <TvProgrammingContext.Provider value={{ ...providerValue }}>
            {children}
        </TvProgrammingContext.Provider>
    )
};

