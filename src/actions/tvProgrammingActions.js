import { fetchConfig } from '../config/fecthConfig';

const endpoint = 'https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=20230709200256&date_to=20230710200256&quantity=200';


export const startLoadChannels = async () => {
    try {
        return await fetchConfig(endpoint, 'GET');
    } catch (error) {
        console.log(error);
    }
}