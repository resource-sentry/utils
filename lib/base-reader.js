const EventEmitter = require('eventemitter3');

class BaseReader extends EventEmitter {
    constructor() {
        super();
        this.categories = [];
        this.eventTarget = {target: this};
    }

    addValue(category, name, value) {
        let categoryData = this.categories[category] || [];
        categoryData.push({name, value});
        this.categories[category] = categoryData;
    }

    dispatch(eventType) {
        this.emit(eventType, this.eventTarget);
    }


    dispose() {
        this.eventTarget = null;
        this.categories.length = 0;
    }

    getAllCategories() {
        return this.categories;
    }

    getEntry() {
        return null;
    }

    scan() {
        return Promise.resolve();
    }
}

module.exports = BaseReader;
