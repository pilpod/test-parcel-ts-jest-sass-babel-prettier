import { testingJest } from '../src/app';

describe('Testing app', () => {
    it('function should return hello world', () => {
        expect( testingJest() ).toBe('Hello World');
    });
});