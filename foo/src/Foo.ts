export class Foo {
    constructor() {
    }

    public hello(name: string = null) {
        if (name) {
            return 'Hello ' + name + '!';
        }
        else {
            return 'Hello World!'; 
        }
    }
    public Rob(): string {
        return 'Rob';
    }
}