import { v4 as uuidv4 } from 'uuid';

export class Channel {

    constructor({ id, name, number, image, events }) {
        this.id     = id;
        this.uuid   = uuidv4();
        this.name   = name;
        this.number = number;
        this.image  = image;
        this.events = events
    }

}