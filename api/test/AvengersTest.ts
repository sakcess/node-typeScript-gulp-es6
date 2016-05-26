/**
 * Created by aadm082 on 26/05/2016.
 */
/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

import chai = require('chai');
import {Avengers} from "../app/Avengers";

var assert = chai.assert,
    expect = chai.expect,
    should = chai.should(); // Note that should has to be executed

describe('Avengers', () => {
    var avengers : Avengers;

    beforeEach(function () {
        avengers = new Avengers();
    });

    describe('#verfy message', () => {
        it('should return API KEY', () => {
            var result : string = avengers.constant();
            expect(result).to.be.a('string');
            result.should.not.be.null;
            assert.equal(result, 'dfsdfsdfsdfsdf');

            /*if (result === null) {
                throw new Error('Expected API_KEY value but was ' + result);
            }*/
        });
    });
});