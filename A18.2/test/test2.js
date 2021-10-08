const {assert, expect, should} = require('chai')
const request = require('request')

describe('Calculator can calculate numbers', () => {
    describe('Addition', () => {
        var url = 'http://localhost:3000/add?a=1&b=4'
        it('return the result', () => {
            request(url,(err,res,body) => {
                expect(res.statusCode).to.equal(400)
                expect(body).to.equal('5')
            })
        })
    })
    describe('Minus', () => {
        var url = 'http://localhost:3000/minus?a=6&b=4'
        it('return the result', () => {
            request(url,(err,res,body) => {
                expect(res.statusCode).to.equal(400)
                expect(body).to.equal('2')
            })
        })
    })
    describe('Multiplies', () => {
        var url = 'http://localhost:3000/multiply?a=1&b=4'
        it('return the result', () => {
            request(url,(err,res,body) => {
                expect(res.statusCode).to.equal(400)
                expect(body).to.equal('4')
            })
        })
    })
    describe('Divide', () => {
        var url = 'http://localhost:3000/divide?a=1&b=4'
        it('return the result', () => {
            request(url,(err,res,body) => {
                expect(res.statusCode).to.equal(400)
                expect(body).to.equal('0.25')
            })
        })
    })
})