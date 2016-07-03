'use strict'
var tap = require('tap')
var typeOfTriangle = require('../index').typeOfTriangle
var errors = require('../errors')

// Error handling
// ##############

tap.test('incorrect number of args', (tap) => {
  tap.throws(() => typeOfTriangle(1, 2), {message: errors.threeArgs})
  tap.throws(() => typeOfTriangle(1, 2, 3, 4), {message: errors.threeArgs})
  tap.end()
})

tap.test('incorrect type of args', (tap) => {
  tap.throws(() => typeOfTriangle(1, 2, '3'), {message: errors.numsFitForTriangle})
  tap.throws(() => typeOfTriangle(1, 2, {}), {message: errors.numsFitForTriangle})
  tap.throws(() => typeOfTriangle(NaN, 2, 3), {message: errors.numsFitForTriangle})
  tap.throws(() => typeOfTriangle(Infinity, 2, 3), {message: errors.numsFitForTriangle})
  tap.throws(() => typeOfTriangle(1, -2, 3), {message: errors.numsFitForTriangle})
  tap.throws(() => typeOfTriangle(0, 1, 3), {message: errors.numsFitForTriangle})
  tap.end()
})

tap.test('failing triangle inequality (sum of two sides greater than third side)', (tap) => {
  tap.throws(() => typeOfTriangle(1, 2, 3), {message: errors.triangleInequality})
  tap.throws(() => typeOfTriangle(3, 2, 1), {message: errors.triangleInequality})
  tap.end()
})

// Success response
// ################

tap.test('identify equilateral and isosceles', ((tap) => {
  tap.strictSame(typeOfTriangle(1, 1, 1), {
    equilateral: true,
    isosceles: true,
    scalene: false
  })
  tap.end()
}))


tap.test('identify isosceles', (tap) => {
  tap.strictSame(typeOfTriangle(2, 2, 3), {
    equilateral: false,
    isosceles: true,
    scalene: false
  })
  tap.strictSame(typeOfTriangle(2, 3, 2), {
    equilateral: false,
    isosceles: true,
    scalene: false
  })
  tap.end()
})

tap.test('identify scalene', (tap) => {
  tap.strictSame(typeOfTriangle(2, 3, 4), {
    equilateral: false,
    isosceles: false,
    scalene: true
  })
  tap.end()
})

tap.test('accept decimal values', (tap) => {
  tap.strictSame(typeOfTriangle(1.1, Math.E, Math.PI), {
    equilateral: false,
    isosceles: false,
    scalene: true
  })
  tap.end()
})
