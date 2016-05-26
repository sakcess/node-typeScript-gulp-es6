/**
 * Created by aadm082 on 26/05/2016.
 */
/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

import chai = require('chai');
import Calculator from '../app-test/Calc';

var assert = chai.assert,
    expect = chai.expect,
    should = chai.should(); // Note that should has to be executed

describe('Calculator', () => {
    var subject : Calculator;

    beforeEach(function () {
        subject = new Calculator();
    });

    describe('#add', () => {
        it('should add two numbers together', () => {
            var result : number = subject.add(2, 3);
            assert.equal(result, 5);
            expect(result).to.be.a('number');
            result.should.be.a('number');
        });
    });
});