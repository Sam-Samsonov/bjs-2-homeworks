class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state * 1.5;
    }

    set state(state) {
        if (this.state < 0) {
            this._state = 0;
        } else if (this.state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }
    get state() {
        return this._state;
    }
}
