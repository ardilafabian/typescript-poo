export class MyDate {
    constructor(
        public year: number = 1993,
        public month: number = 7,
        private _day: number = 9) {}

    printFormat(): string {
        return `${this.addPadding(this._day)}/${this.addPadding(this.month)}/${this.year}`;
    }

    private addPadding(value: number): string {
        if (value < 10) {
            return `0${value}`;
        }
        return value.toString();
    }

    add(amount: number, type: 'days' | 'months' | 'years') {
        if (type === 'days') {
            this._day += amount;
        } else if (type === 'months') {
            this.month += amount;
        } else if (type === 'years') {
            this.year += amount;
        }
    }

    get day() {
        // code
        return this._day;
    }

    get isLeapyear(): boolean {
        if (this.year % 400 === 0) return true;
        if (this.year % 100 === 0) return false;
        return this.year % 4 === 0;
    }
}

const myDate = new MyDate();
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.isLeapyear);
