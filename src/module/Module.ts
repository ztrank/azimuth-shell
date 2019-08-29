import { Register } from './Register';
import { Container } from 'inversify';

export abstract class Module implements Register {
    protected zones: Register[];

    private get Zones(): Register[] {
        return this.zones || [];
    }

    protected preRegister(container: Container): void {}

    register(container: Container): void {
        this.preRegister(container);
        
        this.Zones.forEach(zone => {
            zone.register(container);
        });
    }
}