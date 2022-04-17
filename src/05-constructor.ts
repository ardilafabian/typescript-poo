export class MyDate {
    constructor(
        public year: number = 1993,
        public month: number = 7,
        private day: number = 9) {}

    printFormat(): string {
        return `${this.addPadding(this.day)}/${this.addPadding(this.month)}/${this.year}`;
    }

    private addPadding(value: number): string {
        if (value < 10) {
            return `0${value}`;
        }
        return value.toString();
    }

    add(amount: number, type: 'days' | 'months' | 'years') {
        if (type === 'days') {
            this.day += amount;
        } else if (type === 'months') {
            this.month += amount;
        } else if (type === 'years') {
            this.year += amount;
        }
    }

    getDay() {
        return this.day;
    }
}

const myDate = new MyDate();
console.log(myDate.printFormat());
