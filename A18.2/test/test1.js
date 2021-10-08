const {assert, expect, should} = require('chai')
const calc = require('../calculator')

describe('Calculator can calculate numbers', () => {
    describe('Addition', () => {
        it('return the result', () => {
            assert.equal(calc.add(3,3),6,'add integer')
            assert.equal(calc.add(3.5,3.6),7.1,'add integer')
        })
    })
    describe('Minus', () => {
        it('return the result', () => {
            assert.equal(calc.minus(6,3),3,'add integer')
            assert.equal(calc.minus(3,6),-3,'add integer')
            assert.equal(calc.minus(6.3,3),3.3,'add integer')
        })
    })
    describe('Multiplies', () => {
        it('return the result', () => {
            assert.equal(calc.multiply(3,3),9,'add integer')
            assert.equal(calc.multiply(2.5,2),5,'add integer')
            assert.equal(calc.multiply(3,0),0,'add integer')
        })
    })
    describe('Divide', () => {
        it('return the result', () => {
            assert.equal(calc.divide(3,3),1,'add integer')
            assert.equal(calc.divide(1,2),0.5,'add integer')
            assert.equal(calc.divide(3,0),Infinity,'add integer')
        })
    })
})