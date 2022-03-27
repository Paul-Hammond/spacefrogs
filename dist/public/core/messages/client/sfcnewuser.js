import sfMessage from '../sfmessage.js';
export default class sfcNewUser extends sfMessage {
    constructor(id, name) {
        super(id, Date.now());
        this.name = name;
    }
}
