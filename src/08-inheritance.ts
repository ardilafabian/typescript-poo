export class Animal {
    constructor(public name: string) {}

    move () {
        console.log('Moving along!')
    }

    greeting() {
        return `Hello, I'm ${this.name}`;
    }
}

export class Dog extends Animal{
    constructor(name: string, public owner: string) {
        super(name);
    }

    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log('woof');
        }
    }
}

const fifi = new Animal('fifi');
fifi.move()
console.log(fifi.greeting());

const benji = new Dog('Benji', 'Fabi');
benji.move()
console.log(benji.greeting());
benji.woof(5);
