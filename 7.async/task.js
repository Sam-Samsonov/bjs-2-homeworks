class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = [];
    }

    addClock(date, callback, id) {
        if (id === undefined) {
            throw new Error('Невозможно идентифицировать будильник, не передан параметр id');
        }else if (this.timerId.some((elem) => elem === id)) {
            console.error('Будильник с таким id уже существует!');
            break;
        }
        this.alarmCollection.push(id = )
    }
}
