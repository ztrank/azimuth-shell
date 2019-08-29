import { Container } from 'inversify';

export interface Register {
    register(container: Container): void;
}