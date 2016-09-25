import {Foo} from 'foo'

export class Bar extends Foo {
    constructor() {
        super();
    }

    public hello(name: string = null): string {        
        return super.hello(name) + ' ( from Bar)';
    }
}