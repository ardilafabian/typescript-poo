"use strict";
const date = new Date(1993, 1, 13); // 0 Enero, 1 Febrero, ... 11 diciembre
console.log(date);
class MyDate {
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = month;
    }
}
const myDate = new MyDate(2021, 3, 17);
console.log(myDate);
