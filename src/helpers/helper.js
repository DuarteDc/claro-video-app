export const converTextToDate = (date = '') =>
    date.split(" ").pop();

/**
 * 
 * @param {String} initialDate 
 * @param {String} finalDate 
 * @example 2023/07/05 20:00:56
 * @returns [20:00, 20:30]
 */

export const generateHours = (initialDate, finalDate) => {

    const init = new Date(initialDate);
    const final = new Date(finalDate);

    let hours = [];

    while (init <= final) {

        const currentDate = init.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit'
        });

        hours.push(currentDate);

        init.setMinutes(init.getMinutes() + 30);
    }

    return hours;

}

/**
 * 
 * @param {String} hour 
 * @example 20:00:00
 * @returns {'20.00.00'}
 */

export const convertHoursToNumbers = (hour) => {

    const splitDuration = hour.split(":");
    let horas = parseInt(splitDuration[0]);
    let minutos = parseInt(splitDuration[1]);

    let decimal = (minutos / 60)

    return horas + decimal;

}

/**
 * 
 * @param {String} durationEvent 
 * @param {String} begininingEvent
 * @param {String} startDate
 * @returns {'300px'}
 */

export const getSizeByTime = (durationEvent = '', begininingEvent = '', startDate = '', endingEvent = '', endDate = '') => {

    const startEvent = new Date(begininingEvent);
    const endEventDate = new Date(endingEvent);
    const programmingStart = new Date(startDate);
    const programmingEnd = new Date(endDate);

    
    if (startEvent < programmingStart && endEventDate < programmingEnd) {

        let hoursOfEvent = endEventDate.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit'
        });
        let hoursOfProgramming = programmingStart.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit'
        });

        hoursOfEvent = convertHoursToNumbers(hoursOfEvent);
        hoursOfProgramming = convertHoursToNumbers(hoursOfProgramming);

        const restOfProgramming = Number(hoursOfEvent) - Number(hoursOfProgramming)

        return `${(restOfProgramming * 200 * 2).toFixed(2)}px`

    }
    else if (startEvent > programmingStart && endEventDate > programmingEnd) {
        let hoursOfEvent = startEvent.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit'
        });
        let hoursOfProgramming = programmingEnd.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit'
        });

        hoursOfEvent = convertHoursToNumbers(hoursOfEvent);
        hoursOfProgramming = convertHoursToNumbers(hoursOfProgramming);

        const restOfProgramming = Number(hoursOfProgramming) - Number(hoursOfEvent)

        return `${(restOfProgramming * 200 * 2).toFixed(2)}px`
    } else {
        const duration = convertHoursToNumbers(durationEvent);

        return `${(duration * 200 * 2).toFixed(2)}px`

    }
}

/**
 * 
 * @param {Number} date 
 * @example 20230705200256
 * @returns {'2023/07/05 20:00:56'}
 */

export const parseDate = (date) => {

    const dateToString = date.toString();

    const year = dateToString.substr(0, 4);
    const month = dateToString.substr(4, 2);
    const day = dateToString.substr(6, 2);
    const hour = dateToString.substr(8, 2);

    return `${year}/${month}/${day} ${hour}:00:00`;

}


export const parseDateAndExtractHour = (dateString) => {
    const date = new Date(dateString);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const formattedHour = `${hour}.${minutes < 10 ? '0' : ''}${minutes}hrs`;

    return formattedHour;
};