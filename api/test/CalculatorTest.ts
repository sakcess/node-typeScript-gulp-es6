/**
 * Created by aadm082 on 26/05/2016.
 */
/// <reference path="../typings/mocha/mocha.d.ts" />
import Calculator from '../app/Calc';

describe('Calculator', () => {
    var subject : Calculator;

    beforeEach(function () {
        subject = new Calculator();
    });

    describe('#add', () => {
        it('should add two numbers together', () => {
            var result : number = subject.add(2, 3);
            if (result !== 5) {
                throw new Error('Expected 2 + 3 = 5 but was ' + result);
            }
        });
    });
});