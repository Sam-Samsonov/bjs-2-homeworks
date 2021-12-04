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

/*    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
    }*/

    getCurrentFormattedTime(n = 0) {
        return new Date(new Date().setMinutes(new Date().getMinutes() + n)).toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
    }

    start() {
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(elem => this.checkClock(elem.time, elem.callback));
            }, 10000);
            setInterval(this.timerId);
        }
    }

    checkClock(time, callback) {
        if (this.getCurrentFormattedTime() === time) {
            return callback();
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
let alarm = new AlarmClock;

  alarm.addClock(alarm.getCurrentFormattedTime(), () => console.log('что то'), 1);
  alarm.addClock(alarm.getCurrentFormattedTime(1), function() {console.log('ещё что то'); alarm.removeClock(2)}, 2);
  alarm.addClock(alarm.getCurrentFormattedTime(2), function() {console.log('и ещё что то'); alarm.printAlarms(); alarm.clearAlarms()}, 3);
  alarm.start();

