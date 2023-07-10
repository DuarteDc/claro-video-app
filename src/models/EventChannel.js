import { v4 as uuidv4 } from 'uuid';

export class EventChannel {

    constructor({ id, name, description, date_begin, date_end, duration }) {
        this.id             = id;
        this.uuid           = uuidv4();
        this.name           = name;
        this.description    = description;
        this.date_begin     = date_begin;
        this.date_end       = date_end;
        this.duration       = duration;
    }
    
}