class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('Невозможно идентифицировать будильник, не передан параметр id');
        } else if (this.alarmCollection.some((elem) => elem.id === id)) {
            console.error('Будильник с таким id уже существует!');
        } else {
            this.alarmCollection.push({time,callback,id});
        }
    }

    removeClock(id) {
        if ((this.alarmCollection.filter(elem => elem.id !== id)).length === this.alarmCollection.length) {
            return false;
        } else {
          this.alarmCollection = this.alarmCollection.filter(elem => elem.id !== id)
          return true;
        }
    }

    getCurrentFormattedTime(n) {
        let currentDate = new Date;
        let hours;
        let minutes;
        if (currentDate.getHours() < 10) {
            hours = '0' + currentDate.getHours();
        } else {
            hours = currentDate.getHours();
        }

        if (currentDate.getMinutes() < 10) {
            minutes = '0' + currentDate.getMinutes() + n;
        } else {
            minutes = currentDate.getMinutes()
        }

        return hours + ':' + minutes;
    }

    start(timerTime) {
      this.alarmCollection.forEach(elem => this.checkClock(elem.time, elem.callback));
    }

    checkClock(time, callback, timerTime) {
        if (this.getCurrentFormattedTime() === time) {
            return callback();
        } if (this.timerId == null) {
            this.timerId = setInterval(callback, timerTime);
        }
    }

    stop() {
      if (this.timerId !== null) {
          clearInterval(this.timerId);
          this.timerId = null;
          }
    }

    printAlarms() {
        this.alarmCollection.forEach(elem => console.log(`id: ${elem.id}, time: ${elem.time}`))
    }

    clearAlarms() {
      this.stop();
      this.alarmCollection.splice(0, this.alarmCollection.length);
    }
}
let testCase = function() {
  let alarm = new AlarmClock;
  alarm.addClock(alarm.getCurrentFormattedTime(0), () => console.log('что то'), 1);
  alarm.addClock(alarm.getCurrentFormattedTime(1), function() {console.log('ещё что то'); alarm.removeClock(2)}, 2);
  alarm.addClock(alarm.getCurrentFormattedTime(2), function() {console.log('и ещё что то'); alarm.printAlarms(); alarm.clearAlarms()}, 3);
  alarm.start(60000);
}
console.log(testCase());
