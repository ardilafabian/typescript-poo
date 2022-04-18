// console.log(Math.PI);
// console.log(Math.max(1,2,3,5,764,23));

class MyMath {
    static readonly PI = 3.14;

    static max(...numbers: number[]) {
        return numbers.reduce((max, item) => max >= item ? max: item, 0);
    }
}

console.log(MyMath.PI);
console.log(MyMath.max(1,2,3,3,4));

