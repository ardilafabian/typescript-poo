// function getValue(value: unknown) {
//     return value;
// }

function getValue<T>(value: T) {
    const array: T[] = [];
    return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toUpperCase();
getValue<string[]>(['12']).length;
