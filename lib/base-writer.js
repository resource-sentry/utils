const EventEmitter = require('eventemitter3');

class BaseWriter extends EventEmitter {
    constructor() {
        super();
        this.eventTarget = {target: this};
    }

    dispatch(eventType) {
        this.emit(eventType, this.eventTarget);
    }

    dispose() {
        this.eventTarget = null;
    }

    init() {
        return Promise.resolve();
    }

    isWriting() {
        return false;
    }

    write(content) {
        return Promise.resolve();
    }
}

module.exports = BaseWriter;
