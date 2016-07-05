'use strict'
let errors = require('./errors')
module.exports = {
  validateArgs,
  validTriangleSide,
  triangleInequality
}

function validateArgs (...args) {
  // must be three args
  let error = threeArgs(...args)

  // check args individually
  if (!error) {
    args.some(arg => {
      error = validTriangleSide(arg)
      return error
    })
  }

  // check if it's a proper triangle
  if (!error) {
    error = triangleInequality(...args)
  }

  return error
}

// Validation functions
// returns null when passing and instance of Error when failing

function threeArgs (...args) {
  return args.length !== 3 ? new Error(errors.threeArgs) : null
}

function validTriangleSide (numberArg) {
  // don't accept 0 or non-finite numbers such as Infinity and NaN
  return !(numberArg > 0) || !Number.isFinite(numberArg) ? new Error(errors.numsFitForTriangle) : null
}

function triangleInequality (...args) {
  // Ensure that the sum of two side lengths of the triangle is greater than
  // the third side (Triangle Inequality Theorem)
  // https://en.wikipedia.org/wiki/Triangle_inequality
  let test = args.sort() // size order with lowest first
  return !(args[0] + args[1] > args[2]) ? new Error(errors.triangleInequality) : null
}
