export class MyDate {
    public year: number;
    public month: number;
    public day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = month;
    }

    printFormat(): string {
        return `${this.day}/${this.month}/${this.year}`;
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
}

const myDate = new MyDate(2022, 3, 17);
console.log(myDate.day);
myDate.day = 12;
console.log(myDate.printFormat());
