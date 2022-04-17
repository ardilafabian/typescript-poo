const date = new Date(1993, 1, 13); // 0 Enero, 1 Febrero, ... 11 diciembre

console.log(date);

export class MyDate {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = month
    }
}

const myDate = new MyDate(2021, 3, 17);
console.log(myDate);
