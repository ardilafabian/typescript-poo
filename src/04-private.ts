export class MyDate {
    private year: number;
    private month: number;
    private day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = month
    }

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

const myDate = new MyDate(2022, 3, 17);
console.log(myDate.printFormat());

