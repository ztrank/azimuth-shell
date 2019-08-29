import 'reflect-metadata';
import { Module } from '../../src/module/Module';
import { Register } from '../../src/module/Register';
import { Container } from 'inversify';

const doOnRegister = jest.fn();
class Registerable implements Register {
    
    register(container: Container): void {
        doOnRegister();
    }
}
class TestModule extends Module {
    protected zones: Register[] = [new Registerable(), new InnerModule()];
}

class InnerModule extends Module {
    preRegister(container: Container): void {
        doOnRegister();
    }
}

test('It should register', () => {
    const mod = new TestModule();
    mod.register(new Container());
    expect(doOnRegister).toHaveBeenCalledTimes(2);
});