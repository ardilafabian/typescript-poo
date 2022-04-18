export abstract class Animal {
    constructor(protected name: string) {}

    move () {
        console.log('Moving along!')
    }

    greeting() {
        return `Hello, I'm ${this.name}`;
    }

    protected doSomething() {
        console.log('doooo');
    }
}

export class Dog extends Animal{
    constructor(name: string, public owner: string) {
        super(name);
    }

    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log(`woof!! ${this.name}`);
        }
        this.doSomething();
    }

    move() {
        // code
        console.log('moving as a dog');
        super.move();
    }
}

const benji = new Dog('Benji', 'Fabi');
// benji.name = 'otro nombre';
benji.woof(3);
benji.move();
