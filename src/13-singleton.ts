export class MyService {

    static instance: MyService | null = null;

    private constructor(private _name: string) {}

    static create(name: string) {
        if (MyService.instance === null) {
            console.log('deberia entrar una vez');
            MyService.instance = new MyService(name);
        }
        return MyService.instance
    }

    get name() {
        return this._name;
    }
}

const myService = MyService.create('service1');
console.log(myService.name);

const myService2 = MyService.create('service2');
console.log(myService2.name);

const myService3 = MyService.create('service2');
console.log(myService3.name);

console.log(myService === myService2);
