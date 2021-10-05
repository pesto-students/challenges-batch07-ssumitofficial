class Cycled {
    constructor(cyclingList) {
        if (!Array.isArray(cyclingList)) {
            throw new Error(`Expected ${cyclingList} to be an Array.`);
        }
        this.cyclingList = cyclingList;
        this.length = cyclingList.length;
        this._index = 0;
    }

    current() {
        return this.step(0);
    }

    next() {
        return this.step(1);
    }

    previous() {
        return this.step(-1);
    }

    step(n) {
        this._index = (this._index + n + this.length) % this.length;
        return this.cyclingList[this._index];
    }

    indexOf(value) {
        return this.cyclingList.indexOf(value);
    }

    *[Symbol.iterator]() {
        let length = this.length;
        let newIndex = this._index;
        while (length > 0) {
            yield this.cyclingList[newIndex];
            newIndex = (newIndex + 1) % this.cyclingList.length;
            length -= 1;
        }
    }

    get reversed() {
        const _this = this;
        return function* () {
            yield _this.previous();
        };
    }

    get index() {
        return this._index;
    }

    set index(value) {
        this._index = ((value % this.length) + this.length) % this.length;
    }
}

export { Cycled };