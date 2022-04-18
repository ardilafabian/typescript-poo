// function getValue(value: unknown) {
//     return value;
// }

function getValue<myType>(value: myType) {
    return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toUpperCase();
getValue<string[]>(['12']).length;
